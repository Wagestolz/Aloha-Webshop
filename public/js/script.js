(function () {
    Vue.component('about-component', {
        template: '#about-template',
        data: function () {
            return {};
        },
        mounted: function () {},
        methods: {},
    });

    Vue.component('all-products-component', {
        template: '#all-products-template',
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
                axios
                    .get(`/product/:${id}`, {
                        params: { productId: id },
                    })
                    .then(function (res) {
                        if (res.data.length > 0) {
                            self.cart.push(res.data[0]);
                            console.log('cart: ', self.cart);
                            self.cartValue();
                            self.toggleCart();
                        } else {
                            self.empty = true;
                            console.log('empty selection');
                        }
                    })
                    .catch(function (error) {
                        console.log('error at GET /products/:productId', error);
                    });
            },
            removeItem: function (id, index) {
                console.log('clicked removeItem for id and index: ', id, index);
                this.cart.splice(index, 1);
            },
            cartValue: function () {
                this.total = 0;
                for (let i = 0; i < this.cart.length; i++) {
                    this.total += this.cart[i].fields.price;
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
