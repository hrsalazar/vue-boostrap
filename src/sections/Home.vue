<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide :img-src="banner">
        </b-carousel-slide>
        <b-carousel-slide :img-src="banner2">
        </b-carousel-slide>
        <b-carousel-slide :img-src="banner3">
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div>
      <b-jumbotron
        lead="Search over 1,200 courses from degrees to diplomas and
        short courses. We’re adding more every day."
      >
        <form>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Search courses -
              E.g. business, nursing, accounting.">
            <small
              id="emailHelp"
              class="form-text text-muted"
            >We'll never share your email with anyone else.</small>
          </div>
        </form>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import banner from '../assets/img/Degrees.jpg';
import banner2 from '../assets/img/Short-Courses.jpg';
import banner3 from '../assets/img/Skills-for-Business.jpg';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'TAFE NSW',
      banner: banner,
      banner2: banner2,
      banner3: banner3,
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
