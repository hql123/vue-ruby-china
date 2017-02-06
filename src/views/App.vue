<template>
  <div id="app">
    <HeaderComponent :tab="current" />
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>

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
    }),
  },

};
</script>
<style lang="scss">
  body {
    padding-top:65px;
    background:#e9eaed;
    color:#222527;
  }

</style>
