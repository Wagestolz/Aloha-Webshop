(function () {
    new Vue({
        el: '#main',
        data: {
            toggleActive: false,
            cartToggleActive: false,
            featuredProducts: [],
        },
        mounted: function () {
            console.log('Vue instance mounted');
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
        },
    });
})();
