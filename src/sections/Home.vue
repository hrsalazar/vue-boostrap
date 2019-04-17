<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>TAFE NSW</h2>

    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide caption="First slide" img-src="../../assets/Degrees.jpg">
        </b-carousel-slide>
        <b-carousel-slide caption="Second Slide" img-src="../../assets/Short-Courses.jpg">
        </b-carousel-slide>
        <b-carousel-slide caption="Third Slide" img-src="../../assets/Skills-for-Business.jpg">
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
export default {
  name: 'Home',
  data() {
    return {
      msg: 'TAFE NSW',
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
