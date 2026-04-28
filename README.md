🛍️ E-Commerce React App

A modern e-commerce web application built using React + TypeScript + Tailwind CSS.
Includes product listing, search with debounce, cart management, filtering, and localStorage persistence.

🚀 Features
🛒 Add to Cart / Remove from Cart
🔄 Cart persistence using localStorage
🔍 Product search with debounce optimization
🎯 Advanced filtering system (category & price)
📦 Product listing from external API
🎨 Modern UI with Tailwind CSS
⚡ Optimized state management using Context API


📦 Tech Stack
React (with TypeScript)
Tailwind CSS
Axios
React Router DOM
React Context API
⚙️ Installation & Setup

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git

2️⃣ Navigate into the project folder
cd your-repo-name

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm run dev

5️⃣ Open in browser
http://localhost:5173

📁 Project Structure
src/
│── components/        # Reusable UI components
│── pages/             # Page-level components
│── context/           # Global store (Cart, Products)
│── assets/            # Images & static files
│── App.tsx
│── main.tsx

🧠 How It Works
🔹 Product Fetching
Products are fetched from an external API using Axios
Stored in global state (allProducts and productData)
🔹 Search System
Uses debounce (500ms delay) to optimize performance
Filters products based on:
Title
Description
Always filters from original dataset to avoid data loss
🔹 Filter System
Users can filter products based on:
📂 Category
💰 Price range
Filters are applied on the original dataset to prevent inconsistent results
Works seamlessly with the search feature
🔹 Cart System
Add/remove items from cart
Increase/decrease quantity
Total price calculated dynamically
🛠️ Future Improvements
✅ User authentication
💳 Payment integration
📦 Order history
🌐 Backend integration
🔎 Advanced filters (rating, brand, availability)
🤝 Contributing

Feel free to fork this repo and improve it. Pull requests are welcome!

📄 License

This project is open-source and available under the MIT License.

👨‍💻 Author

Harshit Yadav

⭐ If you like this project, don’t forget to star the repo!