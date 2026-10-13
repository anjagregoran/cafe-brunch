// The whole menu lives here. Edit a line, save, and the site updates.
// tags are optional and show as small pills on the photo.
// "More" is "more" in English and "the sea" in Croatian.
const CAFE_NAME = 'More';
const CAFE_KIND = 'Café & Brunch';

// Everything is drawn: art = which drawing from art.js, scribble = a little handwritten note.
// price is optional too, add it when the prices are decided.
const MENU = {
  coffee: [
    { name: 'Cappuccino', art: 'cappuccino', note: 'Silky milk over a double shot.' },
    { name: 'Flat White', art: 'flatwhite', note: 'Smaller, stronger and very smooth.' },
    { name: 'Matcha Latte', art: 'matcha', note: 'Whisked to order with the milk you like.' },
    { name: 'Iced Latte', art: 'icedlatte', note: 'Espresso poured over milk and plenty of ice.' },
    { name: 'Iced Matcha', art: 'icedmatcha', note: 'Bright green, cold and lightly sweet.' },
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
