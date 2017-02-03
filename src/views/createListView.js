import ItemList from '../components/ItemList';

const createListView = type => ({
  name: `${type}-stories-view`,
  render(h) {
    return h(ItemList, { props: { type } });
  },
});

export default createListView;
