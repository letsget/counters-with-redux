export const getTotalCount = (counters) => {
  return counters.reduce((a, e) => a + e.count, 0);
};

export const getMaxCount = (counters) => {
  return counters.reduce((a, e) => (a > e.count ? a : e.count), 0);
};
