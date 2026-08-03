# Validation

## Objective

Determine whether the normalized business profile is complete enough for human review.

Validation evaluates profile quality without modifying business information.

It does not:

- infer information
- normalize data
- communicate with AI
- persist knowledge

---

# Pipeline

NormalizedBusinessProfile
        │
        ▼
ValidationEngine
        │
        ▼
BusinessProfileValidator
        │
        ├──────────────┐
        ▼              ▼
RequiredFieldValidator
ConflictValidator
        │              │
        ▼              ▼
ValidationReportBuilder
        │
        ▼
ValidationReport

---

# Responsibility Flow

## ValidationEngine

### Responsibility

Public entry point for the validation stage.

### Input

NormalizedBusinessProfile

### Output

ValidationReport

---

## BusinessProfileValidator

### Responsibility

Coordinates all validation operations.

### Input

NormalizedBusinessProfile

### Output

ValidationReport

---

## RequiredFieldValidator

### Responsibility

Checks whether all mandatory business profile fields are present.

### Input

NormalizedBusinessProfile

### Output

Validation Messages

---

## ConflictValidator

### Responsibility

Detects deterministic conflicts within the profile.

Framework prepared for future validation rules.

### Input

NormalizedBusinessProfile

### Output

Validation Messages

---

## ValidationReportBuilder

### Responsibility

Constructs the final validation report.

### Input

Validation Messages

### Output

ValidationReport

---

# Current Framework

Version 1 validates:

- Required fields
- Missing values
- Deterministic conflicts
- Review disclaimer

Future versions may include:

- Evidence validation
- Confidence validation
- Cross-document validation
- Business rule validation

---

# Design Principles

- Single Responsibility Principle
- Deterministic Evaluation
- Independent Testability
- Modular Architecture
- Orchestrator Independence