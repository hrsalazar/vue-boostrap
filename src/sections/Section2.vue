<template>
  <div class="section2">
    <div>
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Some quick example text to build on the card
           title and make up the bulk of the card's content.</b-card-text>

        <b-button href="#" variant="primary">{{ msg }}</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section2',
  data() {
    return {
      msg: 'Text as a message',
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
