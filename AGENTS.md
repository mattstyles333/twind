# Agent Guidelines for Twind

## OpenCode Agent Definitions

### Primary Agents

#### Build Agent
**Mode**: Primary  
**Purpose**: Full development work with all tools enabled  
**Temperature**: 0.3  
**Tools**: All enabled (write, edit, bash, read, glob, grep)

Use this agent for:
- Creating new content, templates, or partials
- Making edits to existing files
- Running build/dev commands
- Debugging template issues

#### Plan Agent
**Mode**: Primary  
**Purpose**: Analysis and planning without making changes  
**Temperature**: 0.1  
**Tools**: Read, glob, grep enabled; write, edit, bash disabled

Use this agent for:
- Analyzing project structure
- Planning refactors or new features
- Reviewing code without changes
- Understanding existing patterns

### Subagents

#### Template Specialist
**Mode**: Subagent  
**Purpose**: Hugo templating and Go template syntax expertise  
**Temperature**: 0.2

Specializes in:
- Hugo partial creation
- Go templating patterns
- Template error debugging
- Data file structure optimization

#### Styles & Layout Specialist
**Mode**: Subagent  
**Purpose**: Tailwind CSS and responsive design  
**Temperature**: 0.2

Specializes in:
- Tailwind utility composition
- Responsive mobile-first layouts
- CSS columns vs grids decisions
- Performance-optimized styling

#### Content & SEO Specialist
**Mode**: Subagent  
**Purpose**: Markdown content and SEO optimization  
**Temperature**: 0.3

Specializes in:
- Markdown front matter
- Content structure
- Internal linking patterns
- SEO best practices for Hugo

---

## Build/Lint/Test Commands

### Build Commands
- `make hugo-build` - Build Hugo site with minification
- `make hugo-serve` - Start Hugo dev server with live reload
- `make hugo-dev` - Start Hugo dev server with fast render
- `make hugo-clean` - Clean Hugo cache and rebuild

### Testing
No automated testing framework configured. Manual testing required.

### Linting
No linting tools configured. Use Prettier for formatting (see VSCode settings).

---

## Code Style Guidelines

### File Structure
- Hugo content: `hugo/content/*.md` (Markdown with front matter)
- Data: `hugo/data/*.yaml` (structured data for templates)
- Templates: `hugo/layouts/_default/*.html` (Go templating)
- Partials: `hugo/layouts/partials/*.html`
- Static assets: `hugo/static/`

### HTML/Templating
- Use Hugo Go templating syntax
- Avoid raw `{}` characters in partials - move to YAML data files
- Use Tailwind CSS classes only (no custom CSS)
- Prefer CSS columns over grids for layout
- Use Alpine.js for client-side interactivity

### JavaScript
- camelCase for variables and functions
- Use modern ES6+ syntax
- Follow Alpine.js patterns for reactive components

### YAML Data Files
- Use kebab-case for keys
- Keep data structured and reusable
- Reference data in templates using Hugo's `site.Data.filename.key`

### Formatting
- Prettier configured with `.prettierignore`
- formatOnSave: false in VSCode (manual formatting)
- Trim trailing whitespace, add final newlines
- 2-space indentation for YAML

### Naming Conventions
- Files: kebab-case (e.g., `product-card.html`, `style-finder.js`)
- Hugo partials: kebab-case
- CSS classes: Tailwind utility classes
- Data keys: kebab-case in YAML

### Error Handling
- Use Hugo's `errorf` for template errors
- Validate data existence before accessing
- Provide fallback values with `default` function

### Imports/Dependencies
- No custom CSS - use Tailwind utilities
- Alpine.js loaded via CDN
- Tailwind loaded via CDN with custom config
