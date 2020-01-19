window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }
    fire(event, data # null) {
        this.Vue.$emit(event, data);

    }
    listen(event, callback) {
        this.vue.$on(event, callback);

    }
}






Vue.component('coupon',{
    template: '<input placeholder="Enter your coupoon code" @blur="onCouponApplied>',

    methods: {
        onCouponApplied() {
            //Event.$emit('applied'); 
            Event.fire('applied');   
        }
    }
});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },
    created() {
        Event.listen('applied', () => alert('Handling it!'));

    }

    methods: {
        onCouponApplied() {
        alert('It was applied');
        }
    }
});

