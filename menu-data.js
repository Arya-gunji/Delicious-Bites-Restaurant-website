// Menu Data for Delicious Bites Restaurant
const menuData = {
    appetizers: [
        {
            id: 1,
            name: "Crispy Spring Rolls",
            description: "Fresh vegetables wrapped in crispy pastry, served with sweet chili sauce",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80",
            category: "appetizers"
        },
        {
            id: 2,
            name: "Buffalo Wings",
            description: "Spicy chicken wings tossed in our signature buffalo sauce, served with blue cheese dip",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80",
            category: "appetizers"
        },
        {
            id: 3,
            name: "Mozzarella Sticks",
            description: "Golden fried mozzarella served with marinara sauce",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
            category: "appetizers"
        },
        {
            id: 4,
            name: "Caesar Salad",
            description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese",
            price: 10.99,
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
            category: "appetizers"
        },
        {
            id: 5,
            name: "Garlic Bread",
            description: "Toasted bread with garlic butter and herbs",
            price: 6.99,
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
            category: "appetizers"
        },
        {
            id: 6,
            name: "Shrimp Cocktail",
            description: "Fresh shrimp served with cocktail sauce and lemon",
            price: 14.99,
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
            category: "appetizers"
        }
    ],
    mains: [
        {
            id: 7,
            name: "Grilled Salmon",
            description: "Fresh Atlantic salmon grilled to perfection, served with vegetables and rice",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
            category: "mains"
        },
        {
            id: 8,
            name: "Ribeye Steak",
            description: "12oz premium ribeye steak cooked to your preference, served with mashed potatoes",
            price: 32.99,
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
            category: "mains"
        },
        {
            id: 9,
            name: "Chicken Parmesan",
            description: "Breaded chicken breast topped with marinara sauce and mozzarella, served with pasta",
            price: 18.99,
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
            category: "mains"
        },
        {
            id: 10,
            name: "Beef Burger",
            description: "Angus beef patty with lettuce, tomato, onion, pickles, and special sauce",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
            category: "mains"
        },
        {
            id: 11,
            name: "Margherita Pizza",
            description: "Classic pizza with fresh mozzarella, tomato sauce, and basil",
            price: 16.99,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
            category: "mains"
        },
        {
            id: 12,
            name: "Pasta Carbonara",
            description: "Creamy pasta with bacon, eggs, parmesan cheese, and black pepper",
            price: 17.99,
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
            category: "mains"
        },
        {
            id: 13,
            name: "BBQ Ribs",
            description: "Slow-cooked ribs glazed with our signature BBQ sauce, served with coleslaw",
            price: 22.99,
            image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80",
            category: "mains"
        },
        {
            id: 14,
            name: "Vegetarian Lasagna",
            description: "Layers of pasta, vegetables, and cheese in a rich tomato sauce",
            price: 16.99,
            image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80",
            category: "mains"
        }
    ],
    desserts: [
        {
            id: 15,
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
            category: "desserts"
        },
        {
            id: 16,
            name: "New York Cheesecake",
            description: "Creamy cheesecake with a graham cracker crust, topped with berries",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&q=80",
            category: "desserts"
        },
        {
            id: 17,
            name: "Tiramisu",
            description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
            category: "desserts"
        },
        {
            id: 18,
            name: "Ice Cream Sundae",
            description: "Three scoops of vanilla ice cream with chocolate sauce, whipped cream, and cherry",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
            category: "desserts"
        },
        {
            id: 19,
            name: "Apple Pie",
            description: "Homemade apple pie with cinnamon, served warm with vanilla ice cream",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&q=80",
            category: "desserts"
        },
        {
            id: 20,
            name: "Chocolate Brownie",
            description: "Rich chocolate brownie served warm with vanilla ice cream",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
            category: "desserts"
        }
    ],
    beverages: [
        {
            id: 21,
            name: "Fresh Orange Juice",
            description: "Freshly squeezed orange juice",
            price: 4.99,
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
            category: "beverages"
        },
        {
            id: 22,
            name: "Iced Coffee",
            description: "Chilled coffee with milk and ice",
            price: 5.99,
            image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&q=80",
            category: "beverages"
        },
        {
            id: 23,
            name: "Lemonade",
            description: "Fresh lemonade with mint",
            price: 4.99,
            image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2fdc?w=400&q=80",
            category: "beverages"
        },
        {
            id: 24,
            name: "Mango Smoothie",
            description: "Blended mango with yogurt and honey",
            price: 6.99,
            image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80",
            category: "beverages"
        },
        {
            id: 25,
            name: "Coca Cola",
            description: "Chilled soft drink",
            price: 3.99,
            image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80",
            category: "beverages"
        },
        {
            id: 26,
            name: "Strawberry Milkshake",
            description: "Creamy strawberry milkshake topped with whipped cream",
            price: 6.99,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
            category: "beverages"
        }
    ]
};

// Function to get all menu items
function getAllMenuItems() {
    return [
        ...menuData.appetizers,
        ...menuData.mains,
        ...menuData.desserts,
        ...menuData.beverages
    ];
}

// Function to get menu items by category
function getMenuItemsByCategory(category) {
    if (category === 'all') {
        return getAllMenuItems();
    }
    return menuData[category] || [];
}
