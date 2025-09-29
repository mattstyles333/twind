<!--
Sync Impact Report:
Version change: 0.0.0 → 1.0.0
Added sections: Core Principles, Technical Standards, Quality Standards, Governance
Modified principles: All new (Partial Conservation, Image Sizing, Page Responsiveness, Development Workflow, Simplicity)
Added sections: Technical Standards, Quality Standards
Removed sections: None
Templates requiring updates: .specify/templates/plan-template.md (version reference updated)
Follow-up TODOs: None
-->
# Twind Constitution

## Core Principles

### I. Partial Conservation
Do not create new layout blocks/partials unless explicitly told otherwise. Reuse existing components to maintain consistency and avoid unnecessary complexity.

### II. Image Sizing
Images must always be sized correctly with explicit heights and widths. This ensures proper layout rendering and prevents layout shifts during page load.

### III. Page Responsiveness
Pages must always be responsive and named appropriately. Responsive design ensures usability across devices, and clear naming improves maintainability.

### IV. Development Workflow
Use Hugo to generate pages for local dev purposes, but code is copied manually into Magento2 on staging and then production. This hybrid approach allows for modern development while maintaining production compatibility.

### V. Simplicity
Less is more always the simplest solution. Prioritize straightforward implementations over complex architectures, following the principle of minimal viable solutions.

## Technical Standards

Technology stack: Hugo static site generator with Tailwind CSS for styling, Alpine.js for client-side interactivity. No custom CSS allowed - use Tailwind utilities only. Content stored in YAML data files, templates in Hugo partials. Avoid raw {} characters in partials - move dynamic content to YAML files.

## Quality Standards

Manual testing required for all changes. Use Prettier for code formatting with .prettierignore. Ensure all images have explicit width and height attributes. Pages must be responsive using Tailwind responsive classes. Follow kebab-case naming for files and partials.

## Governance

Constitution supersedes all other practices. Amendments require documentation and approval. All changes must verify compliance with principles. Use AGENTS.md for runtime development guidance. Complexity must be justified with simpler alternatives rejected.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown | **Last Amended**: 2025-09-29