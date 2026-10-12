// The whole menu lives here. Edit a line, save, and the site updates.
// tags are optional and show as small pills on the photo.
const U = id => `https://images.unsplash.com/photo-${id}?w=800&h=1000&q=80&auto=format&fit=crop`;

const CAFE_NAME = 'Slow Sunday';

const MENU = {
  brunch: [
    { name: 'Avocado Toast', note: 'Sourdough, soft egg, lemon and chili flakes.', price: 11, tags: ['Best Seller'], img: U('1687276287139-88f7333c8ca4') },
    { name: 'Eggs Benedict', note: 'Poached eggs under a blanket of hollandaise.', price: 13, tags: [], img: U('1674315604997-bc5fcaa1ac32') },
    { name: 'Berry Pancakes', note: 'A tall stack with warm berries and maple syrup.', price: 12, tags: ['New'], img: U('1612182062633-9ff3b3598e96') },
    { name: 'Garden Shakshuka', note: 'Eggs baked in tomato and peppers, with bread for dipping.', price: 12, tags: [], img: U('1590412200988-a436970781fa') },
    { name: 'Granola Bowl', note: 'Thick yogurt, house granola, honey and seasonal fruit.', price: 9, tags: [], img: U('1692071106919-01bc0b9b0919') },
    { name: 'Brioche French Toast', note: 'Golden brioche with blueberries and a little butter.', price: 12, tags: ['Weekend Only'], img: U('1620921575116-fb8902865f81') },
  ],
  coffee: [
    { name: 'Cappuccino', note: 'Silky milk over a double shot.', price: 4, tags: ['Best Seller'], img: U('1593443320739-77f74939d0da') },
    { name: 'Flat White', note: 'Smaller, stronger and very smooth.', price: 4, tags: [], img: U('1690609561635-f63c587b3aba') },
    { name: 'Matcha Latte', note: 'Whisked to order with the milk you like.', price: 5, tags: [], img: U('1582785513054-8d1bf9d69c1a') },
    { name: 'Iced Matcha', note: 'Bright green, cold and lightly sweet.', price: 5, tags: ['New'], img: U('1717398804885-a6c22b3e5c2f') },
    { name: 'Iced Latte', note: 'Espresso poured over milk and plenty of ice.', price: 5, tags: [], img: U('1562447457-579fc34967fb') },
    { name: 'Fresh Orange Juice', note: 'Squeezed when you order it and not a minute before.', price: 5, tags: [], img: U('1577680716097-9a565ddc2007') },
  ],
  bakery: [
    { name: 'Butter Croissant', note: 'Flaky outside, soft inside, best eaten warm.', price: 4, tags: ['Best Seller'], img: U('1586657263857-346c4b712ff5') },
    { name: 'Cinnamon Roll', note: 'Soft swirls with a generous pour of icing.', price: 5, tags: [], img: U('1645995575875-ea6511c9d127') },
    { name: 'Morning Bun', note: 'Rolled in cinnamon sugar while still hot.', price: 4, tags: ['Limited Batch'], img: U('1585190775852-3e6bb2b80184') },
    { name: 'Croissant Basket', note: 'Four to share, with butter and jam on the side.', price: 14, tags: [], img: U('1600521853186-93b88b3a07b0') },
    { name: 'Dutch Baby', note: 'A puffed oven pancake with fruit and powdered sugar.', price: 11, tags: [], img: U('1567977701640-3b6cf5037f19') },
  ],
};
