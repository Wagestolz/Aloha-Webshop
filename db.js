const spicedPg = require('spiced-pg');
const db = spicedPg(
    process.env.DATABASE_URL ||
        'postgres:postgres:postgres@localhost:5432/alohawebshop'
);

module.exports.getProducts = () => {
    return db.query(`SELECT * FROM products`);
};
