class Gadget {
  constructor(name, color, price, storage, specs, info) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.storage = storage;
    this.specs = specs;
    this.info = info;
  }

  render() {
    const card = document.createElement('article');
    card.className = 'card';

    const specRows = Object.entries(this.specs)
      .map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`)
      .join('');

    card.innerHTML = `
      <h2>${this.name}</h2>
      <div class="meta">
        <span>💰 ${this.price}</span>
        <span>🎨 ${this.color}</span>
        <span>💾 ${this.storage}</span>
      </div>
      <table>
        <tbody>${specRows}</tbody>
      </table>
      <p class="info">${this.info}</p>
    `;

    return card;
  }
}

// Using the `new` keyword to create Gadget instances
const iphone = new Gadget(
  'Apple iPhone 15',
  'Midnight Black, Starlight, Blue, Pink, Yellow',
  '$799',
  '128GB / 256GB / 512GB',
  (() => {
    const s = new Object();
    s.Display = '6.1" Super Retina XDR OLED';
    s.Processor = 'Apple A16 Bionic';
    s.Camera = '48MP main + 12MP ultra-wide';
    s.Battery = '3,877 mAh, up to 20hrs video playback';
    s.OS = 'iOS 17';
    return s;
  })(),
  'The iPhone 15 features a titanium-inspired design with a Dynamic Island notch, USB-C charging, and improved low-light photography. A solid all-rounder for everyday use.'
);

const galaxy = new Gadget(
  'Samsung Galaxy Tab S9',
  'Graphite, Beige, Lavender',
  '$799',
  '128GB / 256GB (expandable via microSD)',
  (() => {
    const s = new Object();
    s.Display = '11" Dynamic AMOLED 2X, 120Hz';
    s.Processor = 'Snapdragon 8 Gen 2';
    s.Camera = '13MP rear + 12MP front';
    s.Battery = '8,400 mAh, 45W fast charging';
    s.OS = 'Android 13 (One UI 5.1)';
    return s;
  })(),
  'The Galaxy Tab S9 is a premium Android tablet with an IP68 water-resistance rating and S Pen included. Great for productivity, media, and creative work.'
);

const container = document.getElementById('gadgets');
[iphone, galaxy].forEach(gadget => container.appendChild(gadget.render()));
