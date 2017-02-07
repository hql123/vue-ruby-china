
<template>
  <nav aria-label="...">
    <ul class="pager">
      <li :class="{ 'disabled': Number(page) === 1 }"><router-link aria-label="Previous" :to="clickPage(page - 1)" ><span aria-hidden="true">&laquo;上一页</span></router-link></li>
      <span>{{ page }}</span>
      <li :class="{ 'disabled': !hasMore }"><router-link aria-label="Next" :to="clickPage(page + 1)" ><span aria-hidden="true">&raquo;下一页</span></router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    hasMore: true,
  },
  computed: {
    route() {
      return this.$route;
    },
    page() {
      return this.$route.query.page === undefined ? 1 : Number(this.$route.query.page);
    },
  },
  methods: {
    clickPage(page) {
      return {
        path: this.route.path,
        query: {
          ...this.route.query,
          page,
        },
      };
    },
  },
};
</script>

<style lang="scss">
.pager{
  margin: 0;
  a{
    &:focus{
      background-color: #fff !important;
    }
  }
}
</style>
