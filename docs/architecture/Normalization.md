# Normalization

## Objective

Convert a Business Profile Draft into a consistent internal representation using deterministic software.

Normalization improves structural consistency without changing the meaning of the extracted business information.

This stage does not:

- infer information
- validate correctness
- reject values
- communicate with AI
- persist data

---

# Pipeline

BusinessProfileDraft
        │
        ▼
NormalizationEngine
        │
        ▼
BusinessProfileNormalizer
        │
        ├──────────────┐
        ▼              ▼
SchemaNormalizer   CollectionNormalizer
                           │
                           ▼
                    StringNormalizer
        │
        ▼
NormalizedBusinessProfile

---

# Responsibility Flow

## NormalizationEngine

### Responsibility

Public entry point for the normalization stage.

### Input

BusinessProfileDraft

### Output

NormalizedBusinessProfile

---

## BusinessProfileNormalizer

### Responsibility

Coordinates all normalization operations.

### Input

BusinessProfileDraft

### Output

NormalizedBusinessProfile

---

## SchemaNormalizer

### Responsibility

Guarantees a consistent internal schema.

### Input

BusinessProfileDraft

### Output

Schema-compliant BusinessProfileDraft

---

## CollectionNormalizer

### Responsibility

Normalizes collections.

Current responsibilities:

- remove duplicates
- remove empty values
- normalize every element

Framework designed for future expansion.

### Input

Array

### Output

Normalized Array

---

## StringNormalizer

### Responsibility

Normalizes individual strings.

Current responsibilities:

- trim whitespace
- collapse duplicate whitespace

Framework designed for future expansion.

### Input

String

### Output

Normalized String

---

# Current Framework

The normalization framework is intentionally minimal.

Additional normalization rules will be introduced during the Integration Sprint using real client data.

Examples include:

- URL normalization
- Phone number normalization
- Email normalization
- Unicode normalization
- Business name normalization
- Product normalization
- Location normalization

The framework is considered stable.

Normalization rules are expected to evolve over time.

---

# Design Principles

The Normalization module follows:

- Single Responsibility Principle
- Deterministic Processing
- Independent Testability
- Orchestrator Independence
- AI Independence
- Modular Architecture

Every class performs one deterministic transformation without modifying business meaning.