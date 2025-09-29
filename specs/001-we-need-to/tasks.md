# Tasks: Improve Blog Post for Organic Traffic

**Input**: Design documents from `/specs/001-we-need-to/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
    → Extract: Hugo, Tailwind CSS, content structure
2. Load optional design documents:
    → data-model.md: Extract Blog Post, SEO Metrics, User Engagement entities
    → contracts/: content-structure.md, seo-optimization.md → validation tasks
    → research.md: Extract SEO decisions → implementation tasks
3. Generate tasks by category:
    → Setup: Hugo verification, content backup
    → Tests: Manual validation against contracts
    → Core: Content updates and SEO optimization
    → Integration: Technical improvements
    → Polish: Testing and monitoring
4. Apply task rules:
    → Different aspects = mark [P] for parallel
    → Same content file = sequential (no [P])
    → Validation before implementation
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
    → All contracts have validation tasks?
    → All entities addressed?
    → All scenarios covered?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different aspects, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Hugo content**: `hugo/content/` for blog posts
- **Data**: `hugo/data/` for structured content
- **Layouts**: `hugo/layouts/_default/` for templates
- Primary file: `temp-blog.html` (to be updated or converted to Hugo format)

## Phase 3.1: Setup
- [x] T001 Verify Hugo installation and development server setup
- [x] T002 [P] Locate and backup current blog post at temp-blog.html

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These validations MUST be performed and documented before ANY content changes**
- [x] T003 Manual SEO audit of current blog post (rankings, meta tags, keywords)
- [x] T004 [P] Validate current content structure against contracts/content-structure.md
- [x] T005 [P] Validate current SEO setup against contracts/seo-optimization.md

## Phase 3.3: Core Implementation (ONLY after validations are complete)
- [x] T006 Update blog post title to include primary keyword "How to Adjust Your Glasses" in temp-blog.html
- [x] T007 Optimize meta description with keyword and compelling copy in temp-blog.html
- [x] T008 Restructure headings hierarchy with H2/H3 tags including secondary keywords in temp-blog.html
- [x] T009 Add strategic internal links to product pages throughout content in temp-blog.html
- [x] T010 Improve content readability with bullet points, short paragraphs, and formatting in temp-blog.html
- [x] T011 Add clear call-to-action buttons for product purchases in temp-blog.html
- [x] T012 Create shareable checklist element for social media engagement in temp-blog.html

## Phase 3.4: Integration
- [x] T013 Ensure all content is mobile responsive using existing Tailwind classes in temp-blog.html
- [x] T014 Verify all images have explicit width/height attributes and proper alt text in temp-blog.html

## Phase 3.5: Polish
- [x] T015 [P] Test page loading speed with Google PageSpeed Insights
- [x] T016 [P] Validate SEO improvements with SERP preview and keyword tools
- [x] T017 Monitor user engagement metrics (dwell time, CTR) post-publication
- [x] T018 Document final improvements and results in research.md update

## Dependencies
- Setup (T001-T002) before tests (T003-T005)
- Tests (T003-T005) before core implementation (T006-T012)
- Core implementation (T006-T012) before integration (T013-T014)
- Integration (T013-T014) before polish (T015-T018)

## Parallel Example
```
# Launch T004-T005 together:
Task: "Validate current content structure against contracts/content-structure.md"
Task: "Validate current SEO setup against contracts/seo-optimization.md"

# Launch T015-T016 together:
Task: "Test page loading speed with Google PageSpeed Insights"
Task: "Validate SEO improvements with SERP preview and keyword tools"
```

## Notes
- [P] tasks = different validation aspects or testing tools, no dependencies
- Complete all validations before making any content changes
- Commit after each task completion
- Avoid: modifying the same file simultaneously, vague descriptions

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**:
    - Each contract file → manual validation task [P]
    - Content structure and SEO contracts → separate validation tasks

2. **From Data Model**:
    - Blog Post entity → content update tasks
    - SEO Metrics entity → optimization tasks
    - User Engagement entity → monitoring tasks

3. **From User Stories**:
    - SEO improvement story → ranking validation task
    - Engagement increase story → metrics monitoring task
    - Sales conversion story → CTA implementation task

4. **Ordering**:
    - Setup → Tests → Core Content Updates → Integration → Polish
    - Dependencies prevent parallel execution where files overlap

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All contracts have corresponding validation tasks
- [ ] All entities have implementation tasks
- [ ] All test scenarios from quickstart are covered
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path or clear scope
- [ ] No task modifies same file as another [P] task