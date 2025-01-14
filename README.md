# Retail Inventory System

A full-stack JavaScript application that simulates a retail inventory management system, inspired by software used in stores like Hollister Co. The system allows users to add clothing items to inventory, manage stock, and track transactions.

1. Installed and Set Up the Technology Stack
Installed and configured the following tools and frameworks:
Backend: Node.js with Express.js
Database: PostgreSQL
Frontend: React.js
Tools:
pgAdmin for database management
GitHub for version control and repository hosting
IDE: Visual Studio Code (VS Code)

2. Completed the Software Requirements Specification (SRS)
Defined the scope, goals, functional requirements, non-functional requirements, and constraints of the project.
Key requirements:
Add, update, delete, and view products in inventory.
Track transactions, including sale details and inventory updates.
Provide user authentication for secure access.
Link to document: https://docs.google.com/document/d/1ghVIMf9DTzvUR7dPp8A1KJ7Z_FYp8XZV_dA58dSAWQs/edit?usp=drive_link

3. Designed System Architecture
Created an architecture diagram representing:
Frontend interacting with backend APIs.
Backend communicating with the PostgreSQL database.
Future scalability considerations.
Link to document: https://docs.google.com/document/d/1Xu849tBqPUWA_mWmsGiXQGkD55ZrQW11un-pvY8k7fQ/edit?usp=drive_link

4. Defined API Endpoints
Designed RESTful API endpoints for the backend, including:
GET /products: Fetch all products.
POST /products: Add a new product.
PUT /products/:id: Update product details.
DELETE /products/:id: Remove a product.
POST /transactions: Record a transaction.
Link to document: https://docs.google.com/document/d/1jhKCcO3kbuKR19FjujR3cYD7MlSNeGcozk51ynvIBl0/edit?usp=drive_link

5. Created Database Schema
Wrote SQL scripts to set up the database:
create_schema.sql: Defines tables for users, products, and transactions.
seed_data.sql: Populates the database with initial test data.
Tables include:
users: Stores user details.
products: Stores product information.
transactions: Tracks sales and inventory updates.

6. Executed SQL Scripts
Used pgAdmin to:
Create the database schema by running create_schema.sql.
Insert initial test data using seed_data.sql.
Verified schema creation and data insertion:
Viewed and edited data directly in pgAdmin.

