# FOUNDATION

> This document defines the immutable engineering principles that govern the design and implementation of the platform.
>
> Every architectural and implementation decision should align with these principles.
>
> These principles are intentionally stable and should only change when the architecture itself evolves.

---

# 1. Platform Philosophy

The platform is designed as a modular intelligence system rather than a collection of AI workflows.

Artificial Intelligence is used to understand, reason and generate.

Traditional software engineering is used wherever deterministic behaviour is sufficient.

The platform should remain maintainable, testable and extensible as it grows.

---

# 2. Architectural Principles

## 2.1 Modular Monolith

The platform follows a **Modular Monolith Architecture**.

Business capabilities are implemented as independent modules within a single codebase.

Examples include:

- Business Understanding
- Knowledge Engine
- Marketing Intelligence
- Creative Director
- Renderer

Each module owns a single business capability.

Modules communicate through clearly defined interfaces.

---

## 2.2 Separation of Responsibilities

Every component should have one responsibility.

Examples:

- AI extracts information.
- Core logic transforms information.
- Validation verifies information.
- Persistence stores information.
- Orchestrators coordinate execution.

Responsibilities should never overlap.

---

## 2.3 Intelligence Before Generation

Generation is the final step of the pipeline.

Every generation task should be based on structured knowledge rather than raw documents.

Understanding precedes reasoning.

Reasoning precedes generation.

---

# 3. AI Usage Policy

Artificial Intelligence is reserved for problems that require reasoning.

Examples include:

- Information extraction
- Business validation
- Campaign planning
- Creative direction
- Marketing reasoning

AI should not be used for deterministic operations.

---

# 4. Deterministic Operations

The following responsibilities should always be implemented using software instead of AI whenever possible.

- Data normalization
- Data transformation
- Schema validation
- File operations
- Persistence
- Formatting
- Duplicate removal
- Version management

Deterministic problems should remain deterministic.

---

# 5. Core Business Logic

Business logic must remain independent from every external system.

Core modules must never depend on:

- n8n
- Express
- HTTP
- Databases
- User Interfaces
- Storage Providers

Core modules should only receive data and return data.

Pure functions are preferred whenever practical.

---

# 6. Orchestration

Workflow engines coordinate execution.

They do not implement business logic.

Current orchestrator:

- n8n

The orchestrator may change in the future without requiring changes to core business logic.

---

# 7. API Layer

The API acts as the bridge between external systems and the platform.

Its responsibilities include:

- Receiving requests
- Calling core modules
- Returning responses
- Authentication
- Error handling
- Persistence coordination

The API should never contain business rules.

---

# 8. Module Structure

Every major module should follow a consistent structure.

```
module/

core/
adapters/
prompts/
schemas/
examples/
tests/
routes/
README.md
architecture.md
```

Consistency across modules is preferred over individual optimizations.

---

# 9. Prompt Management

Prompts are source code.

Every prompt must:

- be version controlled
- belong to its owning module
- be reusable
- be independently testable

Prompts should never exist only inside workflow tools.

---

# 10. Schema Management

Every important data structure should have a defined schema.

Examples include:

- Business Profile
- Campaign Blueprint
- Creative Blueprint

Schemas define contracts between modules.

Modules communicate using structured data rather than natural language.

---

# 11. Testing Philosophy

Every module should be independently testable.

Tests should not require:

- n8n
- APIs
- databases
- external services

Whenever possible, business logic should be validated using local fixtures and unit tests.

AI calls should be minimized during development.

---

# 12. Storage Policy

Storage is an implementation detail.

Core modules must not know:

- where data is stored
- how data is stored
- which database is used

Storage mechanisms may evolve without changing business logic.

---

# 13. Dependency Rules

Dependencies always point inward.

```
Frontend
        ↓
API
        ↓
Adapters
        ↓
Core
```

Core modules must never depend on outer layers.

Outer layers may depend on inner layers.

Circular dependencies are prohibited.

---

# 14. Versioning

Business objects should be versioned.

Examples:

- Business Profile
- Creative Blueprint
- Campaign Blueprint

Versioning enables backward compatibility as the platform evolves.

---

# 15. Engineering Principles

Prefer:

- readability over cleverness
- composition over duplication
- explicit behaviour over implicit behaviour
- deterministic software over AI
- reusable modules over workflow-specific implementations
- small focused functions over large multi-purpose functions

Every component should have a clearly defined responsibility.

---

# 16. Documentation

The platform maintains four levels of documentation.

```
VISION.md
```

Defines the long-term direction of the platform.

```
FOUNDATION.md
```

Defines immutable engineering principles.

```
architecture/
```

Defines the architecture of individual modules.

```
decisions/
```

Records important architectural decisions and the reasoning behind them.

---

# Final Principle

> The platform is built as a collection of reusable intelligence modules coordinated through orchestration, not as a collection of workflow automations.

Business logic is the product.

The orchestrator is only one way of executing it.