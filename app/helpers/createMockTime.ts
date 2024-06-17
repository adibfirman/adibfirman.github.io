export const createMockTime = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
