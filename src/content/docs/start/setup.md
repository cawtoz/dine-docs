---
title: Installation and Setup
---

## Clone the Repository
```bash
git clone https://github.com/cawtoz/dine-api.git
cd dine-api
```

## Configure the `.env` File
Copy the content of `.env.example` to a new file named `.env` in the root of the project:
```bash
cp .env.example .env
```
Then, open the `.env` file and update the placeholder values with your PostgreSQL database configuration details:
```env
DATABASE_URL=jdbc:postgresql://localhost:5432/dine
DATABASE_DRIVER=org.postgresql.Driver
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
SERVER_PORT=8080
```

## Build and Run the Project
Ensure you have [Gradle](https://gradle.org/install/) installed. Then, execute:
```bash
./gradlew run
```
The server will start on the port specified in the `.env` file.