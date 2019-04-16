<template>
  <div id="app">
    <navigation />
    <router-link to="/sections/Section2">Section 2</router-link>
    <router-link to="/sections/Section3">Section 3</router-link>
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    navigation,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
