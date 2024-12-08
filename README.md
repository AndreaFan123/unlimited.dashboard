# unlimited.dashboard

## Tech Stacks

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma
- SQLite

### Frontend

- React
- Next.js
- TypeScript
- Tailwind CSS

## Infrastructure Phase

### Backend Foundation

#### Project Setup

- [x] Initialize Node.js + Express.js project
- [x] Configure TypeScript
- [x] Setup SQLite + Prisma
- [x] Setup project structure (routes, controllers, services)
- [x] Configure environment variables

#### Database Structure

#### Database Design

- [x] Create Events table
- [x] Create Users table
- [x] Create Sessions table
- [x] Setup Prisma migrations

#### Security Setup

- [x] Basic Security
- [x] Configure CORS
- [x] Implement rate limiting
- [x] Setup API error handling middleware
- [x] Setup request validation middleware

### Core Features Phase

#### Event Tracking System

- [ ] Event API Implementation
- [ ] Create event receiving endpoint
- [ ] Implement event storage logic
- [ ] Create event filtering and query API
- [ ] Implement event statistics API (daily/monthly)

#### Authentication System

#### User Authentication

- [ ] Set up admin account
- [ ] Implement JWT authentication
- [ ] Create visitor account mechanism
- [ ] Implement login/logout functionality
- [ ] Create permission middleware

#### Data Visualization API

#### Statistics API

- [ ] Monthly statistics endpoint
- [ ] Daily statistics endpoint
- [ ] Event distribution endpoint
      Data summary endpoint

#### Advanced Features Phase

#### Visitor Management

Visitor System

- [ ] Implement visitor registration
- [ ] Create visitor permission management
- [ ] Setup visitor activity logging

#### Data Analysis

- [ ] Custom date range queries
- [ ] Data export functionality (admin only)
- [ ] Trend analysis reports

#### System Monitoring

#### Monitoring Setup

- [ ] Health check endpoint
- [ ] Error logging
- [ ] System usage statistics

### Testing Phase

#### Unit Tests

- [ ] Test Setup
- [ ] Configure Jest
- [ ] Setup test environment variables
- [ ] Configure test database (SQLite in-memory)

#### Service Tests

- [ ] EventService tests
- [ ] AuthService tests
- [ ] StatsService tests

#### Utility Tests

- [ ] Date handling function tests
- [ ] Data conversion function tests
- [ ] Permission check function tests

#### Integration Tests

- [ ] API Tests Setup
- [ ] Configure Supertest
- [ ] Setup test database

#### Event API Tests

- [ ] Event creation tests
- [ ] Event query tests
- [ ] Event statistics tests

#### Authentication API Tests

- [ ] Login flow tests
- [ ] Registration flow tests
- [ ] JWT verification tests

#### Statistics API Tests

- [ ] Data statistics query tests
- [ ] Permission control tests

#### E2E Tests (Optional)

#### E2E Setup

- [ ] Configure Cypress
      Visitor flow tests
      Admin operation flow tests

#### Technical Specifications

#### API Endpoints

```
POST /api/events - Record new event
GET /api/events - Get event list (paginated)
GET /api/stats/daily - Get daily statistics
GET /api/stats/monthly - Get monthly statistics
POST /api/auth/login - User login
POST /api/auth/register - Visitor registration
```

#### Event Data Structure

```typescript
interface Event {
  id: string;
  type: "github_click" | "linkedin_click" | "resume_download" | "article_click";
  timestamp: Date;
  metadata: {
    referrer?: string;
    userAgent?: string;
  };
}
```

#### User Roles and Permissions

```typescript
enum Role {
  ADMIN = "admin",
  VISITOR = "visitor",
}

interface Permission {
  read: boolean;
  write: boolean;
  export: boolean;
}
```

#### Project Structure

```
src/
├── **tests**/
│ ├── unit/
│ │ ├── services/
│ │ └── utils/
│ ├── integration/
│ │ ├── events.test.ts
│ │ ├── auth.test.ts
│ │ └── stats.test.ts
│ └── e2e/
├── routes/
├── controllers/
├── services/
├── utils/
└── types/
```

#### CI/CD Integration

- [ ] GitHub Actions Configuration
- [ ] Test automation
- [ ] Coverage reporting
- [ ] Deployment automation

#### Documentation

- [ ] API Documentation
- [ ] Setup Instructions
- [ ] Development Guidelines
- [ ] Testing Guidelines
