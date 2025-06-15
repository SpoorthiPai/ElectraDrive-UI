# ElectraDrive-UI
Tesla Clone Frontend project

# ⚡ ElectraDrive – Tesla Clone (Full Stack Application)

ElectraDrive is a Tesla-inspired full-stack web application that replicates the sleek and modern UI/UX of [tesla.com](https://www.tesla.com). Built using **React** for the frontend and **Java Spring Boot** for the backend, it demonstrates a modular approach to state management, routing, and backend API integration.

## 🚀 Objective

To design and build a responsive Tesla-style landing page that enables users to:

- Seamlessly browse different car models.
- Interact with UI elements like modals, hero sections, and headers.
- Submit bookings and view data powered by a backend.
- Experience a smooth deployment-ready modern full-stack web app.

---

## 🎯 Project Goals

- Replicate Tesla's minimalist yet engaging design.
- Enable smooth routing across pages (e.g., `/models`, `/modelx`, `/modely`).
- Integrate backend features for user interactions like booking.
- Deploy both frontend and backend using popular platforms (Netlify & Render).
- Implement enhancements like OAuth 2.0 and JWT-based authentication.

---

## 🧰 Tools & Technologies

### Frontend
- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- HTML, CSS

### Backend
- [Java 17](https://www.oracle.com/java/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [JPA](https://spring.io/projects/spring-data-jpa)
- MySQL / PostgreSQL / MongoDB

### Deployment
- **Frontend**: [Netlify](https://www.netlify.com/)
- **Backend**: [Render](https://render.com/)
- **Build Tools**: npm, Maven

---

## 🧱 Architecture

![High Level Architecture](https://link-to-architecture-image-if-hosted)

The application follows a standard client-server architecture with RESTful API integration:

- **Frontend** communicates with backend via `/api` endpoints.
- **Backend** is structured into layers:
  - `Controller`: Handles API routes.
  - `Service`: Business logic.
  - `Repository`: Database access.
  - `Entity`: Data models.

---

## 🔧 Implementation Plan

### Phase 1: Project Setup
- Frontend initialized using `create-react-app` in **VS Code**.
- Backend initialized in **IntelliJ IDEA** using Spring Initializr.
- Basic folder structure and dependencies set up.

### Phase 2: Frontend Development
- Built reusable UI components (Header, Hero, Footer, Buttons).
- Implemented Tesla-style scroll landing pages.
- Enabled routing for:
  - `/models`
  - `/modelx`
  - `/modely`

### Phase 3: Backend Development
- Defined data models and created database schema.
- Built endpoints:
  - `POST /api/vehicle/add` – Save booking details.
  - `GET /api/vehicle` – Fetch car model data.
- Integrated with MySQL/PostgreSQL/MongoDB.

### Phase 4: Deployment
- Frontend hosted on **Netlify**:  
  [https://electradrive.netlify.app](https://electradrive.netlify.app)

---

## Future Enhancements

- Add **OAuth2.0 / JWT-based** authentication system.

Live Demo
Frontend: https://electradrive.netlify.app

## Resources Used
- ChatGPT
- Google AI
- Youtube videos
