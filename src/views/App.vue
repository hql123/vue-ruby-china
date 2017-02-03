<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
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
};
</script>
<style lang="sass">
  @import '../assets/stylesheets/app.scss'
</style>
<style lang="stylus">

</style>
