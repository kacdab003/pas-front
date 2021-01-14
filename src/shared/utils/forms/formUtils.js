export const hideMessage = (setMessageVisible, timeout = 2000) => {
  setTimeout(() => {
    setMessageVisible(false);
  }, timeout);
};
