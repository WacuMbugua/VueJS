Vue.component('tabs',{
    template: `
    <div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>

<div class="tabs-details">
    <slot></slot>

    </div>
</div>
    `,
data() {
    return { tabs: [] };
},
    created() {
        this.tabs = this.$children
    },

    /*
    mounted() {
        console.log(this.$children);
    }
});
*/

vue.component('tab', {
    template:  `
    <div><slot></slot></div>
    `,
    props: {
        name:  {required: true}
    }
})

new Vue({
    el: '#root'
});