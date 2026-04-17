/**
 * Decorates the stats block with metric items.
 * @param {Element} block The stats block element
 */
export default function decorate(block) {
  const items = [...block.children];
  const list = document.createElement('div');
  list.className = 'stats-list';

  items.forEach((item) => {
    const stat = document.createElement('div');
    stat.className = 'stats-item';
    const number = item.children[0];
    const label = item.children[1];
    if (number) number.className = 'stats-number';
    if (label) label.className = 'stats-label';
    if (number) stat.append(number);
    if (label) stat.append(label);
    list.append(stat);
  });

  block.textContent = '';
  block.append(list);
}
