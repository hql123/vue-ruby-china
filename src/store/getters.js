
const activeType = (state) => {
  const current = state.route.path.split('/');
  let newOptions = '';
  const topicId = current[2];
  if (current[1] === 'jobs') {
    newOptions += 'node_id=25';
  }
  if (current[1] === 'homeland') {
    newOptions += 'node_id=23';
  }
  if (state.route.query.node_id) {
    newOptions += `node_id=${state.route.query.node_id}`;
  }
  if (state.route.query.page > 1) {
    const offset = (state.route.query.page - 1) * 25;
    newOptions += `&offset=${offset}`;
  }
  return { newOptions, topicId };
};
export default { activeType };
