export const getLastRecord = (state) => state.records[state.records.length - 1] || {};

export const getNextRecordId = (state) => {
  const { id = 0 } = getLastRecord(state);
  return id + 1;
};
