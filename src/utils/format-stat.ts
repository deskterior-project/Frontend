export const formatStat = (stat: number) => {
  if (stat >= 10000) return `${Math.floor(stat / 1000)}m`;
  if (stat >= 1000) return `${Math.floor(stat / 100)}k`;
  return stat;
};
