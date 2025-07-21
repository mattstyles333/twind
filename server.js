const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const headInjection = `
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            p: "#1f2937",
            s: "#1E3A8A",
            l: "#f3f4f6",
            t: "#5494EC",
            a: "#f97316",
            b: "#2563eb",
            gr: "#6b7280",
          },
          screens: {
            xxsm: "420px",
            xxxsm: "360px",
          },
        },
      },
    };
  </script>
`;

// Middleware to inject head content
app.use((req, res, next) => {
  if (req.path.endsWith('.html')) {
    const filePath = path.join(__dirname, 'src', req.path);
    
    if (fs.existsSync(filePath)) {
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Add DOCTYPE if missing
      if (!html.includes('<!DOCTYPE')) {
        html = '<!DOCTYPE html>\n' + html;
      }
      
      // Add html tag if missing
      if (!html.includes('<html')) {
        html = html.replace(/^(<!DOCTYPE html>\n)?/, '$1<html lang="en">\n') + '\n</html>';
      }
      
      // Handle all possible HTML structure cases
      if (html.includes('</head>')) {
        // Case 1: Proper head tag exists - only inject if not already injected
        if (!html.includes('tailwind.config')) {
          html = html.replace('</head>', headInjection + '</head>');
        }
      } else if (html.includes('<head>')) {
        // Case 2: Head tag exists but no closing tag
        if (!html.includes('tailwind.config')) {
          html = html.replace('<head>', '<head>' + headInjection);
        }
      } else {
        // Case 3: No head tag - need to create proper HTML structure
        
        // Check if HTML tag exists
        if (!html.includes('<html')) {
          html = html.replace(/^(<!DOCTYPE html>\n)?/, '$1<html lang="en">\n');
        }
        if (!html.includes('</html>')) {
          html = html + '\n</html>';
        }
        
        // Add head section
        if (html.includes('<body>')) {
          // Body exists, add head before it
          html = html.replace('<body>', '<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Page</title>' + headInjection + '</head>\n<body>');
        } else {
          // No body tag either, add both head and body
          const htmlTagMatch = html.match(/(<html[^>]*>)/);
          if (htmlTagMatch) {
            html = html.replace(htmlTagMatch[1], htmlTagMatch[1] + '\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Page</title>' + headInjection + '</head>\n<body>\n') + '\n</body>';
          } else {
            // Fallback: wrap everything
            html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Page</title>' + headInjection + '</head>\n<body>\n' + html + '\n</body>\n</html>';
          }
        }
      }
      
      res.send(html);
      return;
    }
  }
  next();
});

// Serve static files with directory browsing
const serveIndex = require('serve-index');
app.use(express.static(path.join(__dirname, 'src')));
app.use('/', serveIndex(path.join(__dirname, 'src')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Also accessible at http://192.168.1.183:${PORT}`);
});