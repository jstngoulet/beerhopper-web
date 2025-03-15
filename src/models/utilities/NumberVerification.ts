//  Number Validations

export const isDecimal = (value: string): boolean => {
  return /^-?\d*\.?\d*$/.test(value);
};
