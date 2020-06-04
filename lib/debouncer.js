export const debouncer = (fn, time, interval = 1000) => {
  if(time - (window.debounceTimestamp || 0) > interval) {
    fn && fn();
    window.debounceTimestamp = time;
  }
}