# Project Management Platform

A comprehensive project management platform built with Angular 18.2.0, featuring a modern UI with PrimeNG components and Tailwind CSS for styling.

## Features

- User Authentication
- Project Management
- Task Tracking
- Team Calendar
- Performance Reports
- User Settings & Preferences
- Billing Management

## Tech Stack

- Angular 18.2.0
- PrimeNG
- Tailwind CSS
- Full Calendar
- Chart.js

## Application Routes

### Authentication Routes (`/auth`)
- `/auth/login` - User login
- `/auth/register` - New user registration
- `/auth/forgot-password` - Password recovery

### Dashboard Routes (`/dashboard`)
- `/dashboard` - Main dashboard overview
- `/dashboard/projects` - Project management
- `/dashboard/tasks` - Task management
- `/dashboard/calendar` - Team calendar
- `/dashboard/reports` - Performance reports

### Settings Routes (`/settings`)
- `/settings/profile` - User profile management
- `/settings/security` - Security settings
- `/settings/notifications` - Notification preferences
- `/settings/billing` - Billing and subscription management

## Development

### Setup
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `ng serve` for a dev server
4. Navigate to `http://localhost:4200/`

### Build
- Run `ng build` to build the project
- The build artifacts will be stored in the `dist/` directory

### Testing
- Run `ng test` to execute unit tests via Karma
- Run `ng e2e` to execute end-to-end tests

## Further Help

For more help on the Angular CLI, check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
