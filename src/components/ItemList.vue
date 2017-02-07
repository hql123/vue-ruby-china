<template>
  <transition :name="transition">
    <div class="panel panel-default">
      <div v-if="items.length > 24" class="panel-body">
        <spinner v-show="loading"></spinner>
        <item v-for="item in items" :key="item.id" :item="item">
        </item>
      </div>
      <div v-else class="panel-body">
        <h3>已经是最后一页了！</h3>
      </div>
      <div class="panel-footer">
        <Pagination :hasMore="items.length > 24"  />
      </div>
    </div>
  </transition>
</template>
<script>
import Spinner from './Spinner';
import Item from './Item';
import Pagination from './Pagination';

export default {
  name: 'item-list',
  components: {
    Spinner,
    Item,
    Pagination,
  },
  props: {
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

