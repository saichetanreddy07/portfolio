"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Layers,
} from "lucide-react";
import { DiagramSVG } from "./DiagramSVGs";

interface ArchitectureDiagramProps {
  id: string;
  title: string;
  imageFileName: string;
  caption: string;
  explanation: string;
  aspectRatio?: string;
  badge?: string;
}

export function ArchitectureDiagram({
  id,
  title,
  imageFileName,
  caption,
  explanation,
  aspectRatio = "aspect-[16/9]",
  badge = "System Architecture",
}: ArchitectureDiagramProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.3, 0.7);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    resetZoom();
    // Return focus to trigger button
    triggerRef.current?.focus();
  }, [resetZoom]);

  // Handle keyboard shortcuts (Escape, +, -, 0)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === "-") {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === "0") {
        e.preventDefault();
        resetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeModal, handleZoomIn, handleZoomOut, resetZoom]);

  // Pan / Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <figure className="group my-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-xs">
      {/* Diagram Sub-header / Technical bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
          <span className="font-mono text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight">
            {title}
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700/60">
            {imageFileName}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800/60">
            {badge}
          </span>
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label={`View ${title} diagram in fullscreen`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Expand</span>
          </button>
        </div>
      </div>

      {/* Diagram Canvas / Visual Container */}
      <div
        className={`relative ${aspectRatio} w-full bg-zinc-950/95 dark:bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden cursor-pointer select-none group/canvas`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label={`Click to expand ${title} diagram`}
      >
        {/* Render Vector Diagram or Image */}
        <div className="w-full h-full flex items-center justify-center transition-transform duration-200 group-hover/canvas:scale-[1.01]">
          <DiagramSVG id={id} className="w-full h-full object-contain" />
        </div>

        {/* Hover Overlay Hint */}
        <div className="absolute inset-0 bg-sky-950/10 dark:bg-sky-500/5 opacity-0 group-hover/canvas:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-zinc-900/90 text-zinc-100 border border-zinc-700 shadow-md">
            <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
            Click to inspect &amp; zoom diagram
          </span>
        </div>
      </div>

      {/* Professional Technical Caption & Explanation */}
      <figcaption className="px-4 py-3.5 bg-zinc-50/50 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 space-y-1.5">
        <p className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Caption:
          </span>
          {caption}
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
          {explanation}
        </p>
      </figcaption>

      {/* Accessible Fullscreen Modal Dialog */}
      {isOpen && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} Fullscreen Diagram Viewer`}
          className="fixed inset-0 z-50 flex flex-col bg-zinc-950/95 backdrop-blur-md animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === modalRef.current) closeModal();
          }}
        >
          {/* Modal Header Controls */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-zinc-800 bg-zinc-900/80 shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-950/50 border border-sky-800">
                {imageFileName}
              </span>
              <h2 className="text-sm font-semibold text-zinc-100 font-mono tracking-tight">
                {title}
              </h2>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-zinc-800/80 rounded-lg p-0.5 border border-zinc-700">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.7}
                  className="p-1.5 text-zinc-400 hover:text-zinc-100 disabled:opacity-30 disabled:pointer-events-none rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                  aria-label="Zoom out (-)"
                  title="Zoom Out (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-2 font-mono text-xs text-zinc-300 select-none min-w-[3.5rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  className="p-1.5 text-zinc-400 hover:text-zinc-100 disabled:opacity-30 disabled:pointer-events-none rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                  aria-label="Zoom in (+)"
                  title="Zoom In (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={resetZoom}
                  className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded transition-colors border-l border-zinc-700 ml-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                  aria-label="Reset zoom (0)"
                  title="Reset (0)"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors border border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Close fullscreen modal (Esc)"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Diagram Viewport with Pan & Zoom */}
          <div
            className={`flex-1 relative overflow-hidden flex items-center justify-center p-4 sm:p-8 select-none ${zoomLevel > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
              }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              style={{
                transform: `scale(${zoomLevel}) translate(${pan.x / zoomLevel}px, ${pan.y / zoomLevel
                  }px)`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.15s ease-out",
              }}
              className="max-w-[95%] max-h-[85vh] w-full flex items-center justify-center pointer-events-none"
            >
              <DiagramSVG id={id} className="w-full h-full max-h-[85vh] object-contain shadow-2xl rounded-lg" />
            </div>
          </div>

          {/* Modal Footer Technical Bar */}
          <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 uppercase">Description:</span>
              <span className="text-zinc-200">{caption}</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-zinc-500">
              <span>Zoom: [+] / [-]</span>
              <span>Reset: [0]</span>
              <span>Drag to Pan</span>
              <span>Dismiss: [Esc]</span>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
}
