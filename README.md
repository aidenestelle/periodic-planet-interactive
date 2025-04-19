# Periodic Planet Interactive

A modern, interactive periodic table web application built with React, TypeScript, Vite, and shadcn-ui. This project provides a beautiful, accessible, and maintainable codebase for exploring the elements, their properties, and discovering chemistry in an engaging way.

---

## 🚀 Features

- **Interactive Periodic Table**: Browse and filter chemical elements, view detailed information, and search by name or property.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **Accessible UI**: Uses semantic HTML, ARIA labels, and shadcn-ui components for accessibility.
- **Modern React Architecture**: Context API for state management, custom hooks, and modular component structure.
- **Fast Refresh & Lint Clean**: All components and contexts separated for optimal hot reloading and code quality.

---

## 📂 Folder Structure

```
periodic-planet-interactive/
├── src/
│   ├── components/
│   │   ├── ui/                # Reusable UI components (Button, Badge, Sidebar, etc.)
│   │   ├── ElementCard.tsx    # Element detail card
│   │   ├── SearchFilter.tsx   # Search and filter bar
│   │   └── SiteFooter.tsx     # Footer component
│   ├── context/
│   │   ├── ElementsContext.tsx        # Provider for elements state
│   │   ├── ElementsContextValue.ts    # Context definition (no components)
│   │   └── useElements.ts             # Custom hook for consuming context
│   ├── pages/
│   │   └── Index.tsx          # Main landing page
│   └── types/
│       └── ElementTypes.ts    # TypeScript types for elements
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Setup & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Install Dependencies
```sh
npm install
# or
yarn install
```

### Start the Development Server
```sh
npm run dev
# or
yarn dev
```

### Lint & Format
```sh
npm run lint
npm run lint --fix
npm run format
```

### Build for Production
```sh
npm run build
```

---

## 💡 Code Style & Architecture
- **Component Files**: Only export React components. All non-component logic (variants, hooks, styles) is in separate files for best Fast Refresh compatibility.
- **Context Separation**: Contexts are defined in files like `ElementsContextValue.ts`, and providers/hooks are in their own files for clarity and maintainability.
- **TypeScript**: Strongly typed throughout for safety and autocompletion.
- **shadcn-ui**: Used for consistent, accessible UI primitives.
- **Tailwind CSS**: Utility-first styling for rapid UI development.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request

All contributions are welcome! Please lint and test your code before submitting.

---

## 🙏 Credits
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📄 License

This project is licensed under the MIT License.
