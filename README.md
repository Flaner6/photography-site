# Modern Portfolio

A modern, high-performance portfolio application structured with Next.js App Router, React 19, TypeScript, Tailwind CSS, and RxJS for externalized reactive state management.

---

## Tech Stack

| Technology | Role | Purpose |
| :--- | :--- | :--- |
| **Next.js 16 (App Router)** | Framework | Server & Client component rendering, layout management, routing |
| **React 19** | UI Library | Component-driven presentation and UI lifecycle |
| **TypeScript** | Type System | End-to-end type safety, data modeling, and compile-time validation |
| **Tailwind CSS v4** | Styling | Utility-first design tokens and responsive styling |
| **RxJS 7** | State Management | Push-based reactive store decoupled from the React component tree |
| **Lucide React** | Icons | Consistent SVG iconography |

---

## Architecture & Layers

The application is structured into four distinct layers, enforcing separation of concerns and predictable data flow.

### 1. Presentation Layer (`app/` & `src/components/`)
* **Layout Shell (`app/layout.tsx`)**: Defines root document structure, global font anti-aliasing, and baseline visual styling (`bg-neutral-950`).
* **Page Coordinator (`app/page.tsx`)**: Top-level interactive client boundary orchestrating section components and local modal display state.
* **Modular UI Components (`src/components/`)**: Self-contained presentation units (`Header`, `Hero`, `ProjectGrid`, `About`, `Footer`, `ProjectModal`) that consume typed props and delegate global mutations.

### 2. State Management Layer (`src/store/`)
Application state that spans components is externalized using RxJS instead of context providers or prop drilling.

* **Reactive Store (`src/store/categoryStore.ts`)**:
  * Utilizes an RxJS `BehaviorSubject<string>` initialized to `'All'`.
  * Preserves the current state snapshot synchronously via `.getValue()`.
  * Emits state updates to active subscribers via `.next(value)`.
* **Action Dispatcher**:
  * Exposes explicit setter functions (e.g., `setCategory`) to publish changes into the stream.
* **Component Subscription**:
  * Components (e.g., `ProjectGrid`) subscribe to the stream during their mount phase and unsubscribe on unmount to prevent memory leaks.

### 3. Data & Domain Layer (`src/types.ts` & `src/data.ts`)
* **Type Contracts (`src/types.ts`)**: Enforces strict TypeScript interfaces for project entities, navigation nodes, and portfolio configurations.
* **Static Domain Data (`src/data.ts`)**: Decouples content and metadata definitions from UI rendering logic.

### 4. Build & Runtime Layer (`dev-runner.mjs`)
* **CLI Parameter Normalization**: Intercepts dev server startup arguments, translating environment-specific flags (e.g., `--host`) into Next.js-compatible options (`-H` / `--hostname`).
* **Process Lifecycle**: Propagates `SIGINT` and `SIGTERM` signals directly to the Next.js process, preventing orphaned processes on port 3000.

---

## Project Structure

```text
├── app/                  # Next.js App Router (layouts, pages, global CSS)
├── src/
│   ├── components/       # Presentation components
│   ├── store/            # RxJS state stores
│   ├── data.ts           # Content & data sources
│   └── types.ts          # Domain interfaces & TypeScript types
├── dev-runner.mjs        # Process & flag normalizer for local dev server
├── package.json          # Project manifest, scripts, and dependencies
└── tsconfig.json         # TypeScript compiler configuration
```

---

## Development

```bash
# Start development server (port 3000)
npm run dev

# Run TypeScript type-checking
npm run lint

# Create production build
npm run build

# Start production server
npm start
```