import Vue from 'vue';
import Home from '@/sections/Home';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.contains('TAFE');
  });
});
