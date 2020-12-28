(function () {
    Vue.component('about-component', {
        template: '#about-template',
        data: function () {
            return {};
        },
        mounted: function () {
            console.log('About component mounted');
        },
        methods: {},
    });

    Vue.component('all-products-component', {
        template: '#all-products-template',
        props: ['clickId'],
        data: function () {
            return {
                products: [],
            };
        },
        mounted: function () {
            console.log('Products component mounted');
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                var self = this;
                axios
                    .get('/products')
                    .then(function (res) {
                        self.products = res.data;
                    })
                    .catch(function (error) {
                        console.log('error at GET /products', error);
                    });
            },
            addToCart: function (id) {
                console.log('add to Cart fired for id: ', id);
                this.$emit('cart-addition', id);
            },
        },
    });

    Vue.component('product-component', {
        template: '#product-template',
        props: ['clickId'],
        data: function () {
            return {
                product: {
                    id: '',
                    name: '',
                    price: '',
                    brand: '',
                    fabric: '',
                    colors: [],
                    tags: [],
                    featured: '',
                    description: '',
                    image: [],
                },
                empty: false,
            };
        },
        watch: {
            clickId: 'getProduct',
        },
        mounted: function () {
            this.getProduct();
        },
        methods: {
            getProduct: function () {
                var self = this;
                axios
                    .get(`/product/:${this.clickId}`, {
                        params: { productId: this.clickId },
                    })
                    .then(function (res) {
                        if (res.data.length > 0) {
                            self.product = res.data;
                        } else {
                            self.empty = true;
                            console.log('empty selection');
                        }
                    })
                    .catch(function (error) {
                        console.log('error at GET /products/:productId', error);
                    });
            },
            closeProduct: function () {
                this.$emit('close');
            },
        },
    });

    Vue.component('home-component', {
        template: '#home-template',
        props: ['home'],
        data: function () {
            // data is a function for component (own data set)
            return {
                featuredProducts: [],
                product: false,
            };
        },
        mounted: function () {
            console.log('Home component mounted');
            this.getFeaturedProducts();
        },
        methods: {
            getFeaturedProducts: function () {
                var self = this;
                axios
                    .get('/featured')
                    .then(function (res) {
                        self.featuredProducts = res.data;
                    })
                    .catch(function (error) {
                        console.log('error at GET /featured', error);
                    });
            },
            addToCart: function (id) {
                console.log('add to Cart fired for id: ', id);
                this.$emit('cart-addition', id);
            },
            FireNavProducts: function () {
                this.$emit('all-products');
            },
        },
    });

    new Vue({
        el: '#main',
        data: {
            toggleActive: false,
            cartToggleActive: false,
            featuredProducts: [],
            home: true,
            about: false,
            products: false,
            clickId: location.hash.slice(1),
            cart: [],
            total: 0,
            cartCount: 0,
        },
        mounted: function () {
            var self = this;
            addEventListener('hashchange', function () {
                self.clickId = location.hash.slice(1); // for openProduct
            });
        },
        methods: {
            toggleNav: function () {
                if (!this.toggleActive) {
                    this.toggleActive = true;
                } else {
                    this.toggleActive = false;
                }
            },
            toggleCart: function () {
                if (!this.cartToggleActive) {
                    this.cartToggleActive = true;
                } else {
                    this.cartToggleActive = false;
                }
            },
            closeMe: function () {
                this.clickId = null;
                history.pushState({}, '', '/'); // reset link
            },
            addItemToCart: function (id) {
                console.log('addItemToCart fired with id: ', id);
                var self = this;
                let item = self.cart.find((cartItem) => cartItem.id === id);
                if (!item) {
                    axios
                        .get(`/product/:${id}`, {
                            params: { productId: id },
                        })
                        .then(function (res) {
                            if (res.data.length > 0) {
                                let product = { ...res.data[0], amount: 1 };
                                self.cart.push(product);
                                console.log('cart: ', self.cart);
                                self.cartValue();
                                self.toggleCart();
                            } else {
                                self.empty = true;
                                console.log('empty selection');
                            }
                        })
                        .catch(function (error) {
                            console.log(
                                'error at GET /products/:productId',
                                error
                            );
                        });
                } else {
                    console.log('item already in card: ', item);
                    let index = self.cart.findIndex(
                        (cartItem) => cartItem.id === id
                    );
                    console.log('index: ', index);
                    self.cart[index].amount += 1;
                    console.log('item: ', item);
                    self.cartValue();
                    self.toggleCart();
                }
            },
            removeItem: function (id, index) {
                console.log('clicked removeItem for id and index: ', id, index);
                this.cart.splice(index, 1);
            },
            cartValue: function () {
                this.total = 0;
                this.cartCount = 0;
                for (let i = 0; i < this.cart.length; i++) {
                    let itemTotal =
                        this.cart[i].fields.price * this.cart[i].amount;
                    this.total += itemTotal;
                    this.total =
                        Math.round((this.total + Number.EPSILON) * 100) / 100;
                    this.cartCount += this.cart[i].amount;
                }
            },
            increaseAmount: function (index, id) {
                this.cart[index].amount += 1;
                this.cartValue();
            },
            decreaseAmount: function (index, id) {
                if (this.cart[index].amount > 1) {
                    this.cart[index].amount -= 1;
                    this.cartValue();
                } else {
                    this.removeItem(id, index);
                    this.cartValue();
                }
            },
            navHome: function () {
                this.home = true;
                this.products = false;
                this.about = false;
            },
            navProducts: function () {
                this.products = true;
                this.home = false;
                this.about = false;
            },
            navAbout: function () {
                this.about = true;
                this.products = false;
                this.home = false;
            },
        },
    });
})();
