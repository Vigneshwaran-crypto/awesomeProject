export const LOG = (text, value) => {
  if (value) {
    console.log(text, value);
  } else {
    console.log(text);
  }
};
