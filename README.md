# VibeCart Backend

This is the **backend API** for the **VibeCart  E-Commerce Cart**, built using **Node.js**, **Express**, **MongoDB**, and **JWT authentication**.  

It supports **user authentication**, **product CRUD**, **user-specific cart management**, and **checkout with mock receipt generation**.

---

## Features

### **User Authentication**
* Register / Login using JWT  
* Token-based authentication middleware for protected routes  
* Handles cart and checkout per user  

### **Product Management**
* Create, update, list, and delete products  
* Products are dynamically shown on frontend  
* Protected routes require authentication  

### **Cart Management**
* Add products to user-specific cart  
* Update product quantity  
* Remove products from cart  
* View cart with total amount  

### **Checkout**
* Submit cart items along with user details (name/email)  
* Generates a mock receipt with total and timestamp  

### **Middleware**
* JWT authentication  
* Error handling for secure routes  

---

## Folder Structure

```
backend/
│── controllers/      # Core API logic for auth, products, cart, checkout
│── middleware/       # JWT auth, error handling
│── models/           # MongoDB models (User, Product, Cart, CartItem)
│── routes/           # Express route definitions (auth, products, cart, checkout)
│── config/           # DB connection and environment configuration
│── server.js         # Server entry point
│── .env              # Environment variables
```

---

## Tech Stack

* **Node.js + Express** – Backend framework  
* **MongoDB (Mongoose)** – Database  
* **JWT** – Authentication  
* **bcryptjs** – Password hashing  
* **dotenv** – Environment management  
* **CORS** – Cross-Origin Resource Sharing  

---

## Environment Configuration (.env)

```
MONGO_URI=********
JWT_SECRET=********
PORT=5000
```

---

## API Endpoints

### **Auth Routes**

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | Register new user       |
| POST   | `/api/auth/login`    | Login and get JWT token |
| GET    | `/api/auth/profile`  | Get logged-in user info |

---

### **Product Routes**

| Method | Endpoint           | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/api/products`    | Fetch all products      |
| POST   | `/api/products`    | Create a new product    |
| PUT    | `/api/products/:id`| Update product details  |
| DELETE | `/api/products/:id`| Delete a product        |

---

### **Cart Routes**

| Method | Endpoint        | Description                      |
| ------ | --------------- | -------------------------------- |
| POST   | `/api/cart`     | Add/update product in user cart  |
| GET    | `/api/cart`     | Get user’s cart with total       |
| DELETE | `/api/cart/:id` | Remove product from cart         |

---

### **Checkout Route**

| Method | Endpoint       | Description                        |
| ------ | -------------- | ---------------------------------- |
| POST   | `/api/checkout`| Submit cart and generate receipt   |

---

## Test Accounts

| Email                           | Password |
| --------------------------------| -------- |
| chandu@gmail.com                | 123456   |
| honey@gmail.com                 | 123456   |

---

## Run Locally

```bash
git clone https://github.com/Chandu5342/EcommerceLatestServer.git
cd backend
npm install
npm run dev
```
The serve live link:(Diployed on the render)
https://ecommercelatestserver.onrender.com
The server will run on:  
👉 `http://localhost:5000`

---
```
PostMan Testing

 1️⃣ Register a User

Endpoint:
POST http://localhost:5000/api/auth/register

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/fc8baf59-c02b-43bc-9606-4c5910db5bd2" />

2️⃣ Login User

Endpoint:
POST http://localhost:5000/api/auth/login

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/bbdf8b18-9ee7-4258-bf0c-cfaf31752991" />

3️⃣ Get All Products

Endpoint:
GET http://localhost:5000/api/products

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/7ab20ec6-bc6c-4a14-90e1-137ca95b59ac" />

4️⃣ Add to Cart

Endpoint:
POST http://localhost:5000/api/cart

5. Create a New Product

Endpoint:
POST http://localhost:5000/api/products

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/8274b2b7-f2b7-4efb-90d7-aca1e4d5649e" />

6.Update a Product

Endpoint:
PUT http://localhost:5000/api/products/<product_id>

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/79486173-47df-4f06-8cc0-1f159f5add7b" />

7.Delete a Product

Endpoint:
DELETE http://localhost:5000/api/products/<product_id>

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/cfb3ac3e-7f0c-4101-9700-39aa27015cc0" />

8.Add to Cart

Endpoint:
POST http://localhost:5000/api/cart

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/170d82dc-9d13-4c78-8b37-62f9c0baa77b" />

9.Get All Cart Items

Endpoint:
GET http://localhost:5000/api/cart

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/656d7c00-5d51-4201-948b-f6c2d2bb9840" />

10.Remove an Item from Cart

Endpoint:
DELETE http://localhost:5000/api/cart/690dee3727c72d457e360907
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/4ebcc13a-5e4e-4305-a240-998e19d90c05" />

11.Checkout

Endpoint:
POST http://localhost:5000/api/checkout

12.Checkout

Endpoint:
POST http://localhost:5000/api/checkout

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/d4eaf2af-359c-4c8f-b702-b6fd29327705" />

```
## Notes

* All protected routes require **JWT token** in the `Authorization` header:  
```
Authorization: Bearer <token>
```


