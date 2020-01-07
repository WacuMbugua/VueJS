

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


// Define some routes
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

//Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
const app = new Vue({
  router
}).$mount('#app')



