import React from "react";

interface DiagramSVGProps {
  id: string;
  className?: string;
}

export function DiagramSVG({ id, className = "w-full h-auto" }: DiagramSVGProps) {
  switch (id) {
    case "overall-system-architecture":
      return (
        <svg
          viewBox="0 0 960 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Overall System Architecture Diagram"
        >
          <rect width="960" height="540" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-1" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
            <linearGradient id="blue-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8" />
            </marker>
            <marker id="arrow-muted" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#71717a" />
            </marker>
          </defs>
          <rect width="960" height="540" fill="url(#grid-pattern-1)" rx="12" />

          {/* Title Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            ARCHITECTURE BOUNDARY · MODULAR MONOLITH
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            SYS-ARCH-01 · FastAPI Application &amp; Restaurant Operations Core
          </text>

          {/* Client / Consumer Layer */}
          <g transform="translate(40, 95)">
            <rect width="180" height="395" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="180" height="34" rx="8" fill="#18181b" />
            <text x="16" y="22" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              01 · CONSUMER LAYER
            </text>

            {/* Sub-boxes */}
            <g transform="translate(14, 50)">
              <rect width="152" height="68" rx="6" fill="#1c1917" stroke="#44403c" strokeWidth="1" strokeDasharray="3 3" />
              <text x="12" y="24" fill="#fbbf24" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                React Web SPA
              </text>
              <text x="12" y="42" fill="#a8a29e" fontSize="9.5" fontFamily="monospace">
                (Planned · TypeScript)
              </text>
              <text x="12" y="56" fill="#78716c" fontSize="9" fontFamily="sans-serif">
                Internal Ops Dashboard
              </text>
            </g>

            <g transform="translate(14, 130)">
              <rect width="152" height="68" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="12" y="24" fill="#e4e4e7" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                API Clients &amp; POS
              </text>
              <text x="12" y="42" fill="#a1a1aa" fontSize="9.5" fontFamily="monospace">
                HTTP / JSON REST
              </text>
              <text x="12" y="56" fill="#71717a" fontSize="9" fontFamily="sans-serif">
                Kitchen Display Systems
              </text>
            </g>

            <g transform="translate(14, 210)">
              <rect width="152" height="68" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="12" y="24" fill="#e4e4e7" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                OpenAPI Docs
              </text>
              <text x="12" y="42" fill="#a1a1aa" fontSize="9.5" fontFamily="monospace">
                /docs · Swagger UI
              </text>
              <text x="12" y="56" fill="#71717a" fontSize="9" fontFamily="sans-serif">
                Interactive Testing
              </text>
            </g>

            <g transform="translate(14, 290)">
              <rect width="152" height="85" rx="6" fill="#18181b" stroke="#0284c7" strokeWidth="1" />
              <text x="12" y="22" fill="#38bdf8" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                Health Check API
              </text>
              <text x="12" y="38" fill="#10b981" fontSize="9.5" fontFamily="monospace">
                ● Status: Active
              </text>
              <text x="12" y="54" fill="#a1a1aa" fontSize="9" fontFamily="monospace">
                GET /health
              </text>
              <text x="12" y="70" fill="#71717a" fontSize="8.5" fontFamily="sans-serif">
                Liveness &amp; DB connectivity
              </text>
            </g>
          </g>

          {/* Connection Lines from Client to Gateway */}
          <path d="M 220 292 L 268 292" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="228" y="282" fill="#38bdf8" fontSize="9" fontFamily="monospace">REST</text>

          {/* Application Layer (FastAPI) */}
          <g transform="translate(270, 95)">
            <rect width="420" height="395" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="420" height="34" rx="8" fill="#18181b" />
            <text x="16" y="22" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              02 · BACKEND APPLICATION RUNTIME (FastAPI Modular Monolith)
            </text>

            {/* Core Infrastructure Ribbon */}
            <g transform="translate(14, 46)">
              <rect width="392" height="42" rx="5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
              <text x="12" y="18" fill="#e4e4e7" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                Cross-Cutting Infrastructure
              </text>
              <text x="12" y="32" fill="#a1a1aa" fontSize="9" fontFamily="monospace">
                Pydantic Settings · CORS Middleware · Custom Error Handlers · Session DI
              </text>
            </g>

            {/* Domain Modules Grid */}
            <text x="16" y="106" fill="#a1a1aa" fontSize="10" fontWeight="600" fontFamily="monospace">
              MODULAR BUSINESS DOMAINS
            </text>

            {/* Ingredient Module (Complete) */}
            <g transform="translate(14, 116)">
              <rect width="190" height="110" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.2" />
              <rect x="128" y="8" width="54" height="16" rx="3" fill="#065f46" />
              <text x="133" y="20" fill="#34d399" fontSize="8.5" fontWeight="700" fontFamily="monospace">COMPLETED</text>
              <text x="10" y="22" fill="#f8fafc" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">
                Ingredient Module
              </text>
              <text x="10" y="40" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Master ingredient records
              </text>
              <text x="10" y="56" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Standard unit measurements
              </text>
              <text x="10" y="72" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Category classifications
              </text>
              <text x="10" y="88" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Base unit cost tracking
              </text>
              <text x="10" y="102" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">
                /api/v1/ingredients
              </text>
            </g>

            {/* Recipe Module (Complete) */}
            <g transform="translate(216, 116)">
              <rect width="190" height="110" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.2" />
              <rect x="128" y="8" width="54" height="16" rx="3" fill="#065f46" />
              <text x="133" y="20" fill="#34d399" fontSize="8.5" fontWeight="700" fontFamily="monospace">COMPLETED</text>
              <text x="10" y="22" fill="#f8fafc" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">
                Recipe Module
              </text>
              <text x="10" y="40" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Standardized BOM recipes
              </text>
              <text x="10" y="56" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • 1:1 Menu item association
              </text>
              <text x="10" y="72" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • M:N Ingredient relationships
              </text>
              <text x="10" y="88" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Ingredient quantity rules
              </text>
              <text x="10" y="102" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">
                /api/v1/recipes
              </text>
            </g>

            {/* Menu Module (Complete) */}
            <g transform="translate(14, 236)">
              <rect width="190" height="96" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.2" />
              <rect x="128" y="8" width="54" height="16" rx="3" fill="#065f46" />
              <text x="133" y="20" fill="#34d399" fontSize="8.5" fontWeight="700" fontFamily="monospace">COMPLETED</text>
              <text x="10" y="22" fill="#f8fafc" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">
                Menu Module
              </text>
              <text x="10" y="40" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Menu item CRUD endpoints
              </text>
              <text x="10" y="56" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Live availability tracking
              </text>
              <text x="10" y="72" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Item pricing &amp; categories
              </text>
              <text x="10" y="88" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">
                /api/v1/menus
              </text>
            </g>

            {/* Inventory Module (In Progress) */}
            <g transform="translate(216, 236)">
              <rect width="190" height="96" rx="6" fill="#1c1917" stroke="#d97706" strokeWidth="1.2" />
              <rect x="116" y="8" width="66" height="16" rx="3" fill="#78350f" />
              <text x="121" y="20" fill="#fbbf24" fontSize="8.5" fontWeight="700" fontFamily="monospace">IN PROGRESS</text>
              <text x="10" y="22" fill="#f8fafc" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">
                Inventory Module
              </text>
              <text x="10" y="40" fill="#fef3c7" fontSize="9" fontFamily="sans-serif">
                ✓ Batch-level stock tracking
              </text>
              <text x="10" y="54" fill="#fef3c7" fontSize="9" fontFamily="sans-serif">
                ✓ Expiry &amp; supplier audits
              </text>
              <text x="10" y="68" fill="#a8a29e" fontSize="9" fontFamily="sans-serif">
                ⏳ FIFO/FEFO consumption
              </text>
              <text x="10" y="88" fill="#fbbf24" fontSize="8.5" fontFamily="monospace">
                /api/v1/inventory
              </text>
            </g>

            {/* Future AI & Planning Stubs */}
            <g transform="translate(14, 342)">
              <rect width="392" height="42" rx="5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3 3" />
              <text x="12" y="18" fill="#a1a1aa" fontSize="10" fontWeight="600" fontFamily="sans-serif">
                Future Integration Extensibility
              </text>
              <text x="12" y="32" fill="#71717a" fontSize="9" fontFamily="monospace">
                Production Simulation · Waste Analytics · Demand Forecasting Engine (Planned)
              </text>
            </g>
          </g>

          {/* Connection Lines from App to DB Layer */}
          <path d="M 690 292 L 730 292" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="694" y="282" fill="#38bdf8" fontSize="9" fontFamily="monospace">ORM</text>

          {/* Data Persistence Layer */}
          <g transform="translate(732, 95)">
            <rect width="188" height="395" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="188" height="34" rx="8" fill="#18181b" />
            <text x="14" y="22" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              03 · PERSISTENCE LAYER
            </text>

            <g transform="translate(12, 50)">
              <rect width="164" height="85" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="12" y="22" fill="#f8fafc" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                SQLAlchemy ORM
              </text>
              <text x="12" y="38" fill="#38bdf8" fontSize="9.5" fontFamily="monospace">
                2.0 Declarative Base
              </text>
              <text x="12" y="54" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">
                Explicit relationships, lazy
              </text>
              <text x="12" y="68" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">
                loading, session scoping
              </text>
            </g>

            <g transform="translate(12, 148)">
              <rect width="164" height="85" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="12" y="22" fill="#f8fafc" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                Alembic Migrations
              </text>
              <text x="12" y="38" fill="#10b981" fontSize="9.5" fontFamily="monospace">
                Version Controlled
              </text>
              <text x="12" y="54" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">
                Deterministic schema
              </text>
              <text x="12" y="68" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">
                upgrades and rollbacks
              </text>
            </g>

            <g transform="translate(12, 246)">
              <rect width="164" height="135" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.2" />
              <text x="12" y="24" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                MySQL 8.0 Engine
              </text>
              <text x="12" y="42" fill="#e2e8f0" fontSize="9.5" fontFamily="monospace">
                InnoDB ACID Engine
              </text>
              <text x="12" y="60" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Foreign key integrity
              </text>
              <text x="12" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Normalized tables (3NF)
              </text>
              <text x="12" y="92" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Batch transaction isolation
              </text>
              <text x="12" y="108" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                • Relational indexes
              </text>
            </g>
          </g>
        </svg>
      );

    case "backend-architecture":
      return (
        <svg
          viewBox="0 0 960 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Backend Architecture Diagram"
        >
          <rect width="960" height="540" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-2" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
            <marker id="down-arrow" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 1 0 L 5 8 L 9 0 z" fill="#38bdf8" />
            </marker>
          </defs>
          <rect width="960" height="540" fill="url(#grid-pattern-2)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            LAYERED ARCHITECTURAL PATTERN · REQ/RESP LIFECYCLE
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            ARCH-02 · Unidirectional Flow &amp; Strict Domain Separation
          </text>

          {/* Layer 1: API / Router Layer */}
          <g transform="translate(40, 95)">
            <rect width="880" height="85" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="880" height="28" rx="8" fill="#18181b" />
            <text x="16" y="19" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              LAYER 1 · API &amp; ROUTING LAYER (FastAPI APIRouter)
            </text>
            <text x="730" y="19" fill="#a1a1aa" fontSize="9.5" fontFamily="monospace">
              HTTP Transport Protocol
            </text>

            <g transform="translate(16, 36)">
              <rect x="0" y="6" width="200" height="36" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <text x="10" y="22" fill="#e2e8f0" fontSize="10" fontWeight="600" fontFamily="monospace">/api/v1/ingredients</text>
              <text x="10" y="34" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">HTTP GET, POST, PUT, DELETE</text>

              <rect x="220" y="6" width="200" height="36" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <text x="10" y="22" fill="#e2e8f0" fontSize="10" fontWeight="600" transform="translate(220, 0)" fontFamily="monospace">/api/v1/recipes</text>
              <text x="10" y="34" fill="#94a3b8" fontSize="8.5" transform="translate(220, 0)" fontFamily="sans-serif">Composition &amp; Portions</text>

              <rect x="440" y="6" width="200" height="36" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <text x="10" y="22" fill="#e2e8f0" fontSize="10" fontWeight="600" transform="translate(440, 0)" fontFamily="monospace">/api/v1/menus</text>
              <text x="10" y="34" fill="#94a3b8" fontSize="8.5" transform="translate(440, 0)" fontFamily="sans-serif">Catalog &amp; Active Flags</text>

              <rect x="660" y="6" width="190" height="36" rx="5" fill="#1c1917" stroke="#78350f" strokeWidth="1" />
              <text x="10" y="22" fill="#fbbf24" fontSize="10" fontWeight="600" transform="translate(660, 0)" fontFamily="monospace">/api/v1/inventory</text>
              <text x="10" y="34" fill="#fcd34d" fontSize="8.5" transform="translate(660, 0)" fontFamily="sans-serif">Batches &amp; Expiry Track</text>
            </g>
          </g>

          {/* Arrow 1 */}
          <path d="M 480 180 L 480 205" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#down-arrow)" />
          <text x="495" y="196" fill="#71717a" fontSize="9" fontFamily="monospace">Pydantic DTOs &amp; Validation</text>

          {/* Layer 2: Service Layer */}
          <g transform="translate(40, 210)">
            <rect width="880" height="90" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="880" height="28" rx="8" fill="#18181b" />
            <text x="16" y="19" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              LAYER 2 · DOMAIN SERVICE LAYER (Pure Python Business Logic)
            </text>
            <text x="735" y="19" fill="#a1a1aa" fontSize="9.5" fontFamily="monospace">
              Business Rules Enforcement
            </text>

            <g transform="translate(16, 36)">
              <rect x="0" y="6" width="200" height="40" rx="5" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="10" y="20" fill="#fafafa" fontSize="10" fontWeight="600" fontFamily="sans-serif">IngredientService</text>
              <text x="10" y="33" fill="#a1a1aa" fontSize="8.5" fontFamily="sans-serif">Name uniqueness, category validation</text>

              <rect x="220" y="6" width="200" height="40" rx="5" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="10" y="20" fill="#fafafa" fontSize="10" fontWeight="600" transform="translate(220, 0)" fontFamily="sans-serif">RecipeService</text>
              <text x="10" y="33" fill="#a1a1aa" fontSize="8.5" transform="translate(220, 0)" fontFamily="sans-serif">Portion scale, ingredient relations</text>

              <rect x="440" y="6" width="200" height="40" rx="5" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="10" y="20" fill="#fafafa" fontSize="10" fontWeight="600" transform="translate(440, 0)" fontFamily="sans-serif">MenuService</text>
              <text x="10" y="33" fill="#a1a1aa" fontSize="8.5" transform="translate(440, 0)" fontFamily="sans-serif">Price rules, 1:1 recipe validation</text>

              <rect x="660" y="6" width="190" height="40" rx="5" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="10" y="20" fill="#fafafa" fontSize="10" fontWeight="600" transform="translate(660, 0)" fontFamily="sans-serif">InventoryService</text>
              <text x="10" y="33" fill="#a1a1aa" fontSize="8.5" transform="translate(660, 0)" fontFamily="sans-serif">Batch auto-number, expiry verify</text>
            </g>
          </g>

          {/* Arrow 2 */}
          <path d="M 480 300 L 480 325" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#down-arrow)" />
          <text x="495" y="316" fill="#71717a" fontSize="9" fontFamily="monospace">Depends(get_db) Session Scope</text>

          {/* Layer 3: ORM & Data Access */}
          <g transform="translate(40, 330)">
            <rect width="880" height="90" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="880" height="28" rx="8" fill="#18181b" />
            <text x="16" y="19" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              LAYER 3 · DATA ACCESS &amp; ORM LAYER (SQLAlchemy 2.0 Declarative Models)
            </text>
            <text x="730" y="19" fill="#a1a1aa" fontSize="9.5" fontFamily="monospace">
              Relational Mapping &amp; Session
            </text>

            <g transform="translate(16, 36)">
              <rect x="0" y="6" width="200" height="40" rx="5" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontWeight="600" fontFamily="monospace">models.Ingredient</text>
              <text x="10" y="33" fill="#71717a" fontSize="8.5" fontFamily="monospace">id, name, unit, cost, category</text>

              <rect x="220" y="6" width="200" height="40" rx="5" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontWeight="600" transform="translate(220, 0)" fontFamily="monospace">models.RecipeIngredient</text>
              <text x="10" y="33" fill="#71717a" fontSize="8.5" transform="translate(220, 0)" fontFamily="monospace">recipe_id, ing_id, quantity</text>

              <rect x="440" y="6" width="200" height="40" rx="5" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontWeight="600" transform="translate(440, 0)" fontFamily="monospace">models.MenuItem</text>
              <text x="10" y="33" fill="#71717a" fontSize="8.5" transform="translate(440, 0)" fontFamily="monospace">id, name, price, is_available</text>

              <rect x="660" y="6" width="190" height="40" rx="5" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontWeight="600" transform="translate(660, 0)" fontFamily="monospace">models.InventoryBatch</text>
              <text x="10" y="33" fill="#71717a" fontSize="8.5" transform="translate(660, 0)" fontFamily="monospace">batch_num, quantity, expiry</text>
            </g>
          </g>

          {/* Arrow 3 */}
          <path d="M 480 420 L 480 445" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#down-arrow)" />
          <text x="495" y="436" fill="#71717a" fontSize="9" fontFamily="monospace">SQL Queries &amp; Alembic Migrations</text>

          {/* Layer 4: Storage Engine */}
          <g transform="translate(40, 450)">
            <rect width="880" height="50" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <text x="20" y="30" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="sans-serif">
              MySQL 8.0 Persistence Engine
            </text>
            <text x="240" y="30" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              InnoDB Engine · Foreign Keys · Unique Constraints · Transaction Isolation (REPEATABLE READ)
            </text>
            <rect x="760" y="14" width="105" height="22" rx="4" fill="#0369a1" />
            <text x="772" y="29" fill="#f0f9ff" fontSize="9.5" fontWeight="600" fontFamily="monospace">
              Alembic Verified
            </text>
          </g>
        </svg>
      );

    case "database-erd":
      return (
        <svg
          viewBox="0 0 960 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Database Entity Relationship Diagram"
        >
          <rect width="960" height="560" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-3" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="960" height="560" fill="url(#grid-pattern-3)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            NORMALIZED RELATIONAL SCHEMA (3NF) · ENTITY RELATIONSHIP
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            ERD-01 · Operational Restaurant Data Modeling
          </text>

          {/* Table: ingredients */}
          <g transform="translate(40, 90)">
            <rect width="250" height="200" rx="6" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="250" height="30" rx="6" fill="#1e293b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">
              TABLE: ingredients
            </text>
            <text x="12" y="50" fill="#facc15" fontSize="10.5" fontFamily="monospace">PK  id           : INT (AUTO_INC)</text>
            <text x="12" y="70" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    name         : VARCHAR(100) UQ</text>
            <text x="12" y="90" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    category     : VARCHAR(50)</text>
            <text x="12" y="110" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    unit         : VARCHAR(20)</text>
            <text x="12" y="130" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    unit_cost    : DECIMAL(10,2)</text>
            <text x="12" y="150" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">    created_at   : TIMESTAMP</text>
            <text x="12" y="170" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">    updated_at   : TIMESTAMP</text>
          </g>

          {/* Table: inventory_batches */}
          <g transform="translate(40, 320)">
            <rect width="250" height="210" rx="6" fill="#121215" stroke="#d97706" strokeWidth="1.5" />
            <rect width="250" height="30" rx="6" fill="#292524" />
            <text x="12" y="20" fill="#fbbf24" fontSize="12" fontWeight="700" fontFamily="monospace">
              TABLE: inventory_batches
            </text>
            <text x="12" y="50" fill="#facc15" fontSize="10.5" fontFamily="monospace">PK  id           : INT (AUTO_INC)</text>
            <text x="12" y="70" fill="#38bdf8" fontSize="10.5" fontFamily="monospace">FK  ingredient_id: INT -&gt; ingredients</text>
            <text x="12" y="90" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    batch_number : VARCHAR(50) UQ</text>
            <text x="12" y="110" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    supplier_name: VARCHAR(100)</text>
            <text x="12" y="130" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    quantity     : DECIMAL(10,2)</text>
            <text x="12" y="150" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    cost_per_unit: DECIMAL(10,2)</text>
            <text x="12" y="170" fill="#f87171" fontSize="10.5" fontFamily="monospace">    expiry_date  : DATE (INDEXED)</text>
            <text x="12" y="190" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">    received_at  : TIMESTAMP</text>
          </g>

          {/* Connector Line 1: ingredients to inventory_batches (1 : N) */}
          <path d="M 165 290 L 165 320" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="175" y="308" fill="#38bdf8" fontSize="9" fontFamily="monospace">1 : N (Batches)</text>

          {/* Table: recipe_ingredients (Junction Table M:N) */}
          <g transform="translate(360, 115)">
            <rect width="250" height="150" rx="6" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="250" height="30" rx="6" fill="#1e293b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">
              TABLE: recipe_ingredients
            </text>
            <text x="12" y="50" fill="#facc15" fontSize="10.5" fontFamily="monospace">PK  id           : INT (AUTO_INC)</text>
            <text x="12" y="70" fill="#38bdf8" fontSize="10.5" fontFamily="monospace">FK  recipe_id    : INT -&gt; recipes</text>
            <text x="12" y="90" fill="#38bdf8" fontSize="10.5" fontFamily="monospace">FK  ingredient_id: INT -&gt; ingredients</text>
            <text x="12" y="110" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    quantity     : DECIMAL(10,2)</text>
            <text x="12" y="130" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">    created_at   : TIMESTAMP</text>
          </g>

          {/* Connector: ingredients to recipe_ingredients (1 : N) */}
          <path d="M 290 190 L 360 190" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="300" y="182" fill="#38bdf8" fontSize="9" fontFamily="monospace">1 : N</text>

          {/* Table: recipes */}
          <g transform="translate(680, 90)">
            <rect width="240" height="190" rx="6" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="240" height="30" rx="6" fill="#1e293b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">
              TABLE: recipes
            </text>
            <text x="12" y="50" fill="#facc15" fontSize="10.5" fontFamily="monospace">PK  id           : INT (AUTO_INC)</text>
            <text x="12" y="70" fill="#38bdf8" fontSize="10.5" fontFamily="monospace">FK  menu_item_id : INT (1:1 UNIQUE)</text>
            <text x="12" y="90" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    name         : VARCHAR(100)</text>
            <text x="12" y="110" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    instructions : TEXT</text>
            <text x="12" y="130" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    prep_time_min: INT</text>
            <text x="12" y="150" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">    created_at   : TIMESTAMP</text>
            <text x="12" y="170" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">    updated_at   : TIMESTAMP</text>
          </g>

          {/* Connector: recipes to recipe_ingredients (1 : N) */}
          <path d="M 680 190 L 610 190" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="625" y="182" fill="#38bdf8" fontSize="9" fontFamily="monospace">1 : N</text>

          {/* Table: menu_items */}
          <g transform="translate(680, 320)">
            <rect width="240" height="200" rx="6" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="240" height="30" rx="6" fill="#1e293b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">
              TABLE: menu_items
            </text>
            <text x="12" y="50" fill="#facc15" fontSize="10.5" fontFamily="monospace">PK  id           : INT (AUTO_INC)</text>
            <text x="12" y="70" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    name         : VARCHAR(100) UQ</text>
            <text x="12" y="90" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    category     : VARCHAR(50)</text>
            <text x="12" y="110" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">    price        : DECIMAL(10,2)</text>
            <text x="12" y="130" fill="#10b981" fontSize="10.5" fontFamily="monospace">    is_available : BOOLEAN</text>
            <text x="12" y="150" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">    created_at   : TIMESTAMP</text>
            <text x="12" y="170" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">    updated_at   : TIMESTAMP</text>
          </g>

          {/* Connector: menu_items to recipes (1 : 1) */}
          <path d="M 800 320 L 800 280" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="810" y="305" fill="#38bdf8" fontSize="9" fontFamily="monospace">1 : 1 Strict</text>

          {/* Relational Design Notes Banner */}
          <g transform="translate(360, 320)">
            <rect width="250" height="195" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
            <text x="14" y="24" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">
              Design Highlights &amp; Normalization
            </text>
            <text x="14" y="44" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              • Strict 3NF prevents ingredient redundancy.
            </text>
            <text x="14" y="66" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              • Junction table `recipe_ingredients` decouples
            </text>
            <text x="14" y="80" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              recipes from ingredients with discrete portions.
            </text>
            <text x="14" y="102" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              • `inventory_batches` tracks expiry per shipment
            </text>
            <text x="14" y="116" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              rather than monolithic aggregated counters.
            </text>
            <text x="14" y="138" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              • `menu_item_id` in recipes is marked UNIQUE
            </text>
            <text x="14" y="152" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              enforcing 1:1 operational menu representation.
            </text>
            <text x="14" y="174" fill="#10b981" fontSize="9" fontFamily="monospace">
              ✓ Alembic Migration Audited
            </text>
          </g>
        </svg>
      );

    case "backend-module-dependency":
      return (
        <svg
          viewBox="0 0 960 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Backend Module Dependency Graph"
        >
          <rect width="960" height="520" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-4" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
            <marker id="dep-arrow" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 1 0 L 5 8 L 9 0 z" fill="#38bdf8" />
            </marker>
          </defs>
          <rect width="960" height="520" fill="url(#grid-pattern-4)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            DIRECTED ACYCLIC GRAPH (DAG) · MODULE DEPENDENCIES
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            DEP-01 · Unidirectional Coupling &amp; Zero Circular References
          </text>

          {/* Top Level: Main Application Entry */}
          <g transform="translate(360, 95)">
            <rect width="240" height="50" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="120" y="28" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">
              app.main : FastAPI()
            </text>
            <text x="120" y="42" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
              Root Router &amp; Lifespan Registration
            </text>
          </g>

          {/* Second Level: Domain Routers */}
          <g transform="translate(40, 185)">
            <rect x="0" y="0" width="190" height="60" rx="6" fill="#121215" stroke="#27272a" strokeWidth="1.2" />
            <text x="12" y="24" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Menu Router</text>
            <text x="12" y="42" fill="#38bdf8" fontSize="9" fontFamily="monospace">/api/v1/menus</text>

            <rect x="230" y="0" width="190" height="60" rx="6" fill="#121215" stroke="#27272a" strokeWidth="1.2" />
            <text x="12" y="24" fill="#fafafa" fontSize="11" fontWeight="600" transform="translate(230,0)" fontFamily="sans-serif">Recipe Router</text>
            <text x="12" y="42" fill="#38bdf8" fontSize="9" transform="translate(230,0)" fontFamily="monospace">/api/v1/recipes</text>

            <rect x="460" y="0" width="190" height="60" rx="6" fill="#121215" stroke="#27272a" strokeWidth="1.2" />
            <text x="12" y="24" fill="#fafafa" fontSize="11" fontWeight="600" transform="translate(460,0)" fontFamily="sans-serif">Ingredient Router</text>
            <text x="12" y="42" fill="#38bdf8" fontSize="9" transform="translate(460,0)" fontFamily="monospace">/api/v1/ingredients</text>

            <rect x="690" y="0" width="190" height="60" rx="6" fill="#1c1917" stroke="#d97706" strokeWidth="1.2" />
            <text x="12" y="24" fill="#fbbf24" fontSize="11" fontWeight="600" transform="translate(690,0)" fontFamily="sans-serif">Inventory Router</text>
            <text x="12" y="42" fill="#fbbf24" fontSize="9" transform="translate(690,0)" fontFamily="monospace">/api/v1/inventory</text>
          </g>

          {/* Connectors from Main to Routers */}
          <path d="M 420 145 L 140 185" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.7" />
          <path d="M 450 145 L 325 185" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.7" />
          <path d="M 510 145 L 555 185" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.7" />
          <path d="M 540 145 L 780 185" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.7" />

          {/* Third Level: Domain Services */}
          <g transform="translate(40, 285)">
            <rect x="0" y="0" width="190" height="60" rx="6" fill="#121215" stroke="#27272a" strokeWidth="1.2" />
            <text x="12" y="24" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">MenuService</text>
            <text x="12" y="42" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">Depends on: RecipeService</text>

            <rect x="230" y="0" width="190" height="60" rx="6" fill="#121215" stroke="#27272a" strokeWidth="1.2" />
            <text x="12" y="24" fill="#fafafa" fontSize="11" fontWeight="600" transform="translate(230,0)" fontFamily="sans-serif">RecipeService</text>
            <text x="12" y="42" fill="#a1a1aa" fontSize="9" transform="translate(230,0)" fontFamily="sans-serif">Depends on: IngredientService</text>

            <rect x="460" y="0" width="190" height="60" rx="6" fill="#121215" stroke="#27272a" strokeWidth="1.2" />
            <text x="12" y="24" fill="#fafafa" fontSize="11" fontWeight="600" transform="translate(460,0)" fontFamily="sans-serif">IngredientService</text>
            <text x="12" y="42" fill="#a1a1aa" fontSize="9" transform="translate(460,0)" fontFamily="sans-serif">Independent Core Domain</text>

            <rect x="690" y="0" width="190" height="60" rx="6" fill="#1c1917" stroke="#d97706" strokeWidth="1.2" />
            <text x="12" y="24" fill="#fbbf24" fontSize="11" fontWeight="600" transform="translate(690,0)" fontFamily="sans-serif">InventoryService</text>
            <text x="12" y="42" fill="#fbbf24" fontSize="9" transform="translate(690,0)" fontFamily="sans-serif">Depends on: IngredientService</text>
          </g>

          {/* Inter-service dependencies */}
          <path d="M 190 315 L 230 315" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#dep-arrow)" />
          <path d="M 420 315 L 460 315" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#dep-arrow)" />
          <path d="M 690 315 L 650 315" stroke="#d97706" strokeWidth="1.5" markerEnd="url(#dep-arrow)" />

          {/* Fourth Level: Foundation & Database Layer */}
          <g transform="translate(40, 395)">
            <rect width="880" height="85" rx="8" fill="#18181b" stroke="#27272a" strokeWidth="1.2" />
            <text x="20" y="26" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">
              SHARED INFRASTRUCTURE CORE (Zero Business Logic)
            </text>
            <g transform="translate(20, 38)">
              <rect x="0" y="0" width="260" height="34" rx="4" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
              <text x="12" y="21" fill="#e4e4e7" fontSize="10" fontFamily="monospace">app.core.config (Pydantic Settings)</text>

              <rect x="290" y="0" width="260" height="34" rx="4" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
              <text x="12" y="21" fill="#e4e4e7" fontSize="10" fontFamily="monospace">app.db.session (SQLAlchemy Session)</text>

              <rect x="580" y="0" width="260" height="34" rx="4" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
              <text x="12" y="21" fill="#e4e4e7" fontSize="10" fontFamily="monospace">app.db.base (DeclarativeBase)</text>
            </g>
          </g>

          {/* Downward flow arrows from services to Core */}
          <path d="M 480 345 L 480 395" stroke="#71717a" strokeWidth="1.2" strokeDasharray="3 3" />
        </svg>
      );

    case "project-folder-structure":
      return (
        <svg
          viewBox="0 0 960 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Project Folder Structure Diagram"
        >
          <rect width="960" height="540" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-5" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="960" height="540" fill="url(#grid-pattern-5)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            PROJECT CODEBASE TAXONOMY · PACKAGE ARCHITECTURE
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            DIR-01 · Production Modular Monolith Structure
          </text>

          {/* Column 1: Tree View Code Box */}
          <g transform="translate(40, 95)">
            <rect width="450" height="400" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="450" height="32" rx="8" fill="#18181b" />
            <circle cx="20" cy="16" r="4.5" fill="#ef4444" />
            <circle cx="34" cy="16" r="4.5" fill="#f59e0b" />
            <circle cx="48" cy="16" r="4.5" fill="#10b981" />
            <text x="70" y="20" fill="#a1a1aa" fontSize="10.5" fontFamily="monospace">
              Restaurant-AI / backend repository
            </text>

            <g transform="translate(18, 50)" fill="#e2e8f0" fontSize="10.5" fontFamily="monospace">
              <text y="14" fill="#38bdf8">app/</text>
              <text y="30" fill="#71717a">├── </text><text y="30" x="28" fill="#a1a1aa">main.py</text><text y="30" x="140" fill="#52525b"># FastAPI entry, middlewares</text>
              <text y="46" fill="#71717a">├── </text><text y="46" x="28" fill="#38bdf8">core/</text><text y="46" x="140" fill="#52525b"># Config, env, global settings</text>
              <text y="62" fill="#71717a">│   ├── </text><text y="62" x="48">config.py</text>
              <text y="78" fill="#71717a">├── </text><text y="78" x="28" fill="#38bdf8">db/</text><text y="78" x="140" fill="#52525b"># SQLAlchemy session &amp; engine</text>
              <text y="94" fill="#71717a">│   ├── </text><text y="94" x="48">base.py</text>
              <text y="110" fill="#71717a">│   └── </text><text y="110" x="48">session.py</text>
              <text y="126" fill="#71717a">├── </text><text y="126" x="28" fill="#38bdf8">modules/</text><text y="126" x="140" fill="#52525b"># Isolated business modules</text>
              <text y="142" fill="#71717a">│   ├── </text><text y="142" x="48" fill="#10b981">ingredients/</text>
              <text y="158" fill="#71717a">│   │   ├── </text><text y="158" x="68">models.py, schemas.py, router.py</text>
              <text y="174" fill="#71717a">│   ├── </text><text y="174" x="48" fill="#10b981">menu/</text>
              <text y="190" fill="#71717a">│   │   ├── </text><text y="190" x="68">models.py, schemas.py, router.py</text>
              <text y="206" fill="#71717a">│   ├── </text><text y="206" x="48" fill="#10b981">recipes/</text>
              <text y="222" fill="#71717a">│   │   ├── </text><text y="222" x="68">models.py, schemas.py, router.py</text>
              <text y="238" fill="#71717a">│   └── </text><text y="238" x="48" fill="#fbbf24">inventory/</text>
              <text y="254" fill="#71717a">│       ├── </text><text y="254" x="68">models.py, schemas.py, router.py</text>
              <text y="270" fill="#71717a">├── </text><text y="270" x="28" fill="#38bdf8">api/</text><text y="270" x="140" fill="#52525b"># API router aggregation</text>
              <text y="286" fill="#71717a">│   └── </text><text y="286" x="48">v1/endpoints.py</text>
              <text y="302" fill="#71717a">alembic/</text><text y="302" x="140" fill="#52525b"># Database migrations</text>
              <text y="318" fill="#71717a">├── </text><text y="318" x="28">versions/</text>
              <text y="334" fill="#71717a">requirements.txt</text>
            </g>
          </g>

          {/* Column 2: Architectural Principles */}
          <g transform="translate(510, 95)">
            <rect width="410" height="400" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="410" height="32" rx="8" fill="#18181b" />
            <text x="16" y="20" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              STRUCTURAL DESIGN PRINCIPLES
            </text>

            <g transform="translate(18, 48)">
              {/* Point 1 */}
              <rect width="374" height="68" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="12" y="20" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                1. Feature Module Encapsulation
              </text>
              <text x="12" y="38" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                Each domain (ingredients, recipes, menu, inventory) owns its
              </text>
              <text x="12" y="52" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                models, schemas, and routes. No tangled global files.
              </text>

              {/* Point 2 */}
              <rect y="80" width="374" height="68" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="12" y="100" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                2. Clean Separation of Models &amp; DTOs
              </text>
              <text x="12" y="118" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                SQLAlchemy models map to MySQL tables; Pydantic schemas
              </text>
              <text x="12" y="132" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                handle HTTP request validation and JSON serialization.
              </text>

              {/* Point 3 */}
              <rect y="160" width="374" height="68" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <text x="12" y="180" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                3. Deterministic Migration Pipeline
              </text>
              <text x="12" y="198" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                Alembic version scripts are strictly checked into Git.
              </text>
              <text x="12" y="212" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                Zero manual `ALTER TABLE` execution across environments.
              </text>

              {/* Point 4 */}
              <rect y="240" width="374" height="85" rx="6" fill="#18181b" stroke="#0284c7" strokeWidth="1" />
              <text x="12" y="260" fill="#38bdf8" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                4. Extensible to Microservices
              </text>
              <text x="12" y="278" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                Because domain boundaries are cleanly partitioned into modules,
              </text>
              <text x="12" y="292" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                any domain (e.g. Inventory or Production) can be extracted into
              </text>
              <text x="12" y="306" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
                a standalone microservice when scale requires it.
              </text>
            </g>
          </g>
        </svg>
      );

    case "inventory-management-workflow":
      return (
        <svg
          viewBox="0 0 960 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Inventory Management Workflow Diagram"
        >
          <rect width="960" height="480" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-6" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
            <marker id="wf-arrow-1" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 1 0 L 5 8 L 9 0 z" fill="#38bdf8" />
            </marker>
          </defs>
          <rect width="960" height="480" fill="url(#grid-pattern-6)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            INVENTORY BATCH LIFECYCLE WORKFLOW
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            WF-INV-01 · Ingestion, Expiration Tracking, and Unit Cost Accounting
          </text>

          {/* Step 1 */}
          <g transform="translate(40, 110)">
            <rect width="160" height="260" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="160" height="30" rx="8" fill="#18181b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="monospace">01 · INGESTION</text>
            <text x="12" y="60" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Supplier Delivery</text>
            <text x="12" y="80" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">Receipt of shipment:</text>
            <text x="12" y="100" fill="#e2e8f0" fontSize="9" fontFamily="monospace">• Ingredient ID</text>
            <text x="12" y="118" fill="#e2e8f0" fontSize="9" fontFamily="monospace">• Quantity received</text>
            <text x="12" y="136" fill="#e2e8f0" fontSize="9" fontFamily="monospace">• Unit cost ($)</text>
            <text x="12" y="154" fill="#e2e8f0" fontSize="9" fontFamily="monospace">• Supplier name</text>
            <text x="12" y="172" fill="#e2e8f0" fontSize="9" fontFamily="monospace">• Expiry date</text>
            <rect x="12" y="210" width="136" height="26" rx="4" fill="#1e293b" />
            <text x="20" y="227" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">POST /inventory/batches</text>
          </g>

          {/* Arrow 1 to 2 */}
          <path d="M 200 240 L 225 240" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Step 2 */}
          <g transform="translate(225, 110)">
            <rect width="160" height="260" rx="8" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="160" height="30" rx="8" fill="#1e293b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="monospace">02 · BATCH NUM</text>
            <text x="12" y="60" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Auto Generation</text>
            <text x="12" y="80" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">System generates</text>
            <text x="12" y="96" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">deterministic lot code:</text>
            <rect x="12" y="115" width="136" height="36" rx="4" fill="#09090b" stroke="#334155" strokeWidth="1" />
            <text x="18" y="132" fill="#38bdf8" fontSize="9.5" fontWeight="600" fontFamily="monospace">BATCH-2026-ING04-09</text>
            <text x="18" y="145" fill="#64748b" fontSize="8" fontFamily="sans-serif">Unique constraint enforced</text>
            <text x="12" y="175" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Zero collision</text>
            <text x="12" y="190" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Audit traceability</text>
            <rect x="12" y="210" width="136" height="26" rx="4" fill="#065f46" />
            <text x="20" y="227" fill="#34d399" fontSize="8.5" fontFamily="monospace">Status: Implemented</text>
          </g>

          {/* Arrow 2 to 3 */}
          <path d="M 385 240 L 410 240" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Step 3 */}
          <g transform="translate(410, 110)">
            <rect width="160" height="260" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="160" height="30" rx="8" fill="#18181b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="monospace">03 · ACTIVE STOCK</text>
            <text x="12" y="60" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Storage &amp; Monitoring</text>
            <text x="12" y="80" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">Batch persists into</text>
            <text x="12" y="96" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">MySQL with status:</text>
            <text x="12" y="120" fill="#10b981" fontSize="9" fontFamily="monospace">● ACTIVE</text>
            <text x="12" y="138" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">• Expiry date indexed</text>
            <text x="12" y="156" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">• Real-time quantity sum</text>
            <text x="12" y="174" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">• Per-batch valuation</text>
            <rect x="12" y="210" width="136" height="26" rx="4" fill="#065f46" />
            <text x="20" y="227" fill="#34d399" fontSize="8.5" fontFamily="monospace">Status: Implemented</text>
          </g>

          {/* Arrow 3 to 4 */}
          <path d="M 570 240 L 595 240" stroke="#d97706" strokeWidth="1.5" />

          {/* Step 4 */}
          <g transform="translate(595, 110)">
            <rect width="160" height="260" rx="8" fill="#1c1917" stroke="#d97706" strokeWidth="1.5" />
            <rect width="160" height="30" rx="8" fill="#292524" />
            <text x="12" y="20" fill="#fbbf24" fontSize="10.5" fontWeight="700" fontFamily="monospace">04 · FEFO DEPLETE</text>
            <text x="12" y="60" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Production Deduction</text>
            <text x="12" y="80" fill="#fef3c7" fontSize="9.5" fontFamily="sans-serif">Operational order</text>
            <text x="12" y="96" fill="#fef3c7" fontSize="9.5" fontFamily="sans-serif">triggers deduction:</text>
            <text x="12" y="120" fill="#fbbf24" fontSize="9" fontFamily="monospace">• Oldest expiry first</text>
            <text x="12" y="138" fill="#fef3c7" fontSize="9" fontFamily="sans-serif">• Partial batch consume</text>
            <text x="12" y="156" fill="#fef3c7" fontSize="9" fontFamily="sans-serif">• Zero below-zero stock</text>
            <text x="12" y="174" fill="#fef3c7" fontSize="9" fontFamily="sans-serif">• Transaction log entry</text>
            <rect x="12" y="210" width="136" height="26" rx="4" fill="#78350f" />
            <text x="20" y="227" fill="#fbbf24" fontSize="8.5" fontFamily="monospace">Status: In Progress</text>
          </g>

          {/* Arrow 4 to 5 */}
          <path d="M 755 240 L 780 240" stroke="#71717a" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Step 5 */}
          <g transform="translate(780, 110)">
            <rect width="140" height="260" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect width="140" height="30" rx="8" fill="#27272a" />
            <text x="10" y="20" fill="#a1a1aa" fontSize="10" fontWeight="700" fontFamily="monospace">05 · AUDIT</text>
            <text x="10" y="60" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Reconciliation</text>
            <text x="10" y="80" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Stock adjustments</text>
            <text x="10" y="100" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Spoilage logging</text>
            <text x="10" y="120" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Low stock alerts</text>
            <text x="10" y="140" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Margin analytics</text>
            <rect x="10" y="210" width="120" height="26" rx="4" fill="#27272a" />
            <text x="16" y="227" fill="#a1a1aa" fontSize="8.5" fontFamily="monospace">Status: Planned</text>
          </g>

          {/* Footer note */}
          <text x="40" y="420" fill="#71717a" fontSize="10" fontFamily="monospace">
            NOTE: Inventory is tracked at the BATCH level with explicit expiry dates rather than flat integer counters, preserving food safety and true cost of goods.
          </text>
        </svg>
      );

    case "order-processing-workflow":
      return (
        <svg
          viewBox="0 0 960 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Order Processing Workflow Diagram"
        >
          <rect width="960" height="480" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-7" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="960" height="480" fill="url(#grid-pattern-7)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            ORDER PROCESSING &amp; INVENTORY CONSUMPTION FLOW
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            WF-ORD-02 · Internal Operational Workflow vs Customer E-Commerce
          </text>

          {/* Step 1: Operational Order Request */}
          <g transform="translate(40, 110)">
            <rect width="180" height="260" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="180" height="30" rx="8" fill="#18181b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="monospace">1 · ORDER INTAKE</text>
            <text x="12" y="58" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Kitchen Production Event</text>
            <text x="12" y="78" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">Order received via POS /</text>
            <text x="12" y="94" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">Kitchen Display System:</text>
            <rect x="12" y="112" width="156" height="52" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
            <text x="18" y="128" fill="#e2e8f0" fontSize="9" fontFamily="monospace">menu_item_id: 12</text>
            <text x="18" y="142" fill="#e2e8f0" fontSize="9" fontFamily="monospace">servings: 4</text>
            <text x="18" y="156" fill="#a1a1aa" fontSize="8" fontFamily="sans-serif">Timestamp: 2026-09-28</text>
            <text x="12" y="186" fill="#71717a" fontSize="8.5" fontFamily="sans-serif">Focus: internal supply, not checkout payment</text>
          </g>

          <path d="M 220 240 L 255 240" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Step 2: Recipe Resolution */}
          <g transform="translate(255, 110)">
            <rect width="190" height="260" rx="8" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="190" height="30" rx="8" fill="#1e293b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="monospace">2 · RECIPE DECOMPOSITION</text>
            <text x="12" y="58" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Bill of Materials Lookup</text>
            <text x="12" y="78" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">Resolves 1:1 recipe binding:</text>
            <text x="12" y="94" fill="#38bdf8" fontSize="9" fontFamily="monospace">RecipeService.get_by_menu()</text>
            <rect x="12" y="110" width="166" height="74" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
            <text x="18" y="126" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">• Beef Patty: 4 x 150g</text>
            <text x="18" y="140" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">• Cheddar: 4 x 30g</text>
            <text x="18" y="154" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">• Brioche: 4 x 1 unit</text>
            <text x="18" y="168" fill="#e2e8f0" fontSize="8.5" fontFamily="monospace">• Special Sauce: 4 x 20ml</text>
            <text x="12" y="204" fill="#10b981" fontSize="9" fontFamily="sans-serif">Multiplies portions deterministically</text>
          </g>

          <path d="M 445 240 L 480 240" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Step 3: Stock Verification */}
          <g transform="translate(480, 110)">
            <rect width="195" height="260" rx="8" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="190" height="30" rx="8" fill="#1e293b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="monospace">3 · STOCK AUDIT (FEFO)</text>
            <text x="12" y="58" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Batch Allocation Query</text>
            <text x="12" y="78" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">Queries active batches sorted</text>
            <text x="12" y="94" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">by expiry date ascending:</text>
            <rect x="12" y="110" width="170" height="74" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
            <text x="18" y="126" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">SELECT * FROM batches</text>
            <text x="18" y="140" fill="#e2e8f0" fontSize="8" fontFamily="monospace">WHERE ingredient_id = :id</text>
            <text x="18" y="154" fill="#e2e8f0" fontSize="8" fontFamily="monospace">  AND quantity &gt; 0</text>
            <text x="18" y="168" fill="#f87171" fontSize="8" fontFamily="monospace">ORDER BY expiry_date ASC</text>
            <text x="12" y="204" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">Validates availability before prep</text>
          </g>

          <path d="M 675 240 L 710 240" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Step 4: Transaction & Commit */}
          <g transform="translate(710, 110)">
            <rect width="210" height="260" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="210" height="30" rx="8" fill="#1e293b" />
            <text x="12" y="20" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="monospace">4 · ATOMIC DEDUCTION</text>
            <text x="12" y="58" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">ACID Transaction Commit</text>
            <text x="12" y="78" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">SQLAlchemy session commits</text>
            <text x="12" y="94" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">all batch subtractions:</text>
            <rect x="12" y="110" width="186" height="74" rx="4" fill="#09090b" stroke="#334155" strokeWidth="1" />
            <text x="16" y="126" fill="#10b981" fontSize="8.5" fontFamily="monospace">BEGIN TRANSACTION</text>
            <text x="16" y="140" fill="#e2e8f0" fontSize="8" fontFamily="monospace">UPDATE batches SET qty -= 600g</text>
            <text x="16" y="154" fill="#e2e8f0" fontSize="8" fontFamily="monospace">INSERT INTO stock_ledger ...</text>
            <text x="16" y="168" fill="#10b981" fontSize="8.5" fontFamily="monospace">COMMIT</text>
            <text x="12" y="204" fill="#38bdf8" fontSize="9" fontFamily="sans-serif">Zero race conditions on stock</text>
          </g>
        </svg>
      );

    case "availability-engine-workflow":
      return (
        <svg
          viewBox="0 0 960 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Availability Engine Workflow Diagram"
        >
          <rect width="960" height="500" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-8" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
            <marker id="avail-arrow" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 1 0 L 5 8 L 9 0 z" fill="#38bdf8" />
            </marker>
          </defs>
          <rect width="960" height="500" fill="url(#grid-pattern-8)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            AVAILABILITY ENGINE · INGREDIENT VALIDATION BEFORE PRODUCTION
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            WF-AVL-03 · Dynamic Menu Availability Computed From Batch Inventory
          </text>

          {/* Menu Item Query */}
          <g transform="translate(40, 110)">
            <rect width="200" height="150" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.5" />
            <rect width="200" height="28" rx="8" fill="#18181b" />
            <text x="12" y="19" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              STEP 1 · MENU ITEM
            </text>
            <text x="14" y="52" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Menu Item Requested</text>
            <text x="14" y="70" fill="#a1a1aa" fontSize="9.5" fontFamily="monospace">GET /api/v1/menus/12</text>
            <text x="14" y="90" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Checks live operational</text>
            <text x="14" y="104" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">status before order intake.</text>
            <rect x="14" y="118" width="172" height="20" rx="3" fill="#1e293b" />
            <text x="20" y="132" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">Requires: Active Recipe</text>
          </g>

          <path d="M 240 185 L 280 185" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Step 2: Recipe Expansion */}
          <g transform="translate(280, 110)">
            <rect width="220" height="150" rx="8" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="220" height="28" rx="8" fill="#1e293b" />
            <text x="12" y="19" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              STEP 2 · RECIPE DECOMPOSITION
            </text>
            <text x="14" y="52" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Extract Required Ingredients</text>
            <text x="14" y="72" fill="#e2e8f0" fontSize="9" fontFamily="monospace">Ing 1: Flour (250g)</text>
            <text x="14" y="88" fill="#e2e8f0" fontSize="9" fontFamily="monospace">Ing 2: Butter (100g)</text>
            <text x="14" y="104" fill="#e2e8f0" fontSize="9" fontFamily="monospace">Ing 3: Eggs (2 units)</text>
            <text x="14" y="128" fill="#a1a1aa" fontSize="8.5" fontFamily="sans-serif">Standardized metric portioning</text>
          </g>

          <path d="M 500 185 L 540 185" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Step 3: Batch Aggregate Calculation */}
          <g transform="translate(540, 110)">
            <rect width="210" height="150" rx="8" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="210" height="28" rx="8" fill="#1e293b" />
            <text x="12" y="19" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              STEP 3 · BATCH AGGREGATION
            </text>
            <text x="14" y="52" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Query Active Non-Expired Batches</text>
            <text x="14" y="72" fill="#10b981" fontSize="9" fontFamily="monospace">Flour: 5,000g available (20 portions)</text>
            <text x="14" y="88" fill="#f59e0b" fontSize="9" fontFamily="monospace">Butter: 300g available (3 portions)</text>
            <text x="14" y="104" fill="#10b981" fontSize="9" fontFamily="monospace">Eggs: 40 units (20 portions)</text>
            <text x="14" y="130" fill="#f87171" fontSize="8.5" fontFamily="sans-serif">Bottleneck identified: Butter (3)</text>
          </g>

          <path d="M 750 185 L 790 185" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Step 4: Final Availability Flag */}
          <g transform="translate(790, 110)">
            <rect width="130" height="150" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="130" height="28" rx="8" fill="#1e293b" />
            <text x="10" y="19" fill="#38bdf8" fontSize="10" fontWeight="700" fontFamily="monospace">
              STEP 4 · RESULT
            </text>
            <text x="10" y="52" fill="#fafafa" fontSize="10" fontWeight="600" fontFamily="sans-serif">Producible Count</text>
            <rect x="10" y="65" width="110" height="34" rx="4" fill="#1e293b" />
            <text x="65" y="87" textAnchor="middle" fill="#38bdf8" fontSize="16" fontWeight="700" fontFamily="monospace">
              3 Servings
            </text>
            <rect x="10" y="110" width="110" height="24" rx="4" fill="#065f46" />
            <text x="65" y="126" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="600" fontFamily="monospace">
              AVAILABLE
            </text>
          </g>

          {/* Bottom Callout: Formula and Logic */}
          <g transform="translate(40, 290)">
            <rect width="880" height="160" rx="8" fill="#18181b" stroke="#27272a" strokeWidth="1.2" />
            <text x="20" y="28" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">
              MATHEMATICAL AVAILABILITY FORMULATION
            </text>

            <rect x="20" y="44" width="840" height="42" rx="4" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
            <text x="35" y="70" fill="#38bdf8" fontSize="12" fontFamily="monospace">
              MaxServings(MenuItem) = MIN( FLOOR( Σ ActiveBatchQty(i) / RecipeQty(i) ) )  ∀ i ∈ RecipeIngredients
            </text>

            <text x="20" y="112" fill="#e4e4e7" fontSize="10.5" fontFamily="sans-serif">
              Key Engineering Guarantee: The system never queries flat inventory counters. Every ingredient amount is derived from real batches where <tspan fill="#38bdf8" fontFamily="monospace">expiry_date &gt; CURRENT_DATE()</tspan> and <tspan fill="#38bdf8" fontFamily="monospace">quantity &gt; 0</tspan>.
            </text>
            <text x="20" y="134" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
              If <tspan fill="#f59e0b" fontFamily="monospace">MaxServings == 0</tspan>, the API automatically marks the menu item as unavailable, preventing waitstaff and POS systems from accepting impossible tickets.
            </text>
          </g>
        </svg>
      );

    case "fefo-consumption-workflow":
      return (
        <svg
          viewBox="0 0 960 490"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="FEFO Consumption Workflow Diagram"
        >
          <rect width="960" height="490" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-9" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="960" height="490" fill="url(#grid-pattern-9)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            FIRST EXPIRE FIRST OUT (FEFO) INVENTORY DEPLETION STRATEGY
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            WF-FEFO-04 · Expiry-First Priority Queue vs Naive FIFO Consumption
          </text>

          {/* Ingredient Demand Box */}
          <g transform="translate(40, 105)">
            <rect width="210" height="180" rx="8" fill="#121215" stroke="#0284c7" strokeWidth="1.5" />
            <rect width="210" height="30" rx="8" fill="#1e293b" />
            <text x="14" y="20" fill="#38bdf8" fontSize="11" fontWeight="700" fontFamily="monospace">
              ORDER DEMAND: 5.0 KG
            </text>
            <text x="14" y="55" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Ingredient: Mozzarella</text>
            <text x="14" y="75" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">Required: 5,000 grams</text>
            <text x="14" y="95" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">Order Type: Kitchen Prep</text>
            <rect x="14" y="115" width="182" height="48" rx="4" fill="#09090b" stroke="#334155" strokeWidth="1" />
            <text x="22" y="133" fill="#fbbf24" fontSize="9" fontFamily="monospace">Remaining needed: 5.0 kg</text>
            <text x="22" y="149" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">Querying FEFO queue...</text>
          </g>

          {/* FEFO Queue Visualization */}
          <g transform="translate(280, 105)">
            {/* Batch 1 (Expires soonest) */}
            <g transform="translate(0, 0)">
              <rect width="200" height="180" rx="8" fill="#1c1917" stroke="#ef4444" strokeWidth="1.5" />
              <rect width="200" height="30" rx="8" fill="#450a0a" />
              <text x="12" y="20" fill="#fca5a5" fontSize="10.5" fontWeight="700" fontFamily="monospace">BATCH #01 · PRIORITY 1</text>
              <text x="12" y="52" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="monospace">LOT-2026-A1</text>
              <text x="12" y="70" fill="#ef4444" fontSize="9.5" fontWeight="600" fontFamily="monospace">Expiry: 2026-09-30 (2 days)</text>
              <text x="12" y="90" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">Available stock: 3.0 kg</text>
              <rect x="12" y="108" width="176" height="55" rx="4" fill="#09090b" stroke="#7f1d1d" strokeWidth="1" />
              <text x="18" y="125" fill="#f87171" fontSize="9" fontWeight="600" fontFamily="monospace">Deduction: -3.0 kg</text>
              <text x="18" y="141" fill="#a1a1aa" fontSize="8.5" fontFamily="monospace">New Batch Balance: 0.0 kg</text>
              <text x="18" y="154" fill="#34d399" fontSize="8" fontFamily="sans-serif">Batch Depleted &amp; Closed</text>
            </g>

            {/* Batch 2 (Expires later) */}
            <g transform="translate(225, 0)">
              <rect width="200" height="180" rx="8" fill="#121215" stroke="#f59e0b" strokeWidth="1.5" />
              <rect width="200" height="30" rx="8" fill="#78350f" />
              <text x="12" y="20" fill="#fde68a" fontSize="10.5" fontWeight="700" fontFamily="monospace">BATCH #02 · PRIORITY 2</text>
              <text x="12" y="52" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="monospace">LOT-2026-B8</text>
              <text x="12" y="70" fill="#f59e0b" fontSize="9.5" fontWeight="600" fontFamily="monospace">Expiry: 2026-10-08 (10 days)</text>
              <text x="12" y="90" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">Available stock: 4.5 kg</text>
              <rect x="12" y="108" width="176" height="55" rx="4" fill="#09090b" stroke="#92400e" strokeWidth="1" />
              <text x="18" y="125" fill="#fbbf24" fontSize="9" fontWeight="600" fontFamily="monospace">Deduction: -2.0 kg</text>
              <text x="18" y="141" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">New Batch Balance: 2.5 kg</text>
              <text x="18" y="154" fill="#10b981" fontSize="8" fontFamily="sans-serif">Active Remaining Stock</text>
            </g>

            {/* Batch 3 (Untouched) */}
            <g transform="translate(450, 0)">
              <rect width="190" height="180" rx="8" fill="#121215" stroke="#27272a" strokeWidth="1.2" opacity="0.7" />
              <rect width="190" height="30" rx="8" fill="#18181b" />
              <text x="12" y="20" fill="#a1a1aa" fontSize="10.5" fontWeight="700" fontFamily="monospace">BATCH #03 · UNTOUCHED</text>
              <text x="12" y="52" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="monospace">LOT-2026-C4</text>
              <text x="12" y="70" fill="#10b981" fontSize="9.5" fontWeight="600" fontFamily="monospace">Expiry: 2026-10-25 (27 days)</text>
              <text x="12" y="90" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">Available stock: 10.0 kg</text>
              <rect x="12" y="108" width="166" height="55" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
              <text x="18" y="125" fill="#a1a1aa" fontSize="9" fontWeight="600" fontFamily="monospace">Deduction: 0.0 kg</text>
              <text x="18" y="141" fill="#a1a1aa" fontSize="8.5" fontFamily="monospace">Remaining: 10.0 kg</text>
              <text x="18" y="154" fill="#38bdf8" fontSize="8" fontFamily="sans-serif">Preserved in cold storage</text>
            </g>
          </g>

          {/* Explanation panel below */}
          <g transform="translate(40, 310)">
            <rect width="880" height="145" rx="8" fill="#18181b" stroke="#27272a" strokeWidth="1.2" />
            <text x="20" y="26" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">
              WHY FEFO OVER STANDARD FIFO?
            </text>
            <text x="20" y="50" fill="#e4e4e7" fontSize="10.5" fontFamily="sans-serif">
              Standard FIFO (First-In, First-Out) assumes the earliest received batch always spoils first. In restaurant operations, different suppliers, production runs, and dairy/produce deliveries often arrive with non-linear expiration windows.
            </text>
            <text x="20" y="74" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
              FEFO (First Expire, First Out) sorts the inventory batches by <tspan fill="#38bdf8" fontFamily="monospace">expiry_date ASC, created_at ASC</tspan>, guaranteeing perishable products close to expiry are consumed first regardless of arrival sequence.
            </text>
            <text x="20" y="98" fill="#10b981" fontSize="10" fontFamily="sans-serif">
              Financial Impact: Eliminates spoilage waste by up to 25–40% in commercial kitchens while maintaining batch-level traceability for regulatory health inspections.
            </text>
            <rect x="20" y="112" width="220" height="20" rx="3" fill="#065f46" />
            <text x="30" y="126" fill="#34d399" fontSize="8.5" fontFamily="monospace">Alembic schema supports expiry indexing</text>
          </g>
        </svg>
      );

    case "request-lifecycle":
      return (
        <svg
          viewBox="0 0 960 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Request Lifecycle Diagram"
        >
          <rect width="960" height="480" rx="12" fill="#09090b" />
          <defs>
            <pattern id="grid-pattern-10" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="960" height="480" fill="url(#grid-pattern-10)" rx="12" />

          {/* Header */}
          <text x="40" y="44" fill="#fafafa" fontSize="16" fontWeight="600" fontFamily="monospace">
            FASTAPI REQUEST / RESPONSE LIFECYCLE
          </text>
          <text x="40" y="64" fill="#71717a" fontSize="12" fontFamily="monospace">
            REQ-01 · Client → Router → Service → ORM → Database → Response Serialization
          </text>

          {/* Horizontal Chain */}
          <g transform="translate(40, 110)">
            {/* Stage 1: Client */}
            <g transform="translate(0, 0)">
              <rect width="140" height="260" rx="6" fill="#121215" stroke="#27272a" strokeWidth="1.2" />
              <rect width="140" height="28" rx="6" fill="#18181b" />
              <text x="10" y="19" fill="#38bdf8" fontSize="10" fontWeight="700" fontFamily="monospace">1 · CLIENT</text>
              <text x="10" y="55" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">HTTP Request</text>
              <text x="10" y="75" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">POST /api/v1/</text>
              <text x="10" y="90" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">ingredients</text>
              <rect x="10" y="105" width="120" height="60" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
              <text x="14" y="122" fill="#e2e8f0" fontSize="8" fontFamily="monospace">&#123;</text>
              <text x="18" y="136" fill="#e2e8f0" fontSize="8" fontFamily="monospace">&quot;name&quot;: &quot;Basil&quot;,</text>
              <text x="18" y="150" fill="#e2e8f0" fontSize="8" fontFamily="monospace">&quot;unit&quot;: &quot;grams&quot;</text>
              <text x="14" y="162" fill="#e2e8f0" fontSize="8" fontFamily="monospace">&#125;</text>
              <text x="10" y="190" fill="#a1a1aa" fontSize="8.5" fontFamily="sans-serif">JSON payload</text>
            </g>

            {/* Arrow 1 */}
            <path d="M 140 130 L 165 130" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M 165 180 L 140 180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Stage 2: Router & Pydantic Validation */}
            <g transform="translate(165, 0)">
              <rect width="160" height="260" rx="6" fill="#121215" stroke="#0284c7" strokeWidth="1.2" />
              <rect width="160" height="28" rx="6" fill="#1e293b" />
              <text x="10" y="19" fill="#38bdf8" fontSize="10" fontWeight="700" fontFamily="monospace">2 · ROUTER &amp; DTO</text>
              <text x="10" y="55" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Schema Validation</text>
              <text x="10" y="75" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Path matching</text>
              <text x="10" y="93" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Pydantic BaseModel</text>
              <text x="10" y="111" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Type checking</text>
              <rect x="10" y="130" width="140" height="50" rx="4" fill="#09090b" stroke="#334155" strokeWidth="1" />
              <text x="14" y="148" fill="#10b981" fontSize="8" fontFamily="monospace">✓ 200 Valid Schema</text>
              <text x="14" y="164" fill="#ef4444" fontSize="8" fontFamily="monospace">✗ 422 Unprocessable</text>
              <text x="10" y="205" fill="#38bdf8" fontSize="8.5" fontFamily="sans-serif">Auto OpenAPI docs</text>
            </g>

            {/* Arrow 2 */}
            <path d="M 325 130 L 350 130" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M 350 180 L 325 180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Stage 3: DI & Service Layer */}
            <g transform="translate(350, 0)">
              <rect width="170" height="260" rx="6" fill="#121215" stroke="#0284c7" strokeWidth="1.2" />
              <rect width="170" height="28" rx="6" fill="#1e293b" />
              <text x="10" y="19" fill="#38bdf8" fontSize="10" fontWeight="700" fontFamily="monospace">3 · SERVICE LAYER</text>
              <text x="10" y="55" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Business Validation</text>
              <text x="10" y="75" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">Depends(get_db)</text>
              <text x="10" y="95" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">• Uniqueness check</text>
              <text x="10" y="113" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">• Business calculations</text>
              <text x="10" y="131" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">• Cross-module calls</text>
              <rect x="10" y="150" width="150" height="35" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
              <text x="14" y="167" fill="#facc15" fontSize="8" fontFamily="monospace">Raises HTTPException</text>
              <text x="14" y="179" fill="#a1a1aa" fontSize="7.5" fontFamily="monospace">if business conflict (409)</text>
            </g>

            {/* Arrow 3 */}
            <path d="M 520 130 L 545 130" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M 545 180 L 520 180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Stage 4: SQLAlchemy ORM */}
            <g transform="translate(545, 0)">
              <rect width="170" height="260" rx="6" fill="#121215" stroke="#0284c7" strokeWidth="1.2" />
              <rect width="170" height="28" rx="6" fill="#1e293b" />
              <text x="10" y="19" fill="#38bdf8" fontSize="10" fontWeight="700" fontFamily="monospace">4 · ORM &amp; SESSION</text>
              <text x="10" y="55" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">SQLAlchemy 2.0</text>
              <text x="10" y="75" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Session factory</text>
              <text x="10" y="93" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• SQL query generator</text>
              <text x="10" y="111" fill="#a1a1aa" fontSize="9" fontFamily="sans-serif">• Identity map cache</text>
              <rect x="10" y="130" width="150" height="50" rx="4" fill="#09090b" stroke="#334155" strokeWidth="1" />
              <text x="14" y="148" fill="#38bdf8" fontSize="8" fontFamily="monospace">db.add(ingredient)</text>
              <text x="14" y="164" fill="#10b981" fontSize="8" fontFamily="monospace">db.commit() / refresh</text>
              <text x="10" y="205" fill="#a1a1aa" fontSize="8.5" fontFamily="sans-serif">Deterministic commit</text>
            </g>

            {/* Arrow 4 */}
            <path d="M 715 130 L 740 130" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M 740 180 L 715 180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Stage 5: MySQL Database */}
            <g transform="translate(740, 0)">
              <rect width="140" height="260" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <rect width="140" height="28" rx="6" fill="#1e293b" />
              <text x="10" y="19" fill="#38bdf8" fontSize="10" fontWeight="700" fontFamily="monospace">5 · MYSQL DB</text>
              <text x="10" y="55" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">Persistence</text>
              <text x="10" y="75" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">InnoDB Engine</text>
              <rect x="10" y="95" width="120" height="60" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
              <text x="14" y="112" fill="#38bdf8" fontSize="8" fontFamily="monospace">INSERT INTO</text>
              <text x="14" y="126" fill="#e2e8f0" fontSize="8" fontFamily="monospace">ingredients...</text>
              <text x="14" y="144" fill="#10b981" fontSize="8" fontFamily="monospace">✓ Commit OK</text>
              <text x="10" y="180" fill="#a1a1aa" fontSize="8.5" fontFamily="sans-serif">Disk persistence</text>
              <text x="10" y="205" fill="#10b981" fontSize="9" fontFamily="monospace">HTTP 201 Created</text>
            </g>
          </g>

          {/* Legend and Lifecycle Summary */}
          <g transform="translate(40, 395)">
            <rect width="880" height="60" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
            <text x="20" y="24" fill="#fafafa" fontSize="11" fontWeight="600" fontFamily="sans-serif">
              Clean Separation of Responsibilities:
            </text>
            <text x="20" y="42" fill="#94a3b8" fontSize="9.5" fontFamily="sans-serif">
              Routers never write raw SQL. Services never inspect HTTP request headers. Database sessions are scoped via FastAPI dependency injection and cleanly closed after every response.
            </text>
            <text x="730" y="34" fill="#10b981" fontSize="9.5" fontFamily="monospace">
              ● Safe Session Teardown
            </text>
          </g>
        </svg>
      );

    default:
      return null;
  }
}
