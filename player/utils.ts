export const vibrate = () => {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(30);
  }
};
