// The whole menu lives here. Edit a line, save, and the site updates.
// tags are optional and show as small pills on the photo.
const U = id => `https://images.unsplash.com/photo-${id}?w=800&h=1000&q=80&auto=format&fit=crop`;

// "More" is "more" in English and "the sea" in Croatian.
const CAFE_NAME = 'More';
const CAFE_KIND = 'Café & Brunch';

// Leave img out and the card shows a soft colour block with the name instead.
// price is optional too, add it when the prices are decided.
const MENU = {
  coffee: [
    { name: 'Cappuccino', note: 'Silky milk over a double shot.', img: U('1593443320739-77f74939d0da') },
    { name: 'Flat White', note: 'Smaller, stronger and very smooth.', img: U('1690609561635-f63c587b3aba') },
    { name: 'Matcha Latte', note: 'Whisked to order with the milk you like.', img: U('1582785513054-8d1bf9d69c1a') },
    { name: 'Iced Matcha', note: 'Bright green, cold and lightly sweet.', img: U('1717398804885-a6c22b3e5c2f') },
    { name: 'Iced Latte', note: 'Espresso poured over milk and plenty of ice.', img: U('1562447457-579fc34967fb') },
    { name: 'Fresh Juices', note: 'Pressed when you order, from whatever is ripe.', img: U('1577680716097-9a565ddc2007') },
    { name: 'Smoothies', note: 'Whole fruit blended thick and served cold.' },
  ],
  kitchen: [
    { name: 'Egg & Avo Toast', note: 'With tomatoes picked from the garden.' },
    { name: 'Pesto Sandwich', note: 'Fresh pesto on good bread, made to order.' },
    { name: 'Yogurt Bowl', note: 'Coconut or local yogurt with fruit on top.' },
    { name: 'Charcuterie Board', note: 'A board for the table, made for sharing.' },
  ],
  bakery: [
    { name: 'Banana Bread', note: 'Baked in house and cut into thick slices.' },
    { name: 'Blueberry Lemon Bread', note: 'Sweet blueberries with a bright bit of lemon.' },
    { name: 'Cheesecake', note: 'Worth asking about when you come in.', tags: ['Not Every Day'] },
    { name: 'Cookie', note: 'Big, soft in the middle and best with coffee.' },
  ],
};
