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

app.use(express.static('public'));

if (require.main == module) {
    app.listen(process.env.PORT || 8080, () => {
        console.log('Imageboard up and running');
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
