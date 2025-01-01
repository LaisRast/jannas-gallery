export const convertToDateOnly = (isoDateString: string) => {
  return new Date(isoDateString).toISOString().split('T')[0];
};
