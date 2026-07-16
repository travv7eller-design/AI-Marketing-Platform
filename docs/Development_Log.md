# AI Marketing Platform
## Version 1.5 Development Log

---

## Commit 1

Commit:
refactor(renderer): introduce typography design tokens

Purpose:
Refactored the renderer stylesheet into a reusable design system.

Changes:
- Introduced CSS design tokens
- Centralized typography configuration
- Centralized spacing
- Centralized colors
- Removed duplicated CSS declarations

Impact:
- No visual changes expected.
- Improved maintainability.
- Established foundation for Sprint 1 typography improvements.

Status:
✅ Completed

---

## Commit 3

**Commit**

feat(renderer): enhance typography and visual hierarchy

**Sprint**

Sprint 1 – Visual Excellence

**Purpose**

Improve the visual quality of generated marketing posters while preserving the existing renderer architecture.

**Changes**

- Refined typography hierarchy
- Improved spacing between visual elements
- Introduced subtle text shadows for readability
- Enhanced overlay contrast
- Adjusted typography sizing and weights
- Improved overall visual balance

**Validation**

- Generated multiple posters across different industries
- Renderer pipeline remained stable
- Visual quality improved without architectural changes

**Impact**

The poster presentation feels more premium and readable while maintaining a simple, maintainable rendering system.

**Next Step**

Shift focus from visual refinement to Version 1.5 product capabilities.

# Commit: Multi-Client Creative Pipeline

## Version

v1.5-development

---

## Purpose

Transform the rendering workflow from a single hardcoded client pipeline into a scalable multi-client architecture while establishing the Creative Brief as the Single Source of Truth between the workflow and the renderer.

---

## Major Changes

### Client Registry

- Introduced Google Sheets as the Client Registry.
- Added support for multiple client profiles.
- Externalized client configuration from the workflow.

---

### Eligibility Filtering

Implemented client eligibility validation using:

- Active
- AutoGenerate

Only eligible clients continue through campaign generation.

---

### Campaign Pipeline

Integrated Client Registry with the existing Calendar workflow.

Current execution flow:

Trigger
→ Client Registry
→ Eligibility Filter
→ Calendar
→ Campaign Selection
→ Gemini
→ Renderer

---

### Creative Brief

Redesigned the Creative Brief communication contract.

Added:

- client_id
- company
- industry
- campaign_type
- event_name
- brand_tone
- headline
- tagline
- creative_direction
- design_style
- flux_prompt

The Creative Brief now serves as the Single Source of Truth across the rendering pipeline.

---

### Renderer

Updated renderer to consume the new Creative Brief schema.

Removed remaining hardcoded company values.

Renderer now dynamically renders:

- Company
- Headline
- Tagline

---

### Workflow Simplification

Removed the Prompt Builder node.

Gemini now produces the final Flux prompt directly.

This reduced workflow complexity and eliminated an unnecessary transformation layer.

---

### Image Generation

Migrated from manual Hugging Face HTTP requests to the official Hugging Face JavaScript SDK.

Benefits:

- Official API support
- Automatic provider selection
- Reduced maintenance
- Cleaner implementation

---

## Validation

Successfully validated:

- Multi-client workflow architecture
- Google Sheets integration
- Client filtering
- Campaign routing
- Creative Brief generation
- Renderer integration
- Dynamic poster generation for a client

---

## Known Limitation

Multi-client execution is currently blocked by Hugging Face inference credit exhaustion (HTTP 402).

This is an external service limitation and does not impact the correctness of the implemented architecture.

---

## Impact

This commit marks the transition from a single-client renderer to a scalable multi-client marketing platform capable of serving multiple businesses through a unified workflow.