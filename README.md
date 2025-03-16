# 🐶 Dog Breed App

This exercise is a bare-bones version of a dog breed app, where we ask candidates to build out a small application. The goal: give both the candidate and the FAST AI Movies team a chance to interact on a realistic, but limited (shooting for just a few hours), task. We see this as a two-way evaluation for the team and the candidate to decide if it's a good fit.

---

## 🛠 Tech Stack

- **React** (with TypeScript)
- **Vite** (for fast development)
- **React Context API** (for state management)
- **Vitest** (for testing)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/gowtham9369/Dog-breeds-dashboard
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Development Server

```sh
npm run dev
```

The app will be running at: **`http://localhost:5173/`**

---

## 🌐 The Dog API

The app fetches dog breed data from [The Dog API](https://dog.ceo/dog-api/documentation/breed).  
The key endpoints used are:
- **List all breeds**  
- **Fetch images by breed**  

---

## 📂 Project Structure

Your goal is to build an **extensible** and **maintainable** project structure following best practices.

```
DogBreedApp_Challenge
├── src
│   ├── assets        # Static assets like images, icons, and styles
│   ├── components    # Reusable UI components (buttons, cards, modals, etc.)
│   ├── context       # React Context API for state management
│   ├── hooks         # Custom React hooks for fetching and managing state
│   ├── layout        # Layout components like headers, footers, and wrappers
│   ├── services      # API service functions (e.g., fetching breed images)
│   ├── tests         # Unit and integration test files
│   ├── App.tsx       # Root component of the application
│   ├── main.tsx      # Entry point for React and rendering
│   ├── index.css     # Global styles
│   ├── vite.config.ts # Vite configuration
│   ├── tsconfig.json  # TypeScript configuration
│   ├── package.json   # Dependencies and scripts
│   └── README.md      # Project documentation (this file)
```

---

## 🧪 Running Tests

To run tests using **Vitest**, use the following command:

```sh
npm run test
```

---

## 📌 Notes

- Ensure you have **Node.js** installed (recommended: version **18+**).
- If you're using **pnpm** or **yarn**, replace `npm` with `pnpm` or `yarn` in the commands above.
- Follow best practices for **code structure**, **reusability**, and **performance optimization**.

Happy Coding! 🚀🐶

