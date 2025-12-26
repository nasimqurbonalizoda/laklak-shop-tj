Noyob Shop
📱 Project Overview
Noyob Shop is an online store dedicated to selling modern technology and high-quality gadgets. On our site, you can purchase the latest models of smartphones, laptops, tablets, headphones, and other tech devices at competitive prices.
The project is built using a modern frontend stack:

React (v18+) — for the user interface
TypeScript — for strict typing and reducing errors
RTK Query (Redux Toolkit Query) — for server state management (API caching, refetching, pagination, etc.)
React Router — for navigation
Tailwind CSS / SCSS — for fast and modern styling
Vite — for fast and optimized builds

🛠 Key Features

Product catalog with filters (price, brand, category, specifications)
Detailed product pages with images, descriptions, and reviews
Shopping cart with data persistence in localStorage
Order form with validation
Pagination and infinite scroll for product listings
Data caching with RTK Query (reduces API requests)
Fully responsive design — works perfectly on mobile and tablet

🚀 Getting Started
Bash# Clone the repository
git clone https://github.com/username/smart-shop.git

# Navigate to the project folder
cd smart-shop

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
The app will be available at http://localhost:5173.
🗂 Project Structure
textsrc/
├── api/          # RTK Query endpoints and baseQuery
├── app/          # Redux store and configuration
├── components/   # Reusable components (Header, Footer, Card, etc.)
├── features/     # Slices and RTK Query APIs
├── hooks/        # Custom hooks (typed useAppSelector, useAppDispatch)
├── pages/        # Main pages (Home, Catalog, Product, Cart)
├── types/        # TypeScript types (Product, CartItem, etc.)
├── utils/        # Helper functions
└── assets/       # Images, icons
🔄 API
The project works with a mock API (e.g., JSON server or fakestoreapi.com). API configuration is located in src/api/baseApi.ts.
To connect to your own backend, simply update the baseUrl.
🎨 Design
The design is minimalist and modern, using primary colors: black, white, dark blue, with green/orange accents. All components are fully responsive.
🤝 Author
This project was created by me as a portfolio piece and to practice RTK Query. Feedback and suggestions are always welcome!
Contact:
Email: your.odiljonalijon75@gamil.com
Telegram: @Alizoda_N5

⭐ If you like the project, don't forget to star it! 😊