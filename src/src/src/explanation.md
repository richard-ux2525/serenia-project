# Serenia – Animation \& Code Guide

\# Serenia Real Estate \& Admin Dashboard System: Comprehensive Technical Documentation



This document provides a complete, structured technical breakdown of every page, component, authentication module, state hook, event handler, interactive element, active state, route architecture, and design pattern used in the \*\*Serenia\*\* project.



\---



\## 1. 📐 Design System \& Rectangular Styling Guidelines



The application strictly enforces a \*\*sharp-cornered (non-rounded)\*\* rectangular design system (`rounded-none`):

\- \*\*Borders \& Panels\*\*: Clean `1px` neutral borders (`border-stone-200`, `border-gray-300`) with zero border radius.

\- \*\*Buttons, Inputs \& Selects\*\*: Rectangular inputs and buttons without rounded corners.

\- \*\*Badges, Avatars \& Status Pills\*\*: Square indicators matching enterprise dashboard UI standards.



\---



\## 2. 🧩 Component-by-Component \& Page Breakdown



\---



\### A. Navbar (`Nav.tsx`, `ClusterSelector.tsx`, `Dropdown.tsx`)

\- \*\*Files\*\*: `client/src/components/Nav.tsx`, `client/src/components/ClusterSelector.tsx`, `client/src/components/Dropdown.tsx`

\- \*\*Purpose\*\*: Provides sticky top navigation, desktop mega-menu dropdowns, community selector grids, mobile accordion drawers, and `Request tour` modal triggers.



\#### Hooks Used

\- `useLocation()`: React Router location hook for active URL detection (`location.pathname`).

\- `useState()`: Internal disclosure state for mobile drawer toggle.



\#### Active States \& Underline Indicators

\- `isActive(path)`: Helper function matching current URL. When active on desktop, renders an absolute bottom indicator stroke:

&#x20; ```tsx

&#x20; {isActive \&\& <div className="absolute bottom-\[-21px] left-0 right-0 h-\[3px] bg-stone-900" />}

&#x20; ```



\#### Handlers \& Triggers

\- `data-tour-trigger`: Tagged on \*\*Request tour\*\* buttons (desktop \& mobile) to trigger the native `<Dialog />` modal without navigating away.

\- \*\*`ClusterSelector.tsx`\*\*: Renders an interactive community preview grid inside the Property mega-menu dropdown.



\---



\### B. Footer (`Footer.tsx`)

\- \*\*File\*\*: `client/src/components/Footer.tsx`

\- \*\*Purpose\*\*: Public site footer providing CTA callouts, cluster quick links, newsletter subscription, and legal disclosures.



\#### Handlers \& Triggers

\- `data-tour-trigger`: Tagged on \*\*Schedule a tour\*\* button (`<button type="button" data-tour-trigger>`) to launch the Request Tour modal in-place.

\- Links to `/properties`, `/contact`, and legal routes.



\---



\### C. Centralized Admin Sidebar (`Aside.tsx`)

\- \*\*File\*\*: `client/src/components/Aside.tsx`

\- \*\*Purpose\*\*: Provides a reusable, responsive, sharp-cornered (`rounded-none`) left navigation drawer for all administrative dashboard pages (`HomePage.tsx`, `Details.tsx`, `CreateCluster.tsx`).



\#### Props \& State Hooks

\- `sidebarOpen` (`boolean`): Controls mobile drawer visibility.

\- `setSidebarOpen` (`(open: boolean) => void`): Callback to open/close mobile sidebar drawer.

\- `useLocation()`: Highlights active links based on matching route URLs (`/dashboard`, `/details`, `/create-cluster`).

\- `propertiesExpanded` (`boolean`): Accordion disclosure state for the Properties dropdown.



\#### Navigation Links \& Actions

\- \*\*Brand Logo Header\*\*: Links back to Home (`/`). Includes mobile close button (`X`) and panel toggle (`PanelLeft`).

\- \*\*Search Bar\*\*: Search input with `⌘ F` shortcut pill and sharp rectangular focus outline.

\- \*\*Main Menu Links\*\*:

&#x20; - \*Dashboard\* (`LayoutDashboard`) ➔ `/dashboard`

&#x20; - \*Cluster Details\* (`ClipboardList`) ➔ `/details`

&#x20; - \*Properties Dropdown\* (`Building2`) ➔ Expandable list for \*Liora estate\*, \*Nava heights\*, \*Aruna residence\*, \*Velora park\*, and \*Seraya grove\*.

&#x20; - \*Add new cluster\* (`Plus`) ➔ `/create-cluster`

\- \*\*Others \& Settings\*\*: \*Public site\* (`/properties`), \*Gallery\* (`/gallery`), \*Support \& Settings\* (`/contact`), and \*Log out\* (opens `LogoutDialog`).



\---



\### D. Logout Confirmation Modal (`LogoutDialog.tsx`)

\- \*\*Path\*\*: `client/src/components/LogoutDialog.tsx`

\- \*\*Purpose\*\*: A sharp-cornered modal pop-up prompting users to confirm administrative logout before terminating session.



\#### Props \& State Management

\- `isOpen` (`boolean`): Controls native `<dialog>` visibility via `showModal()` / `close()`.

\- `onClose` (`() => void`): Dismisses the logout modal without taking action.

\- `onConfirm` (`() => void`): Confirms session logout, closes sidebar drawer, and redirects user to `/login`.



\#### Styling \& Elements

\- \*\*Sharp Cornered Modal\*\*: Native `<dialog>` backdrop with dark overlay (`backdrop:bg-black/50 backdrop:backdrop-blur-xs`), sharp borders (`border-stone-300`), and zero rounded corners (`rounded-none`).

\- \*\*Logout Warning Header\*\*: Red logout icon container (`bg-red-50 text-red-700`), title \*"Confirm Logout"\*, and subtitle \*"Serenia Admin Dashboard"\*.

\- \*\*Confirmation Prompt\*\*: Clear explanation warning users that credentials will be required upon next login.

\- \*\*Action Buttons\*\*:

&#x20; - \*"Cancel"\*: Closes dialog via `onClose`.

&#x20; - \*"Log out now"\*: Triggers `onConfirm` callback and redirects to `/login`.



\---



\### E. Authentication Flow Pages



\#### 1. Login Page (`Login.tsx`)

\- \*\*File\*\*: `client/src/auth/Login.tsx`

\- \*\*Route\*\*: `/login`

\- \*\*Purpose\*\*: User login screen for administrative cluster management access.



\##### Hooks Used

\- `useNavigate()`: Programmatic redirect to `/dashboard` upon authentication.

\- `useState(email)`: Binds email input value.

\- `useState(password)`: Binds password input value.

\- `useState(showPassword)`: Boolean toggle for password visibility.

\- `useState(formNotice)`: Stores validation notice text.



\##### Handlers \& Interactive Elements

\- `handleSubmit(event)`: Validates input fields and navigates to `/dashboard`.

\- Password visibility button: Toggles `showPassword` state and switches input `type="password"` vs `type="text"`. Contains `aria-pressed` and `aria-label`.

\- Link to `/forgot\_password` and `/contact`.



\---



\#### 2. Forgot Password Page (`Forgotpwd.tsx`)

\- \*\*File\*\*: `client/src/auth/Forgotpwd.tsx`

\- \*\*Route\*\*: `/forgot\_password`, `/forgot-password`, `/forgotpwd`

\- \*\*Purpose\*\*: Password recovery email submission page.



\##### Hooks Used

\- `useNavigate()`: Navigation hook to `/reset\_password`.

\- `useState(email)`: Stores entered recovery email.

\- `useState(formNotice)`: Displays success confirmation notice.



\##### Handlers \& Interactive Elements

\- `handleSubmit(event)`: Validates email, displays success feedback banner (`A password reset link has been sent...`), and navigates to `/reset\_password`.

\- Important Info Card: Highlighted alert box detailing email recovery instructions.



\---



\#### 3. Reset Password Page (`Resetpwd.tsx`)

\- \*\*File\*\*: `client/src/auth/Resetpwd.tsx`

\- \*\*Route\*\*: `/reset\_password`, `/reset-password`, `/resetpwd`

\- \*\*Purpose\*\*: Password reset form with real-time validation requirements and password match verification.



\##### Hooks Used

\- `useNavigate()`: Navigates to `/updated` upon successful reset.

\- `useState(password)`: Stores new password input.

\- `useState(confirmPassword)`: Stores confirmation password input.

\- `useState(showPassword)`: Toggles password field visibility.

\- `useState(showConfirmPassword)`: Toggles confirmation field visibility.

\- `useState(formNotice)`: Status notice text.



\##### Validation Rules \& Dynamic Verification

\- `requirements`: Array of 4 validation rules evaluated dynamically:

&#x20; 1. \*At least 1 symbol\* (`/\[^A-Za-z0-9\\s]/`)

&#x20; 2. \*Minimum 8 characters\* (`password.length >= 8`)

&#x20; 3. \*At least 1 number\* (`/\\d/`)

&#x20; 4. \*At least 1 capital letter\* (`/\[A-Z]/`)

\- `passwordsMatch`: Boolean comparison (`password === confirmPassword`).

\- Submit button disabled attribute: `disabled={!requirements.every(({ valid }) => valid) || !passwordsMatch}`.



\---



\#### 4. Password Updated Confirmation Page (`Updated.tsx`)

\- \*\*File\*\*: `client/src/auth/Updated.tsx`

\- \*\*Route\*\*: `/updated`, `/pwdupdated`

\- \*\*Purpose\*\*: Password reset confirmation screen providing a link back to `/login`.



\---



\### D. Executive Admin Dashboard (`HomePage.tsx`)

\- \*\*File\*\*: `client/src/pages/HomePage.tsx`

\- \*\*Route\*\*: `/dashboard`, `/homepage`

\- \*\*Purpose\*\*: Real-time property analytics dashboard with metric KPI cards, SVG trend line chart, segmented unit breakdown, interactive bar chart, and SVG inquiry donut chart.



\#### Hooks Used

\- `useState(sidebarOpen)`: Toggles responsive mobile navigation drawer.

\- `useState(propertiesExpanded)`: Toggles sidebar properties dropdown.

\- `useState(selectedProperty)`: Stores selected property cluster filter.

\- `useState(searchQuery)`: Binds search bar.

\- `useState(timeFilter)`: Controls line chart dataset filter (`This year`, `This month`, `This week`).

\- `useState(hoveredBar)`: Controls active tooltip overlay on bar chart (`Nava heights`).



\#### Handlers \& Interactive Components

\- \*\*SVG Line Chart\*\*: Responsive line chart (`<polyline>`) with linear gradient fill (`<linearGradient>`) and data points across Jan–Sep.

\- \*\*Bar Chart Tooltip\*\*: `onMouseEnter` handler displaying active tooltip banner (`Nava heights: 36 Tour request`).

\- \*\*SVG Donut Chart\*\*: 3-segment SVG circle ring using `strokeDasharray` and `strokeDashoffset` showing inquiry metrics (\*Answered: 180\*, \*Pending: 45\*, \*Escalated: 15\*).



\---



\### E. Cluster Details View (`Details.tsx`)

\- \*\*File\*\*: `client/src/pages/Details.tsx`

\- \*\*Route\*\*: `/details`, `/properties/aruna/details`

\- \*\*Purpose\*\*: Cluster management detail view.



\#### Hooks \& Features

\- `useState(activeTab)`: Switches tabs (`About`, `Units`, `Amenities`, `Gallery`, `Document`).

\- \*\*Header Actions\*\*: `+ Add new cluster` button (to `/create-cluster`) and `Edit cluster` button (to `/properties/aruna/edit`).

\- \*\*Specifications Grid\*\*: 10 key specifications with icons.

\- \*\*Cluster Location Box\*\*: Map overlay (`maparuna`) with pin markers and nearest places list.

\- \*\*Unit Stats \& History Updates\*\*: 2x2 grid stats and user update timeline.



\---



\### F. Create Cluster Wizard Page (`CreateCluster.tsx`)

\- \*\*File\*\*: `client/src/pages/CreateCluster.tsx`

\- \*\*Route\*\*: `/create-cluster`, `/properties/create`, `/properties/aruna/edit`

\- \*\*Purpose\*\*: Full 4-step cluster creation wizard with step sidebar progress, tab navigation, and modal integration.



\#### Hooks \& Handlers

\- `useState(mainStep)`: Main step index (`0`–`3`).

\- `useState(subStep)`: Sub-step tab index.

\- `useState(isNoteDialogOpen)`: Floor plan note modal state.

\- `useState(isPublishDialogOpen)`: Publish confirmation modal state.

\- `useState(clickPos)`: Floor plan canvas click coordinates `{ x, y }`.

\- `handleContinue()` / `handleBack()`: Wizard navigation handlers.

\- `handleOpenNoteDialog(x, y)` / `handleConfirmFloorPlanPoint(pointData)`: Floor plan hotspot manager.



\---



\### G. Wizard Step Components \& Dialogs



1\. \*\*`ClusterDetailsStep.tsx`\*\*: Basic Info \& Location form with map pin selector (`handleMapClick`).

2\. \*\*`ClusterSpecsStep.tsx`\*\*: Specifications grid \& dynamic custom amenities manager (`addCustomAmenity`, `updateCustomAmenity`, `removeCustomAmenity`).

3\. \*\*`HouseMediaStep.tsx`\*\*: Cover photo dropzone, category gallery, and PDF document manager (`handleAddDocument`, `handleRemoveDocument`).

4\. \*\*`TypeAndUnitsStep.tsx`\*\*: Property type details, pricing/mortgage fields, interactive floor plan hotspot canvas (`handleFloorPlanCanvasClick`), and indoor/outdoor/safety amenities checkboxes (`toggleArrayItem`).

5\. \*\*`EnterNoteDialog.tsx`\*\*: Form modal for hotspot room categories \& description notes.

6\. \*\*`PublishDialog.tsx`\*\*: Modal confirming live publishing (`onPublish`) or saving draft (`onSaveDraft`).

7\. \*\*`types.ts`\*\*: Shared TypeScript interfaces with matching runtime object exports (`export const FloorPlanPoint = {}`).



\---



\### H. Tour Request Modal (`Dialog.tsx`)

\- \*\*File\*\*: `client/src/components/Dialog.tsx`

\- \*\*Purpose\*\*: Global tour request modal component.



\#### Trigger Mechanism \& PreventDefault (`useEffect`)

\- Global `click` event listener intercepting clicks on any element with `\[data-tour-trigger]`.

\- Calls `event.preventDefault()` and `event.stopPropagation()` to prevent page navigation, then invokes `dialogRef.current.showModal()`.

\- Interactive date calendar picker, preferred time slot selector (`10:00 AM`, `12:00 PM`, `02:00 PM`, `04:00 PM`, `05:30 PM`), cluster dropdown, property type dropdown, phone country code, note field, and inline submission feedback notice.



\---



\### I. Brochure Request Modal (`Brochure.tsx`)

\- \*\*File\*\*: `client/src/components/Brochure.tsx`

\- \*\*Trigger\*\*: Clicks on elements with `\[data-brochure-trigger]`.

\- Opens native `<dialog>` modal with backdrop click listener (`closeOnBackdrop`).



\---



\### J. Public Property \& Landing Pages



1\. \*\*`Home.tsx`\*\*: Landing page with hero banners, cluster selection cards, video showcases, and native `<details>` / `<summary>` FAQ accordions.

2\. \*\*`Properties.tsx`\*\*: Property listing page featuring query parameter search filters (`useSearchParams()`).

3\. \*\*`Aruna.tsx` \& `ArunaTypeA.tsx`\*\*: Detailed cluster \& property unit pages featuring image galleries, floor plans, specs, and tour request triggers.

4\. \*\*`Amenities.tsx`\*\*: Community facilities listing and category filters.

5\. \*\*`Gallery.tsx`\*\*: Tabbed media gallery (`All`, `Exterior`, `Interior`, `Facilities`).

6\. \*\*`GroundFloor.tsx`\*\*: Interactive 3D/2D ground floor plan walkthrough with numbered hotspot rooms and 360 preview links.



\---



\## 3. 🗺️ Complete App Route Architecture (`App.tsx`)



The router configuration in `App.tsx` divides routes into two layout containers:



```tsx

<Routes>

&#x20; {/\* Public Website Shell (with Nav, Dialog, Brochure, Footer) \*/}

&#x20; <Route element={<SiteLayout />}>

&#x20;   <Route path="/" element={<Home />} />

&#x20;   <Route path="/backup" element={<Home />} />

&#x20;   <Route path="/properties" element={<Properties />} />

&#x20;   <Route path="/properties/aruna" element={<Aruna />} />

&#x20;   <Route path="/properties/aruna/type-a" element={<ArunaTypeA />} />

&#x20;   <Route path="/amenities" element={<Amenities />} />

&#x20;   <Route path="/gallery" element={<Gallery />} />

&#x20;   <Route path="/calendar" element={<Calendar />} />

&#x20;   <Route path="/colors" element={<Colors />} />

&#x20;   <Route path="/contact" element={<Contact />} />

&#x20; </Route>



&#x20; {/\* Standalone Dashboard \& Management Shell \*/}

&#x20; <Route element={<StandaloneLayout />}>

&#x20;   <Route path="/dashboard" element={<HomePage />} />

&#x20;   <Route path="/homepage" element={<HomePage />} />

&#x20;   <Route path="/details" element={<Details />} />

&#x20;   <Route path="/create-cluster" element={<CreateCluster />} />

&#x20;   <Route path="/properties/create" element={<CreateCluster />} />

&#x20;   <Route path="/properties/aruna/edit" element={<CreateCluster />} />

&#x20;   <Route path="/properties/aruna/details" element={<Details />} />

&#x20;   <Route path="/properties/aruna/type-a/ground-floor" element={<GroundFloor />} />

&#x20;   <Route path="/login" element={<Login />} />

&#x20;   <Route path="/forgot\_password" element={<Forgotpwd />} />

&#x20;   <Route path="/forgot-password" element={<Forgotpwd />} />

&#x20;   <Route path="/forgotpwd" element={<Forgotpwd />} />

&#x20;   <Route path="/reset\_password" element={<Resetpwd />} />

&#x20;   <Route path="/reset-password" element={<Resetpwd />} />

&#x20;   <Route path="/resetpwd" element={<Resetpwd />} />

&#x20;   <Route path="/updated" element={<Updated />} />

&#x20;   <Route path="/pwdupdated" element={<Updated />} />

&#x20;   <Route path="\*" element={<NotFound />} />

&#x20; </Route>

</Routes>

```



## Design tokens (`index.css` `@theme`)

Colors, fonts, and shadows live in one place:

* `bg-olive`, `text-ink-deep`, `border-border`, `shadow-soft`, etc.
* Change a brand color once; the whole site updates.

## Scroll reveal

Elements with class `reveal` start hidden and animate in when they enter the viewport.

```tsx
<div className="reveal delay-2">...</div>
```

`App.tsx` uses an `IntersectionObserver` to add `.is-visible`.  
Delays: `delay-1` … `delay-5` for staggered entrance.

## Hero entrance

* `.hero-title` – rises up on load
* `.hero-fade` – fades in slightly later
* `.hero-panel` – soft scale-in for the search card

## Cards \& images

* `.card-lift` – lifts and gains shadow on hover
* `.img-zoom` / `.img-zoom-slow` – image scales inside its frame on hover
* `.gallery-tile` – slight upward move on hover
* `.award-logo-mark` – gentle scale on hover

## Buttons

* `.btn-press` – lifts on hover, presses on click
* `.btn-glow` – soft olive ring on hover

## FAQ accordion

Uses CSS grid animation for a smooth open/close:

```tsx
<div className={`faq-panel ${isOpen ? "is-open" : ""}`}>
  <div>{answer}</div>
</div>
```

The `+` icon rotates 45° when open (`.faq-icon.is-open`).

## Tour dialog

Original structure kept. Modal uses `.tour-request-\\\\\\\\\\\\\\\*` classes with enter animation and quiet hover states.

## Reduced motion

If the user prefers reduced motion, all animations are effectively disabled via a media query.

## Code order in files

1. Imports
2. Static data
3. Component + state
4. Handlers
5. JSX

This keeps every page easy to scan.



---

# Update: Simplified Code and Responsive Fixes

This section explains every piece of new code added during the cleanup, one line at a time. The older sections above still describe the pages, but these things changed:

- `ClusterSelector.tsx`, `Tour.tsx` and `ButtonWhite.tsx` were deleted because nothing used them, and their exports were removed from `imports.ts`.
- `revealAnimaton` is now `useRevealAnimation`, and the unused `framer-motion` import in `hook.ts` is gone.
- `SignatureCarousel.tsx` no longer uses framer-motion (the drag and spring animation was replaced by a simple fade plus swipe).
- About half of `index.css` (rules for class names that no component uses) was removed.
- Every `{condition && (...)}` in the JSX is now `{condition ? (...) : null}`.
- The navigation menu button now appears below 1024px (phones and tablets, including iPad portrait) instead of below 768px.

## 1. `components/hook.ts` – reveal on scroll

```ts
function useRevealAnimation() {
  const { pathname } = useLocation()
```
- Defines the hook. A hook is a function whose name starts with `use`, which lets React track it.
- `useLocation()` gives the current page address. We keep only `pathname` (for example `/gallery`).

```ts
  useEffect(() => {
    const items = document.querySelectorAll('.reveal:not(.is-visible)')
```
- `useEffect` runs after the page is drawn. The `[pathname]` at the end makes it run again on every page change.
- `querySelectorAll` collects every element with the class `reveal` that has not already been revealed.

```ts
    const showAll = () => items.forEach((item) => item.classList.add('is-visible'))
```
- A small function that gives each item the class `is-visible`, which is what makes it appear (see `.reveal.is-visible` in the CSS).

```ts
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      showAll()
      return
    }
```
- `matchMedia(...).matches` is `true` when the phone or computer is set to "reduce motion".
- `'IntersectionObserver' in window` checks that the browser supports the scroll watcher.
- If either case applies, everything is shown at once and the effect stops with `return`.

```ts
    const observer = new IntersectionObserver((entries) => { ... }, { threshold: 0.05 })
```
- An `IntersectionObserver` tells us when an element enters the screen. `entries` is the list of elements that changed.
- `threshold: 0.05` means "5% visible is enough". The old value needed more, which could keep very tall sections invisible on small phones.

```ts
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible')
    observer.unobserve(entry.target)
  }
})
```
- For each element that is on screen: add `is-visible`, then stop watching it so it only animates once.

```ts
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
```
- Start watching every item. The returned function is the cleanup: React runs it when the page changes, so old watchers do not pile up.

## 2. `components/Nav.tsx` – simple mobile menu

```ts
const [isOpen, setIsOpen] = useState(false)
const { pathname } = useLocation()
const isActive = (path: string) => pathname === path
```
- `isOpen` remembers whether the menu is open. It starts closed.
- `isActive('/gallery')` is `true` when you are on that page; it draws the underline on the desktop links.

```ts
useEffect(() => { setIsOpen(false) }, [pathname])
```
- Closes the menu every time the page changes.

```ts
document.body.style.overflow = isOpen ? 'hidden' : ''
```
- Ternary: while the menu is open the page behind it cannot scroll; otherwise the style is cleared.

```ts
const closeOnWide = () => (window.innerWidth >= 1024 ? setIsOpen(false) : null)
window.addEventListener('resize', closeOnWide)
```
- If an iPad is rotated to landscape (1024px or wider) while the menu is open, close it, because the desktop links appear instead.
- `addEventListener('resize', ...)` runs this function whenever the window size changes.

```ts
return () => {
  document.body.style.overflow = ''
  window.removeEventListener('resize', closeOnWide)
}
```
- Cleanup: give scrolling back and remove the listener.

In the JSX:
- `hidden lg:block` / `hidden lg:flex` / `lg:hidden` show the desktop links only from 1024px and the menu button only below that.
- `isOpen ? 'visible opacity-100 duration-700' : 'invisible opacity-0 duration-500'` fades the panel in slowly and out a bit faster. The menu is always on the page; only these classes change.
- `isOpen ? 'translate-x-0 ...' : 'translate-x-full ...'` slides the white panel in from the right.
- `{isActive('/amenities') ? (<div .../>) : null}` shows the underline only on the active page.

## 3. `components/Dropdown.tsx`

- The "click outside to close" code (`useRef` plus `useEffect`) was removed. The blurred backdrop already closes the menu when clicked.
- `{isOpen ? (...) : null}` and `{mobileOpen ? (...) : null}` replace `&&`.
- `activeIndex === index ? 'bg-white text-black' : '...'` replaces the extra `isClusterActive` variable.
- The desktop menu card is now `fixed left-1/2 top-[4.5rem] w-[min(75rem,calc(100vw-2rem))] -translate-x-1/2`:
  - `fixed` pins it to the screen below the navbar.
  - `left-1/2` plus `-translate-x-1/2` centres it.
  - `min(75rem, 100vw - 2rem)` means "at most 1200px wide, but never wider than the screen minus 1rem each side". The old fixed width (1200px) overflowed every tablet.

## 4. `components/Dialog.tsx` (tour request)

```ts
function formatDate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}
```
- `getMonth()` counts from 0, so we add 1. `padStart(2, '0')` makes `5` into `05`. The result looks like `2026-11-05`.

```ts
const today = new Date()
const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
```
- `currentMonth` is always the 1st day of the month being shown.

```ts
for (let index = 0; index < 42; index++) {
  const dayNumber = index - firstWeekday + 1
  const inMonth = dayNumber >= 1 && dayNumber <= daysInMonth
  calendarDays.push({ day: ..., date: inMonth ? new Date(year, month, dayNumber) : null })
}
```
- A calendar has 6 rows x 7 columns = 42 boxes. `firstWeekday` is how many boxes come before the 1st.
- `dayNumber` below 1 or above `daysInMonth` belongs to the neighbouring month; those boxes get `date: null` and are drawn grey.
- The nested ternary `dayNumber < 1 ? previous : dayNumber > daysInMonth ? next : dayNumber` picks the number printed in each box.

```tsx
date ? (<button ...>) : (<span ...>)
```
- Real days are buttons; neighbouring-month days are plain text.

```ts
const trigger = (event.target as HTMLElement).closest('[data-tour-trigger]')
```
- `closest` walks up from the clicked element and finds the nearest parent with `data-tour-trigger`. That is how every "Request tour" button opens this dialog.

## 5. `components/Brochure.tsx` and `components/LogoutDialog.tsx`

- Brochure: `if (event.target === dialog) dialog.close()` closes the dialog when the dark area around it is clicked (the click target is the dialog itself, not something inside it).
- LogoutDialog: `useEffect(() => { dialogRef.current?.showModal() }, [])` opens the dialog once it is on the page. The `[]` means "only once". The component returns `isOpen ? (<dialog>...) : null`, so it only exists while it should be open.
- The fixed `h-[493px] w-100` was replaced by `w-[calc(100vw-2rem)] max-w-md`, which is "almost the full phone width, but never wider than 28rem".

## 6. `components/Carousel.tsx`

```ts
const [mainRef, mainApi] = useEmblaCarousel({ loop: true })
const [thumbsRef, thumbsApi] = useEmblaCarousel({ containScroll: 'keepSnaps', dragFree: true, loop: true })
```
- Two sliders: the big picture and the thumbnail strip. `ref` goes on the element, `api` lets us control it.

```ts
const onSelect = () => {
  const index = mainApi.selectedScrollSnap()
  setSelectedIndex(index)
  thumbsApi?.scrollTo(index)
}
```
- When the big picture changes: remember which one is showing and scroll the thumbnails to it. `?.` means "only if it exists".

```ts
mainApi.on('select', onSelect)
return () => { mainApi.off('select', onSelect) }
```
- Run `onSelect` whenever the picture changes; remove it on cleanup.
- Responsive changes: `aspect-[4/3] sm:aspect-[16/9]` (taller picture on phones), smaller thumbnails (`flex-[0_0_3.5rem] sm:flex-[0_0_6rem]`), smaller gradient (`h-40 sm:h-64`).

## 7. `components/GeminiCarousel.tsx`

```ts
const goPrev = () => setActiveIndex(activeIndex === 0 ? lastIndex : activeIndex - 1)
const goNext = () => setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1)
```
- Previous on the first card wraps to the last; next on the last wraps to the first.

```ts
const orderedItems = facilitiesItems.slice(activeIndex).concat(facilitiesItems.slice(0, activeIndex))
```
- `slice(activeIndex)` takes the active card and everything after it. `slice(0, activeIndex)` takes the cards before it. `concat` joins them, so the active card is always first.
- Fixed heights (`h-130`, `w-370`, `h-70`) became `h-72 sm:h-96 lg:h-130`, `max-w-[92rem]` and `py-10 ... lg:p-15`.

## 8. `components/SignatureCarousel.tsx`

```ts
const goPrev = () => setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1)
const goNext = () => setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1)
```
- Same wrap-around idea as above.

```ts
const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
  const distance = event.changedTouches[0].clientX - touchStartX
  return distance < -50 ? goNext() : distance > 50 ? goPrev() : null
}
```
- `touchStartX` was saved when the finger touched down (`onTouchStart`). `changedTouches[0].clientX` is where the finger lifted.
- `distance` is negative when swiping left, so it goes to the next community; a swipe right goes to the previous one. Swipes shorter than 50px are ignored.
- `key={current.id}` on the slide makes React rebuild it on change, which replays the `.community-slide` fade defined in the CSS.
- The fixed `min-h-[920px]` and the `absolute` card were removed, so the card now grows with its content on every screen. The heading had `text-xs` on phones and now uses `text-3xl sm:text-4xl`.

## 9. Pages

- `Home.tsx`:
  ```ts
  const query = params.toString()
  navigate(query ? `/properties?${query}` : '/properties')
  ```
  `params.toString()` gives `cluster=Aruna&bedroom=3` (or an empty text). If it is not empty it is added after `?`, otherwise we go to plain `/properties`.
  FAQ: `openIndex === index ? '−' : '+'` and `{openIndex === index ? (<answer/>) : null}`; clicking sets `openIndex` to the question, or to `null` if it was already open.
  Fixed sizes: `lg:min-h-250`, `lg:min-h-220`, `text-4xl sm:text-5xl lg:text-6xl`, `w-fit` badge.
- `Properties.tsx`: the Location and Price filters were `hidden` on phones; they are now `flex flex-col` and stack on phones, then sit side by side from `sm`.
- `Amenities.tsx`: the open and closed accordion layouts were two copies; now one block uses `isOpen ? A : B` for the padding, title tag, icon and body. The picture grid is shorter on phones (`h-130 sm:h-170 lg:h-210`).
- `Gallery.tsx`: the open and closed FAQ copies were merged the same way. The cluster select is `w-full md:w-90` instead of a fixed 360px.
- `Contact.tsx`: now includes `<Dialog />` so the "Request tour" button in its navbar works. Paddings are smaller on phones.
- `NotFound.tsx`: `const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate('/'))` goes back if there is history, otherwise home.
- `Calendar.tsx`: same 42-box `for` loop as the dialog.
- Admin pages and auth pages: `h-screen` / `min-h-screen` became `h-dvh` / `min-h-dvh`. `dvh` is the visible height, so iPhone Safari's address bar no longer cuts the bottom off.
- `GroundFloorDialog.tsx`: the 428px-wide tab bar is now `w-full`.
- `Facilities.tsx`: stacks (`flex-col`) below 1024px and only uses the fixed 880px height from `lg`.

## 10. `index.css`

Everything added at the bottom is explained here.

- `html { overflow-x: hidden; }` stops sideways scrolling on phones. It is set on `html` only, because setting it on `body` would stop the navbar from staying stuck to the top.
- `-webkit-text-size-adjust: 100%` stops iPhones from enlarging text when they rotate.
- `img, video, svg { max-width: 100%; }` means media can never be wider than its box.
- `@media (hover: none) and (pointer: coarse)` only matches touch screens. There `input, select, textarea { font-size: 16px; }`, because iPhones zoom into any field smaller than that.
- `@supports (padding: max(0px)) { body { padding-left: env(safe-area-inset-left) ... } }` keeps content clear of the iPhone notch in landscape. `env(...)` is the size of the notch area.
- `dialog { max-height: calc(100dvh - 1rem); }` keeps pop-ups inside the screen.
- `.community-slide` and `@keyframes community-fade` fade and slide the new community in (`from` → `to`), and are switched off when the device asks for reduced motion.
- All `100vh` values were changed to `100dvh`.
