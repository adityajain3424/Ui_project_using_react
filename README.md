# Prospective Customer Segmentation --- React UI

A small React frontend project built to practice **component-based
development**, **props drilling**, and breaking a UI into smaller,
manageable components.

This is one of my first projects where I focused less on building a
large application and more on understanding how a React project can be
structured across multiple components and files.

## 🚀 Project Overview

The project recreates a modern **Digital Banking / Prospective Customer
Segmentation** interface.

The first section contains:

-   A simple navigation/header
-   A large hero section
-   Customer segmentation cards
-   Horizontally scrollable cards
-   Reusable React components
-   Data passed from the parent component to child components using
    props

The project is intentionally small and was created as a learning project
while getting comfortable with React.

## 🧠 What I Practiced

### React Components

Instead of keeping the complete UI inside one file, I divided it into
smaller components:

-   `Navbar`
-   `HeroText`
-   `ArrowText`
-   `LeftContent`
-   `RightContent`
-   `RightCard`
-   `RightCardContent`
-   `Page1Content`
-   `Section1`
-   `Section2`

This helped me understand how a React interface can be composed from
smaller pieces.

### Props Drilling

The customer data is defined in `App.jsx` and passed through multiple
components:

``` text
App
 └── Section1
      └── Page1Content
           └── RightContent
                └── RightCard
                     └── RightCardContent
```

For example, the `user` array is passed from `App` to `Section1`, then
to `Page1Content`, and finally to `RightContent`.

This project helped me understand how data flows between components
using props.

## 🛠️ Tech Stack

-   **React**
-   **JavaScript (JSX)**
-   **Vite**
-   **Tailwind CSS**
-   **Remix Icon**
-   **HTML5**
-   **CSS**

## 📁 Project Structure

``` text
UI-project/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── section1/
│   │   │   ├── ArrowText.jsx
│   │   │   ├── HeroText.jsx
│   │   │   ├── LeftContent.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Page1Content.jsx
│   │   │   ├── RightCard.jsx
│   │   │   ├── RightCardContent.jsx
│   │   │   ├── RightContent.jsx
│   │   │   └── Section1.jsx
│   │   │
│   │   └── section2/
│   │       └── Section2.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

``` bash
git clone <your-repository-url>
cd UI-project
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the development server

``` bash
npm run dev
```

The application will be available at the local URL shown by Vite in the
terminal.

## 📌 Available Scripts

``` bash
npm run dev
```

Starts the Vite development server.

``` bash
npm run build
```

Creates a production build.

``` bash
npm run lint
```

Runs ESLint to check the project.

``` bash
npm run preview
```

Previews the production build locally.

## 📸 Preview

The main UI focuses on a clean, modern customer-segmentation layout with
image cards for different customer categories.

> Add a screenshot or deployed demo link here after publishing the
> project.

## 🎯 What I Learned

This project gave me practical experience with:

-   Thinking in React components
-   Splitting a UI into multiple files
-   Passing data through props
-   Understanding props drilling
-   Rendering multiple cards using `.map()`
-   Keeping components focused on smaller responsibilities
-   Organizing a React project
-   Using Tailwind CSS for styling
-   Working with Vite as a development/build tool

## 🔮 Future Improvements

Some things I would like to improve as I continue learning React:

-   Replace props drilling with better state/data management where
    appropriate
-   Add more interactive functionality
-   Improve responsiveness across different screen sizes
-   Add proper content instead of placeholder text
-   Complete the second section
-   Deploy the project
-   Explore React state management and hooks in future projects

## 👨‍💻 About

This project was created as part of my journey learning **React and
frontend development**.

It is a small project, but it represents an important step in moving
from writing UI in a single file toward thinking in terms of
**components, data flow, and project structure**.

------------------------------------------------------------------------

⭐ If you found this project useful, feel free to check out the
repository and follow my learning journey.
