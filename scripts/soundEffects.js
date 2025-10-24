export const playfulPop = (callback) => {
  new Audio("/assets/sounds/playful-pop.mp3").play();

  // running the callback function (if provided) after playing the sound effect
  if (callback) {
    callback();
  }
};
