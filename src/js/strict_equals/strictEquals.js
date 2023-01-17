const strictEquals = (valueA, valueB) => {
  if (valueA ^ valueB) {
    return false;
  } else {
    return true;
  }
};

strictEquals();

export default strictEquals;
