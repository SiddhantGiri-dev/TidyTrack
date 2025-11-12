export const playfulPop = (callback) => {
  new Audio("/assets/sounds/playful-pop.mp3").play();

  // running the callback function (if provided) after playing the sound effect
  if (callback) {
    callback();
  }
};

export const successTing = (callback) => {
  const sound = new Audio("/assets/sounds/success.mp3");

  sound.volume = 0.3;
  sound.play();

  // running the callback function (if provided) after playing the sound effect
  if (callback) {
    callback();
  }
};

