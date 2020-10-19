export const getParent = (
  element: HTMLElement,
  className: string,
): HTMLElement | null => {
  if (!element) {
    throw new Error('element is not exist');
  }
  if (element.classList.contains(className)) {
    return element;
  }

  if (element.parentElement) {
    return getParent(element.parentElement, className);
  }

  return null;
};
