# Twind

## Introduction
Twind is a web development project that provides both legacy HTML template serving and modern static site generation with Hugo. The project includes a Node.js Express server for legacy template development and a Hugo-based workflow for building modern static sites with Tailwind CSS integration.

## Installation

### Prerequisites
- Node.js installed on your system.
- npm (Node Package Manager) is included with Node.js.
- Hugo installed on your system (for static site generation).
  
### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/mattstyles333/twind.git
   cd twind
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Install Hugo (if not already installed):**
   ```bash
   make install-hugo
   ```
   Or visit [Hugo Installation Guide](https://gohugo.io/installation/) for other installation methods.

4. **Start the Legacy Server (Optional):**
   ```bash
   npm start
   ```

5. **Build with Hugo:**
   ```bash
   make hugo-build
   ```

6. **Serve Hugo Development Server:**
   ```bash
   make hugo-serve
   ```

## Usage

### Hugo Development (Primary Workflow)
- Build the Hugo site: `make hugo-build`
- Serve the Hugo development server with live reload: `make hugo-serve`
- Visit `http://localhost:1313` for Hugo development

### Legacy Server (Optional)
- Visit `http://localhost:3000` to see the legacy templates hosted by the Express server
- The legacy server supports live reloading using `live-server`

## Architecture

### Directory Structure
- **hugo/**: Hugo site source files including layouts, data, and configuration
- **src/**: Legacy HTML templates and assets
- **server.js**: Express server with HTML injection for Tailwind CSS (legacy)
- **ecosystem.config.js**: Used for PM2 deployment configuration
- **tailwind.config.js**: Tailwind CSS configuration
- **Makefile**: Shortcuts for Hugo commands

### Key Features
- **Tailwind CSS Integration**: Provides utility-first CSS for rapid UI development.
- **Express.js**: A web server to host HTML files with dynamic content injection.
- **Hugo Integration**: Basic support for building static pages through Hugo.
- **Optimization**: Code optimizations highlighted in `OPTIMIZATION_SUMMARY.md`

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request for review.

## License
This project is licensed under the ISC License.

## Contact
For any inquiries, issues, or feature requests, please open an issue on [GitHub](https://github.com/mattstyles333/twind/issues).

