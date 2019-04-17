<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand><router-link :to="{ name: 'home' }" exact>TAFE</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Study with us">
            <b-dropdown-item><router-link :to="{ name: 'home' }" exact>TAFE Home</router-link></b-dropdown-item>
            <b-dropdown-item ><router-link :to="{ name: 'section-2' }" exact>Section 2</router-link></b-dropdown-item>
            <b-dropdown-item ><router-link :to="{ name: 'section-3' }" exact>Section 3</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Enrol">
            <b-dropdown-item href="#">Course</b-dropdown-item>
            <b-dropdown-item href="#">Short course</b-dropdown-item>
            <b-dropdown-item href="#">Places to study</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Why TAFE NSW?">
            <b-dropdown-item href="#">Course</b-dropdown-item>
            <b-dropdown-item href="#">Short course</b-dropdown-item>
            <b-dropdown-item href="#">Places to study</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      title: "TAFE NSW"
    };
  }
};
</script>

<style scoped>
</style>
