<template>
  <transition :name="transition">
    <div class="panel panel-default">
      <div class="panel-body">
        <spinner v-show="loading"></spinner>
        <item v-for="item in items" :key="item.id" :item="item">
        </item>
      </div>
      <div class="panel-footer">
      </div>
    </div>
  </transition>
</template>
<script>
import Spinner from './Spinner';
import Item from './Item';

export default {
  name: 'item-list',
  components: {
    Spinner,
    Item,
  },
  props: {
    tab: String,
    loading: false,
    items: Array,
  },
  data() {
    const data = {
      transition: 'slide-up',
    };
    return data;
  },
};
</script>

<style lang="scss">

</style>
