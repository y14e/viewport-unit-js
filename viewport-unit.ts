export function updateViewportUnit(): void {
  const htmlElement = document.documentElement;
  const width = htmlElement.clientWidth / 100;
  const height = htmlElement.clientHeight / 100;
  const isHorizontal = window.getComputedStyle(htmlElement).getPropertyValue('writing-mode').startsWith('horizontal');
  Object.entries({
    '--vw': String(width),
    '--vh': String(height),
    '--vi': String(isHorizontal ? width : height),
    '--vb': String(isHorizontal ? height : width),
    '--vmin': String(Math.min(width, height)),
    '--vmax': String(Math.max(width, height)),
  }).forEach(([name, value]) => {
    htmlElement.style.setProperty(name, value);
  });
}

['DOMContentLoaded', 'orientationchange', 'resize'].forEach(event => {
  window.addEventListener(event, updateViewportUnit);
});
