# Twind

## Introduction
Twind provides a development server for HTML templates using a static file server. It's a Node.js-based project that integrates Tailwind CSS for styling and uses Express to serve static content.

## Installation

### Prerequisites
- Node.js installed on your system.
- npm (Node Package Manager) is included with Node.js.
  
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

3. **Start the Server:**
   ```bash
   npm start
   ```

## Usage
- Visit `http://localhost:3000` to see the templates hosted by the server.
- The project supports live reloading using `live-server`.

## Architecture

### Directory Structure
- **src/**: Contains all HTML templates and assets
- **server.js**: Express server with HTML injection for Tailwind CSS
- **ecosystem.config.js**: Used for PM2 deployment configuration
- **tailwind.config.js**: Tailwind CSS configuration

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

