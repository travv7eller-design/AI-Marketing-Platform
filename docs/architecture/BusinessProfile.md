# Business Profile

## Objective

Represent the approved, versioned and trusted knowledge of a business.

The Business Profile is the primary knowledge contract consumed by the Creative Intelligence Platform.

---

# Pipeline

ApprovedBusinessProfile
        │
        ▼
BusinessProfileFactory
        │
        ├──────────────┐
        ▼              ▼
BusinessProfileMetadata
BusinessProfileVersion
        │
        ▼
BusinessProfile

---

# Responsibility Flow

## BusinessProfileFactory

### Responsibility

Constructs a valid BusinessProfile object.

### Input

ApprovedBusinessProfile

### Output

BusinessProfile

---

## BusinessProfile

### Responsibility

Represents trusted business knowledge.

### Input

ApprovedBusinessProfile

### Output

BusinessProfile

---

## BusinessProfileMetadata

### Responsibility

Stores profile metadata.

### Input

Metadata

### Output

BusinessProfileMetadata

---

## BusinessProfileVersion

### Responsibility

Represents version information.

### Input

Version Number

### Output

BusinessProfileVersion

---

# Current Framework

Business Profile stores:

- Business Identity
- Brand Identity
- Products & Services
- Audience
- Visual Identity
- Marketing Preferences
- Business Objectives
- USP & Positioning
- Contact Information
- Social Presence
- Geographic Information
- Creative Guidelines
- Asset References

Campaign-specific information belongs to the Campaign Brief.

---

# Design Principles

- Trusted Knowledge
- Versioned Domain Model
- Immutable Construction
- Single Source of Truth
- Independent of AI
- Independent of Orchestration