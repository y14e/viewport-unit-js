export function updateViewportUnit(): void {
  const htmlElement = document.documentElement;
  const width = htmlElement.clientWidth / 100;
  const height = htmlElement.clientHeight / 100;
  Object.assign(htmlElement.style, {
    '--vw': String(width),
    '--vh': String(height),
    '--vmin': String(Math.min(width, height)),
    '--vmax': String(Math.max(width, height)),
  });
}

['DOMContentLoaded', 'resize'].forEach(event => {
  window.addEventListener(event, updateViewportUnit);
});
