<!-- eslint-disable -->

<template>
  <div class="layout">
    this is the page layout
    <!-- <pre>query:
    {{ $route.query }}</pre>-->
    <!-- <pre>{{ $props }}</pre> -->
    <header v-if="header === null">this is the default header....</header>
    <component v-else :is="header"></component>
    <ul class="menu">
      <li>
        <router-link :to="{ name: 'home' }" exact>TAFE Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'section-2' }">Section 2</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'section-3' }">Section 3</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <footer v-if="footer === null">this is the default footer.....</footer>
    <component v-else :is="footer"></component>
  </div>
</template>

<script>
export default {
  name: 'layout',
  props: {
    header: {
      required: false,
      default: null
    },
    footer: {
      required: false,
      default: null
    }
  }
};
</script>
