# Ticket Booking System

A full-stack, near-real-time ticket booking application built with modern web technologies.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Database:** PostgreSQL (Neon)
* **ORM:** Prisma
* **Authentication:** NextAuth.js (Credentials, Role-based)
* **Styling:** Tailwind CSS
* **State/Polling:** TanStack Query (React Query)

## Architecture Overview
* **Role-Based Access:** Built-in middleware protects routes for `ADMIN`, `ORGANIZER`, and `CUSTOMER`.
* **Concurrency Control:** Utilizes PostgreSQL unique constraints and Row-Level Security principles to handle high-concurrency ticket purchasing without race conditions.
* **Seat Holds:** Implements a TTL-based mechanism (`expiresAt`) directly in the database to lock seats temporarily during checkout, removing the need for external caching layers like Redis.

## Getting Started

First, copy the environment template and fill in your database credentials:
```bash
cp env.example .env
```

Install dependencies:
```bash
npm install
```

Run the database migrations to set up your schema:
```bash
npx prisma migrate dev
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Status
- [x] Initial Architecture & Database Schema
- [x] Authentication & Role-based Authorization
- [ ] Admin: Venue and Seat Layout Infrastructure
- [ ] Organizer: Event Management
- [ ] Customer: Seat Selection & Near-Real-Time Availability
- [ ] Customer: Checkout & Seat Holds
