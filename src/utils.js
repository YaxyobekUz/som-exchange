import gradientColors from "./data/gradientColors";

export const getFirstLetter = (text) => (text ? text[0] : undefined);
export const getRandomGradientColor = () => {
  const randomIndex = Math.floor(Math.random() * gradientColors.length);
  return gradientColors[randomIndex];
};
