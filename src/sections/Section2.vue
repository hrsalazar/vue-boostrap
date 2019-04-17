<template>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First slide"
      :img-src="imgEnterprise"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      :img-src="imgEnterprise2"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      :img-src="imgEnterprise3"
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
import imgEnterprise from './../assets/img/Enterprise-B2B_Banner.jpg';
import imgEnterprise2 from './../assets/img/Enterprise-B2B_Banner_GEOFF.jpg';
import imgEnterprise3 from './../assets/img/Enterprise-B2B_Banner_ROB.jpg';

console.log(imgEnterprise);

export default {
  name: "Section2",
  data() {
    return {
      imgEnterprise: imgEnterprise,
      imgEnterprise2: imgEnterprise2,
      imgEnterprise3: imgEnterprise3,
    };
  }
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
