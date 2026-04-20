# Portfolio Project - AI Agent Instructions

## Project Overview
A modern React portfolio website built with Vite, showcasing projects, skills, and contact information. The project emphasizes performance optimization, clean code patterns, and reusable component logic through custom hooks.

**Tech Stack:** React 19.2.0 | Vite 7.3.1 | React Bootstrap 2.10.10 | Bootstrap 5.3.8

## Build & Development

### Essential Commands
```bash
npm run dev       # Start development server (Vite, runs on http://localhost:5174/portfolio)
npm run build     # Production build to dist/
npm run lint      # ESLint validation (eslint.config.js)
npm run preview   # Preview production build locally
npm install       # Install dependencies
```

### Project Structure
```
src/
├── components/          # React components (all optimized with React.memo)
│   ├── NavBar.jsx      # Navigation with scroll detection, uses useScrollDetection + useDebounce hooks
│   ├── Contact.jsx     # Contact form with Supabase integration, uses useFormValidation hook
│   ├── Skills.jsx      # Skills grid display
│   ├── Projects.jsx    # Project showcase
│   ├── Banner.jsx      # Hero section
│   ├── SkillGroup.jsx  # Skill categories, uses useResponsive hook
│   ├── Footer.jsx
│   ├── ProjectCard.jsx, ProjectCardMobile.jsx
│   └── FloatingLogo.jsx
├── hooks/              # Custom reusable logic hooks (NEW - extracted for DRY)
│   ├── useScrollDetection.js  # Detects scroll position ≥ threshold (default 50px)
│   ├── useResponsive.js       # Responsive breakpoint detection with debounced resize
│   ├── useDebounce.js         # General-purpose debouncing utility
│   ├── useFormValidation.js   # Form state + validation + error management
│   └── index.js               # Barrel export for clean imports
├── assets/             # Images, fonts, SVGs
├── App.jsx, App.css    # Root component & styles (includes ProjectCardTest inline styles)
├── main.jsx            # Entry point
└── index.css, Responsive.css
```

## Architecture & Patterns

### Custom Hooks (Created in Phase 3)
All custom hooks follow React hooks rules, include proper cleanup, and are designed for reusability:

#### useScrollDetection(threshold)
```javascript
const scrolled = useScrollDetection(50);  // Returns boolean
```
#### useScrollDetection(threshold)
```javascript
const scrolled = useScrollDetection(50);  // Returns boolean
```
**Two-Way Synchronization**: 
    **Click-to-Scroll**: Clicking a nav item smoothly scrolls the window to the target section.
    **Scroll-to-Select**: Scrolling through the page automatically updates the active menu item.
**Dynamic Underline**: A visual bar that moves or activates under the current section's link.
**Performance Optimized**: Uses passive event listeners to ensure smooth scrolling without main-thread lag.
- Detects when `window.scrollY >= threshold`
- Used in NavBar for styling based on scroll position
- Includes passive event listener for performance
- Detects when `window.scrollY >= threshold`
- Used in NavBar for styling based on scroll position
- Includes passive event listener for performance

#### useResponsive(breakpoint, delay)
```javascript
const isLargeScreen = useResponsive(768);  // Returns boolean, uses default 100ms debounce
const isLargeScreen = useResponsive(768, 150);  // Custom debounce delay
```
- Detects viewport width changes with debounced resize (default 100ms delay)
- Used in SkillGroup for responsive layout switching
- Avoids excessive re-renders during window resize

#### useDebounce(callback, delay)
```javascript
const debouncedCallback = useDebounce(myFunction, 100);
debouncedCallback();  // Debounced execution
```
- General-purpose debouncing utility
- Used in NavBar for section detection on scroll events

#### useFormValidation(initialState, validateFn)
```javascript
const { formDetails, error, onFormUpdate, validateForm, resetForm } = 
  useFormValidation(FORM_INITIAL_STATE, validateContactForm);
```
- Manages form state, validation errors, and auto-error-clearing (2s timeout)
- Used in Contact.jsx fosetFormDetails, error, setE form submission
- Returns: formDetails, error, onFormUpdate, validateForm, resetForm

### Performance Optimizations Already Implemented
1. **React.memo** - All components wrapped to prevent unnecessary re-renders
2. **useCallback** - Event handlers and functions memoized to maintain referential equality
3. **useMemo** - Expensive computations cached (where applicable)
4. **Debounced event listeners** - Scroll/resize listeners debounced (100ms delay)
5. **Passive event listeners** - Used in scroll detection for better performance
6. **Custom hooks** - Extract and reuse logic to eliminate code duplication

### Component Optimization Status
✅ NavBar.jsx - Optimized, uses useScrollDetection + useDebounce
✅ SkillGroup.jsx - Optimized, uses useResponsive
✅ Contact.jsx - Optimized, uses useFormValidation
✅ Skills.jsx - Cleaned unused imports
✅ Projects.jsx - Cleaned unused imports
✅ All other components - Wrapped with React.memo, useCallback applied

### Removed Dependencies (Phase 2)
The following unused packages were removed (~150KB+ bundle reduction):
- `@emailjs/browser` - Replaced with Supabase integration
- `framer-motion` - Not used in animations
- `react-multi-carousel` - Removed unused carousel
- `react-tabs` - Removed unused tab components

## Integration Points

### Supabase Configuration
- **File:** Contact.jsx
- **Setup:** Environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`
- **Database table:** `Contact` with fields: firstname, lastname, email, phone, message
- **Usage:** Form submission inserts records into Supabase

### Environment Variables (.env)
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
VITE_BASE_PATH=/portfolio  # Base path for routing (configurable in vite.config.js)
```

### CSS Organization
- **App.css** - Global styles and component-specific styles (including ProjectCardTest inline styles)
- **Responsive.css** - Mobile-first responsive media queries
- **index.css** - Base typography and defaults
- **Component files** - Some components have inline styles (minimize these)

## Common Development Patterns

### Adding a New Component
1. Create component file in `src/components/`
2. Wrap with `React.memo()` for optimization
3. Use `useCallback` for event handlers
4. Import styles from `App.css` or create component-specific CSS
5. Export as named export: `export const MyComponent = memo(() => {...})`

### Adding Custom Logic to Multiple Components
1. Extract to custom hook in `src/hooks/`
2. Follow the pattern: return object with state, handlers, and utilities
3. Add barrel export in `src/hooks/index.js`
4. Import in components: `import { useMyHook } from '../hooks'`
5. Example: useScrollDetection, useResponsive, useDebounce pattern

### Form Handling Pattern
```javascript
const { formDetails, error, onFormUpdate, validateForm, resetForm } = 
  useFormValidation(INITIAL_STATE, customValidationFn);
```
- Validation function receives formDetails and returns error object
- Errors auto-clear after 2 seconds
- Field errors cleared on input change
- Use error.fieldName to apply CSS classes (shake animation)

## Potential Pitfalls & Solutions

### Issue: Exit Code 1 from npm run dev
**Cause:** Usually hook return value mismatches or component prop errors
**Solution:** 
- Verify hook returns all expected destructured values
- Check that component receives required props
- Run `npm run lint` to catch ESLint errors
- Use browser dev tools to inspect actual error

### Issue: Component Re-renders Excessively
**Cause:** 
- Missing React.memo wrapper
- Inline function creation without useCallback
- Unstable dependencies in hooks
**Solution:** 
- Wrap component with `React.memo(ComponentName)`
- Use `useCallback` for all event handlers
- Verify hook dependency arrays don't include inline objects/arrays

### Issue: Form Validation Errors Not Showing
**Cause:** 
- `validateFn` not properly defined or passed to useFormValidation
- Error state not being applied to input className
**Solution:** 
- Define validation function before hook call
- Apply error.fieldName to input: `className={error.firstName ? "shake" : ""}`
- Verify error object structure matches expected field names

### Issue: Scroll Detection Not Working
**Cause:** 
- Not using useScrollDetection hook correctly
- Missing debounce on scroll callbacks
**Solution:** 
- Use: `const scrolled = useScrollDetection(50)`
- Apply scrolled state to className or conditional rendering
- Debounce heavy computations with useDebounce

## Testing & Validation

### Before Committing Changes
```bash
npm run lint      # Check for ESLint errors
npm run build     # Verify production build succeeds
npm run dev       # Quick smoke test
```

### Common Test Scenarios
1. **Responsive Design** - Test NavBar, SkillGroup on mobile (< 768px) and desktop
2. **Scroll Detection** - Scroll page, verify NavBar styling changes
3. **Form Submission** - Fill Contact form, verify Supabase insertion
4. **Error Handling** - Submit Contact form with empty fields, verify error display

## Key Files to Review First
- [src/hooks/index.js](../src/hooks/index.js) - Barrel export of all custom hooks
- [src/components/NavBar.jsx](../src/components/NavBar.jsx) - Hook usage example (useScrollDetection, useDebounce)
- [src/components/Contact.jsx](../src/components/Contact.jsx) - Form validation hook example
- [App.css](../src/App.css) - Global styling patterns
- [package.json](../package.json) - Dependencies and scripts

## Vite & Build Configuration
- **Base path:** `/portfolio` (configurable via VITE_BASE_PATH env var)
- **Dev server port:** 5173 by default (auto-incremented to 5174 if 5173 is in use)
- **Build output:** `dist/` directory
- **Entry point:** `src/main.jsx`
- **HTML template:** `index.html`

## When to Use This Guide
- **Refactoring components** - Ensure React.memo and useCallback patterns are applied
- **Adding new features** - Use custom hooks for shared logic
- **Debugging errors** - Check "Potential Pitfalls" section first
- **Onboarding new patterns** - Review custom hooks and component optimization examples
- **Performance improvements** - Current optimizations are already implemented; focus on avoiding regression
