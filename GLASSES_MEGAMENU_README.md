# Glasses Megamenu Partial

## Overview
This partial creates a desktop dropdown megamenu for the glasses section with organized categories, promotional links, and featured products.

## Files Created/Modified

### 1. Partial Template
- **File**: `hugo/layouts/partials/glasses-megamenu.html`
- **Purpose**: Renders the megamenu HTML structure

### 2. Data Structure
- **File**: `hugo/data/glasses.yaml`
- **Section**: `megamenu`
- **Purpose**: Contains all the menu data in organized sections

## Usage

### Basic Usage
```html
{{- $data := .Site.Data.glasses -}}
{{ partial "glasses-megamenu.html" $data.megamenu }}
```

### Data Structure
The megamenu expects the following data structure in `glasses.yaml`:

```yaml
megamenu:
  sections:
    glasses:
      title: "Glasses"
      links:
        - text: "Prescription Glasses"
          url: "{{store direct_url='glasses'}}"
        # ... more links
    specialty:
      title: "Specialty"
      links:
        - text: "Blue Light Glasses"
          url: "{{store direct_url='blue-light-glasses'}}"
        # ... more links
    styles:
      title: "Styles"
      links:
        - text: "Full-rimmed Glasses"
          url: "{{store direct_url='glasses/full-rimmed'}}"
        # ... more links
  promotional_links:
    - text: "Check Out our Style Finder quiz!"
      url: "{{store direct_url='product-quiz-glasses'}}"
      icon: '<svg>...</svg>'
    - text: "Try our Home Trial Service!"
      url: "{{store direct_url='trial-home'}}"
      icon: '<svg>...</svg>'
  featured_products:
    - title: "Men's Glasses"
      url: "{{store direct_url='glasses/mens'}}"
      image: "https://..."
      alt: "Men's Glasses"
    # ... more products
```

## Features

### 1. Three Main Sections
- **Glasses**: General glasses categories
- **Specialty**: Specialized lens types
- **Styles**: Frame style categories

### 2. Promotional Links
- Style Finder quiz link with icon
- Home Trial service link with icon
- Icons are embedded as SVG for better performance

### 3. Featured Products
- Three featured product cards with images
- Hover effects and animations
- Responsive design

### 4. Responsive Design
- Mobile-friendly layout
- Proper spacing and typography
- Hover effects and transitions

## Styling
The partial uses Tailwind CSS classes and follows the existing design patterns:
- Consistent color scheme (slate-800, gray-700, etc.)
- Hover effects and transitions
- Responsive grid layout
- Proper spacing and typography

## Integration
To integrate this megamenu into your navigation:

1. Add the partial call where needed in your layout
2. Ensure the data structure is properly set up in `glasses.yaml`
3. Test the responsive behavior on different screen sizes
4. Verify all links are working correctly

## Customization
You can easily customize:
- Colors by modifying the Tailwind classes
- Layout by adjusting the grid structure
- Content by updating the YAML data
- Icons by replacing the SVG content
- Images by updating the URLs in the data file
