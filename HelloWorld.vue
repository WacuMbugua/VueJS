<template>
  <div class="box is-info">
    <message>Hello There</message>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.box {background: #3333; padding: 10px solid #555}
</style>
