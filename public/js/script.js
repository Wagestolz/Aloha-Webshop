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
                console.log('getProduct fired');
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
                this.$emit('close');
            },
        },
    });

    Vue.component('home-component', {
        template: '#home-template',
        props: ['home', 'clickId'],
        data: function () {
            // data is a function for component (own data set)
            return {
                featuredProducts: [],
            };
        },
        watch: {
            clickId: 'openProduct',
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
            closeMe: function () {
                this.clickId = null;
                history.pushState({}, '', '/'); // reset link
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
            console.log('Vue instance mounted');
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
            // closeMe: function () {
            //     this.clickId = null;
            //     history.pushState({}, '', '/'); // reset link
            // },
        },
    });
})();
