# Book_cateloge_API
## Live Link : https://book-catallog-backend-assignment-8.vercel.app/


#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/27b2f5db-4710-4235-b17e-afb2f6f13aca (Single GET) 
- api/v1/users/27b2f5db-4710-4235-b17e-afb2f6f13aca (PATCH)
- api/v1/users/27b2f5db-4710-4235-b17e-afb2f6f13aca (DELETE) 
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/ddc4cdfe-944e-4434-8f62-f00e71f5808d (Single GET) 
- api/v1/categories/ddc4cdfe-944e-4434-8f62-f00e71f5808d (PATCH)
- api/v1/categories/ddc4cdfe-944e-4434-8f62-f00e71f5808d (DELETE) 

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET) 
- api/v1/orders/:orderId (GET)
