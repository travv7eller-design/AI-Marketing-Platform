Chapter 0
AI Marketing Platform
Engineering Design, Decision & Development Journal
Version Information
Field	Value
Product	AI Marketing Platform
Document	Engineering Design, Decision & Development Journal
Version	1.0
Status	Living Engineering Journal
Repository	AI Marketing Platform
Primary Authors	Krishna Sonesh & OpenAI ChatGPT
Created	July 2026
Last Updated	Continuously Updated
Intended Audience	Current and Future Engineers contributing to the AI Marketing Platform
Letter to Future Engineers
Why this section exists

Every engineering project eventually reaches a point where its source code survives longer than the reasoning that created it. As new engineers join the project, architectural decisions begin to appear arbitrary, implementation details lose their original context, and previously solved problems are unknowingly solved again.

This section exists to prevent that loss of knowledge.

It serves as a direct message from the engineers responsible for Version 1 to every future contributor who will maintain, extend, or redesign this platform.

The objective is not to preserve code.

The objective is to preserve engineering thinking.

Letter

If you are reading this document, you are likely contributing to the AI Marketing Platform after Version 1 has already been completed.

Before modifying any component of this system, we ask you to understand one fundamental principle.

Every architectural decision recorded within this journal was made after careful observation, experimentation, discussion, evaluation of alternatives, and verification.

Some decisions may initially appear overly cautious.

Some may appear unnecessarily complex.

Others may even appear incorrect until the surrounding engineering context becomes visible.

Most of those decisions were made only after discovering that the seemingly easier alternative introduced greater complexity elsewhere in the system.

This journal therefore documents not only successful implementations, but also unsuccessful attempts, rejected solutions, debugging strategies, engineering debates, and lessons learned throughout the evolution of Version 1.

Whenever you find yourself questioning why a particular component exists, why one architectural approach was chosen instead of another, or why an apparently simpler solution was rejected, we encourage you to consult this journal before changing the implementation.

If the journal has been written successfully, every significant engineering decision should be understandable, reproducible, and open to informed improvement rather than rediscovery.

We do not expect this document to prevent future changes.

We hope it enables better ones.

Welcome to the project.

Continue building it with the same curiosity, discipline, and respect for engineering that shaped Version 1.

— Engineering Team, Version 1

Preface
Why this document exists

Software repositories preserve source code remarkably well.

Engineering reasoning is far less fortunate.

As projects evolve, source files continue to describe what the software currently does, while the motivations, assumptions, trade-offs, failed experiments, debugging history, and architectural discussions that produced those source files gradually disappear.

Over time, this loss of context becomes increasingly expensive.

Future engineers spend valuable time rediscovering problems that have already been solved, revisiting architectural debates that have already taken place, or unintentionally replacing carefully designed systems with seemingly simpler implementations whose long-term consequences are not immediately visible.

Traditional technical documentation rarely solves this problem.

Most documentation explains the final state of a system.

Very little documentation explains how that final state emerged.

This journal was created specifically to preserve that missing layer of engineering knowledge.

Its purpose is to record the complete engineering evolution of the AI Marketing Platform—from the earliest architectural ideas to the implementation decisions, debugging investigations, rejected alternatives, technical debt, lessons learned, and long-term design philosophy that collectively shaped Version 1.

Accordingly, this document should not be viewed merely as technical documentation.

It is simultaneously:

An Engineering Journal
An Architecture Decision Record (ADR)
A Technical Reference
A Knowledge Base
A Historical Record
A Learning Resource
An Institutional Memory for the project

Throughout the lifetime of this platform, the source code will inevitably change.

This journal exists to preserve the engineering knowledge that should not.

Engineering Philosophy
Why this section exists

Before documenting technical decisions, it is essential to document the philosophy that guided those decisions.

Without understanding the underlying philosophy, individual architectural choices may appear disconnected or arbitrary.

This section establishes the engineering values that influenced every significant decision made throughout Version 1.

Engineering Philosophy

The primary objective of Version 1 was never simply to produce a functioning application.

The objective was to build a system whose architecture could continue evolving without requiring fundamental redesign as the product matured.

This distinction influenced nearly every technical discussion recorded throughout this journal.

Whenever multiple implementation paths existed, preference was consistently given to the solution that strengthened the overall architecture of the platform, even when that solution required additional engineering effort during development.

The engineering team deliberately accepted short-term complexity whenever it reduced long-term architectural complexity.

Similarly, quick workarounds were intentionally rejected whenever they introduced hidden coupling between independent components or made future maintenance more difficult.

Throughout Version 1, engineering decisions were evaluated using the following guiding question:

Does this decision improve the architecture of the system, or does it merely solve today's problem?

Whenever those two objectives conflicted, architectural quality was given priority.

The result is a system whose internal responsibilities remain clearly separated:

Workflow orchestration belongs to n8n.
Language generation belongs to Gemini.
Image generation belongs to Hugging Face.
Poster rendering belongs to the Rendering Engine.
Delivery belongs to Telegram.

Each component performs one primary responsibility while communicating through clearly defined interfaces.

This philosophy ultimately transformed what began as a collection of scripts into a modular engineering system capable of continued growth.

Engineering Principles
Why this section exists

Engineering philosophy establishes the direction of a project.

Engineering principles establish the practical rules used to make day-to-day technical decisions.

Every major architectural decision documented throughout this journal can be traced back to one or more of the following principles.

These principles should therefore be considered before introducing any significant modification to the platform.

Principle 1 — Architecture Before Convenience

Temporary solutions frequently solve immediate problems while silently introducing future constraints.

Whenever a conflict existed between implementation convenience and architectural quality, architectural quality was intentionally prioritized.

Version 1 should therefore be viewed as an investment in the future evolution of the platform rather than merely its initial implementation.

Principle 2 — Debug the System Before Debugging the Code

Engineering investigations throughout Version 1 consistently demonstrated that many failures originated not from incorrect algorithms but from incorrect assumptions regarding data flow, execution environments, process boundaries, or system responsibilities.

Accordingly, debugging efforts always began by validating the behaviour of the complete system before modifying implementation details.

Understanding the movement of data through the architecture proved significantly more valuable than immediately changing source code.

Principle 3 — Every Component Owns One Responsibility

Each component within the AI Marketing Platform was intentionally designed to perform one primary responsibility.

Responsibility boundaries reduce coupling, simplify debugging, and enable independent evolution of system components.

Examples include:

n8n orchestrates workflows.
Gemini generates structured campaign content.
Hugging Face generates marketing backgrounds.
The Rendering Engine produces visual posters.
Telegram distributes completed assets.

Whenever a component appeared to assume responsibilities outside its intended boundary, the architecture was reconsidered before implementation continued.

Principle 4 — Failed Experiments Are Engineering Assets

Engineering progress rarely follows a straight path.

Unsuccessful experiments frequently provide more valuable architectural insight than successful implementations.

Accordingly, failed attempts are documented throughout this journal with the same level of detail as successful solutions.

Understanding why an approach failed often prevents significantly more engineering effort than simply documenting what ultimately worked.

Principle 5 — Every Engineering Decision Must Be Explainable

Architectural decisions should never rely solely upon intuition or personal preference.

Every significant decision documented within this journal is accompanied by:

The original problem
Observations
Alternative approaches
Evaluation criteria
Final decision
Supporting reasoning
Verification
Lessons learned

Future engineers should therefore be able to understand both the decision itself and the reasoning that justified it.

Principle 6 — Institutional Knowledge Is Part of the Product

Source code alone is insufficient for maintaining complex systems.

The engineering knowledge required to understand, modify, and extend that source code is itself considered a product asset.

Maintaining this journal is therefore regarded as an engineering responsibility rather than a documentation task.

End of Chapter 0

Chapter 1
Project Vision & Initial System Design
Why this chapter exists

Every successful engineering project begins with a vision that extends beyond implementation.

Before technologies are selected, workflows designed, or software components implemented, engineers must first understand what problem they are attempting to solve and why that problem deserves a solution.

The AI Marketing Platform did not originate as a software project.

It originated as an attempt to rethink how marketing creatives are produced.

This chapter preserves the original vision behind the platform before implementation began. It documents the business motivation, engineering objectives, initial assumptions, intended architecture, and the constraints that defined the scope of Version 1.

Capturing this perspective is important because later chapters will demonstrate how implementation challenges reshaped many of these original assumptions.

Without understanding the starting point, it becomes difficult to appreciate the engineering evolution documented throughout the remainder of this journal.

Narrative Objective

To accurately preserve the original vision of the AI Marketing Platform before implementation began, documenting the expectations, assumptions, and engineering direction that existed prior to encountering real-world technical constraints.

Reader Outcome

After completing this chapter, the reader should understand:

Why the AI Marketing Platform was conceived.
The business problem it aims to solve.
The guiding vision behind the product.
The intended scope of Version 1.
The initial architectural direction.
The assumptions made before implementation.
The constraints accepted at project initiation.
The engineering objectives that defined success.
Engineering Status

Project Planning Phase

No implementation had yet begun.

All discussions within this chapter reflect the engineering team's understanding before any software components were developed.

Consequently, certain assumptions documented here will later prove inaccurate, incomplete, or insufficient. Those changes are intentionally preserved throughout subsequent chapters as part of the project's engineering evolution.

1.1 The Origin of the Project
Why this section exists

Every engineering solution should be traceable to the problem that justified its existence.

This section documents the circumstances that led to the creation of the AI Marketing Platform and establishes the fundamental motivation behind the project.

Understanding this origin provides context for every architectural decision described in later chapters.

The Problem

Modern digital marketing depends heavily upon the continuous production of visual creative assets.

Businesses require a constant stream of posters, promotional graphics, seasonal campaigns, social media creatives, advertisements, and branded content across multiple channels.

Producing these assets traditionally involves several specialized roles working sequentially.

A typical creative production pipeline often includes:

Business stakeholders defining campaign objectives.
Marketing strategists translating business goals into creative direction.
Copywriters producing marketing messages.
Designers creating visual compositions.
Review cycles involving multiple stakeholders.
Final export and distribution across marketing platforms.

While this process consistently produces high-quality results, it is inherently time-consuming, resource-intensive, and difficult to scale for organizations requiring frequent creative production.

For small businesses, startups, and rapidly growing brands, maintaining this workflow often becomes economically impractical.

The emergence of modern generative AI introduced the possibility of automating significant portions of this pipeline.

However, existing AI tools primarily focused on isolated tasks such as text generation or image generation.

Very few systems attempted to orchestrate the complete creative production workflow as an integrated engineering solution.

This observation became the foundation upon which the AI Marketing Platform was conceived.


1.2 Product Vision
Why this section exists

Every engineering project begins with a vision that defines what success should ultimately look like.

Without a clearly articulated vision, implementation decisions become reactive rather than intentional, causing the architecture to drift as new features are introduced.

This section documents the original vision that guided the AI Marketing Platform before implementation began.

It intentionally captures the desired future state of the product rather than the limitations of Version 1.

By preserving this vision early in the journal, future engineers can distinguish between long-term objectives and short-term implementation constraints.

Product Vision

The AI Marketing Platform was envisioned as an intelligent creative production system capable of transforming a business requirement into a complete marketing asset with minimal human intervention.

Rather than functioning as a single AI model or isolated automation workflow, the platform was conceived as an orchestrated collection of specialized components, each responsible for one stage of the creative process.

The long-term objective was not to replace designers or marketers.

Instead, the platform sought to automate repetitive production activities while preserving the strategic and creative intent provided by human decision makers.

In its ideal form, the platform would operate similarly to a multidisciplinary creative team.

Each component would contribute a specific expertise while collaborating with the others through clearly defined interfaces.

Conceptually, the envisioned workflow resembled the following sequence:

Business Requirement
        │
        ▼
Business Understanding
        │
        ▼
Marketing Strategy
        │
        ▼
Creative Direction
        │
        ▼
Prompt Engineering
        │
        ▼
Background Generation
        │
        ▼
Poster Composition
        │
        ▼
Quality Evaluation
        │
        ▼
Final Delivery

Although Version 1 would implement only a subset of this vision, the architecture was expected to evolve toward this long-term objective without requiring fundamental redesign.

For this reason, scalability and separation of responsibilities were considered important even during the earliest stages of implementation.

Engineering Reflection

One of the earliest engineering decisions was to separate product vision from Version 1 scope.

At the beginning of development, it would have been tempting to define the product only in terms of what could immediately be implemented.

Doing so, however, would have unnecessarily constrained future architectural evolution.

Instead, the engineering team deliberately documented the complete vision first and treated Version 1 as the initial milestone toward that destination.

This distinction later influenced numerous architectural decisions, particularly those concerning modularity and component separation.

1.3 Version 1 Objectives
Why this section exists

A product vision defines the destination.

Version objectives define the first achievable milestone.

Confusing these two concepts frequently results in software projects that either attempt too much within their initial release or become overly constrained by immediate implementation concerns.

This section defines the engineering objectives that established the scope of Version 1.

These objectives served as the practical benchmark against which implementation progress was measured.

Version 1 Engineering Objectives

The primary objective of Version 1 was to demonstrate that the complete creative production pipeline could operate successfully from end to end.

Success was not measured by the sophistication of individual AI models.

Instead, success was defined by the successful orchestration of multiple specialized components working together as a single engineering system.

Accordingly, Version 1 focused on validating the following capabilities:

Accept structured campaign requirements.
Generate marketing-oriented creative direction.
Produce a photorealistic AI-generated background.
Render a complete marketing poster automatically.
Deliver the generated asset through an external communication channel.
Maintain clear architectural separation between orchestration and rendering.

These objectives intentionally emphasized system integration rather than feature completeness.

Several advanced capabilities—including client management, campaign history, analytics, scheduling, quality scoring, and multi-template rendering—were consciously deferred to future versions.

This decision allowed Version 1 to remain focused on validating the architectural foundation of the platform.

Engineering Reflection

Version 1 was never intended to be the final product.

It was intended to answer a far more important engineering question:

Can independent AI components be orchestrated into a reliable creative production pipeline?

By treating Version 1 as an architectural validation rather than a feature-complete application, the engineering team reduced implementation complexity while maximizing the long-term value of the knowledge gained during development.


1.4 Design Principles

Not Engineering Principles.

Product Design Principles.

Things like

AI assists expertise rather than replacing it.
Modular systems scale better than monolithic workflows.
Every AI component should be replaceable.
Human oversight remains possible.
Data contracts are first-class citizens.
1.5 Success Criteria

Not features.

Actual engineering success.

Example

Version 1 is successful if

✅ Campaign generated.

✅ Background generated.

✅ Poster rendered.

✅ Telegram delivery works.

Notice...

Yesterday...

we literally celebrated when every one of those turned green.

That deserves documentation.

1.6 Initial Assumptions

This will be fascinating.

Things we believed before coding.

For example

"We initially assumed that n8n's Read/Write File node would be sufficient."

😂

We know how that story ends...

But at this point in the journal...

we don't reveal it.

1.7 Known Unknowns

Things like

"We did not yet know how Puppeteer would behave inside Docker."

"We did not yet know whether binary APIs would simplify integration."

"We did not yet know whether Hugging Face could reliably generate marketing-quality backgrounds."

Those unknowns become later milestones.

1.8 Definition of Success

One sentence.

Something like

Version 1 will be considered complete when a marketing requirement can be transformed into a professionally rendered poster and delivered automatically without manual intervention.



# Chapter 2 — Engineering Journey Begins

## Why this Chapter Exists

Chapter 1 documented the vision and objectives of the AI Marketing Platform before implementation began.

This chapter marks the transition from planning to execution.

Its purpose is to document how the engineering team transformed an architectural concept into an executable system, including the initial technology selections, early architectural decisions, assumptions made before implementation, and the reasoning behind those choices.

Unlike later chapters, this chapter contains relatively few debugging activities. Instead, it establishes the engineering foundation upon which all subsequent development was performed.

---

## Narrative Objective

Capture the transition from project planning to active engineering, documenting the initial implementation strategy, technology stack, and architectural decisions that defined the first version of the platform.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- How implementation officially began.
- Why the initial technology stack was selected.
- The responsibilities assigned to each major component.
- The original workflow envisioned for Version 1.
- The engineering philosophy applied during implementation.

---

## Engineering Status

**Phase:** Initial Development

At this stage, no significant implementation problems had yet been encountered.

The engineering effort focused primarily on establishing a modular architecture that could support future expansion without major redesign.

---

# 2.1 Initial Technology Stack

## Why this Section Exists

Technology choices influence the maintainability, scalability, and flexibility of every engineering project.

This section documents the technologies selected at the beginning of Version 1 together with the reasoning that justified each selection.

The objective is not to recommend specific technologies but to preserve the engineering context in which these decisions were made.

---

| Component | Selected Technology | Primary Responsibility |
|-----------|--------------------|------------------------|
| Workflow Orchestration | n8n | Coordinate the complete AI workflow |
| Language Model | Gemini | Generate structured marketing content |
| Image Generation | Hugging Face (FLUX) | Produce AI-generated marketing backgrounds |
| Rendering Engine | Node.js + Puppeteer | Generate professional marketing posters |
| Delivery | Telegram | Deliver completed posters |
| Runtime | Docker + Local Environment | Isolate orchestration while retaining local rendering capabilities |

---

## Engineering Decision

### ADR-001

**Decision**

Adopt a modular architecture composed of independent services.

**Reason**

Each component performs a specialized responsibility.

This allows future replacement or enhancement of individual components without redesigning the entire platform.

**Alternatives Considered**

- Single monolithic application
- Modular service-based architecture

**Selected Approach**

Modular service-based architecture.

---

## Engineering Lesson

### EL-001

The earlier system responsibilities are separated, the easier future development becomes.

---

# 2.2 Initial Workflow Design

## Why this Section Exists

Before implementation began, the engineering team established a high-level execution flow describing how information should move through the platform.

Although the implementation evolved over time, this workflow became the reference point for future architectural discussions.

---

### Initial Workflow

```text
Business Requirement
        │
        ▼
Campaign Generation
        │
        ▼
Creative Brief
        │
        ▼
Image Generation
        │
        ▼
Poster Rendering
        │
        ▼
Delivery
```

This workflow intentionally focused on responsibilities rather than implementation details.

Specific technologies could evolve without changing the overall process.

---

## Engineering Reflection

Separating workflow design from implementation proved valuable throughout Version 1.

Whenever engineering discussions became complicated, the team returned to this workflow to verify whether proposed solutions aligned with the original responsibilities of each stage.

---

# 2.3 Initial Engineering Assumptions

## Why this Section Exists

Every engineering project begins with assumptions.

Some prove correct.

Others become the source of future engineering problems.

Documenting assumptions before they are challenged provides valuable context for understanding later architectural evolution.

---

### Initial Assumptions

The engineering team began Version 1 with several assumptions:

- The workflow engine would be capable of orchestrating the complete pipeline.
- AI services could communicate using structured JSON contracts.
- Individual components could remain loosely coupled.
- Background generation could be integrated as a replaceable service.
- Poster rendering could be separated from business logic.
- The chosen architecture would scale as additional capabilities were introduced.

At this stage, these assumptions had not yet been validated through implementation.

Subsequent chapters document how each assumption was tested against real engineering constraints.

---

# Chapter Summary

This chapter documented the beginning of implementation.

Rather than focusing on individual coding tasks, it established the engineering foundation of Version 1 by documenting:

- the selected technology stack,
- the initial workflow,
- the architectural philosophy,
- the first Architecture Decision Record,
- and the assumptions that guided early implementation.

The following chapter begins the first major engineering milestone, where implementation meets real-world constraints for the first time.

---

## Key Takeaways

- Technology should be selected based on responsibility rather than popularity.
- A modular architecture simplifies future evolution.
- Workflow design should precede implementation.
- Initial assumptions should be documented before they are validated.
- Early architectural decisions influence every subsequent engineering activity.

---

> **End of Chapter 2**


# Chapter 3 — Building the First Workflow

## Why this Chapter Exists

After establishing the vision and architectural direction of the AI Marketing Platform, the next engineering milestone was to transform those ideas into an executable workflow.

This chapter documents how the engineering team designed and implemented the first working workflow, why n8n was selected as the orchestration platform, and how responsibility boundaries were established before complex integrations began.

This chapter marks the true beginning of implementation.

---

## Narrative Objective

Document the transition from architectural planning to executable workflow implementation, preserving the reasoning behind the first engineering decisions and the establishment of the orchestration layer.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- Why the project adopted a workflow-first approach.
- Why n8n was selected as the orchestration platform.
- The structure of the first executable workflow.
- The responsibilities assigned to the workflow engine.
- The first architectural decisions made during implementation.

---

## Engineering Status

**Phase:** Initial Implementation

Implementation officially began during this phase.

The primary objective was not feature development but establishing a reliable orchestration layer capable of coordinating future AI services while maintaining clear separation of responsibilities.

---

# 3.1 Workflow Before Code

## Why this Section Exists

Rather than immediately writing scripts or integrating APIs, the engineering team first designed the complete execution flow of the platform.

This ensured that implementation would follow system responsibilities instead of growing organically without architectural direction.

---

### Engineering Rationale

The AI Marketing Platform was never intended to automate a single task.

Its purpose was to automate an entire creative production pipeline.

For that reason, understanding how information should move through the system became more important than selecting individual technologies.

The workflow became the architectural blueprint from which every future implementation decision originated.

---

### Engineering Decision

#### ADR-002

**Decision**

Design the complete workflow before implementing individual components.

**Problem**

Developing isolated features without an overall workflow increases architectural coupling and makes future integration more difficult.

**Alternatives Considered**

- Build individual features independently.
- Design the complete workflow before implementation.

**Selected Approach**

Workflow-first engineering.

**Reason**

A complete workflow provides architectural direction, simplifies responsibility allocation, and reduces future redesign.

---

### Engineering Lesson

#### EL-002

Well-defined workflows reduce implementation uncertainty.

---

# 3.2 Selecting the Workflow Engine

## Why this Section Exists

Once the workflow had been defined, the next engineering decision involved selecting the platform responsible for orchestrating execution.

---

### Engineering Decision

#### ADR-003

**Decision**

Use n8n as the workflow orchestration platform.

**Problem**

The project required an orchestration layer capable of coordinating multiple AI services, passing structured data between components, and supporting future automation.

**Alternatives Considered**

- Build a custom orchestration service.
- Use n8n.

**Selected Approach**

n8n.

**Reason**

- Visual workflow development.
- Rapid prototyping.
- Strong integration ecosystem.
- Easy maintenance.
- Modular workflow design.

---

### Engineering Lesson

#### EL-003

Workflow engines should coordinate services rather than replace them.

---

# 3.3 Building the First Executable Workflow

After selecting n8n, the conceptual workflow was translated into an executable sequence of nodes.

The initial workflow followed the architecture defined during planning.

```text
Trigger
    │
    ▼
Campaign Generation
    │
    ▼
Creative Brief
    │
    ▼
Prompt Builder
    │
    ▼
Background Generation
    │
    ▼
Poster Rendering
    │
    ▼
Delivery
```

Although the implementation evolved significantly throughout Version 1, the overall execution flow remained largely unchanged.

Each node represented a single engineering responsibility.

---

# 3.4 Responsibility Separation

## Why this Section Exists

One of the earliest architectural principles adopted during implementation was assigning a single primary responsibility to each component.

This reduced coupling, simplified debugging, and made future architectural evolution significantly easier.

---

### Responsibilities of n8n

The workflow engine was responsible for:

- Coordinating workflow execution.
- Passing structured JSON between components.
- Managing execution order.
- Triggering external services.
- Handling workflow-level automation.

The workflow engine was intentionally **not** responsible for:

- Rendering posters.
- AI image generation.
- Complex business logic.
- Maintaining rendering state.
- Processing graphical assets.

These responsibilities were delegated to specialized services.

---

### Engineering Reflection

This decision became one of the strongest architectural foundations of Version 1.

Throughout development, whenever a new capability was introduced, the engineering team consistently asked:

> **"Does this responsibility belong inside the workflow, or inside a specialized service?"**

This simple design principle prevented unnecessary coupling and significantly improved maintainability.

---

# 3.5 Initial Risks

Before integrating external systems, several engineering risks were identified.

These were documented to guide future implementation and validate architectural assumptions.

### Identified Risks

- Maintaining structured JSON across workflow stages.
- Integrating multiple AI services reliably.
- Handling binary assets generated by AI models.
- Coordinating external rendering processes.
- Maintaining modularity as the platform expanded.

At this stage, these risks had not yet materialized into implementation problems.

The following chapters document how each of these challenges emerged and how they were resolved.

---

## Chapter Summary

This chapter documented the first implementation milestone of the AI Marketing Platform.

The engineering effort focused on establishing the orchestration layer, selecting n8n as the workflow engine, designing the first executable workflow, and defining clear responsibility boundaries between workflow orchestration and specialized services.

These early decisions became the architectural foundation upon which the remainder of Version 1 was built.

The next chapter begins the first major infrastructure challenge: containerizing the platform and establishing a reliable development environment.

---

## Key Takeaways

- Design workflows before implementing individual components.
- Orchestration should coordinate services, not replace them.
- Every component should own a single primary responsibility.
- Early architectural decisions significantly influence long-term maintainability.
- Workflow-first engineering provides a stable foundation for future development.

---

### Cross References

**Related ADRs**

- ADR-001 — Modular Architecture
- ADR-002 — Workflow-First Engineering
- ADR-003 — n8n as Workflow Orchestrator

**Related Lessons**

- EL-001 — Separation of Responsibilities
- EL-002 — Workflow Before Implementation
- EL-003 — Orchestrators Coordinate, Services Execute

**Related Chapters**

- Chapter 2 — Engineering Journey Begins
- Chapter 4 — Containerization & Development Environment

---

> **End of Chapter 3**

# Chapter 4 — Containerization & Development Environment

## Why this Chapter Exists

With the initial workflow established, the next engineering milestone was creating a development environment capable of executing the entire pipeline consistently.

The project involved multiple technologies, external AI services, local scripts, and workflow orchestration. Running these components directly on the host operating system would eventually introduce dependency conflicts, inconsistent environments, and deployment challenges.

To avoid these issues, the engineering team adopted containerization early in the project.

This chapter documents why Docker was introduced, the engineering reasoning behind that decision, the initial development environment, and the first infrastructure challenges encountered.

---

## Narrative Objective

Document the introduction of Docker into the project, the engineering decisions behind containerization, and the early infrastructure lessons that influenced the remainder of Version 1.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- Why Docker was introduced.
- The initial development environment.
- The responsibilities assigned to Docker.
- The benefits and limitations discovered during early implementation.
- The engineering decisions that established the infrastructure foundation.

---

## Engineering Status

**Phase:** Infrastructure Setup

The primary objective during this phase was to establish a reproducible development environment capable of reliably executing the workflow while supporting future architectural growth.

---

# 4.1 Why Docker?

## Why this Section Exists

As the project expanded beyond a simple workflow, it became clear that multiple services would need to interact consistently across different environments.

Docker was introduced to provide a predictable execution environment while simplifying dependency management and future deployment.

---

### Engineering Decision

#### ADR-004

**Decision**

Adopt Docker as the execution environment for the workflow orchestration layer.

**Problem**

Running the workflow directly on the host operating system increased the likelihood of dependency conflicts, inconsistent environments, and difficult deployment.

**Alternatives Considered**

- Execute everything directly on the local machine.
- Containerize the workflow environment using Docker.

**Selected Approach**

Docker.

**Reason**

- Consistent execution environment.
- Simplified dependency management.
- Easier future deployment.
- Improved reproducibility.
- Better separation between infrastructure and application logic.

---

### Engineering Lesson

#### EL-004

Infrastructure should be reproducible before it is scalable.

---

# 4.2 Initial Development Environment

The initial development environment consisted of the following components.

| Component | Environment |
|------------|-------------|
| Workflow Engine | Docker Container |
| Renderer | Local Machine |
| AI Services | External APIs |
| Development Platform | Windows |
| Runtime | Node.js |

This architecture intentionally separated orchestration from rendering while allowing rapid experimentation during development.

---

# 4.3 Infrastructure Responsibilities

## Why this Section Exists

Containerization should solve infrastructure problems without becoming responsible for application logic.

Clearly defining responsibilities prevented unnecessary architectural coupling.

---

### Docker Responsibilities

Docker was responsible for:

- Running the workflow engine.
- Managing runtime dependencies.
- Providing a consistent execution environment.
- Simplifying deployment.

Docker was **not** responsible for:

- Rendering posters.
- Managing browser automation.
- Business logic.
- AI processing.
- Image composition.

These responsibilities remained with specialized services.

---

### Engineering Reflection

One of the earliest infrastructure decisions was ensuring Docker remained an infrastructure tool rather than becoming an application platform.

Maintaining this separation significantly simplified later architectural decisions.

---

# 4.4 Initial Infrastructure Risks

Before implementation progressed further, several risks were identified.

### Identified Risks

- Communication between containerized and local services.
- File sharing across execution environments.
- Browser dependency management.
- Handling generated binary assets.
- Future deployment flexibility.

At this stage, these risks were anticipated but had not yet been encountered during implementation.

Subsequent chapters document how each of these risks evolved into real engineering challenges.

---

## Chapter Summary

This chapter documented the establishment of the development environment for Version 1.

Docker was adopted to provide a consistent infrastructure layer while preserving clear separation between orchestration and specialized services.

Although the infrastructure appeared straightforward at this stage, many of the anticipated risks documented here would later become significant engineering challenges, ultimately influencing major architectural decisions.

The following chapter begins the first AI integration milestone: generating structured creative briefs using a large language model.

---

## Key Takeaways

- Containerization improves consistency and reproducibility.
- Infrastructure should remain separate from application logic.
- Docker is an infrastructure component, not an application component.
- Early identification of infrastructure risks simplifies future debugging.
- Clear responsibility boundaries reduce architectural complexity.

---

### Cross References

**Related ADRs**

- ADR-004 — Docker as Infrastructure Platform

**Related Lessons**

- EL-004 — Infrastructure Before Scalability

**Related Chapters**

- Chapter 3 — Building the First Workflow
- Chapter 5 — Creative Brief Generation

---

> **End of Chapter 4**


# Chapter 5 — Designing the Creative Intelligence Layer

## Why this Chapter Exists

The AI Marketing Platform begins with an unstructured business requirement provided by a client.

Every downstream component—background generation, poster rendering, and delivery—depends on receiving structured, consistent, and meaningful information.

This chapter documents how the engineering team designed the Creative Intelligence Layer responsible for transforming natural language business requirements into a structured Creative Brief.

More importantly, it records the evolution of that Creative Brief, the prompt engineering decisions, and the architectural choices that ultimately made the remainder of the pipeline possible.

---

## Narrative Objective

Document the evolution of the Creative Brief generation process, including the engineering decisions, prompt design strategy, schema evolution, and lessons learned while transforming free-form client requirements into structured machine-readable data.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- Why a structured Creative Brief became the foundation of the platform.
- Why JSON was selected as the communication contract.
- How prompt engineering evolved during development.
- Why the Creative Brief schema changed over time.
- How the `flux_prompt` field emerged as an architectural improvement.

---

## Engineering Status

**Phase:** AI Intelligence Layer

The workflow and infrastructure had been established.

The next engineering objective was enabling the system to reason about marketing requirements and produce structured outputs that every downstream component could consume consistently.

---

# 5.1 Engineering Problem

## Problem Statement

Clients naturally describe their marketing requirements using free-form language.

Unfortunately, downstream systems cannot reliably consume unstructured text.

Image generation models, rendering engines, and workflow automation require predictable and structured information.

The engineering challenge therefore became:

> **How can an unstructured business requirement be transformed into a reusable machine-readable creative specification?**

---

## Investigation

Several approaches were considered.

### Option 1

Pass the client's original prompt directly to every downstream component.

**Rejected**

Reason:

- Inconsistent output.
- No standard communication contract.
- Every component would require its own interpretation logic.

---

### Option 2

Generate separate prompts independently for each downstream service.

**Rejected**

Reason:

- Duplicate reasoning.
- Difficult maintenance.
- High risk of inconsistent creative direction.

---

### Option 3 (Selected)

Generate one structured Creative Brief that becomes the single source of truth for every downstream component.

**Decision**

Selected.

---

## Engineering Decision

### ADR-005

**Decision**

Introduce a structured Creative Brief as the communication contract for the platform.

**Reason**

A single structured document enables every downstream component to consume identical information without repeating business reasoning.

This reduces duplication while improving consistency throughout the workflow.

---

## Engineering Lesson

### EL-005

Reason once.

Reuse everywhere.

---

# 5.2 Designing the Creative Brief

The Creative Brief was intentionally designed to separate business understanding from implementation.

Instead of generating a single AI prompt, the system generated structured marketing intelligence.

The initial Creative Brief contained multiple logical sections.

```text
Campaign
│
├── Type
├── Goal
└── Occasion

Marketing
│
├── Headline
├── Tagline
└── CTA

Creative
│
├── Concept
├── Hero Subject
├── Brand Mood
├── Visual Style
├── Composition
├── Color Palette
└── Negative Space

Design
│
└── Layout
```

This structure allowed different downstream services to consume only the information relevant to their responsibilities.

---

# 5.3 Prompt Engineering Evolution

## Problem

Early prompts generated inconsistent outputs.

Although the responses were creative, they were not sufficiently structured for automated processing.

This made downstream integration unreliable.

---

## Investigation

The engineering team progressively refined the prompt to encourage:

- predictable structure,
- complete responses,
- reusable marketing information,
- architectural consistency.

The objective gradually shifted from:

> "Generate good marketing content."

to

> "Generate structured engineering data."

This represented a significant change in prompt engineering philosophy.

---

## Engineering Lesson

### EL-006

Prompt engineering is not only about improving AI output quality.

It is equally important to design outputs that integrate reliably with software systems.

---

# 5.4 Schema Evolution

As development progressed, additional downstream requirements emerged.

One significant observation was that image generation required considerably more information than the rendering engine.

Initially, this information was reconstructed during workflow execution.

However, this introduced unnecessary complexity.

---

## Engineering Decision

### ADR-006

**Decision**

Store the complete image-generation prompt inside the Creative Brief.

The new field introduced was:

```json
flux_prompt
```

---

**Reason**

Instead of reconstructing image prompts multiple times, the platform would generate them once and preserve them as part of the Creative Brief.

This established the Creative Brief as the definitive communication contract for the workflow.

---

## Engineering Impact

After introducing the `flux_prompt` field:

- Prompt Builder became significantly simpler.
- Downstream image generation became deterministic.
- Engineering complexity decreased.
- Workflow maintainability improved.

---

# 5.5 Current Creative Brief Structure

By the end of this engineering milestone, the Creative Brief had evolved into the following structure:

```text
campaign
marketing
creative
design
flux_prompt
```

This structure became the official communication contract for Version 1.

Every downstream component relied upon this schema.

Future schema modifications would therefore require careful evaluation to preserve compatibility.

---

## Technical Debt

### TD-001

The Creative Brief schema was manually maintained.

Future versions should introduce schema validation to guarantee compatibility between workflow stages.

Priority: Medium

---

## Future Scope

Potential improvements identified during this milestone:

- Schema versioning.
- JSON Schema validation.
- Multi-language campaign generation.
- Industry-specific Creative Brief templates.
- Support for multiple image-generation providers.
- Quality scoring of generated Creative Briefs.

---

## Chapter Summary

This chapter documented the development of the Creative Intelligence Layer—the first AI-driven component of the AI Marketing Platform.

Rather than generating isolated prompts, the engineering team established the Creative Brief as the central communication contract of the platform.

This architectural decision significantly simplified downstream integrations while improving consistency, maintainability, and extensibility.

One of the most important outcomes of this milestone was the introduction of the `flux_prompt` field, which transformed image generation into a deterministic downstream process rather than a repeated reasoning task.

---

## Key Takeaways

- Structured communication is more valuable than isolated AI outputs.
- A Creative Brief should become the single source of truth.
- Prompt engineering is an architectural activity, not only an AI activity.
- JSON contracts simplify integration across independent services.
- Generate intelligence once and reuse it throughout the workflow.

---

### Cross References

**Related ADRs**

- ADR-005 — Structured Creative Brief
- ADR-006 — Introduce `flux_prompt`

**Related Lessons**

- EL-005 — Reason Once, Reuse Everywhere
- EL-006 — Prompt Engineering as System Design

**Technical Debt**

- TD-001 — Schema Validation

**Related Chapters**

- Chapter 3 — Building the First Workflow
- Chapter 6 — AI Background Generation

---

> **End of Chapter 5**

# Chapter 6 — AI Background Generation Pipeline

## Why this Chapter Exists

Once the Creative Brief became the central communication contract of the platform, the next engineering milestone was generating a high-quality marketing background automatically.

Although image generation appeared straightforward at first, integrating an external AI image model into an automated workflow introduced several engineering challenges that were not initially anticipated.

This chapter documents the complete engineering journey of integrating FLUX through Hugging Face, including authentication, request construction, binary image handling, multiple rejected approaches, and the architectural decisions that ultimately produced a reliable solution.

---

## Narrative Objective

Document the complete evolution of the AI background generation pipeline, preserving every significant engineering decision, failed experiment, debugging process, and architectural lesson.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- Why FLUX was selected.
- Why Hugging Face was selected.
- How the request pipeline evolved.
- The engineering problems encountered.
- The investigation process.
- The final implementation.
- Remaining technical debt and future improvements.

---

## Engineering Status

**Phase:** External AI Integration

The Creative Brief generation pipeline had been successfully established.

The next objective was converting the generated `flux_prompt` into a photorealistic marketing background suitable for poster generation.

Unlike previous milestones, this phase involved external AI services, binary assets, authentication, and significantly more complex integration challenges.

---

# 6.1 Engineering Problem

## Problem Statement

The platform required a reliable mechanism to transform the generated `flux_prompt` into a high-quality architectural marketing background.

The solution needed to satisfy several engineering constraints:

- Produce photorealistic output.
- Integrate through APIs.
- Support automation.
- Return images suitable for downstream rendering.
- Remain replaceable in future versions.

---

## Investigation

Several image generation providers were evaluated conceptually.

After evaluating available options, Hugging Face was selected as the integration platform and FLUX.1 Schnell was selected as the initial image generation model.

---

## Engineering Decision

### ADR-007

**Decision**

Adopt Hugging Face Inference API with FLUX.1 Schnell for background generation.

**Reason**

- High-quality image generation.
- Simple API integration.
- Replaceable architecture.
- Compatible with automated workflows.

---

## Engineering Lesson

### EL-007

External AI models should remain interchangeable components rather than becoming tightly coupled to application logic.

---

# 6.2 First Integration Attempt

## Objective

Generate an image directly from the `flux_prompt`.

The initial expectation was that image generation would be similar to invoking any REST API.

However, implementation quickly revealed several engineering challenges.

---

## Problem

### PROBLEM-001

Authentication Failure

---

### Symptoms

API requests consistently returned:

```
401 Unauthorized
```

---

## Investigation

The engineering team verified:

- API endpoint
- Model selection
- Authentication method
- Credential configuration

Multiple request variations were attempted before identifying the root cause.

---

## Root Cause

The authentication token had not been configured correctly within the workflow credentials.

After correcting the credential configuration, authentication succeeded.

---

## Lesson

### EL-008

Always validate authentication before debugging application logic.

---

# 6.3 Payload Construction

Once authentication succeeded, image generation still failed.

---

## Problem

### PROBLEM-002

Invalid Request Body

---

### Symptoms

```
400 Bad Request

Body needs to provide an inputs key.
```

---

## Investigation

Multiple payload structures were evaluated.

The engineering team eventually discovered that the request body required the following structure:

```json
{
    "inputs": "<flux_prompt>"
}
```

rather than an empty JSON payload.

---

## Root Cause

The workflow branch supplying the prompt did not yet contain the newly introduced `flux_prompt` field.

The workflow had been connected to an earlier node whose output schema had not yet evolved.

---

## Engineering Decision

### ADR-008

Use the final Creative Brief output containing the `flux_prompt` field as the source for image generation.

---

## Lesson

### EL-009

Schema evolution must always be reflected in downstream workflow connections.

---

# 6.4 Binary Response Handling

After correcting the request payload, image generation finally succeeded.

However, a new engineering challenge emerged.

The API returned:

- binary image data
- not JSON

This required changes to the workflow configuration.

---

## Problem

### PROBLEM-003

Binary Response Processing

---

### Investigation

The HTTP Request node was reconfigured to return binary file responses instead of JSON.

Additional response headers were inspected to verify:

- image format
- content length
- MIME type

Successful verification confirmed that image generation had been completed correctly.

---

## Engineering Lesson

### EL-010

Always inspect actual API responses before assuming processing failures.

---

# 6.5 File Handling Investigation

With successful image generation achieved, the next engineering objective became making the generated image available to the rendering engine.

Several approaches were investigated.

---

## Attempt 1

Write generated image to the Docker filesystem using the Read/Write File node.

---

### Result

Failed.

The workflow repeatedly encountered filesystem permission issues.

---

## Investigation

Multiple write locations were evaluated.

Examples included:

- workspace directories
- temporary directories
- writable filesystem paths

Although several paths appeared valid, they introduced unnecessary infrastructure complexity.

---

## Engineering Reflection

Rather than continuing to fight filesystem limitations, the engineering team reconsidered the architecture itself.

This became an important turning point in Version 1.

Instead of asking:

> "How can we make this filesystem work?"

the engineering discussion shifted to:

> "Should the workflow own generated files at all?"

This architectural question ultimately led to a significantly cleaner solution documented in the following chapters.

---

## Technical Debt

### TD-002

Current implementation depends on external image generation services.

Priority: Low

Reason

The architecture intentionally keeps image providers replaceable.

No immediate action required.

---

## Future Scope

Potential improvements identified during this milestone:

- Support multiple image providers.
- Automatic provider failover.
- Image quality scoring.
- Image caching.
- Retry strategies.
- Model selection based on campaign type.

---

## Chapter Summary

This chapter documented the complete integration of the AI background generation pipeline.

Although the engineering objective appeared straightforward, implementation revealed several practical challenges involving authentication, request construction, schema evolution, binary responses, and filesystem handling.

Perhaps the most important outcome of this milestone was not simply successful image generation.

It was recognizing that some implementation problems should be solved through architectural redesign rather than continued debugging.

That realization directly influenced the rendering architecture described in the following chapters.

---

## Key Takeaways

- External AI integrations require careful handling of authentication and payload construction.
- Binary responses should be treated differently from structured JSON.
- Schema evolution affects downstream integrations.
- Not every engineering problem should be solved through implementation.
- Sometimes the architecture itself should change.

---

### Cross References

**Problems**

- PROBLEM-001 — Authentication Failure
- PROBLEM-002 — Invalid Request Body
- PROBLEM-003 — Binary Response Processing

**Architecture Decisions**

- ADR-007 — Adopt FLUX
- ADR-008 — Use `flux_prompt` as the Image Generation Contract

**Lessons**

- EL-007
- EL-008
- EL-009
- EL-010

**Technical Debt**

- TD-002

**Related Chapters**

- Chapter 5 — Designing the Creative Intelligence Layer
- Chapter 7 — Building the Rendering Engine

---

> **End of Chapter 6**

# Chapter 7 — Building the Rendering Engine

## Why this Chapter Exists

The Creative Brief and AI-generated background together contained all the information required to produce a marketing creative.

However, neither component could transform that information into a professionally designed poster.

The project therefore required a dedicated rendering system capable of combining structured campaign data with AI-generated visual assets to produce production-ready marketing creatives.

This chapter documents the engineering journey of designing and implementing the Rendering Engine, the architectural decisions behind its design, and the challenges encountered while automating poster generation.

Unlike previous chapters, this milestone involved developing a completely custom software component rather than integrating an external service.

---

## Narrative Objective

Document the design and implementation of the Rendering Engine, including how structured campaign data was transformed into a professional marketing poster and why rendering responsibilities were intentionally isolated from the workflow engine.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- Why a dedicated Rendering Engine became necessary.
- Why HTML and Puppeteer were selected.
- How the rendering pipeline operates.
- The engineering decisions that shaped the renderer.
- The limitations identified during the first implementation.

---

## Engineering Status

**Phase:** Custom Software Development

Until this stage, the engineering effort primarily focused on orchestrating external AI services.

The Rendering Engine represented the first major software component developed specifically for the AI Marketing Platform.

This milestone established the platform's ability to generate complete marketing creatives rather than isolated AI outputs.

---

# 7.1 Engineering Problem

## Problem Statement

The platform could successfully generate:

- Structured marketing intelligence.
- AI-generated architectural backgrounds.

However, these outputs existed independently.

A mechanism was required to combine them into a visually appealing, production-ready marketing poster.

The engineering challenge became:

> **How can structured campaign information and AI-generated imagery be automatically composed into a professional marketing creative?**

---

## Investigation

Several implementation approaches were discussed.

### Option 1

Generate posters using image manipulation libraries.

**Rejected**

Reason

- Difficult layout control.
- Limited typography flexibility.
- Complex maintenance.

---

### Option 2

Generate HTML and convert it into an image.

**Selected**

Reason

- HTML provides complete layout flexibility.
- CSS enables responsive visual design.
- Easy iteration during development.
- Separation of presentation and business logic.

---

## Engineering Decision

### ADR-009

**Decision**

Use HTML templates rendered through Puppeteer.

---

**Reason**

HTML and CSS are mature technologies for visual composition.

Using a browser-based renderer allows posters to be designed using familiar web technologies while producing high-quality image outputs.

---

## Engineering Lesson

### EL-011

Rendering should use technologies designed for visual presentation rather than forcing graphical layouts through image-processing libraries.

---

# 7.2 Rendering Pipeline

The Rendering Engine was designed around a simple sequence of responsibilities.

```text
Creative Brief
        │
        ▼
Load HTML Template
        │
        ▼
Inject Campaign Data
        │
        ▼
Load AI Background
        │
        ▼
Apply Visual Styling
        │
        ▼
Render Poster
        │
        ▼
Export PNG
```

Each stage performed one clearly defined task.

This simplified debugging and made future enhancements easier to implement.

---

# 7.3 Template Design Philosophy

## Why this Section Exists

One of the earliest rendering decisions involved separating presentation from engineering logic.

Rather than constructing posters programmatically, the engineering team chose to build reusable HTML templates.

---

### Responsibilities

The HTML template became responsible for:

- Visual layout.
- Typography.
- Element positioning.
- Color styling.
- Responsive composition.

The Rendering Engine became responsible for:

- Loading campaign data.
- Injecting dynamic content.
- Loading backgrounds.
- Producing the final poster.

---

### Engineering Reflection

Separating layout from rendering logic significantly simplified future template customization.

Design improvements could be made without modifying rendering code.

Likewise, rendering improvements could be implemented without redesigning templates.

---

# 7.4 Dynamic Data Injection

Once the template had been created, campaign information needed to be inserted dynamically.

The Rendering Engine populated template elements using the generated Creative Brief.

Example:

```javascript
document.getElementById("company").innerText = data.company;

document.getElementById("headline").innerText = data.headline;

document.getElementById("tagline").innerText = data.tagline;
```

The AI-generated background was then applied dynamically.

```javascript
poster.style.backgroundImage = `url(${data.background})`;

poster.style.backgroundSize = "cover";

poster.style.backgroundPosition = "center";
```

This allowed the same template to generate unlimited marketing creatives without modification.

---

# 7.5 First Successful Poster

After integrating:

- Creative Brief
- AI Background
- HTML Template
- Puppeteer

the Rendering Engine successfully produced its first complete marketing poster.

This milestone represented the first time independent AI outputs were transformed into a unified marketing creative.

Although later architectural improvements would refine the rendering process, this milestone demonstrated that the overall engineering direction was technically viable.

---

## Engineering Milestone

### MILESTONE-001

**Achievement**

First successful automated poster generation.

This milestone validated:

- Creative Brief generation.
- Background generation.
- Dynamic template rendering.
- Automated PNG export.

The AI Marketing Platform had officially progressed beyond isolated AI services into a functioning creative production pipeline.

---

## Technical Debt

### TD-003

The Rendering Engine currently depends on a single HTML template.

Priority: Low

Reason

Version 1 focuses on validating the rendering pipeline rather than supporting multiple poster layouts.

---

## Future Scope

Potential improvements identified during this milestone:

- Multiple poster templates.
- Dynamic typography scaling.
- Component-based layouts.
- Brand-specific themes.
- Template marketplace.
- Responsive aspect ratios.

---

## Chapter Summary

This chapter documented the creation of the Rendering Engine—the first custom software component developed specifically for the AI Marketing Platform.

Rather than relying on external services, the engineering team designed a dedicated rendering pipeline capable of combining structured marketing intelligence with AI-generated backgrounds to produce professional marketing creatives.

The adoption of HTML templates and Puppeteer established a flexible rendering architecture that separated presentation from application logic while enabling rapid future customization.

The successful generation of the first poster marked a significant milestone in Version 1, demonstrating that the platform could transform AI-generated assets into complete marketing creatives.

---

## Key Takeaways

- Rendering is a specialized engineering responsibility.
- HTML provides an effective foundation for automated visual composition.
- Presentation should remain separate from rendering logic.
- Dynamic templates improve maintainability.
- The Rendering Engine became the first proprietary software component of the AI Marketing Platform.

---

### Cross References

**Architecture Decisions**

- ADR-009 — HTML + Puppeteer Rendering

**Lessons**

- EL-011 — Use Presentation Technologies for Presentation Problems

**Milestones**

- MILESTONE-001 — First Automated Poster

**Technical Debt**

- TD-003 — Single Template Architecture

**Related Chapters**

- Chapter 5 — Designing the Creative Intelligence Layer
- Chapter 6 — AI Background Generation Pipeline
- Chapter 8 — Renderer Architecture Evolution

---

> **End of Chapter 7**

# Chapter 8 — Evolving the Rendering Architecture

## Why this Chapter Exists

By this stage of Version 1, the AI Marketing Platform could successfully generate Creative Briefs, produce AI-generated backgrounds, and render professional marketing posters.

However, integrating these capabilities into a single automated pipeline exposed several infrastructure limitations that had not been anticipated during the initial architecture.

Rather than solving each problem independently, the engineering team gradually realized that the underlying architecture itself required reconsideration.

This chapter documents that architectural evolution.

It captures the engineering investigations, rejected approaches, major design discussions, and the decision that transformed the Rendering Engine from an internal script into an independent HTTP service.

This milestone fundamentally changed the architecture of the AI Marketing Platform.

---

## Narrative Objective

Document the engineering journey that led from a tightly coupled local rendering process to a loosely coupled service-oriented rendering architecture.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- Why the original rendering architecture became problematic.
- The investigations performed.
- The alternatives that were evaluated.
- Why several seemingly valid solutions were rejected.
- Why an independent Renderer Service became the final architecture.

---

## Engineering Status

**Phase:** Architectural Evolution

The platform had reached functional completeness.

The engineering focus shifted from implementing features to improving architecture.

This chapter represents the first major architectural redesign of Version 1.

---

# 8.1 Initial Architecture

The original rendering workflow was relatively straightforward.

```text
n8n Workflow
      │
      ▼
Generate Creative Brief
      │
      ▼
Generate Background
      │
      ▼
Write Files
      │
      ▼
Execute Renderer
      │
      ▼
Generate Poster
```

Initially this approach appeared sufficient.

However, as implementation progressed, infrastructure limitations began to emerge.

---

# 8.2 Engineering Investigation

## Investigation 1

### PROBLEM-004

Generated assets could not be shared reliably between workflow execution and the rendering process.

---

### Symptoms

- File path inconsistencies.
- Temporary directory confusion.
- Multiple filesystem locations.
- Increasing workflow complexity.

---

### Initial Assumption

The engineering team initially believed this was simply a filesystem problem.

Several attempts focused on finding a writable location.

---

### Investigation Result

The investigation revealed that filesystem management itself had become part of the application architecture.

This was an architectural smell.

---

## Engineering Lesson

### EL-012

When infrastructure begins to dictate application design, it is often time to reconsider the architecture.

---

# 8.3 Investigation 2

### PROBLEM-005

Renderer execution inside Docker introduced browser dependency issues.

---

### Symptoms

Puppeteer failed to launch.

Example:

```
Could not find Chrome

Install browser...

Check cache path...
```

---

### Initial Thoughts

Several implementation approaches were discussed.

#### Option 1

Install Chrome inside Docker.

Advantages

- Minimal architectural changes.

Disadvantages

- Larger Docker image.
- Increased maintenance.
- Additional browser dependencies.
- Reduced portability.

---

#### Option 2

Continue debugging Docker.

Advantages

- Preserve original architecture.

Disadvantages

- Increasing implementation complexity.
- Solving infrastructure rather than product problems.

---

#### Option 3

Redesign the rendering architecture.

Advantages

- Cleaner separation.
- Independent deployment.
- Better scalability.
- Simpler maintenance.

---

## Engineering Reflection

At this point, the engineering discussion changed fundamentally.

The question was no longer

> **"How do we make Puppeteer work inside Docker?"**

Instead it became

> **"Should Docker be responsible for rendering at all?"**

This question became the turning point of Version 1.

---

# 8.4 Architecture Decision

### ADR-010

## Decision

Separate the Rendering Engine into an independent HTTP service.

---

### Reason

Rendering is an independent responsibility.

It should not depend upon workflow infrastructure.

Moving the renderer outside Docker produced:

- clearer responsibilities,
- easier debugging,
- independent deployment,
- improved scalability,
- cleaner architecture.

---

### Alternatives Rejected

- Install Chrome inside Docker.
- Continue filesystem-based integration.
- Couple rendering directly to n8n.

---

### Selected Architecture

```
n8n
   │
HTTP
   │
   ▼
Renderer Service
   │
   ▼
Poster
```

---

## Engineering Quote

> **"No compromise after putting this much effort."**

### Context

During the architecture discussion, installing Chrome inside Docker appeared to be the quickest solution.

However, the engineering team intentionally rejected this shortcut.

Rather than adapting the architecture to satisfy implementation limitations, the architecture itself was improved.

This discussion ultimately produced the Renderer Service architecture.

---

# 8.5 Implementing the Renderer Service

The Rendering Engine was converted into an Express application exposing a dedicated endpoint.

```text
POST /render
```

The request pipeline became:

```text
Creative Brief
        │
        ▼
HTTP Request
        │
        ▼
Renderer Service
        │
        ▼
Generate Poster
        │
        ▼
Return PNG
```

The service became responsible for:

- Writing the Creative Brief.
- Generating the background.
- Rendering the poster.
- Returning the final image.

This dramatically simplified the workflow.

---

### Representative Implementation

```javascript
app.post("/render", (req, res) => {

    // Save Creative Brief

    // Generate Background

    // Render Poster

    // Return PNG

});
```

This endpoint became the primary integration point between n8n and the Rendering Engine.

---

# 8.6 Validation

After implementing the new architecture:

✅ Background generation succeeded.

✅ Renderer executed successfully.

✅ Poster generation completed.

✅ HTTP communication succeeded.

✅ Telegram received the generated poster.

This milestone validated the entire distributed architecture.

---

## Engineering Milestone

### MILESTONE-002

**Independent Renderer Service Successfully Integrated**

This milestone represents the transition from a workflow-driven prototype to a service-oriented architecture.

---

## Technical Debt

### TD-004

The Renderer Service currently requires manual startup before executing workflows.

**Priority:** Medium

**Reason**

Acceptable for Version 1.

Future versions should automatically manage service lifecycle.

---

## Future Scope

Potential improvements identified during this milestone:

- Automatic service discovery.
- Health-check endpoint.
- Process supervision (PM2 or equivalent).
- Authentication for renderer APIs.
- Cloud deployment.
- Horizontal scaling.
- Queue-based rendering.

---

## Chapter Summary

This chapter documented the most significant architectural evolution of Version 1.

Rather than continuing to solve isolated implementation issues, the engineering team recognized that the underlying architecture required redesign.

The Rendering Engine evolved from an internal execution script into an independent HTTP service with clearly defined responsibilities.

This architectural decision simplified integration, improved maintainability, and established a scalable foundation for future development.

More importantly, it reinforced one of the defining engineering principles of the AI Marketing Platform:

> **When repeated implementation problems originate from architecture, improve the architecture instead of accumulating workarounds.**

---

## Key Takeaways

- Architecture should evolve when implementation repeatedly exposes structural limitations.
- Independent services improve maintainability.
- Quick fixes should not replace sound architectural decisions.
- Infrastructure should support the product rather than constrain it.
- Responsibility boundaries become increasingly important as systems grow.

---

### Cross References

**Problems**

- PROBLEM-004 — Filesystem Integration
- PROBLEM-005 — Puppeteer inside Docker

**Architecture Decisions**

- ADR-010 — Independent Renderer Service

**Lessons**

- EL-012 — Architecture Over Workarounds

**Milestones**

- MILESTONE-002 — Renderer Service

**Technical Debt**

- TD-004 — Manual Renderer Startup

**Related Chapters**

- Chapter 4 — Containerization & Development Environment
- Chapter 7 — Building the Rendering Engine
- Chapter 9 — End-to-End Integration

---

> **End of Chapter 8**

# Chapter 9 — End-to-End Integration & Workflow Validation

## Why this Chapter Exists

By this stage, every major subsystem of the AI Marketing Platform had been implemented independently.

The workflow engine, Creative Intelligence Layer, AI Background Generator, and Rendering Engine were all functioning in isolation.

The remaining engineering challenge was integrating these components into a single automated pipeline capable of transforming a client requirement into a completed marketing poster with minimal manual intervention.

This chapter documents the final integration effort, the communication between services, the validation of the architecture, and the successful execution of the first complete workflow.

---

## Narrative Objective

Document how the independently developed services were integrated into a unified production pipeline and validate the architecture established throughout Version 1.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- How n8n communicates with the Rendering Service.
- Why HTTP became the communication mechanism.
- How binary assets travel through the workflow.
- How Telegram became the delivery layer.
- How the first complete workflow execution validated the architecture.

---

## Engineering Status

**Phase:** System Integration

Individual components had been completed.

The engineering objective shifted from building software to connecting software.

This phase validated whether every architectural decision made during Version 1 actually worked together.

---

# 9.1 Engineering Problem

## Problem Statement

Independent components are valuable only if they communicate reliably.

The engineering challenge therefore became:

> **How can the workflow orchestrator invoke the Rendering Engine automatically and receive the completed marketing poster without manual intervention?**

---

## Investigation

Several integration mechanisms were considered.

### Option 1

Execute rendering scripts directly from n8n.

**Rejected**

Reason

- Tight coupling.
- Difficult maintenance.
- Poor scalability.

---

### Option 2

Shared filesystem communication.

**Rejected**

Reason

- File synchronization.
- Environment dependency.
- Complex deployment.

---

### Option 3

HTTP-based communication.

**Selected**

Reason

- Loose coupling.
- Platform independent.
- Easily scalable.
- Industry-standard integration.

---

## Engineering Decision

### ADR-011

**Decision**

Integrate the Rendering Engine through an HTTP API.

---

**Reason**

HTTP provides a clean contract between workflow orchestration and rendering.

Neither component needs knowledge of the other's internal implementation.

Only the API contract matters.

---

## Engineering Lesson

### EL-013

Services should communicate through contracts rather than implementation details.

---

# 9.2 Building the Communication Contract

The Rendering Engine exposed a single endpoint.

```http
POST /render
```

The request contained the generated Creative Brief.

```text
n8n
   │
HTTP POST
   │
   ▼
Renderer Service
```

The Renderer became responsible for:

- Saving the Creative Brief.
- Generating the background.
- Rendering the poster.
- Returning the completed image.

The workflow simply initiated the request.

---

### Representative Implementation

```javascript
app.post("/render", (req, res) => {

    // Save Creative Brief

    // Generate Background

    // Render Poster

    // Return generated poster

});
```

This design preserved clear separation of responsibilities.

---

# 9.3 Container-to-Host Communication

## Problem

The Rendering Engine executed on the host machine while n8n executed inside Docker.

Direct communication using localhost was not possible.

---

### Investigation

Several networking approaches were evaluated.

The final solution utilized

```text
host.docker.internal
```

allowing the Docker container to communicate with services running on the host operating system.

---

### Engineering Lesson

### EL-014

Container networking should be treated as an infrastructure concern rather than an application concern.

---

# 9.4 Workflow Validation

Once communication had been established, the complete workflow executed as follows.

```text
Client Requirement
        │
        ▼
Gemini
        │
        ▼
Creative Brief
        │
        ▼
Renderer API
        │
        ▼
Background Generation
        │
        ▼
Poster Rendering
        │
        ▼
PNG Response
        │
        ▼
Telegram
```

For the first time, the entire platform executed automatically.

No manual file copying.

No manual rendering.

No manual intervention.

---

# 9.5 Validation Results

The successful execution verified:

✅ Creative Brief Generation

✅ FLUX Background Generation

✅ Background Storage

✅ Renderer Service

✅ HTML Template Rendering

✅ Puppeteer Automation

✅ PNG Generation

✅ HTTP Communication

✅ Telegram Delivery

Every major subsystem functioned together successfully.

---

## Engineering Milestone

### MILESTONE-003

**First End-to-End Automated Marketing Campaign**

This milestone validated the complete Version 1 architecture.

The platform successfully transformed a business requirement into a completed marketing creative without manual engineering intervention.

This represented the successful completion of the original engineering vision documented in Chapter 1.

---

# 9.6 Operational Considerations

Although the architecture proved successful, one operational limitation remained.

The Rendering Service currently requires manual startup before executing workflows.

This decision was intentionally accepted.

Running the service continuously on a personal development machine was considered acceptable during Version 1 while avoiding unnecessary infrastructure complexity.

Future versions may introduce automated process management depending on deployment requirements.

---

## Technical Debt

### TD-005

Renderer Service lifecycle is manually managed.

**Priority:** Medium

**Reason**

Suitable for current development workflow.

Requires automation before multi-user or production deployment.

---

## Future Scope

Potential improvements identified during this milestone:

- Automatic Renderer startup.
- Health monitoring endpoint.
- Retry mechanisms.
- Authentication between services.
- Queue-based rendering.
- Cloud-native deployment.
- Multiple Renderer instances.
- Centralized logging.

---

## Chapter Summary

This chapter documented the successful integration of every major subsystem within the AI Marketing Platform.

Rather than validating individual components, this milestone validated the complete engineering architecture developed throughout Version 1.

The adoption of HTTP communication enabled loose coupling between the workflow engine and the Rendering Service while preserving architectural modularity.

Most importantly, the successful delivery of the generated marketing poster demonstrated that the original vision of a fully automated AI-powered creative generation platform had been successfully realized.

---

## Key Takeaways

- Independent services should communicate through well-defined APIs.
- Integration validates architecture more effectively than isolated component testing.
- HTTP provides a clean and scalable communication contract.
- Infrastructure concerns should remain separate from application logic.
- End-to-end automation is achieved through the composition of specialized services.

---

### Cross References

**Problems**

- PROBLEM-004 — Filesystem Integration
- PROBLEM-005 — Renderer Inside Docker

**Architecture Decisions**

- ADR-010 — Independent Renderer Service
- ADR-011 — HTTP-Based Integration

**Lessons**

- EL-013 — Communicate Through Contracts
- EL-014 — Infrastructure Is Not Application Logic

**Milestones**

- MILESTONE-003 — First End-to-End Automated Campaign

**Technical Debt**

- TD-005 — Manual Renderer Startup

**Related Chapters**

- Chapter 7 — Building the Rendering Engine
- Chapter 8 — Evolving the Rendering Architecture
- Chapter 10 — Version 1 Retrospective

---

> **End of Chapter 9**

# Chapter 10 — Version 1 Engineering Retrospective

## Why this Chapter Exists

Every engineering project reaches a point where implementation pauses and reflection begins.

This chapter concludes Version 1 of the AI Marketing Platform by documenting the engineering journey, validating the architectural decisions made throughout development, identifying remaining technical debt, and defining the direction for future evolution.

Rather than introducing new implementation details, this chapter consolidates the engineering knowledge accumulated throughout Version 1.

It serves as the transition point between Version 1 and every future version of the platform.

---

## Narrative Objective

Capture the complete engineering evolution of Version 1, validate the architectural decisions made throughout development, preserve the most valuable lessons learned, and establish a clear foundation for future development.

---

## Reader Outcome

After completing this chapter, the reader should understand:

- How the architecture evolved throughout Version 1.
- Which engineering decisions proved successful.
- The current limitations of the platform.
- The remaining technical debt.
- The roadmap for Version 2.
- The engineering principles that emerged naturally during development.

---

## Engineering Status

**Phase:** Version 1 Complete

The platform successfully transforms a client requirement into a completed marketing poster through an automated workflow consisting of multiple independent services.

Version 1 objectives have been achieved.

The engineering focus now shifts from building core capabilities to improving scalability, maintainability, reliability, and product maturity.

---

# 10.1 Version 1 Timeline

The engineering journey followed the progression below.

```text
Project Vision
        │
        ▼
Workflow Design
        │
        ▼
Workflow Implementation
        │
        ▼
Creative Intelligence Layer
        │
        ▼
AI Background Generation
        │
        ▼
Rendering Engine
        │
        ▼
Rendering Architecture Evolution
        │
        ▼
System Integration
        │
        ▼
Version 1 Complete
```

Each milestone solved a specific engineering problem while preparing the foundation for the next.

---

# 10.2 Architecture Validation

Throughout Version 1, several important architectural decisions were made.

This section validates whether those decisions achieved their intended objectives.

| Decision | Intended Outcome | Validation |
|----------|------------------|------------|
| ADR-001 — Modular Architecture | Independent components | ✅ Successfully achieved |
| ADR-002 — Workflow First | Clear engineering direction | ✅ Validated throughout development |
| ADR-003 — n8n Orchestration | Central workflow management | ✅ Stable orchestration layer |
| ADR-005 — Structured Creative Brief | Single Source of Truth | ✅ Used by every downstream component |
| ADR-006 — `flux_prompt` | Simplify image generation | ✅ Eliminated prompt reconstruction |
| ADR-007 — FLUX Integration | Automated background generation | ✅ Successfully integrated |
| ADR-009 — HTML + Puppeteer | Professional rendering | ✅ Production-ready poster generation |
| ADR-010 — Independent Renderer Service | Better architecture | ✅ Cleaner separation of responsibilities |
| ADR-011 — HTTP Communication | Loose coupling | ✅ Successful end-to-end integration |

---

## Engineering Reflection

One of the strongest outcomes of Version 1 is that none of the major architectural decisions contradicted one another.

Instead, every decision reinforced the previous one.

The final architecture therefore emerged naturally rather than through repeated redesign.

---

# 10.3 Engineering Lessons

Version 1 produced several engineering principles that will guide future development.

## EL-001

Separate responsibilities early.

---

## EL-002

Design workflows before implementation.

---

## EL-003

Workflow engines should coordinate services, not replace them.

---

## EL-004

Reproducible infrastructure is more valuable than convenient infrastructure.

---

## EL-005

Reason once.

Reuse everywhere.

---

## EL-006

Prompt engineering is system design.

---

## EL-007

External AI services should remain replaceable.

---

## EL-008

Always validate authentication before debugging business logic.

---

## EL-009

Schema evolution requires downstream alignment.

---

## EL-010

Inspect actual API responses before assuming implementation failure.

---

## EL-011

Use presentation technologies for presentation problems.

---

## EL-012

When infrastructure begins shaping application design, reconsider the architecture.

---

## EL-013

Services should communicate through contracts.

---

## EL-014

Infrastructure concerns should remain separate from application logic.

---

# 10.4 Technical Debt Register

Version 1 intentionally accepted several engineering compromises.

These decisions were considered appropriate given the project scope.

| ID | Technical Debt | Priority | Planned Version |
|----|----------------|----------|-----------------|
| TD-001 | Creative Brief Schema Validation | Medium | Version 2 |
| TD-002 | Provider Retry & Failover | Low | Version 2 |
| TD-003 | Single Poster Template | Low | Version 2 |
| TD-004 | Manual Renderer Startup | Medium | Version 2 |
| TD-005 | Renderer Lifecycle Management | Medium | Version 2 |

The existence of technical debt does not indicate poor engineering.

It reflects conscious trade-offs made to prioritize Version 1 objectives.

---

# 10.5 Future Roadmap

The following areas have been identified for future development.

## Platform

- User authentication.
- Campaign history.
- Client management.
- Project management.
- Asset library.

---

## AI

- Multiple image generation providers.
- Prompt quality evaluation.
- Automatic campaign optimization.
- Industry-specific campaign intelligence.

---

## Rendering

- Multiple templates.
- Dynamic layouts.
- Brand themes.
- Responsive aspect ratios.

---

## Infrastructure

- Automatic Renderer startup.
- Process supervision.
- Health monitoring.
- Queue-based rendering.
- Cloud deployment.
- Horizontal scaling.

---

# 10.6 Version 1 Achievements

Version 1 successfully delivered:

✅ Structured Creative Intelligence

✅ Automated Creative Brief Generation

✅ AI Background Generation

✅ Automated Poster Rendering

✅ Independent Rendering Service

✅ HTTP-Based Architecture

✅ Telegram Delivery

✅ End-to-End Workflow Automation

More importantly, Version 1 established a modular architecture capable of supporting future growth without major redesign.

---

# 10.7 Final Engineering Reflection

Looking back, Version 1 was never simply about generating marketing posters.

It was about learning how to design an AI-native software system.

Many implementation challenges initially appeared to be isolated technical problems.

In reality, they were opportunities to improve the architecture.

One of the defining characteristics of Version 1 was the team's willingness to question architectural assumptions rather than accumulating implementation workarounds.

This mindset transformed several potential limitations into long-term architectural improvements.

The resulting platform is therefore not merely functional.

It is intentionally designed to evolve.

---

# 10.8 Closing Statement

Version 1 concludes with a platform capable of transforming an unstructured client requirement into a professionally rendered marketing creative through a fully automated workflow.

More importantly, it concludes with a documented engineering history explaining not only **what** was built, but **why** it was built that way.

That history now becomes the foundation upon which every future version of the AI Marketing Platform will be developed.

---

## Final Key Takeaways

- Architecture evolves through investigation.
- Engineering decisions should be documented alongside implementation.
- Independent services simplify future evolution.
- Technical debt is acceptable when consciously managed.
- Engineering reasoning is as valuable as source code.
- Version 1 establishes the foundation for every future version of the platform.

---

### Cross References

**Related Chapters**

- Chapters 1–9

**Architecture Decisions**

- ADR-001 → ADR-011

**Engineering Lessons**

- EL-001 → EL-014

**Technical Debt**

- TD-001 → TD-005

**Milestones**

- MILESTONE-001 — First Automated Poster
- MILESTONE-002 — Independent Renderer Service
- MILESTONE-003 — First End-to-End Automated Campaign

---

> **End of Chapter 10**

> **End of Version 1**

> *"The purpose of Version 1 was not to build the final product.*
>
> *It was to build the right foundation."*

# Sprint 1 – Multi-Client Architecture Milestone

**Date:** 2026-07-16

## Objective

Transform the renderer pipeline from a single hardcoded client workflow into a scalable multi-client marketing platform while preserving the renderer as a generic rendering engine.

---

## Work Completed

### Multi-Client Client Registry

- Introduced Google Sheets as the Client Registry.
- Replaced hardcoded client information with external client configuration.
- Added support for multiple client profiles.
- Standardized client metadata.

Implemented fields:

- ClientID
- CompanyName
- Industry
- BrandTone
- CampaignMode
- TelegramChatID
- Active
- AutoGenerate

---

### Eligibility Filtering

Implemented client eligibility filtering before campaign generation.

Rules:

- Active = true
- AutoGenerate = true

Only eligible clients continue through the workflow.

This prevents unnecessary LLM and image generation calls.

---

### Campaign Architecture

Integrated the Client Registry with the existing Calendar workflow.

Current execution order:

Trigger
→ Client Registry
→ Eligibility Filter
→ Calendar
→ Campaign Selection
→ Gemini
→ Renderer

Campaign routing remains independent of client selection.

---

### Creative Brief Redesign

Redesigned the Creative Brief as the communication contract between the workflow and the renderer.

New schema includes:

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

The Creative Brief now acts as the Single Source of Truth for rendering.

---

### Renderer Updates

Updated renderer to consume the new Creative Brief schema.

Removed remaining hardcoded company values.

Renderer now reads:

- company
- headline
- tagline

directly from the Creative Brief.

---

### Prompt Builder Removal

Removed the Prompt Builder from the workflow.

Reason:

Gemini now generates the final Flux prompt directly.

The renderer consumes the Creative Brief without intermediate transformations.

Workflow became simpler while reducing maintenance complexity.

---

### Hugging Face Integration

Replaced manual HTTP requests with the official Hugging Face JavaScript SDK.

Benefits:

- Automatic provider selection
- Official API support
- Reduced maintenance
- Cleaner implementation
- Better compatibility with future provider updates

---

## Validation

Successfully validated:

- Google Sheets Client Registry
- Client eligibility filtering
- Calendar integration
- Gemini prompt generation
- Creative Brief generation
- Renderer integration
- Dynamic poster generation for a client
- Official Hugging Face SDK integration

---

## Known Limitation

Multi-client execution could not be fully validated because the Hugging Face account exhausted its included inference credits.

Observed response:

HTTP 402 — Payment Required

This is an external service limitation.

The workflow architecture remains valid.

No engineering changes are currently required.

---

## Lessons Learned

1. External services should always be isolated behind dedicated modules.

2. The official SDK is preferred over manually constructed HTTP requests whenever available.

3. The Creative Brief successfully evolved into the Single Source of Truth for the rendering pipeline.

4. Removing unnecessary transformation layers (Prompt Builder) simplified the overall architecture without reducing functionality.

---

## Next Sprint

Resume multi-client validation after configuring an alternative inference provider (Replicate or Fal AI) or replenishing Hugging Face inference credits.
