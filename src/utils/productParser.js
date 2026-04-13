// Parse filenames like:
//   "1 TIZERPADIDA A+259,00.png"  → order 1, name "TIZERPADIDA", carousel slot A, price R$259,00
//   "2 BPC-157+199,90.png"        → order 2, name "BPC-157", no carousel slot, price R$199,90
//   "3 GHK-Cu B.png"              → order 3, name "GHK-Cu", carousel slot B, default price
//
// Grouping: products with the same (order + name) are grouped as one card
// and their images become a carousel, ordered by the slot letter (A, B, C...).

import descriptions from './productDescriptions';

export function buildProducts(imageModules, defaultDescription = 'Produto para pesquisa') {
  const groups = new Map();

  Object.entries(imageModules).forEach(([path, src]) => {
    const filename = path.split('/').pop().replace(/\.[^.]+$/, '');

    // Extract optional badge tag [Novo], [Destaque] etc
    const tagMatch = filename.match(/\[([^\]]+)\]/);
    const tag = tagMatch ? tagMatch[1].trim() : null;
    const fileWithoutTag = filename.replace(/\s*\[[^\]]+\]\s*/, '');

    // Split off price if present ("name+price")
    const [namePart, rawPrice] = fileWithoutTag.split('+');
    const price = rawPrice
      ? `R$${rawPrice.trim().replace('.', ',')}`
      : null;

    // Extract leading number (order)
    const orderMatch = namePart.match(/^\s*(\d+)\s+(.*)$/);
    const order = orderMatch ? parseInt(orderMatch[1], 10) : 999;
    const afterOrder = orderMatch ? orderMatch[2] : namePart.trim();

    // Extract trailing single-letter slot (A..Z)
    const slotMatch = afterOrder.match(/^(.*?)\s+([A-Z])\s*$/);
    const name = slotMatch ? slotMatch[1].trim() : afterOrder.trim();
    const slot = slotMatch ? slotMatch[2] : 'A';

    const key = `${order}__${name}`;
    if (!groups.has(key)) {
      groups.set(key, {
        order,
        name,
        price,
        tag,
        description: defaultDescription,
        slots: [],
      });
    }
    const g = groups.get(key);
    g.slots.push({ slot, src });
    if (price && !g.price) g.price = price;
    if (tag && !g.tag) g.tag = tag;
  });

  return Array.from(groups.values())
    .sort((a, b) => a.order - b.order)
    .map((g, i) => {
      g.slots.sort((a, b) => a.slot.localeCompare(b.slot));
      return {
        id: i + 1,
        name: g.name,
        description: descriptions[g.name] || g.description,
        price: g.price || 'R$199,90',
        tag: g.tag || null,
        images: g.slots.map((s) => s.src),
      };
    });
}
