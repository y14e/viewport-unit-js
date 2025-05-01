export function updateViewportUnit() {
  const htmlElement = document.documentElement;
  const width = htmlElement.clientWidth / 100;
  const height = htmlElement.clientHeight / 100;
  Object.entries({ w: width, h: height, min: Math.min(width, height), max: Math.max(width, height) }).forEach(([key, value]) => {
    htmlElement.style.setProperty(`--_v${key}`, `${value}px`);
  });
}

['DOMContentLoaded', 'resize'].forEach(event => {
  window.addEventListener(event, updateViewportUnit);
});
