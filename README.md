# ShailSoft Education Master — React

React.js conversion of the Education Master HTML template. Includes a public marketing/student website and a role-separated admin panel, wired through React Router 6 and Vite.

## Quick start

```bash
cd shailsoft-education-master
npm install
npm run dev
```

The dev server opens at http://localhost:5173.

## Available scripts

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build locally

## Folder structure

```
shailsoft-education-master/
├── public/                 # Static assets served at / (images, fonts, img, favicon)
├── scripts/                # Dev tooling (page-stub generator)
└── src/
    ├── main.jsx            # App entry — imports CSS, mounts React, wires router + context
    ├── App.jsx             # Top-level routes (user site, admin panel, auth pages, 404)
    ├── assets/             # Source CSS/JS/fonts/images (CSS imported by main.jsx)
    ├── components/
    │   ├── common/         # PageBanner, HeroSlider, CourseCard, PagePlaceholder
    │   ├── user/           # Header, Footer, MobileMenu, TopBar, SearchBar, AuthModal, SocialFloat
    │   └── admin/          # AdminTopbar, AdminSidebar, AdminBreadcrumb, AdminPagePlaceholder
    ├── context/
    │   └── AppContext.jsx  # Auth/role + site settings (localStorage-backed)
    ├── data/               # Mock course, event, student data (swap with API calls)
    ├── hooks/              # (Empty — add custom hooks here)
    ├── layouts/
    │   ├── UserLayout.jsx  # Mobile menu + TopBar + Header + Search + <Outlet/> + Footer + Modals
    │   └── AdminLayout.jsx # Admin topbar + collapsible sidebar + <Outlet/>
    ├── pages/
    │   ├── user/           # 26 user-site pages (Home, About, AllCourses, etc.)
    │   └── admin/          # 46 admin-panel pages (Dashboard, MainMenu, Login, etc.)
    └── routes/
        ├── userRoutes.jsx  # All `/…` routes for the public site
        └── adminRoutes.jsx # All `/admin/…` routes for the panel
```

## Routing

- `/` — user website (wrapped in `UserLayout`)
- `/admin` — admin panel (wrapped in `AdminLayout`)
- `/admin/login`, `/admin/forgot` — rendered without the admin chrome
- `*` — 404 page

Role-based routing is already in place. To restrict `/admin/*` to authenticated admins, wrap `<AdminLayout />` in a small `<RequireRole role="admin">` guard that reads from `useApp()` in `context/AppContext.jsx`.

## Fully converted pages (reference implementations)

User-facing:

- `Home` — hero slider, quick links, discover grid, popular courses, upcoming events
- `About` — hero banner, mission grid
- `AllCourses` — searchable + sortable course grid
- `CourseDetails` — dynamic route (`/course-details/:slug`) with sidebar
- `ContactUs` — stateful contact form with success banner

Admin:

- `AdminDashboard` — stat cards + student data table
- `AdminMainMenu` — CRUD-style menu editor (add, toggle visible, delete)
- `AdminLogin`, `AdminForgot` — standalone auth screens

## Scaffolded pages

The remaining ~60 pages are scaffolded with `PagePlaceholder` / `AdminPagePlaceholder`. Each has a real route, breadcrumb, and title — open them in the browser to verify the navigation flow. Replace the placeholder body with the full UI using the reference pages above as a template.

To add a new placeholder in bulk, edit `scripts/gen-pages.mjs` and re-run `node scripts/gen-pages.mjs` (existing files are preserved for user pages; admin placeholders are overwritten — check your work).

## Styling

The original template stylesheets are preserved 1:1:

- `css/font-awesome.min.css`
- `css/materialize.css`
- `css/bootstrap.css`
- `css/style.css`
- `css/style-mob.css`

They are imported once in `main.jsx`. The hover mega-menus, carousels, and layout rely on these existing classes. To migrate to CSS Modules or SCSS later, split `style.css` per-component and import locally.

## State management

Shared state lives in `src/context/AppContext.jsx`:

- `auth` — `{ user, role }`, persisted to `localStorage`
- `login(user, role)` / `logout()`
- `siteSettings` — placeholder for theme/branding

For larger state trees, swap Context for Redux Toolkit or Zustand without touching the layouts.

## Assets

- Images and fonts are duplicated in `public/` (served at `/images/…`) and `src/assets/` (importable).
- Page components reference absolute `/images/…` paths for simplicity. For hashed asset URLs in production, import the image as a module instead.

## Tech

- React 18 (functional components, hooks)
- React Router 6
- Vite 5
- No TypeScript by design — add `tsconfig.json` and rename `.jsx → .tsx` when ready.

## Known follow-ups

- Mega-menu hover is driven by the original `:hover` CSS. For click/tap support on touch devices, add a small `useState` toggle in `Header.jsx`.
- `AdminSidebar` uses controlled React state in place of Materialize's collapsible accordion.
- Mock data in `src/data/*.js` should be replaced with API calls (e.g. via `fetch` or React Query) when the backend is ready.
- Images referenced by dynamic course IDs fall back to `placeholder.jpg` when the image is missing.
