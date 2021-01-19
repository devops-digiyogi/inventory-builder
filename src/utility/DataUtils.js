export const isNumeric = (value) => {
  const reg = new RegExp('^\\d+$');
  return reg.test(value);
};
