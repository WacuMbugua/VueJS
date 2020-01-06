Vue.component('message',{

    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `

    <article class="message" v-show="true">
    <div class="message-header">

    {{ title }}

    <button type="button" @click="hideModal">x</button>
    </div>

    <div class="message-body">
    {{ body }}
    <\div>
    <\article>
    ',
    methods: {
        hideModal() {
            $('.message').
        }
    }
    `,
});

new Vue({
    el: '#root'
});