import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * useCarousel
 *
 * Shared carousel logic:
 * - Infinite looping navigation
 * - Keyboard ← → (throttled)
 * - Mobile touch swipe (dominant-axis check)
 * - Trackpad two-finger horizontal swipe (dominant-axis check, accumulation threshold, cooldown)
 * - Prevents rapid multi-slide gestures
 * - Respects prefers-reduced-motion (returned for consumers to use)
 *
 * @param count  Total number of items
 * @param containerRef  Ref to the scrollable/hover area that receives wheel events
 * @param blockWheel  When true (e.g. modal is open) wheel events are ignored
 */
export function useCarousel(
  count: number,
  containerRef: React.RefObject<HTMLDivElement | null>,
  blockWheel = false,
) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 = prev, 1 = next
  const shouldReduceMotion = useReducedMotion()

  // Trackpad refs
  const isWheelLocked = useRef(false)
  const accumulatedDeltaX = useRef(0)
  const wheelEndTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wheelCooldownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Touch refs
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const touchEndY = useRef<number | null>(null)
  const MIN_SWIPE_PX = 45

  // Keyboard throttle
  const lastKeyTime = useRef<number>(0)

  // ─── Navigation helpers ───────────────────────────────────────────────────

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + count) % count)
  }, [count])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % count)
  }, [count])

  const goToIndex = useCallback(
    (index: number) => {
      setCurrentIndex((prev) => {
        if (index === prev) return prev
        setDirection(index > prev ? 1 : -1)
        return index
      })
    },
    [],
  )

  // ─── Trackpad wheel ───────────────────────────────────────────────────────

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const SWIPE_THRESHOLD = 35
    const COOLDOWN_MS = 400

    const handleWheel = (e: WheelEvent) => {
      if (blockWheel) return

      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)

      // Only act when horizontal movement is dominant (trackpad horizontal swipe)
      if (absX <= absY) return

      // Prevent browser history swipe navigation
      if (e.cancelable) e.preventDefault()

      // Debounce: reset accumulator when gesture pauses
      if (wheelEndTimeout.current) clearTimeout(wheelEndTimeout.current)
      wheelEndTimeout.current = setTimeout(() => {
        isWheelLocked.current = false
        accumulatedDeltaX.current = 0
      }, 150)

      // Cooldown lock: one slide per gesture
      if (isWheelLocked.current) return

      accumulatedDeltaX.current += e.deltaX

      const fire = (fn: () => void) => {
        isWheelLocked.current = true
        accumulatedDeltaX.current = 0
        fn()
        if (wheelCooldownTimeout.current) clearTimeout(wheelCooldownTimeout.current)
        wheelCooldownTimeout.current = setTimeout(() => {
          isWheelLocked.current = false
        }, COOLDOWN_MS)
      }

      if (accumulatedDeltaX.current >= SWIPE_THRESHOLD) {
        fire(goToNext)
      } else if (accumulatedDeltaX.current <= -SWIPE_THRESHOLD) {
        fire(goToPrev)
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      container.removeEventListener('wheel', handleWheel)
      if (wheelEndTimeout.current) clearTimeout(wheelEndTimeout.current)
      if (wheelCooldownTimeout.current) clearTimeout(wheelCooldownTimeout.current)
    }
  }, [blockWheel, containerRef, goToNext, goToPrev])

  // ─── Keyboard navigation ──────────────────────────────────────────────────

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (blockWheel) return // reuse the same gate (modal open, etc.)
      const now = Date.now()
      if (e.key === 'ArrowLeft' && now - lastKeyTime.current > 300) {
        lastKeyTime.current = now
        goToPrev()
      } else if (e.key === 'ArrowRight' && now - lastKeyTime.current > 300) {
        lastKeyTime.current = now
        goToNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [blockWheel, goToNext, goToPrev])

  // ─── Touch handlers (to be spread onto the container element) ────────────

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchEndY.current = null
    touchStartX.current = e.targetTouches[0].clientX
    touchStartY.current = e.targetTouches[0].clientY
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
    touchEndY.current = e.targetTouches[0].clientY
  }

  const onTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null ||
      touchStartY.current === null ||
      touchEndY.current === null
    )
      return

    const diffX = touchStartX.current - touchEndX.current
    const diffY = touchStartY.current - touchEndY.current

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > MIN_SWIPE_PX) goToNext()
      else if (diffX < -MIN_SWIPE_PX) goToPrev()
    }
  }

  return {
    currentIndex,
    direction,
    shouldReduceMotion,
    goToPrev,
    goToNext,
    goToIndex,
    touchHandlers: { onTouchStart, onTouchMove, onTouchEnd },
  }
}

