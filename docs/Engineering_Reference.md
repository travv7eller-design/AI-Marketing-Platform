# AI Marketing Platform
# Engineering Reference
Version: 1.0

---

# Purpose

This document serves as the day-to-day engineering handbook for the AI Marketing Platform.

Unlike the Engineering Journal, which documents the history and reasoning behind the project, this document describes the current implementation of the system.

Its objectives are:

- Help developers quickly understand the repository.
- Document the responsibility of every important component.
- Simplify debugging.
- Reduce onboarding time.
- Serve as a quick reference during development.

Whenever a new component is introduced or an existing component changes responsibility, this document should be updated.

---

# Engineering Reference A — Repository Structure

```text
MarketingPlatform
│
├── docker/
│   ├── docker-compose.yml
│   └── Dockerfile
│
├── docs/
│   ├── assets/
│   │   ├── architecture/
│   │   ├── diagrams/
│   │   └── screenshots/
│   │
│   └── exports/
│       └── engineering_journal.md
│
├── n8n/
│
├── renderer/
│   ├── assets/
│   ├── input/
│   │   └── creative-brief.json
│   │
│   ├── output/
│   │
│   ├── scripts/
│   │   ├── writeCreativeBrief.js
│   │   ├── generateBackground.js
│   │   ├── render.js
│   │   └── script.js
│   │
│   ├── templates/
│   │   ├── poster.html
│   │   └── style.css
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── temp/
│   └── background.png
│
└── README.md
```

---

# Engineering Reference B — Component Responsibilities

---

## docker/

### Purpose

Provides the runtime environment for n8n.

### Responsibilities

- Container orchestration
- Infrastructure configuration
- Docker networking
- Workflow execution environment

---

## docker-compose.yml

### Purpose

Defines the Docker services required for the platform.

### Responsibilities

- Create and manage the n8n container
- Configure container networking
- Define environment variables required by n8n
- Mount persistent volumes

---

## Dockerfile

### Purpose

Defines the custom Docker image used by the project.

---

## docs/

### Purpose

Stores engineering documentation.

Contains:

- Engineering Journal
- Architecture diagrams
- Screenshots
- Supporting documentation

No runtime logic belongs here.

---

## n8n/

### Purpose

Workflow orchestration.

Responsibilities:

- Receive client input
- Coordinate AI services
- Call the Renderer Service
- Deliver the final output

The n8n workflow never performs rendering.

It only coordinates independent services.

---

## renderer/

### Purpose

Independent Rendering Service.

Responsibilities:

- Receive rendering requests
- Generate AI background
- Render final poster
- Return generated image

The renderer is completely independent from n8n.

---

# Engineering Reference C — File Responsibilities

---

## server.js

### Purpose

Entry point of the Renderer Service.

### Responsibilities

- Exposes POST /render
- Receives rendering requests
- Coordinates rendering pipeline
- Executes rendering scripts
- Returns generated poster

### Consumes

HTTP Request

### Produces

PNG Image Response

### Calls

- writeCreativeBrief.js
- generateBackground.js
- render.js

### Dependencies

- Express
- dotenv
- child_process

---

## writeCreativeBrief.js

### Purpose

Persist workflow payload as the Creative Brief.

### Responsibilities

- Receive JSON payload
- Save creative-brief.json
- Preserve communication contract

### Consumes

Workflow JSON

### Produces

creative-brief.json

---

## generateBackground.js

### Purpose

Generate AI architectural background.

### Responsibilities

- Read Creative Brief
- Extract flux_prompt
- Authenticate with Hugging Face
- Generate background
- Save background.png

### Consumes

creative-brief.json

### Produces

background.png

### Dependencies

- Hugging Face
- FLUX
- .env

---

## render.js

### Purpose

Generate final marketing poster.

### Responsibilities

- Launch Puppeteer
- Load HTML template
- Inject campaign data
- Load AI background
- Capture poster
- Export PNG

### Consumes

- creative-brief.json
- background.png
- poster.html
- style.css

### Produces

poster.png

### Dependencies

- Puppeteer

---

## script.js

### Purpose

Client-side JavaScript executed inside the HTML template.

### Responsibilities

- Populate template elements
- Dynamically inject campaign content
- Prepare the final layout before screenshot capture

---

## poster.html

### Purpose

Poster layout template.

Contains:

- Layout
- Typography placeholders
- Image placeholders
- Content positioning

Should never contain business logic.

---

## style.css

### Purpose

Visual styling of the poster.

Contains:

- Typography
- Colors
- Margins
- Spacing
- Layout styling

---

## creative-brief.json

### Purpose

Single Source of Truth.

Contains

- Campaign
- Marketing
- Creative
- Design
- flux_prompt

Generated automatically.

Never edit manually.

---

## .env

### Purpose

Renderer configuration.

Contains

- HF_API_KEY

Never commit this file to Git.

---

## package.json

### Purpose

Dependency management for the Renderer Service.

Contains

- Project metadata
- Dependencies
- Scripts

---

## package-lock.json

Automatically generated dependency lock file.

Should not be manually modified.

---

## background.png

Runtime-generated AI background.

Generated by:

generateBackground.js

Consumed by:

render.js

---

## README.md

Project overview and onboarding guide.

---

# Engineering Reference D — Runtime Assets

| Asset | Generated By | Consumed By |
|---------|--------------|-------------|
| creative-brief.json | writeCreativeBrief.js | generateBackground.js, render.js |
| background.png | generateBackground.js | render.js |
| poster.png | render.js | HTTP Response / Telegram |

---

# Engineering Reference E — Configuration Reference

| File | Purpose | Editable |
|------|----------|----------|
| .env | Renderer secrets | Yes |
| package.json | Dependencies | Yes |
| docker-compose.yml | Docker infrastructure | Yes |
| poster.html | Poster template | Yes |
| style.css | Typography & styling | Yes |
| creative-brief.json | Runtime asset | Generated |
| background.png | Runtime asset | Generated |
| poster.png | Final output | Generated |

---

# Engineering Reference F — Execution Flow

```text
Client Input
      │
      ▼
Gemini
      │
      ▼
Creative Brief
      │
      ▼
HTTP POST
      │
      ▼
server.js
      │
      ▼
writeCreativeBrief.js
      │
      ▼
creative-brief.json
      │
      ▼
generateBackground.js
      │
      ▼
background.png
      │
      ▼
render.js
      │
      ▼
poster.png
      │
      ▼
HTTP Response
      │
      ▼
Telegram
```

---

# Engineering Reference G — Dependency Graph

```text
server.js
│
├── writeCreativeBrief.js
│
├── generateBackground.js
│      │
│      └── Hugging Face
│
└── render.js
       │
       ├── poster.html
       ├── style.css
       └── Puppeteer
```

---

# Engineering Reference H — Debugging Guide

---

## Poster not generated

Check:

1. server.js
2. render.js
3. poster.html
4. Puppeteer

---

## Background generation failed

Check:

1. HF_API_KEY
2. .env
3. generateBackground.js
4. flux_prompt
5. Hugging Face API response

---

## HTTP request failed

Check:

1. Renderer running
2. Port 4000
3. POST /render
4. HTTP node configuration

---

## Empty poster

Check:

1. poster.html
2. style.css
3. creative-brief.json
4. Dynamic content injection

---

## Wrong campaign data

Check:

1. Gemini response
2. Creative Brief schema
3. writeCreativeBrief.js

---

# Engineering Reference I — Naming Convention

| Folder | Responsibility |
|----------|----------------|
| docker | Infrastructure |
| docs | Documentation |
| n8n | Workflow orchestration |
| renderer | Rendering service |
| scripts | Backend business logic |
| templates | Presentation layer |
| input | Runtime input assets |
| output | Generated deliverables |
| temp | Temporary runtime assets |

---

# Engineering Principles

The repository follows the following engineering principles:

- One component, one responsibility.
- Services communicate through HTTP contracts.
- Runtime assets are generated automatically.
- Templates contain presentation only.
- Business logic resides in scripts.
- Configuration belongs to the component that consumes it.
- The Creative Brief is the Single Source of Truth.
- Every generated asset has a clearly defined producer and consumer.

---

> This Engineering Reference should evolve alongside the project.
>
> Whenever a new component is introduced or an existing responsibility changes, this document must be updated accordingly.

# Renderer v2 Engineering Reference

## Architecture Decision

### Decision
Adopt a request-isolated workspace architecture for the rendering pipeline.

### Problem
The previous renderer relied on shared directories for intermediate assets.

Shared resources included:
- creative-brief.json
- background.png
- poster.png

This architecture introduced:
- Race conditions
- File collisions
- Unsafe concurrent execution
- Tight coupling between requests

### Solution
Each rendering request owns an independent workspace.

Workspace Layout

jobs/
└── <job-id>/
    ├── creative-brief.json
    ├── background.png
    └── poster.png

No files are shared between concurrent requests.

---

# Module Responsibilities

## server.js

Responsibility:
- Accept HTTP requests.
- Create request workspace.
- Coordinate rendering pipeline.
- Return rendered poster.

The server acts only as the pipeline orchestrator.

---

## workspace.js

Responsibility:
- Generate unique Job IDs.
- Create workspace directories.
- Return workspace metadata.

Contract

Input:
None

Output:
Workspace Object

---

## generateBackground.js

Responsibility:
- Read creative brief.
- Generate AI background.
- Save background into workspace.

Contract

Input:
Workspace

Output:
background.png

---

## render.js

Responsibility:
- Load HTML template.
- Inject creative content.
- Use workspace assets.
- Generate poster.

Contract

Input:
Workspace

Output:
poster.png

---

## cleanupScheduler.js

Responsibility:
- Scan workspace directory.
- Remove expired workspaces.
- Execute cleanup independently of requests.

Reason:
Cleanup should not depend on HTTP response completion because response lifecycle events are not reliable for filesystem maintenance.

---

# Rendering Pipeline

HTTP Request

↓

Create Workspace

↓

Save creative-brief.json

↓

Generate background.png

↓

Render poster.png

↓

Return HTTP Response

↓

Scheduled Cleanup

---

# Engineering Principles Applied

## Request Isolation

Each rendering request owns its complete set of resources.

Benefits:
- No file collisions
- Safe concurrent execution
- Easier debugging
- Better scalability

---

## Single Responsibility Principle

Each module performs one well-defined responsibility.

Examples:
- Workspace creation
- Background generation
- Poster rendering
- Cleanup scheduling

---

## Explicit Contracts

Each service defines:
- Required inputs
- Expected outputs

This reduces coupling between modules and allows implementation changes without affecting the overall pipeline.

---

## Data Flow

creative-brief.json

↓

background.png

↓

poster.png

Each stage consumes the output of the previous stage.

---

## Control Flow

server.js

↓

workspace.js

↓

generateBackground()

↓

renderPoster()

↓

HTTP Response

The server controls the execution order while individual modules perform isolated responsibilities.

---

# Scalability Outcome

Previous Architecture

Shared Resources
→ Single Rendering Context

Current Architecture

Independent Request Workspaces
→ Independent Rendering Pipelines

The renderer is now architecturally prepared for future enhancements including:
- Worker queues
- Background job processing
- Multiple rendering workers
- Horizontal scaling
# Core Architectural Concepts

## Responsibility
Each module owns a single, clearly defined responsibility.

## Contract
Every service exposes a well-defined input and output contract, allowing implementations to evolve without breaking dependent modules.

## Dependency
Modules depend only on the information required to perform their responsibility, reducing unnecessary coupling.

## Data Flow
Data moves through the rendering pipeline in the following order:

creative-brief.json
→ background.png
→ poster.png

## Control Flow
Execution is orchestrated by `server.js`, which invokes each service in sequence and coordinates the overall request lifecycle.

## Workspace Isolation
Every request operates within its own workspace, ensuring complete isolation of intermediate assets and enabling safe concurrent execution.

