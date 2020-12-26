const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); //
const db = require('./db');
const s3 = require('./s3');
const { s3Url } = require('./config.json');

app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cookieParser());

// featured products
app.get('/featured', (req, res) => {
    console.log('GET request to /featured');
    db.getFeatured()
        .then(({ rows }) => {
            console.log('rows: ', rows);
            res.json(rows);
        })
        .catch((err) => {
            console.log('error in db.getImages: ', err);
        });
});

app.use(express.static('public'));

if (require.main == module) {
    app.listen(process.env.PORT || 8080, () => {
        console.log('Aloha-Shop up and running');
    });
}

// // global imports
// import './src/toggleSidebar.js';
// import './src/cart/toggleCart.js';
// import './src/cart/setupCart.js';
// // specific imports
// import fetchProducts from './src/fetchProducts.js';
// import { setupStore, store } from './src/store.js';
// import display from './src/displayProducts.js';
// import { getElement } from './src/utils.js';
