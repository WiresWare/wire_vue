# Wire Vue Counter with UnoCSS

A modern, reactive counter application built with Vue 3, Wire Vue, and UnoCSS for atomic CSS styling.

## Wire Vue Usage Examples

This project demonstrates how to use the `WireData` component for reactive state management in Vue 3 components.

### Pattern A: v-slot Syntax

Use v-slot to access `has` (boolean) and `data` (value) properties:

```wire_vue_counter/src/App.vue#L33-44
<WireData
  v-slot="{ has, data }"
  :for="DataKeys.COUNT"
  :when="() => true"
>
  <CountDisplay
    :has-data="has"
    :count="data"
  />
</WireData>
```

### Pattern B: Template Slots

Use named slots for conditional rendering based on data state:

```wire_vue_counter/src/App.vue#L47-55
<WireData :for="DataKeys.COUNT" :when="() => true">
  <template #default="{ data }">
    <CountBadge :count="data" />
  </template>
  <template #undefined>
    <UndefinedStatus />
  </template>
</WireData>
```

- `#default` slot: Rendered when data exists
- `#undefined` slot: Rendered when data is undefined

### Key Benefits

- **Reactive by Default**: All components using the same data key update automatically
- **Flexible Patterns**: Multiple ways to consume reactive data (v-slot, template slots)
- **Conditional Rendering**: Built-in support for undefined state handling

## Features

- **Reactive State Management**: Uses Wire Vue for seamless data binding across components
- **Modern UI**: Styled with UnoCSS utility classes for fast, consistent styling
- **Interactive Design**: Animated buttons, progress indicators, and visual feedback
- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **TypeScript Support**: Full type safety throughout the application

## What's Demonstrated

### Wire Vue Features

- `WireData` component with v-slot syntax
- Template slots for conditional rendering (`#default` and `#undefined`)
- Reactive data binding between components
- Cross-component state synchronization
- Controllers for business logic
- Middleware for side effects and persistence
- Signal-based event system

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Counter/                    # Counter-related components
│   │   │   ├── AchievementBadge.vue   # Achievement display component
│   │   │   ├── CountBadge.vue         # Count badge component
│   │   │   ├── CountButton.vue        # Interactive counter button
│   │   │   ├── CountDisplay.vue       # Main count display
│   │   │   ├── CounterAnalytics.vue   # Analytics and stats display
│   │   │   ├── CounterStatusIndicator.vue  # Status indicator
│   │   │   ├── ProgressIndicator.vue  # Progress bar component
│   │   │   ├── ResetButton.vue        # Reset counter button
│   │   │   └── UndefinedStatus.vue    # Undefined state display
│   │   ├── Layout/                    # Layout components
│   │   │   ├── AppHeader.vue          # Application header
│   │   │   └── AppLayout.vue          # Main layout wrapper
│   │   └── UI/                        # Reusable UI components
│   │       ├── CardComponent.vue      # Card wrapper component
│   │       └── EmptyMessage.vue       # Empty state message
│   ├── constants/
│   │   ├── DataKeys.ts                # Wire data keys
│   │   ├── LocalKeys.ts               # Local storage keys
│   │   └── Signals.ts                 # Wire signals
│   ├── controller/
│   │   └── CountController.ts         # Counter business logic controller
│   ├── middleware/
│   │   └── CountMiddleware.ts         # Wire middleware for counter
│   ├── App.vue                        # Main app component
│   ├── main.ts                        # App entry point with Wire setup
│   ├── style.css                      # Custom CSS that complements UnoCSS
│   └── vite-env.d.ts                  # TypeScript environment definitions
├── public/
│   └── vite.svg                       # Vite logo
├── uno.config.ts                      # UnoCSS configuration with presets and shortcuts
├── vite.config.ts                     # Vite config with UnoCSS plugin
├── package.json                       # Dependencies including UnoCSS
└── index.html                         # HTML entry point
```

## Architecture

This application follows a clean, scalable architecture that separates concerns and promotes maintainability:

### Component Organization

- **Counter Components** (`src/components/Counter/`): Domain-specific components focused on counter functionality. Each component has a single responsibility, making them testable and reusable.

- **Layout Components** (`src/components/Layout/`): Structural components that define the application's layout and visual hierarchy. These components provide consistent framing for content.

- **UI Components** (`src/components/UI/`): Generic, reusable UI primitives that can be used across different features. These are framework-agnostic design patterns.

### State Management Layer

- **Constants** (`src/constants/`): Centralized definitions for data keys, signals, and storage keys. This prevents magic strings and provides type safety.

- **Controllers** (`src/controller/`): Business logic layer that responds to signals and updates application state. Controllers encapsulate domain logic and keep components thin.

- **Middleware** (`src/middleware/`): Cross-cutting concerns like logging, persistence, and analytics. Middleware intercepts Wire events to add side effects without polluting business logic.

### Key Architectural Benefits

- **Separation of Concerns**: Components focus on presentation, controllers handle logic, middleware manages side effects
- **Testability**: Each layer can be tested independently
- **Scalability**: Easy to add new features without modifying existing code
- **Maintainability**: Clear structure makes code easy to navigate and understand
- **Type Safety**: TypeScript throughout ensures compile-time error checking
- **Reactive Data Flow**: Wire Vue provides automatic synchronization across all components

### Data Flow

1. User interacts with a component (e.g., clicks a button)
2. Component emits an event or sends a Wire signal
3. Controller receives the signal and updates Wire data
4. Middleware intercepts the data change for side effects (e.g., localStorage)
5. All components subscribed to that data key automatically re-render
6. UI updates reactively across the entire application

This unidirectional data flow makes the application predictable and easy to debug.

## Getting Started

### Prerequisites

- Node.js 16+
- bun, npm, or yarn

### Installation

1. Navigate to the example directory:

```bash
cd examples/wire_vue_counter
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

````bash
bun run build
```</parameter>
````

## Learn More

- [Wire Vue Documentation](https://github.com/wire-ts/wire-vue)
- [UnoCSS Documentation](https://unocss.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

## License

This example is part of the Wire Vue project and follows the same license.
