
### Magento Integration Note

When integrating code into Magento:
1. Do NOT include the below head section in your code
2. These dependencies should already be loaded by your Magento theme
3. Simply copy and paste the component's body/section code into your Magento template

### head Section

Full Head Section Code:
<head>
  <!-- Add Glide.js CDN links in the head section -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>
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
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

### Dependencies

This component relies on:
- Glide.js for carousel functionality
- Tailwind CSS for styling
- Alpine.js for interactive features

### Color Theme

The Tailwind configuration includes custom colors:
- p: Primary (#1f2937)
- s: Secondary (#1E3A8A)
- l: Light (#f3f4f6)
- t: Tertiary (#5494EC)
- a: Accent (#f97316)
- b: Blue (#2563eb)
- gr: Gray (#6b7280)

### Responsive Breakpoints

Additional custom breakpoints:
- xxsm: 420px
- xxxsm: 360px

