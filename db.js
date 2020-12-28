const spicedPg = require('spiced-pg');
const db = spicedPg(
    process.env.DATABASE_URL ||
        'postgres:postgres:postgres@localhost:5432/alohawebshop'
);

module.exports.getProducts = () => {
    return db.query(`SELECT * FROM products`);
};

module.exports.getFeatured = () => {
    return db.query(
        `SELECT * 
        FROM products
        WHERE fields ->> 'featured' = 'true'
        ORDER BY id ASC`
    );
};

module.exports.getAllProducts = () => {
    return db.query(
        `SELECT * 
        FROM products
        ORDER BY id ASC`
    );
};

module.exports.getProduct = (productId) => {
    return db.query(
        `SELECT * 
        FROM products
        WHERE id = $1`,
        [productId]
    );
};

// ALTERNATIVELY: WHERE CAST ( fields ->> 'featured' AS BOOLEAN) = true
