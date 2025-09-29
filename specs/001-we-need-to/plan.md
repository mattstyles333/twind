
# Implementation Plan: Improve Blog Post for Organic Traffic

**Branch**: `001-we-need-to` | **Date**: 2025-09-29 | **Spec**: /home/alex/Documents/code/twind/specs/001-we-need-to/spec.md
**Input**: Feature specification from /home/alex/Documents/code/twind/specs/001-we-need-to/spec.md

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Improve the "How to Adjust Your Glasses at Home" blog post to increase organic traffic, user engagement, and sales through SEO optimization and content enhancements. Technical approach involves keyword research, content restructuring, and performance improvements using Hugo static site generation.

## Technical Context
**Language/Version**: Hugo (static site generator)  
**Primary Dependencies**: Tailwind CSS, Alpine.js  
**Storage**: Markdown files in hugo/content/, YAML data in hugo/data/  
**Testing**: Manual testing  
**Target Platform**: Web (responsive design)
**Project Type**: Web (static site)  
**Performance Goals**: Fast loading times, mobile responsiveness  
**Constraints**: No new partials, images with explicit sizes, pages responsive, Hugo dev then copy to Magento2  
**Scale/Scope**: Single blog post improvement

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Do not create new layout blocks/partials unless explicitly told.
- Images must always be sized correctly with explicit heights and widths.
- Pages must always be responsive and named appropriately.
- Use Hugo to generate pages for local dev, copy manually to Magento2.
- Less is more always the simplest solution.

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
hugo/
├── content/
│   └── [blog-post].md  # Existing blog post to be improved
├── data/
│   └── [related-data].yaml  # Data files for content
└── layouts/
    └── _default/
        └── [layout].html  # Existing layouts, no new partials
```

**Structure Decision**: Content-only improvement using existing Hugo structure. No new source code or partials created. Updates limited to existing blog post markdown file and related data.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
    - No NEEDS CLARIFICATION remain from clarifications.

2. **Generate and dispatch research agents**:
    ```
    Task: "Research SEO best practices for eyewear blog content"
    Task: "Analyze keyword opportunities for 'How to Adjust Your Glasses'"
    Task: "Identify competitor content gaps in glasses adjustment guides"
    Task: "Research content engagement strategies for how-to articles"
    ```

3. **Consolidate findings** in `research.md` using format:
    - Decision: [what was chosen]
    - Rationale: [why chosen]
    - Alternatives considered: [what else evaluated]

**Output**: research.md with SEO research and content improvement recommendations

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
    - Blog Post: title, content sections, meta description, keywords
    - SEO Metrics: keyword rankings, search volume, backlinks
    - User Engagement: dwell time, click-through rate, conversion rate

2. **Generate content contracts** from functional requirements:
    - Content structure contract for blog post format
    - SEO optimization contract for meta tags and headings
    - Output contracts to `/contracts/`

3. **Generate manual validation checklists** from contracts:
    - Checklist for content structure compliance
    - Checklist for SEO optimization completeness
    - Manual tests to verify improvements

4. **Extract test scenarios** from user stories:
    - SEO ranking improvement scenario
    - User engagement increase scenario
    - Sales conversion tracking scenario

5. **Update agent file incrementally** (O(1) operation):
    - Run `.specify/scripts/bash/update-agent-context.sh opencode`
      **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
    - Add SEO and content optimization knowledge
    - Preserve manual additions between markers
    - Update recent changes (keep last 3)
    - Keep under 150 lines for token efficiency
    - Output to repository root

**Output**: data-model.md, /contracts/*, validation checklists, quickstart.md, updated AGENTS.md

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → manual validation task
- Content structure updates → implementation tasks
- SEO optimization tasks → sequential
- Testing tasks from quickstart scenarios

**Ordering Strategy**:
- Content updates first (title, meta, structure)
- SEO optimization next (keywords, links, technical)
- Testing and validation last
- Mark [P] for parallel content sections

**Estimated Output**: 10-15 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
