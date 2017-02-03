<template>
  <div id="app">
    <HeaderComponent :tab={current} />
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  // eslint-disable-next-line
  

  computed: {
    current() {
      return this.$route.path.split('/')[1];
    },
  },
};
</script>
<style lang="scss">
  .fade-enter-active, .fade-leave-active{
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }

</style>
