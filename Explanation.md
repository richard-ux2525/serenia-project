# Serenia Real Estate & Admin Dashboard System: Comprehensive Technical Documentation

This document provides a complete, structured technical breakdown of every page, component, authentication module, state hook, event handler, interactive element, active state, route architecture, and design pattern used in the **Serenia** project.

---

## 1. 📐 Design System & Rectangular Styling Guidelines

The application strictly enforces a **sharp-cornered (non-rounded)** rectangular design system (`rounded-none`):
- **Borders & Panels**: Clean `1px` neutral borders (`border-stone-200`, `border-gray-300`) with zero border radius.
- **Buttons, Inputs & Selects**: Rectangular inputs and buttons without rounded corners.
- **Badges, Avatars & Status Pills**: Square indicators matching enterprise dashboard UI standards.

---

## 2. 🧩 Component-by-Component & Page Breakdown

---

### A. Navbar (`Nav.tsx`, `ClusterSelector.tsx`, `Dropdown.tsx`)
- **Files**: `client/src/components/Nav.tsx`, `client/src/components/ClusterSelector.tsx`, `client/src/components/Dropdown.tsx`
- **Purpose**: Provides sticky top navigation, desktop mega-menu dropdowns, community selector grids, mobile accordion drawers, and `Request tour` modal triggers.

#### Hooks Used
- `useLocation()`: React Router location hook for active URL detection (`location.pathname`).
- `useState()`: Internal disclosure state for mobile drawer toggle.

#### Active States & Underline Indicators
- `isActive(path)`: Helper function matching current URL. When active on desktop, renders an absolute bottom indicator stroke:
  ```tsx
  {isActive && <div className="absolute bottom-[-21px] left-0 right-0 h-[3px] bg-stone-900" />}
  ```

#### Handlers & Triggers
- `data-tour-trigger`: Tagged on **Request tour** buttons (desktop & mobile) to trigger the native `<Dialog />` modal without navigating away.
- **`ClusterSelector.tsx`**: Renders an interactive community preview grid inside the Property mega-menu dropdown.

---

### B. Footer (`Footer.tsx`)
- **File**: `client/src/components/Footer.tsx`
- **Purpose**: Public site footer providing CTA callouts, cluster quick links, newsletter subscription, and legal disclosures.

#### Handlers & Triggers
- `data-tour-trigger`: Tagged on **Schedule a tour** button (`<button type="button" data-tour-trigger>`) to launch the Request Tour modal in-place.
- Links to `/properties`, `/contact`, and legal routes.

---

### C. Centralized Admin Sidebar (`Aside.tsx`)
- **File**: `client/src/components/Aside.tsx`
- **Purpose**: Provides a reusable, responsive, sharp-cornered (`rounded-none`) left navigation drawer for all administrative dashboard pages (`HomePage.tsx`, `Details.tsx`, `CreateCluster.tsx`).

#### Props & State Hooks
- `sidebarOpen` (`boolean`): Controls mobile drawer visibility.
- `setSidebarOpen` (`(open: boolean) => void`): Callback to open/close mobile sidebar drawer.
- `useLocation()`: Highlights active links based on matching route URLs (`/dashboard`, `/details`, `/create-cluster`).
- `propertiesExpanded` (`boolean`): Accordion disclosure state for the Properties dropdown.

#### Navigation Links & Actions
- **Brand Logo Header**: Links back to Home (`/`). Includes mobile close button (`X`) and panel toggle (`PanelLeft`).
- **Search Bar**: Search input with `⌘ F` shortcut pill and sharp rectangular focus outline.
- **Main Menu Links**:
  - *Dashboard* (`LayoutDashboard`) ➔ `/dashboard`
  - *Cluster Details* (`ClipboardList`) ➔ `/details`
  - *Properties Dropdown* (`Building2`) ➔ Expandable list for *Liora estate*, *Nava heights*, *Aruna residence*, *Velora park*, and *Seraya grove*.
  - *Add new cluster* (`Plus`) ➔ `/create-cluster`
- **Others & Settings**: *Public site* (`/properties`), *Gallery* (`/gallery`), *Support & Settings* (`/contact`), and *Log out* (opens `LogoutDialog`).

---

### D. Logout Confirmation Modal (`LogoutDialog.tsx`)
- **Path**: `client/src/components/LogoutDialog.tsx`
- **Purpose**: A sharp-cornered modal pop-up prompting users to confirm administrative logout before terminating session.

#### Props & State Management
- `isOpen` (`boolean`): Controls native `<dialog>` visibility via `showModal()` / `close()`.
- `onClose` (`() => void`): Dismisses the logout modal without taking action.
- `onConfirm` (`() => void`): Confirms session logout, closes sidebar drawer, and redirects user to `/login`.

#### Styling & Elements
- **Sharp Cornered Modal**: Native `<dialog>` backdrop with dark overlay (`backdrop:bg-black/50 backdrop:backdrop-blur-xs`), sharp borders (`border-stone-300`), and zero rounded corners (`rounded-none`).
- **Logout Warning Header**: Red logout icon container (`bg-red-50 text-red-700`), title *"Confirm Logout"*, and subtitle *"Serenia Admin Dashboard"*.
- **Confirmation Prompt**: Clear explanation warning users that credentials will be required upon next login.
- **Action Buttons**:
  - *"Cancel"*: Closes dialog via `onClose`.
  - *"Log out now"*: Triggers `onConfirm` callback and redirects to `/login`.

---

### E. Authentication Flow Pages

#### 1. Login Page (`Login.tsx`)
- **File**: `client/src/auth/Login.tsx`
- **Route**: `/login`
- **Purpose**: User login screen for administrative cluster management access.

##### Hooks Used
- `useNavigate()`: Programmatic redirect to `/dashboard` upon authentication.
- `useState(email)`: Binds email input value.
- `useState(password)`: Binds password input value.
- `useState(showPassword)`: Boolean toggle for password visibility.
- `useState(formNotice)`: Stores validation notice text.

##### Handlers & Interactive Elements
- `handleSubmit(event)`: Validates input fields and navigates to `/dashboard`.
- Password visibility button: Toggles `showPassword` state and switches input `type="password"` vs `type="text"`. Contains `aria-pressed` and `aria-label`.
- Link to `/forgot_password` and `/contact`.

---

#### 2. Forgot Password Page (`Forgotpwd.tsx`)
- **File**: `client/src/auth/Forgotpwd.tsx`
- **Route**: `/forgot_password`, `/forgot-password`, `/forgotpwd`
- **Purpose**: Password recovery email submission page.

##### Hooks Used
- `useNavigate()`: Navigation hook to `/reset_password`.
- `useState(email)`: Stores entered recovery email.
- `useState(formNotice)`: Displays success confirmation notice.

##### Handlers & Interactive Elements
- `handleSubmit(event)`: Validates email, displays success feedback banner (`A password reset link has been sent...`), and navigates to `/reset_password`.
- Important Info Card: Highlighted alert box detailing email recovery instructions.

---

#### 3. Reset Password Page (`Resetpwd.tsx`)
- **File**: `client/src/auth/Resetpwd.tsx`
- **Route**: `/reset_password`, `/reset-password`, `/resetpwd`
- **Purpose**: Password reset form with real-time validation requirements and password match verification.

##### Hooks Used
- `useNavigate()`: Navigates to `/updated` upon successful reset.
- `useState(password)`: Stores new password input.
- `useState(confirmPassword)`: Stores confirmation password input.
- `useState(showPassword)`: Toggles password field visibility.
- `useState(showConfirmPassword)`: Toggles confirmation field visibility.
- `useState(formNotice)`: Status notice text.

##### Validation Rules & Dynamic Verification
- `requirements`: Array of 4 validation rules evaluated dynamically:
  1. *At least 1 symbol* (`/[^A-Za-z0-9\s]/`)
  2. *Minimum 8 characters* (`password.length >= 8`)
  3. *At least 1 number* (`/\d/`)
  4. *At least 1 capital letter* (`/[A-Z]/`)
- `passwordsMatch`: Boolean comparison (`password === confirmPassword`).
- Submit button disabled attribute: `disabled={!requirements.every(({ valid }) => valid) || !passwordsMatch}`.

---

#### 4. Password Updated Confirmation Page (`Updated.tsx`)
- **File**: `client/src/auth/Updated.tsx`
- **Route**: `/updated`, `/pwdupdated`
- **Purpose**: Password reset confirmation screen providing a link back to `/login`.

---

### D. Executive Admin Dashboard (`HomePage.tsx`)
- **File**: `client/src/pages/HomePage.tsx`
- **Route**: `/dashboard`, `/homepage`
- **Purpose**: Real-time property analytics dashboard with metric KPI cards, SVG trend line chart, segmented unit breakdown, interactive bar chart, and SVG inquiry donut chart.

#### Hooks Used
- `useState(sidebarOpen)`: Toggles responsive mobile navigation drawer.
- `useState(propertiesExpanded)`: Toggles sidebar properties dropdown.
- `useState(selectedProperty)`: Stores selected property cluster filter.
- `useState(searchQuery)`: Binds search bar.
- `useState(timeFilter)`: Controls line chart dataset filter (`This year`, `This month`, `This week`).
- `useState(hoveredBar)`: Controls active tooltip overlay on bar chart (`Nava heights`).

#### Handlers & Interactive Components
- **SVG Line Chart**: Responsive line chart (`<polyline>`) with linear gradient fill (`<linearGradient>`) and data points across Jan–Sep.
- **Bar Chart Tooltip**: `onMouseEnter` handler displaying active tooltip banner (`Nava heights: 36 Tour request`).
- **SVG Donut Chart**: 3-segment SVG circle ring using `strokeDasharray` and `strokeDashoffset` showing inquiry metrics (*Answered: 180*, *Pending: 45*, *Escalated: 15*).

---

### E. Cluster Details View (`Details.tsx`)
- **File**: `client/src/pages/Details.tsx`
- **Route**: `/details`, `/properties/aruna/details`
- **Purpose**: Cluster management detail view.

#### Hooks & Features
- `useState(activeTab)`: Switches tabs (`About`, `Units`, `Amenities`, `Gallery`, `Document`).
- **Header Actions**: `+ Add new cluster` button (to `/create-cluster`) and `Edit cluster` button (to `/properties/aruna/edit`).
- **Specifications Grid**: 10 key specifications with icons.
- **Cluster Location Box**: Map overlay (`maparuna`) with pin markers and nearest places list.
- **Unit Stats & History Updates**: 2x2 grid stats and user update timeline.

---

### F. Create Cluster Wizard Page (`CreateCluster.tsx`)
- **File**: `client/src/pages/CreateCluster.tsx`
- **Route**: `/create-cluster`, `/properties/create`, `/properties/aruna/edit`
- **Purpose**: Full 4-step cluster creation wizard with step sidebar progress, tab navigation, and modal integration.

#### Hooks & Handlers
- `useState(mainStep)`: Main step index (`0`–`3`).
- `useState(subStep)`: Sub-step tab index.
- `useState(isNoteDialogOpen)`: Floor plan note modal state.
- `useState(isPublishDialogOpen)`: Publish confirmation modal state.
- `useState(clickPos)`: Floor plan canvas click coordinates `{ x, y }`.
- `handleContinue()` / `handleBack()`: Wizard navigation handlers.
- `handleOpenNoteDialog(x, y)` / `handleConfirmFloorPlanPoint(pointData)`: Floor plan hotspot manager.

---

### G. Wizard Step Components & Dialogs

1. **`ClusterDetailsStep.tsx`**: Basic Info & Location form with map pin selector (`handleMapClick`).
2. **`ClusterSpecsStep.tsx`**: Specifications grid & dynamic custom amenities manager (`addCustomAmenity`, `updateCustomAmenity`, `removeCustomAmenity`).
3. **`HouseMediaStep.tsx`**: Cover photo dropzone, category gallery, and PDF document manager (`handleAddDocument`, `handleRemoveDocument`).
4. **`TypeAndUnitsStep.tsx`**: Property type details, pricing/mortgage fields, interactive floor plan hotspot canvas (`handleFloorPlanCanvasClick`), and indoor/outdoor/safety amenities checkboxes (`toggleArrayItem`).
5. **`EnterNoteDialog.tsx`**: Form modal for hotspot room categories & description notes.
6. **`PublishDialog.tsx`**: Modal confirming live publishing (`onPublish`) or saving draft (`onSaveDraft`).
7. **`types.ts`**: Shared TypeScript interfaces with matching runtime object exports (`export const FloorPlanPoint = {}`).

---

### H. Tour Request Modal (`Dialog.tsx`)
- **File**: `client/src/components/Dialog.tsx`
- **Purpose**: Global tour request modal component.

#### Trigger Mechanism & PreventDefault (`useEffect`)
- Global `click` event listener intercepting clicks on any element with `[data-tour-trigger]`.
- Calls `event.preventDefault()` and `event.stopPropagation()` to prevent page navigation, then invokes `dialogRef.current.showModal()`.
- Interactive date calendar picker, preferred time slot selector (`10:00 AM`, `12:00 PM`, `02:00 PM`, `04:00 PM`, `05:30 PM`), cluster dropdown, property type dropdown, phone country code, note field, and inline submission feedback notice.

---

### I. Brochure Request Modal (`Brochure.tsx`)
- **File**: `client/src/components/Brochure.tsx`
- **Trigger**: Clicks on elements with `[data-brochure-trigger]`.
- Opens native `<dialog>` modal with backdrop click listener (`closeOnBackdrop`).

---

### J. Public Property & Landing Pages

1. **`Home.tsx`**: Landing page with hero banners, cluster selection cards, video showcases, and native `<details>` / `<summary>` FAQ accordions.
2. **`Properties.tsx`**: Property listing page featuring query parameter search filters (`useSearchParams()`).
3. **`Aruna.tsx` & `ArunaTypeA.tsx`**: Detailed cluster & property unit pages featuring image galleries, floor plans, specs, and tour request triggers.
4. **`Amenities.tsx`**: Community facilities listing and category filters.
5. **`Gallery.tsx`**: Tabbed media gallery (`All`, `Exterior`, `Interior`, `Facilities`).
6. **`GroundFloor.tsx`**: Interactive 3D/2D ground floor plan walkthrough with numbered hotspot rooms and 360 preview links.

---

## 3. 🗺️ Complete App Route Architecture (`App.tsx`)

The router configuration in `App.tsx` divides routes into two layout containers:

```tsx
<Routes>
  {/* Public Website Shell (with Nav, Dialog, Brochure, Footer) */}
  <Route element={<SiteLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/backup" element={<Home />} />
    <Route path="/properties" element={<Properties />} />
    <Route path="/properties/aruna" element={<Aruna />} />
    <Route path="/properties/aruna/type-a" element={<ArunaTypeA />} />
    <Route path="/amenities" element={<Amenities />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/calendar" element={<Calendar />} />
    <Route path="/colors" element={<Colors />} />
    <Route path="/contact" element={<Contact />} />
  </Route>

  {/* Standalone Dashboard & Management Shell */}
  <Route element={<StandaloneLayout />}>
    <Route path="/dashboard" element={<HomePage />} />
    <Route path="/homepage" element={<HomePage />} />
    <Route path="/details" element={<Details />} />
    <Route path="/create-cluster" element={<CreateCluster />} />
    <Route path="/properties/create" element={<CreateCluster />} />
    <Route path="/properties/aruna/edit" element={<CreateCluster />} />
    <Route path="/properties/aruna/details" element={<Details />} />
    <Route path="/properties/aruna/type-a/ground-floor" element={<GroundFloor />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot_password" element={<Forgotpwd />} />
    <Route path="/forgot-password" element={<Forgotpwd />} />
    <Route path="/forgotpwd" element={<Forgotpwd />} />
    <Route path="/reset_password" element={<Resetpwd />} />
    <Route path="/reset-password" element={<Resetpwd />} />
    <Route path="/resetpwd" element={<Resetpwd />} />
    <Route path="/updated" element={<Updated />} />
    <Route path="/pwdupdated" element={<Updated />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```
