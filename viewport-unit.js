export function updateViewportUnit() {
  const htmlElement = document.documentElement;
  const width = htmlElement.clientWidth / 100;
  const height = htmlElement.clientHeight / 100;
  const horizontal = /^h/.test(window.getComputedStyle(htmlElement).getPropertyValue('writing-mode'));
  Object.entries({
    '--vw': String(width),
    '--vh': String(height),
    '--vi': String(horizontal ? width : height),
    '--vb': String(horizontal ? height : width),
    '--vmin': String(Math.min(width, height)),
    '--vmax': String(Math.max(width, height)),
  }).forEach(([name, value]) => {
    htmlElement.style.setProperty(name, value);
  });
}

['DOMContentLoaded', 'resize'].forEach(event => {
  window.addEventListener(event, updateViewportUnit);
});
