<template>
<div id="app">
   <h1>App component</h1>
</div>
<template>

<script>
  import User1 from './user1.vue';
  import User2 from './user2.vue';
export default {
    components:{
        'app-user1':User1,
        'app-user2':User2
    }
}

</script>