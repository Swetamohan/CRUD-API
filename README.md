# 🛒 Product Management API

A simple backend with Node.js REST API built with Express and MongoDB for managing products. This API supports CRUD operations (Create, Read, Update, Delete) and is ideal for learning backend fundamentals or small e-commerce projects.

---

## 🚀 Features

- Add new products  
- Get all or single product  
- Update existing products  
- Delete products  
- JSON-based requests and responses  
- Tested using Insomnia  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (via Mongoose)  
- Insomnia / Postman (for testing)  

---

## 📦 Installation

1. **Clone the repository**
  
   git clone https://github.com/username/repo-name.git   
   cd repo-name

3. **Install dependencies**

   npm install

4. **Add MongoDB connection**

   Update your MongoDB URI in index.js:
   mongoose.connect('your-mongodb-uri-here')

6. **Run the server**

   npm start
   Server runs on: http://localhost:3000


## 🧪 API Endpoints

    GET (Get all products) /api/products  
    GET (Get single product) /api/products/:id  
    POST (Add a new product) /api/products  
    PUT (Update a product) /api/products/:id  
    DELETE (Delete a product) /api/products/:id  

---

## 🧾 Sample JSON (POST/PUT)

    {
      "name": "brownie",
      "quantity": 15,
      "price": 4.99,
      "image": "https://example.com/images/brownie.jpg"
    }

---

## 📂 Project Structure

    ├── controllers
    │   └── product.controller.js
    ├── models
    │   └── product.model.js
    ├── routes
    │   └── product.route.js
    ├── index.js
    └── README.md

---

## Notes

- Uses express.json() middleware for parsing JSON.
- MongoDB must be running locally or use a cloud URI (MongoDB Atlas).
- API tested using Insomnia.
