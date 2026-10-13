// The whole menu lives here. Edit a line, save, and the site updates.
// tags are optional and show as small pills on the photo.
const U = id => `https://images.unsplash.com/photo-${id}?w=800&h=1000&q=80&auto=format&fit=crop`;

// "More" is "more" in English and "the sea" in Croatian.
const CAFE_NAME = 'More';
const CAFE_KIND = 'Café & Brunch';

// coffee shows as photo cards; kitchen, bakery and fresh are drawn on the illustrated menu sheet (art = which drawing, scribble = a little handwritten note).
// price is optional too, add it when the prices are decided.
const MENU = {
  coffee: [
    { name: 'Cappuccino', note: 'Silky milk over a double shot.', img: U('1593443320739-77f74939d0da') },
    { name: 'Flat White', note: 'Smaller, stronger and very smooth.', img: U('1690609561635-f63c587b3aba') },
    { name: 'Matcha Latte', note: 'Whisked to order with the milk you like.', img: U('1582785513054-8d1bf9d69c1a') },
    { name: 'Iced Matcha', note: 'Bright green, cold and lightly sweet.', img: U('1717398804885-a6c22b3e5c2f') },
    { name: 'Iced Latte', note: 'Espresso poured over milk and plenty of ice.', img: U('1562447457-579fc34967fb') },
  ],
  kitchen: [
    { name: 'Egg & Avo Toast', art: 'toast', note: 'With tomatoes picked from the garden.' },
    { name: 'Pesto Sandwich', art: 'sandwich', note: 'Fresh pesto on good bread, made to order.' },
    { name: 'Yogurt Bowl', art: 'bowl', note: 'Coconut or local yogurt with fruit on top.' },
    { name: 'Charcuterie Board', art: 'board', note: 'A board for the table, made for sharing.' },
  ],
  bakery: [
    { name: 'Banana Bread', art: 'loaf', note: 'Baked in house and cut into thick slices.' },
    { name: 'Blueberry Lemon Bread', art: 'lemonloaf', note: 'Sweet blueberries with a bright bit of lemon.' },
    { name: 'Cheesecake', art: 'cheesecake', note: 'Worth asking about when you come in.', scribble: 'not every day!' },
    { name: 'Cookie', art: 'cookie', note: 'Big, soft in the middle and best with coffee.' },
  ],
  fresh: [
    { name: 'Fresh Juices', art: 'juice', note: 'Pressed when you order, from whatever is ripe.' },
    { name: 'Smoothies', art: 'smoothie', note: 'Whole fruit blended thick and served cold.' },
  ],
};
