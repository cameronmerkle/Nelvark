/**
 * Decorates the hero block with background image and content overlay.
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  const picture = block.querySelector('picture');
  if (picture) {
    picture.classList.add('hero-bg');
    block.prepend(picture);
  }

  const content = document.createElement('div');
  content.className = 'hero-content';

  const row = block.querySelector(':scope > div');
  if (row) {
    const cell = row.querySelector(':scope > div') || row;
    while (cell.firstChild) {
      content.appendChild(cell.firstChild);
    }
    row.remove();
  }

  block.appendChild(content);
}
