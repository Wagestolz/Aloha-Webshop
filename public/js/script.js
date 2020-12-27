(function () {
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
                console.log('getProduct fired and clickId: ', this.clickId);
                // axios
                //     .get('/product', { params: { id: self.clickId } })
                //     .then(function (res) {
                //         if (res.data.notfound) {
                //             console.log(res.data.notfound);
                //             self.closeModal();
                //         }
                //         self.image = res.data[0];
                //     })
                //     .catch(function (error) {
                //         console.log('error at GET /modal', error);
                //     });
            },
            closeProduct: function () {
                console.log('close fired!');
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
                        console.log('res.data: ', res.data);
                        self.featuredProducts = res.data;
                        console.log(
                            'self.featuredProducts: ',
                            self.featuredProducts
                        );
                    })
                    .catch(function (error) {
                        console.log('error at GET /featured', error);
                    });
            },
            openProduct: function () {
                console.log('open Product');
                // var self = this;
                // axios
                //     .get('/product', { params: { id: self.clickId } })
                //     .then(function (res) {
                //         if (res.data.notfound) {
                //             console.log(res.data.notfound);
                //             self.closeModal();
                //         }
                //         self.image = res.data[0];
                //     })
                //     .catch(function (error) {
                //         console.log('error at GET /modal', error);
                //     });
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
            clickId: location.hash.slice(1),
        },
        mounted: function () {
            var self = this;
            console.log('Vue instance mounted, this.clickId: ', this.clickId);
            addEventListener('hashchange', function () {
                self.clickId = location.hash.slice(1); // for openProduct
                console.log('hash change -> self.clickId: ', self.clickId);
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
                console.log('close me in Instance');
                this.clickId = null;
                history.pushState({}, '', '/'); // reset link
            },
        },
    });
})();
