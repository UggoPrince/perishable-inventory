export const textRule = (field: string) => ({
  [field]: {
    presence: true,
    format: {
      pattern: '^[A-Za-z0-9]+[\\w -.]*$',
    },
    length: {
      minimum: 2,
    },
  },
});

export const numberRule = (number: any) => ({
  [number]: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
    },
  },
});
