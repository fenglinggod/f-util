export const debounce = (func, delay = 200) => {
  let timer;

  const debounced = (...args) => {
    debounced.cancel();
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };

  debounced.cancel = () => {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  };
  return debounced;
};