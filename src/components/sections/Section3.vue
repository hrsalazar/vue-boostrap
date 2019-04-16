<template>
  <div class="section3">
    <div class="text-center">
      <b-spinner label="Spinning"></b-spinner>
      <b-spinner type="grow" label="Spinning"></b-spinner>
      <b-spinner variant="primary" label="Spinning"></b-spinner>
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
      <b-spinner variant="success" label="Spinning"></b-spinner>
      <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section3',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
