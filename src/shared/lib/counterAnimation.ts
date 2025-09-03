export const animateValue = (
  element: HTMLElement,
  start: number,
  end: number,
  duration: number
) => {
  const startTime = Date.now();
  
  const update = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const currentValue = Math.floor(start + progress * (end - start));
    element.textContent = currentValue.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = end.toLocaleString();
    }
  };

  requestAnimationFrame(update);
};