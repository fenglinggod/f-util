const formArray = (ary) => {
  let arr
  if (Array.isArray(ary)) {
      arr = ary;
  } else {
      arr = Array.prototype.slice.call(ary);
  };
  return arr;
}
export default formArray;