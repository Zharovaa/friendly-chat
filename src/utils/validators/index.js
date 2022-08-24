export const required = value => {
  if (value) return false;
  return 'Field is required';
};

export const maxLengthCreator = maxLength => value => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return false;
};
