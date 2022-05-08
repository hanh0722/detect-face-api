export const isArray = (array: any): array is Array<unknown> => {
  return array instanceof Array
};

