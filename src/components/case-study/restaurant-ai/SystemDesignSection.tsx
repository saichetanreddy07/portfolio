import React from "react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { Database, FolderTree, Network, Layers, GitFork } from "lucide-react";

export function SystemDesignSection() {
  return (
    <section id="system-design" aria-labelledby="system-design-heading" className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-12 space-y-16">
      {/* Main Section Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            05 · CORE ARCHITECTURE &amp; SYSTEM DESIGN
          </span>
        </div>
        <h2 id="system-design-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans mb-3">
          Production Architecture &amp; Data Models
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
          The system design prioritizes strict separation of concerns, high maintainability, and zero circular dependencies. Below are the five primary architectural diagrams modeling the runtime topology, layered responsibilities, relational database normalization, package layout, and inter-module interactions.
        </p>
      </div>

      {/* 5.1 Overall Architecture */}
      <div id="overall-architecture" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-sans">
            Overall System Architecture
          </h3>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          The overall architecture establishes clear boundaries between the incoming client request consumers, the FastAPI application runtime, discrete domain business modules, and the persistence tier. By isolating the modules, cross-cutting dependencies like database pooling and configuration remain completely decoupled from restaurant business rules.
        </p>

        <ArchitectureDiagram
          id="overall-system-architecture"
          title="Overall System Architecture Boundary"
          imageFileName="overall-system-architecture.png"
          caption="High-level architecture illustrating communication between application layers and restaurant business modules."
          explanation="Communication flows unidirectionally from external clients (REST / OpenAPI) through the FastAPI application layer into isolated business domain modules (Ingredients, Recipes, Menus, Inventory Batches), culminating in the SQLAlchemy 2.0 ORM data access layer backed by MySQL 8.0."
          badge="High-Level Topology"
        />
      </div>

      {/* 5.2 Backend Architecture */}
      <div id="backend-architecture" className="scroll-mt-24 space-y-4 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-12">
        <div className="flex items-center gap-2.5">
          <Network className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-sans">
            Backend Architecture
          </h3>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          The backend enforces a strict layered pattern consisting of four tiers: the API / Router Layer, the Domain Service Layer, the Data Access / ORM Layer, and the Database Engine. No business decisions or calculations occur in the router handlers, and no HTTP constructs leak into the service or data layers.
        </p>

        <ArchitectureDiagram
          id="backend-architecture"
          title="Layered Backend Architecture & Request Flow"
          imageFileName="backend-architecture.png"
          caption="Backend architecture following a layered modular design."
          explanation="Incoming requests pass through Pydantic DTO validation at Layer 1 (API Routers), invoke pure Python business logic at Layer 2 (Services), execute declarative models via scoped database sessions at Layer 3 (SQLAlchemy ORM), and commit transactions to Layer 4 (MySQL InnoDB)."
          badge="Layered Design"
        />
      </div>

      {/* 5.3 Database Design */}
      <div id="database-design" className="scroll-mt-24 space-y-4 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-12">
        <div className="flex items-center gap-2.5">
          <Database className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-sans">
            Database Design &amp; Entity Relationship Diagram
          </h3>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-3">
          <p>
            The relational schema is engineered to Third Normal Form (3NF) to guarantee transactional integrity, eliminate redundant data anomalies, and model complex commercial restaurant operations:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">Normalization &amp; Integrity:</strong> Master ingredients are normalized with standard unit measures, preventing naming mismatches and duplicate records across recipes.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">Many-to-Many Decoupling:</strong> The <code className="font-mono text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">recipe_ingredients</code> associative entity enables discrete quantity allocation per ingredient without denormalizing recipe entities.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">1-to-1 Recipe Constraint:</strong> Each Menu Item maintains a strict 1:1 foreign key binding with a Recipe, ensuring menu pricing and production requirements remain synchronized.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">Batch-Level Granularity:</strong> Inventory is tracked at the discrete batch level with supplier and expiration timestamps (<code className="font-mono text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">inventory_batches</code>), enabling precise FEFO consumption and eliminating flat stock counter inaccuracies.
            </li>
          </ul>
        </div>

        <ArchitectureDiagram
          id="database-erd"
          title="Normalized Relational Schema (3NF ERD)"
          imageFileName="database-erd.png"
          caption="Entity Relationship Diagram representing operational restaurant data."
          explanation="Entity Relationship Diagram detailing primary/foreign keys, cardinality (1:1 between Menu Items and Recipes, 1:N between Ingredients and Batches, and M:N between Recipes and Ingredients via recipe_ingredients), and indexed temporal expiration attributes."
          aspectRatio="aspect-[16/10]"
          badge="Schema ERD"
        />
      </div>

      {/* 5.4 Module Dependencies */}
      <div id="module-dependencies" className="scroll-mt-24 space-y-4 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-12">
        <div className="flex items-center gap-2.5">
          <GitFork className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-sans">
            Module Dependencies &amp; Directed Acyclic Graph (DAG)
          </h3>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Inter-module coupling is restricted to unidirectional references. The Ingredient domain operates as the foundational base. Recipes depend on Ingredients. Menus depend on Recipes. Inventory Batches depend on Ingredients. At no point does a lower-level module import or reference higher-level consumers, preventing circular imports and simplifying future microservice decoupling.
        </p>

        <ArchitectureDiagram
          id="backend-module-dependency"
          title="Module Dependency Graph (Directed Acyclic Graph)"
          imageFileName="backend-module-dependency.png"
          caption="Dependency graph illustrating interactions between backend modules."
          explanation="Directed acyclic graph illustrating clean hierarchical dependency flow from the FastAPI application root down to isolated domain routers, services, and shared core infrastructure without circular references."
          badge="Dependency DAG"
        />
      </div>

      {/* 5.5 Project Structure */}
      <div id="project-structure" className="scroll-mt-24 space-y-4 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-12">
        <div className="flex items-center gap-2.5">
          <FolderTree className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-sans">
            Project Folder Structure
          </h3>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          The repository structure emphasizes domain-driven packaging. Each feature directory (<code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">ingredients</code>, <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">menu</code>, <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">recipes</code>, <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">inventory</code>) encapsulates its own SQLAlchemy models, Pydantic schemas, and FastAPI routers. Core settings, database connection factories, and Alembic version scripts reside in dedicated directories.
        </p>

        <ArchitectureDiagram
          id="project-folder-structure"
          title="Backend Package Taxonomy & Code Organization"
          imageFileName="project-folder-structure.png"
          caption="Project organization emphasizing maintainability and separation of concerns."
          explanation="Codebase organization mapping domain modules, core configuration, database session handling, and Alembic version-controlled migration scripts for maximum maintainability and testability."
          badge="Package Structure"
        />
      </div>
    </section>
  );
}
