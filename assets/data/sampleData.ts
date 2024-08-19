import { ImageSourcePropType } from 'react-native';

// Define types for your data
type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer' | 'restaurant_owner';
};

type Location = {
  id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  latitude: number;
  longitude: number;
};

type Restaurant = {
  id: string;
  name: string;
  rating: string;
  ratings: string;
  img: ImageSourcePropType;
  distance: string;
  delivery: string;
  tags: string[];
  description: string;
  locationId: string;
  ownerId: string;
};

type Menu = {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
  parentId?: string;
};

type MenuItem = {
  id: string;
  menuId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

type Order = {
  id: string;
  userId: string;
  restaurantId: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'on_the_way' | 'delivered' | 'canceled';
  totalPrice: number;
  createdAt: string;
};

type OrderItem = {
  id: string;
  orderId: string;
  menuItemId: string;
  quantity: number;
  price: number;
};

type Payment = {
  id: string;
  orderId: string;
  paymentMethod: 'credit_card' | 'paypal' | 'cash';
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: string;
};

type Review = {
  id: string;
  restaurantId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type Basket = {
  id: string;
  userId: string;
  restaurantId: string;
};

type BasketItem = {
  id: string;
  basketId: string;
  menuItemId: string;
  quantity: number;
};

// Sample data
export const users: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'customer' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'restaurant_owner' },
  { id: '3', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
];

export const locations: Location[] = [
  { id: '1', address: '123 Main St', city: 'Cityville', state: 'State', zipCode: '12345', country: 'USA', latitude: 40.7128, longitude: -74.0060 },
  { id: '2', address: '456 Elm St', city: 'Townsville', state: 'State', zipCode: '67890', country: 'USA', latitude: 34.0522, longitude: -118.2437 },
];

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Vapiano',
    rating: '4.5 Excellent',
    ratings: '(500+)',
    img: require('@/assets/data/r1.jpeg') as ImageSourcePropType,
    distance: '0.85 miles away',
    delivery: '10-20 min',
    tags: ['Italian', 'Pizza', 'Pasta', 'Salads', 'Vegetarian', 'Alcohol', 'Wine', 'Vegan Friendly'],
    description: 'The home of handmade fresh pasta, thin crust pizza, protein packed salads, homemade sauces and dressings too. Choose your pasta shape and add any extras you like.',
    locationId: '1',
    ownerId: '2',
  },
  {
    id: '2',
    name: 'Burger Joint',
    rating: '4.2 Great',
    ratings: '(300+)',
    img: require('@/assets/data/r2.jpeg') as ImageSourcePropType,
    distance: '1.2 miles away',
    delivery: '15-25 min',
    tags: ['Burgers', 'American', 'Fast Food', 'Vegetarian'],
    description: 'Best burgers in town, made with fresh, local ingredients. Try our signature cheeseburger and fries!',
    locationId: '2',
    ownerId: '2',
  },
];

export const menus: Menu[] = [
  { id: '1', restaurantId: '1', name: 'Pizza Menu', description: 'Delicious pizzas' },
  { id: '2', restaurantId: '2', name: 'Burger Menu', description: 'Juicy burgers' },
];

export const categories: Category[] = [
  { id: '1', name: 'Main Course', description: 'Main dishes' },
  { id: '2', name: 'Drinks', description: 'Beverages' },
  { id: '3', name: 'Desserts', description: 'Sweet treats', parentId: '1' },
];

export const menuItems: MenuItem[] = [
  { id: '1', menuId: '1', name: 'Margherita Pizza', description: 'Classic margherita with tomato and mozzarella', price: 9.99, imageUrl: 'https://example.com/margherita.jpg' },
  { id: '2', menuId: '1', name: 'Pepperoni Pizza', description: 'Spicy pepperoni with cheese', price: 12.99, imageUrl: 'https://example.com/pepperoni.jpg' },
  { id: '3', menuId: '2', name: 'Cheeseburger', description: 'Juicy cheeseburger with all the fixings', price: 8.99, imageUrl: 'https://example.com/cheeseburger.jpg' },
];

export const orders: Order[] = [
  { id: '1', userId: '1', restaurantId: '1', status: 'delivered', totalPrice: 22.98, createdAt: '2024-08-01T12:34:56Z' },
  { id: '2', userId: '1', restaurantId: '2', status: 'preparing', totalPrice: 8.99, createdAt: '2024-08-02T15:20:30Z' },
];

export const orderItems: OrderItem[] = [
  { id: '1', orderId: '1', menuItemId: '1', quantity: 1, price: 9.99 },
  { id: '2', orderId: '1', menuItemId: '2', quantity: 1, price: 12.99 },
  { id: '3', orderId: '2', menuItemId: '3', quantity: 1, price: 8.99 },
];

export const payments: Payment[] = [
  { id: '1', orderId: '1', paymentMethod: 'credit_card', amount: 22.98, status: 'completed', createdAt: '2024-08-01T12:40:00Z' },
  { id: '2', orderId: '2', paymentMethod: 'paypal', amount: 8.99, status: 'pending', createdAt: '2024-08-02T15:25:00Z' },
];

export const reviews: Review[] = [
  { id: '1', restaurantId: '1', userId: '1', rating: 5, comment: 'Great pizza!', createdAt: '2024-08-03T18:00:00Z' },
  { id: '2', restaurantId: '2', userId: '1', rating: 4, comment: 'Tasty burger!', createdAt: '2024-08-04T19:30:00Z' },
];

export const baskets: Basket[] = [
  { id: '1', userId: '1', restaurantId: '1' },
];

export const basketItems: BasketItem[] = [
  { id: '1', basketId: '1', menuItemId: '1', quantity: 2 },
];
