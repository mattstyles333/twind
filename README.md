# Twind

## Introduction

Twind is a web development project that provides both legacy HTML template serving and modern static site generation with Hugo. The project includes a Node.js Express server for legacy template development and a Hugo-based workflow for building modern static sites with Tailwind CSS integration.

This hybrid approach allows developers to gradually migrate legacy HTML into modern, maintainable components while retaining backwards compatibility where needed.

---

## Installation

### Prerequisites

- Node.js installed on your system
- npm (included with Node.js)
- Hugo installed globally → [Hugo Installation Guide](https://gohugo.io/installation/)
- `make` installed (for automation commands)

---

### Steps

1. Clone the Repository:
   ```bash
   git clone https://github.com/mattstyles333/twind.git
   cd twind
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Install Hugo (if not already installed):
   ```bash
   make install-hugo
   ```

4. Start the Legacy Server (Optional):
   ```bash
   npm start
   ```

5. Build with Hugo:
   ```bash
   make hugo-build
   ```

6. Serve Hugo Development Server:
   ```bash
   make hugo-serve
   ```

---

## Usage

### Hugo Development (Primary Workflow)

- Build the Hugo site:
  ```bash
  make hugo-build
  ```

- Serve the Hugo development server with live reload:
  ```bash
  make hugo-serve
  ```

- Access the site at:
  `http://localhost:1313`

This is the preferred workflow for all new content creation and updates.

---

### Legacy Server (Optional)

- Start the Express server:
  ```bash
  npm start
  ```

- View at:
  `http://localhost:3000`

- Serves files in `src/` and supports live reloading using `live-server`

---

## How to Create a New Page (Hugo Workflow)

Follow these steps to create a page that pulls data from YAML and renders using partials.

### 1. Create a Markdown Content File

Create a `.md` file in the `hugo/content/` folder:

```
hugo/content/example.md
```

Example front matter:

```toml
---
title: "Example Page"
layout: "default/example"
draft: true
---
```

Use `draft: true` to prevent the page from being published during development.

---

### 2. Create a YAML Data File

Add a corresponding `.yaml` file in the `hugo/data/` directory:

```
hugo/data/example.yaml
```

Use this to store structured data the partial will access.

Note: Partials receive data from these `.yaml` files – not from the front matter.

---

### 3. Add or Update the Partial Template

Create the partial in:

```
hugo/layouts/default/example.html
```

This partial will use the data defined in `example.yaml` and will be rendered via the layout set in the `.md` file.

---

### 4. Content with Curly Braces (`{}`)

Do not place raw `{}` characters directly inside partials. This includes:

- JSON-like content
- JavaScript templating syntax
- Any expressions or placeholder formats like `{title}` or `{value}`

These characters can break the Hugo rendering engine or be misinterpreted. Instead:

- Move the content into the `.yaml` file as a string
- Reference it in the partial using Hugo’s templating syntax

This keeps templates clean and prevents parsing issues.

---

### 5. Troubleshooting

If a page isn’t generating content correctly:

- Confirm a `.md` file exists in `content/`
- Make sure there’s a matching `.yaml` file in `data/`
- Check that the partial exists in `layouts/default/`
- Ensure the `.md` file references the correct layout

---

### 6. Styling Guidelines

- Use Tailwind CSS classes
- Avoid grids for general layout – they often get messy
- Use CSS columns instead:

```html
<div class="columns-2 gap-4">
  <p>Column 1</p>
  <p>Column 2</p>
</div>
```

---

## Architecture

### Directory Structure

```
twind/
├── hugo/
│   ├── content/           # Markdown content files (.md)
│   ├── data/              # YAML structured data (.yaml)
│   ├── layouts/
│   │   └── default/       # Hugo templates & partials
│   └── config.toml        # Hugo configuration
├── src/                   # Legacy HTML templates
├── server.js              # Express server (legacy mode)
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS setup
├── Makefile               # Hugo build commands
├── ecosystem.config.js    # PM2 deployment config (optional)
```

---

## Key Features

- Tailwind CSS Integration for utility-first styling
- Express.js server to support legacy HTML content
- Hugo static site generation with full Markdown and data support
- YAML-driven templating for modular components
- Clear separation between legacy and modern development paths

---

## For Cursor and AI Tools

When creating or editing content:

- Use the Hugo workflow by default
- Pages go in `hugo/content` as `.md` files
- Data goes in `hugo/data` as `.yaml` files
- Templates and partials live in `hugo/layouts/default`
- Use Tailwind CSS only
- Do not edit `src/` unless explicitly working on legacy content
- Avoid custom CSS or inline styles unless necessary
- Do not place `{}` characters directly inside partials — use `.yaml` files instead

---

## Deployment

To run in production using PM2:

```bash
pm2 start ecosystem.config.js
```

---

## Contributing

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make changes and commit
4. Push and open a pull request

---

## License

This project is licensed under the ISC License.

---

## Contact

For issues, ideas, or feature requests, open an issue at:
[https://github.com/mattstyles333/twind/issues](https://github.com/mattstyles333/twind/issues)
