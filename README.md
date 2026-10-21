# Employee Task Management Dashboard

A front-end task management dashboard with separate views for administrators and employees. Administrators can view task counts by employee and use a task assignment form. Employees can view their tasks, grouped by status, alongside task summary cards.

This project is built with React, Vite, and Tailwind CSS. It currently uses sample data stored in the browser’s local storage and does not require a backend.

## Features

- Admin and employee login views
- Admin dashboard with employee task summaries
- Task assignment form with title, description, date, category, and assignee fields
- Employee dashboard with task status counts
- Task cards for new, active, completed, and failed tasks
- Sample employee and task data stored in local storage
- Responsive styling with Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS
- Browser local storage

## Getting Started

### Requirements

- Node.js and npm

### Installation

Clone the repository, then install the dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/employee-task-management-dashboard.git
cd employee-task-management-dashboard
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Demo Login

The project includes hard-coded demo accounts:

| Role | Email | Password |
|---|---|---|
| Admin | `admin@example.com` | `123` |
| Employee | `employee1@example.com` | `123` |
| Employee | `employee2@example.com` | `123` |
| Employee | `employee3@example.com` | `123` |
| Employee | `employee4@example.com` | `123` |
| Employee | `employee5@example.com` | `123` |

These credentials and sample data are for demonstration only. This project does not provide production authentication or secure password storage.

## Project Structure

```text
src/
├── components/
│   ├── auth/          # Login screen
│   ├── dashboard/     # Admin and employee dashboards
│   ├── other/         # Header, task creation, and summaries
│   └── tasklist/      # Task cards by status
├── context/           # Shared employee data context
├── utils/             # Sample data and local storage helpers
├── App.jsx
├── App.css
└── index.css
public/
```

## Data and Persistence

Sample employee accounts and tasks are initialized in browser local storage. Data is stored in the browser and is not shared between users or devices. Clearing the browser’s site data removes it.

## Current Scope

This is a front-end demonstration project. It has no backend, database, or production authentication. Some task actions and workflows may need additional implementation before the app is used beyond a demo.

## License

No license has been specified yet. Add a `LICENSE` file if you want to define how others may use, modify, and distribute this project.
