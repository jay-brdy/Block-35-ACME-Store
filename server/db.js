// client - a node pg client
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/the_acme_store_db');
// createTables method - drops and creates the tables for your application
// createProduct - creates a product in the database and returns the created record
// createUser - creates a user in the database and returns the created record. The password of the user should be hashed using bcrypt.
// fetchUsers - returns an array of users in the database
// fetchProducts - returns an array of products in the database
// fetchFavorites - returns an array favorites for a user
// createFavorite - creates a favorite in the database and returns the created record
// destroyFavorite - deletes a favorite in the database

module.exports = {
    client,
    createTables,
    createUser,
    createProduct,
    fetchUsers,
    fetchProducts,
    fetchFavorites,
    createFavorite,
    destroyFavorite
  };
  