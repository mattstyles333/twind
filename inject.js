// Simple HTML injection script
const fs = require('fs');
const path = require('path');

const headInjection = `
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'class',
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
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
`;

module.exports = function(req, res, next) {
  if (req.url.endsWith('.html')) {
    const originalSend = res.send;
    res.send = function(body) {
      if (typeof body === 'string' && body.includes('</head>')) {
        body = body.replace('</head>', headInjection + '</head>');
      }
      originalSend.call(this, body);
    };
  }
  next();
};