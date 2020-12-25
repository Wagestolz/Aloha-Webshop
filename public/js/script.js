(function () {
    new Vue({
        el: '#main',
        data: {
            toggleActive: false,
            cartToggleActive: false,
        },
        mounted: function () {
            console.log('Vue instance mounted');
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
