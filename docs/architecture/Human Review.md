# Human Review

## Objective

Convert a validated business profile into an approved business profile through client confirmation.

Human Review introduces human judgment into the Business Understanding pipeline.

It does not:

- infer information
- normalize data
- validate correctness
- persist knowledge

---

# Pipeline

NormalizedBusinessProfile
        +
ValidationReport
        │
        ▼
HumanReviewEngine
        │
        ▼
ReviewSessionBuilder
        │
        ▼
Review Session
        │
        ▼
ApprovalProcessor
        │
        ▼
ApprovedBusinessProfile

---

# Responsibility Flow

## HumanReviewEngine

### Responsibility

Coordinates the review lifecycle.

### Input

NormalizedBusinessProfile

ValidationReport

Client Response

### Output

ApprovedBusinessProfile

---

## ReviewSessionBuilder

### Responsibility

Prepares the review session presented to the client.

### Input

NormalizedBusinessProfile

ValidationReport

### Output

ReviewSession

---

## ApprovalProcessor

### Responsibility

Processes approval, rejection or requested changes.

### Input

ReviewSession

Client Decision

Client Changes

### Output

ApprovedBusinessProfile

or

UpdatedBusinessProfile

---

# Current Framework

Version 1 supports:

- Review session creation
- Approval
- Rejection
- Edit and resubmit
- Review disclaimer

Integration Sprint enhancements:

- Suggested values
- Confidence indicators
- Source indicators
- Guided input options
- Field-level audit trail

---

# Design Principles

- Human-in-the-Loop
- Clear Approval Workflow
- Modular Architecture
- Independent Testability