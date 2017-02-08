
<template>
  <nav aria-label="...">
    <ul class="pager">
      <li v-if="Number(page) === 1"><span><span aria-hidden="true">&laquo;上一页</span></span></li>
      <li v-else class="disabled"><router-link aria-label="Previous" :to="clickPage(page - 1)" ><span aria-hidden="true">&laquo;上一页</span></router-link></li>
      <span>{{ page }}</span>
      <li v-if="hasMore"><router-link aria-label="Next" :to="clickPage(page + 1)" ><span aria-hidden="true">&raquo;下一页</span></router-link></li>
      <li v-else class="disabled"><span><span aria-hidden="true">&raquo;下一页</span></span></li>
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
