export function getHeaderHeight(): string {
  const header = document.querySelector('header');
  if (header) {
    const headerHeight = getComputedStyle(header).height;
    return headerHeight;
  }
  return '0px';
}
