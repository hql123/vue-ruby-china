
import { mapState } from 'vuex';
import ItemList from '../components/ItemList';

const createListView = tab => ({
  name: `${tab}-topics-view`,
  components: {
    ItemList,
  },
  computed: {
    ...mapState({
      loading: state => state.topic.lists[tab].isFetching,
      items: state => state.topic.lists[tab].items,
    }),
  },
  render(createElement) {
    return createElement(
      'div',
      { attrs: { class: 'row' } },
      [
        createElement(
          'div',
          { attrs: { class: 'col-md-9' } },
          [
            createElement(ItemList, { props: { tab, loading: this.loading, items: this.items } }),
          ]
        ),
        createElement('div', { attrs: { class: 'col-md-3' } }),
      ]
    );
  },
  beforeMount() {
    this.fetchTopics();
  },
  methods: {
    fetchTopics() {
      this.$store.dispatch('refreshTopics', { tab });
      this.$store.dispatch('fetchTopicsIfNeeded', { tab });
    },
  },
});

export default createListView;
