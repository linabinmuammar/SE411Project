# AssetFlow — SE411 Part 1

A React frontend for managing one type of company asset: **IT computers** (laptops and desktops).

## Requirements covered
- React.js frontend built with Vite
- Navigation menu: Dashboard, All Assets, Add Asset, About
- Create, read, update and delete IT assets
- Search and filter inventory, dashboard totals
- About page with developer name and student ID
- Data held in an in-memory JavaScript array of objects; **no database or backend**
- Automated unit tests

## How to run
1. Install Node.js 20+.
2. Open the project directory in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the displayed localhost URL.
5. Run `npm test` to execute tests.
6. Run `npm run build` to build production files.

## Architecture
Single-page application. `src/main.jsx` mounts the React app. `src/App.jsx` renders the sidebar, dashboard, inventory table, asset form, and team page; React state holds the active view and inventory. `src/assets.js` defines the initial object collection and pure validation, insert/update, and deletion functions. `src/style.css` provides responsive styling. `tests/assets.test.js` verifies the asset-management logic.

### Data model
Each asset has: `id`, `name`, `type` (Laptop/Desktop), `brand`, `assignedTo`, `status` (Available/In Use/Maintenance/Retired), and `purchaseDate`.

### Technology stack
React 18, JavaScript ES modules, Vite 6, Lucide React icons, CSS, Vitest, jsdom.

### Features
- Dashboard: counts of total, in-use, available, and maintenance assets, plus recent assets.
- All Assets: searchable, status-filterable table with edit and delete actions.
- Add/Edit: shared validated form. Asset IDs must be unique.
- Delete: browser confirmation before removal.
- About: team member information.

### Data persistence limitation
The app stores its array in React component state, initialized from `initialAssets`. Changes are lost when the page refreshes. This is intentional for Part 1, which specifies a collection of objects and no database. A backend and persistent storage can be introduced in Part 2.

## Testing
Run `npm test`. Tests cover initial data, add, edit, delete, duplicate IDs, missing required fields, and invalid status. Do not claim tests have passed unless you run them in your environment.

## Submission checklist
- [x] Developer information: Lina Bin Muammar (222410450).
- [ ] Confirm instructor approval for individual submission (assignment specifies teams of 3–4).
- [ ] Run the application and automated tests.
- [ ] Commit and push to a **public GitHub repository**.
- [ ] Submit the GitHub URL after confirming individual submission is allowed.

## Suggested repository commands
```bash
git init
git add .
git commit -m "SE411 Part 1: React IT asset manager"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
Create the empty public GitHub repository first. Do not commit `node_modules`.
