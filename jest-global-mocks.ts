Object.defineProperty(window, 'DragEvent', {
  value: class DragEvent {},
});

Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
});

Object.defineProperty(window, 'fetch', {
  value: () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return { body: { pipeTo: () => {} } };
  },
});
