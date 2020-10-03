/* eslint-disable no-param-reassign */
export default {
  add(state, action) {
    state.records.push(action.payload);
  },
  update(state, action) {
    const { id, ...data } = action.payload;
    const index = state.records.findIndex((item) => item.id === id);
    if (index > -1) {
      state.records[index] = { id, ...data };
    }
  },
};
