# Student Management Module – Backend API

This is a RESTful backend service built using **Node.js**, **Express**, **TypeScript**, and **Prisma ORM** with **PostgreSQL**. 

---

## Features

- Add a new student
- Get all students (with pagination)
- Get a student by registration number
- Update student information
- Soft delete student
- Input validation using `zod`
- Centralized error handling
- Pagination support
- Read/Write DB separation structure (future-proof)
- Req-Res style controller structure

---

## Tech Stack

- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod (for validation)

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-management-api.git
cd student-management-api

-npm install 

```

### 2. Create env file like sampleenv

### 3. Prisma Setup 

```bash
npx prisma migrate dev --name init
npx prisma generate

```

### 4. Start the server
```bash

npm run dev

```