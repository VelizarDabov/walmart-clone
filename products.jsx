const products = [
    // Sweet gifts for less
    {
      category: "Sweet gifts for less",
      price: 10.99,
      name: "Sweet Chocolate Box",
      image: "https://images.pexels.com/photos/7474254/pexels-photo-7474254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Sweet gifts for less",
      price: 15.99,
      name: "Assorted Candy Jar",
      image: "https://images.pexels.com/photos/17594021/pexels-photo-17594021/free-photo-of-a-glass-jar-with-marshmallows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Sweet gifts for less",
      price: 12.49,
      name: "Gourmet Truffle Collection",
      image: "https://images.pexels.com/photos/7174723/pexels-photo-7174723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  
    // Shop Wardrobe
    {
      category: "Shop Wardrobe",
      price: 49.99,
      name: "Denim Jacket",
      image: "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Wardrobe",
      price: 29.99,
      name: "Striped T-shirt",
      image: "https://images.pexels.com/photos/12960395/pexels-photo-12960395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Wardrobe",
      price: 79.99,
      name: "Leather Boots",
      image: "https://images.pexels.com/photos/2308499/pexels-photo-2308499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  
    // Shop Home
    {
      category: "Shop Home",
      price: 39.99,
      name: "Decorative Throw Pillow",
      image: "https://images.pexels.com/photos/5825567/pexels-photo-5825567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Home",
      price: 89.99,
      name: "Modern Coffee Table",
      image: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Home",
      price: 24.99,
      name: "Ceramic Plant Pot",
      image: "https://images.pexels.com/photos/6044708/pexels-photo-6044708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  
    // Shop Electronics
    {
      category: "Shop Electronics",
      price: 599.99,
      name: "Smartphone",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Electronics",
      price: 399.99,
      name: "Wireless Headphones",
      image: "https://images.pexels.com/photos/4383928/pexels-photo-4383928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Electronics",
      price: 149.99,
      name: "Smartwatch",
      image: "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  
    // Shop Toys
    {
      category: "Shop Toys",
      price: 29.99,
      name: "Stuffed Teddy Bear",
      image: "https://images.pexels.com/photos/708774/pexels-photo-708774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Toys",
      price: 19.99,
      name: "Wooden Building Blocks",
      image: "https://images.pexels.com/photos/4473494/pexels-photo-4473494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Toys",
      price: 49.99,
      name: "Remote Control Car",
      image: "https://images.pexels.com/photos/4732649/pexels-photo-4732649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  
    // All you need for Match Day
    {
      category: "All you need for Match Day",
      price: 29.99,
      name: "Soccer Ball",
      image: "https://images.pexels.com/photos/47354/the-ball-stadion-football-the-pitch-47354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "All you need for Match Day",
      price: 9.99,
      name: "Team Jersey",
      image: "https://images.pexels.com/photos/9884917/pexels-photo-9884917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "All you need for Match Day",
      price: 14.99,
      name: "Sports Water Bottle",
      image: "https://images.pexels.com/photos/5069203/pexels-photo-5069203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  
    // Shop Gadgets
    {
      category: "Shop Gadgets",
      price: 49.99,
      name: "Bluetooth Speaker",
      image: "https://images.pexels.com/photos/3779780/pexels-photo-3779780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Gadgets",
      price: 199.99,
      name: "Tablet",
      image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Gadgets",
      price: 99.99,
      name: "Portable Charger",
      image: "https://images.pexels.com/photos/4865059/pexels-photo-4865059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  
    // Shop Beauty
    {
      category: "Shop Beauty",
      price: 19.99,
      name: "Lipstick Set",
      image: "https://images.pexels.com/photos/1776331/pexels-photo-1776331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Beauty",
      price: 29.99,
      name: "Facial Cleanser",
      image: "https://images.pexels.com/photos/11179695/pexels-photo-11179695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      category: "Shop Beauty",
      price: 39.99,
      name: "Perfume",
      image: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  export default products;
  