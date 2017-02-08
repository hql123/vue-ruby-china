<template>
  <div id="app">
    <HeaderComponent :tab="current" />
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import $ from 'jquery';
import { mapState } from 'vuex';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
  },

  data() {
    // eslint-disable-next-line
    const data = {
      pages: this.$store.state.itemsPerPage,
    };
    return data;
  },
  computed: {
    ...mapState({
      current: state => state.route.path.split('/')[1],
      route: state => state.route,
    }),
  },
  watch: {
    route() {
      this.hideNav();
    },
  },
  methods: {
    hideNav() {
      $('#bs-example-navbar-collapse-1').collapse('hide');
    },
  },
};
</script>
<style lang="scss">
  @import "../assets/stylesheets/app.css";

</style>
