# Business Understanding

## Purpose

Transform raw business assets into a structured, human-approved Business Profile that becomes the foundation for all downstream Creative Intelligence modules.

---

## Responsibility

Business Understanding answers one question:

> Who is this business?

It does not perform campaign planning, creative strategy, prompt generation, or marketing reasoning.

---

## Core Principles

- Knowledge before generation.
- Learn from assets, don't imitate them.
- Human approval before persistence.
- Business Profiles are living documents.
- Single Responsibility Principle.

---

## Inputs

- Company Website
- Product Catalogue
- Brochures
- Previous Creatives
- Brand Guidelines
- Social Media
- Product Images
- Videos
- Owner Corrections

---

## Processing Pipeline

Client Assets
        ↓
Asset Library
        ↓
Information Extraction
        ↓
Knowledge Normalization
        ↓
Validation
        ↓
Human Review
        ↓
Business Profile
        ↓
Database

---

## Processing Stages

### Information Extraction

Extract structured facts from business assets.

Output:
- Products
- Services
- Locations
- Audience Mentions
- Brand Signals

---

### Knowledge Normalization

Convert extracted facts into canonical business knowledge.

Examples:

- Brand Personality
- Industry
- Target Audience
- Positioning

---

### Validation

Check:

- Missing fields
- Conflicting information
- Low confidence
- Required attributes

---

### Human Review

The owner reviews and approves the generated Business Profile.

Only approved knowledge is persisted.

---

## Output

Business Profile

A versioned, mutable representation of the business that serves as trusted context for the Creative Intelligence Layer.

---

## Lifecycle

Draft
↓
AI Generated
↓
Reviewed
↓
Approved
↓
Active
↓
Superseded
↓
Archived

---

## Engineering Rules

- Assets are the source of truth.
- Knowledge is derived from evidence.
- Store only approved Business Profiles.
- Preserve historical versions.
- Downstream modules consume the Business Profile, never raw assets.

## Responsibility Flow

InformationExtractor
        │
        ▼
Coordinates the extraction process.

GeminiExtractionAdapter
        │
        ▼
Bridges the core module with the AI provider.

PromptLoader
        │
        ▼
Loads version-controlled prompt templates.

PromptBuilder
        │
        ▼
Builds the final request sent to the AI model.

GeminiClient
        │
        ▼
Communicates with the Gemini API.

ResponseParser
        │
        ▼
Converts the raw Gemini response into a plain JavaScript object.

BusinessProfileDraftBuilder
        │
        ▼
Constructs a valid BusinessProfileDraft object.

BusinessProfileDraft
        │
        ▼
Output of the Information Extraction stage.

# Information Extraction

## Objective

Convert one or more unstructured business assets into a structured **Business Profile Draft** by extracting only explicit business facts.

This stage performs information extraction only.

It does not normalize, validate, infer or persist business information.

---

# Pipeline

```
Business Assets
        │
        ▼
InformationExtractor
        │
        ▼
GeminiExtractionAdapter
        │
        ├──────────────┐
        ▼              │
PromptLoader           │
        ▼              │
PromptBuilder          │
        ▼              │
GeminiClient           │
        ▼              │
ResponseParser         │
        ▼              │
BusinessProfileDraftBuilder
        │
        ▼
BusinessProfileDraft
```

---

# Responsibility Flow

## InformationExtractor

### Responsibility

Coordinates the information extraction process.

### Input

```text
BusinessAsset[]
```

### Output

```text
BusinessProfileDraft
```

---

## GeminiExtractionAdapter

### Responsibility

Coordinates all AI-related operations required for information extraction.

It orchestrates the complete extraction pipeline.

### Input

```text
BusinessAsset[]
```

### Output

```text
BusinessProfileDraft
```

---

## PromptLoader

### Responsibility

Loads version-controlled prompt templates from storage.

### Input

```text
Prompt File Name
```

Example

```
information-extraction-system.md
```

### Output

```text
String
```

---

## PromptBuilder

### Responsibility

Constructs the final request that will be sent to the AI model.

Combines:

- System Prompt
- User Prompt
- Business Assets

### Input

```text
System Prompt

User Prompt

Business Assets
```

### Output

```text
Gemini Request
```

---

## GeminiClient

### Responsibility

Communicates with the Gemini API.

Responsible only for sending requests and receiving responses.

### Input

```text
Gemini Request
```

### Output

```text
Raw Gemini Response
```

---

## ResponseParser

### Responsibility

Extracts structured data from the raw Gemini response.

### Input

```text
Raw Gemini Response
```

### Output

```text
JavaScript Object
```

---

## BusinessProfileDraftBuilder

### Responsibility

Constructs a valid BusinessProfileDraft using the parsed extraction result.

Ensures the output follows the platform's internal contract.

### Input

```text
JavaScript Object
```

### Output

```text
BusinessProfileDraft
```

---

# Final Output

```
BusinessProfileDraft
```

The draft contains extracted business information only.

It has not been:

- normalized
- validated
- approved
- persisted

These responsibilities belong to later stages of the Business Understanding pipeline.

---

# Design Principles

The Information Extraction stage follows the following engineering principles:

- Single Responsibility Principle
- Intelligence Before Generation
- Business Logic Independent of Orchestrator
- AI for Reasoning Only
- Deterministic Software Where Possible
- Modular Architecture
- Dependency Inversion
- Reusable Components

Every class performs one well-defined responsibility and communicates through explicit contracts.

This architecture enables independent testing, maintainability and future replacement of individual components without affecting the overall pipeline.

