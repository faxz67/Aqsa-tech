# Brand Theme Documentation

## Color Palette

### Primary Colors
- **Teal**: `#45C0B0` (brand-teal)
- **Blue**: `#2A8AC6` (brand-blue)

### Neutral Colors
- **Soft White**: `#FFFFFF` (soft-white)
- **Soft Gray Light**: `#F8F9FA` (soft-gray-light)
- **Soft Gray**: `#E9ECEF` (soft-gray)

### Gradient
- **Primary Gradient**: `linear-gradient(90deg, #45C0B0 0%, #2A8AC6 100%)`
- **Hover Gradient**: `linear-gradient(90deg, #3DB0A0 0%, #2580B6 100%)`

## Usage Guidelines

### Buttons
All primary buttons use the brand gradient with white text:
```tsx
className="bg-brand-gradient hover:bg-brand-gradient-hover text-soft-white"
```

### Backgrounds
- **Hero sections**: Gradient from brand-teal to brand-blue
- **Section backgrounds**: soft-gray-light (#F8F9FA)
- **Card backgrounds**: white with subtle shadows

### Text Colors
- **Headings**: Brand-teal or brand-blue for emphasis
- **Body text**: Gray-700 or gray-800
- **Light text on dark backgrounds**: soft-white with opacity variants

### Interactive Elements
- **Hover transitions**: 300ms duration for smooth effects
- **Focus states**: brand-teal ring
- **Active states**: Full brand gradient

## Tailwind Configuration

The theme is configured in `tailwind.config.js`:

```javascript
colors: {
  'brand-teal': '#45C0B0',
  'brand-blue': '#2A8AC6',
  'soft-white': '#FFFFFF',
  'soft-gray-light': '#F8F9FA',
  'soft-gray': '#E9ECEF',
},
backgroundImage: {
  'brand-gradient': 'linear-gradient(90deg, #45C0B0 0%, #2A8AC6 100%)',
  'brand-gradient-hover': 'linear-gradient(90deg, #3DB0A0 0%, #2580B6 100%)',
}
```

## Components Updated

All components have been updated to use the consistent brand theme:

1. **Hero.tsx** - Main hero section with gradient background and gradient button
2. **Navbar.tsx** - Navigation with gradient backgrounds and active states
3. **DiscoverPopularServices.tsx** - Service cards with gradient hover effects
4. **ExploreOurServices.tsx** - Category tabs with gradient underlines and tags
5. **StepByStepGuide.tsx** - Step indicators with gradient backgrounds
6. **SubheroSection.tsx** - Icon containers with gradient backgrounds
7. **AdminLogin.tsx** - Login form with gradient theme
8. **Footer.tsx** - Footer with gradient background and social icons

## Design Principles

- **Clean & Minimal**: Focus on white space and subtle grays
- **Professional**: Teal-blue gradient conveys trust and modernity
- **Consistent**: All interactive elements follow the same color patterns
- **Accessible**: High contrast between text and backgrounds
- **Smooth Transitions**: 300ms hover and focus transitions throughout
