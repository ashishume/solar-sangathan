# Solar Sangathan

India's largest and most trusted association in the solar energy sector. Solar Sangathan brings together professionals, businesses, and innovators to accelerate India's transition to sustainable energy by fostering collaboration, innovation, and knowledge sharing.

## 🌞 Features

- **Modern Website**: Home, About, Blog, Join, Contact, Resources, Shop, and Training pages.
- **Admin Dashboard**: Manage about page, working committee, members, blog posts, categories, tags, and more.
- **RESTful API**: Backend API for blog, members, categories, rate cards, and more (NestJS, JWT Auth).
- **Responsive UI**: Built with React, TypeScript, Tailwind CSS, and Vite for fast, modern UX.
- **Dockerized Backend**: Easy deployment with Docker.

## 🛠️ Tech Stack

**Frontend:**

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Zustand (state management)
- React Router DOM
- Axios

**Backend:**

- NestJS (TypeScript)
- MongoDB (Mongoose)
- TypeORM
- JWT Authentication
- RESTful API

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- Docker (for backend deployment)

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run start:dev
```

### Backend Deployment (Docker)

```bash
./deploy.sh
```

## 📦 Project Structure

- `/src` - Frontend source code (React, pages, components, store, etc.)
- `/backend` - Backend source code (NestJS, API, models, controllers, etc.)
- `/public` - Static assets

## 📑 API Documentation

See [`backend/api-documentation.md`](backend/api-documentation.md) for full API details.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE) (add your license file if needed)

---

> Solar Sangathan – Empowering India's Solar Future
