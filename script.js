// DOM Elements
const locateBtn = document.querySelector('.locate-btn');
const locationInput = document.querySelector('.location-input input');
const searchInput = document.querySelector('.food-search input');
const locationDropdown = document.querySelector('#location-dropdown');
const currentLocationBtn = document.querySelector('.current-location');
const locationItems = document.querySelectorAll('.location-item');

// Food Categories Scroll Navigation
const categoriesGrid = document.querySelector('.categories-grid');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Scroll amount for each click (width of one category item plus gap)
const scrollAmount = 170; // 150px (item width) + 20px (gap)

// Grocery Categories Scroll Navigation
const groceryGrid = document.querySelector('.grocery-categories');
const prevBtnGrocery = document.querySelector('.prev-btn-grocery');
const nextBtnGrocery = document.querySelector('.next-btn-grocery');

// Scroll amount for grocery items (width of one item plus gap)
const groceryScrollAmount = 210; // 180px (item width) + 30px (gap)


const restaurants = {
    "Kharghar": [
        {
            name: "Domino's Pizza",
            cuisine: "Pizza, Fast Food",
            rating: 4.2,
            deliveryTime: "30 mins",
            priceForTwo: "₹400 for two",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/juffeaqtqr7jwoe3h7j8",
            offers: ["50% off up to ₹100", "Free delivery"],
            promoted: true,
            veg: true
        },
        {
            name: "Biryani House",
            cuisine: "Biryani, North Indian, Mughlai",
            rating: 4.0,
            deliveryTime: "35 mins",
            priceForTwo: "₹300 for two",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a997a7412d6a45d39869768e634a848e",
            offers: ["20% off on all orders"],
            veg: false
        },
        {
            name: "Chinese Wok",
            cuisine: "Chinese, Asian, Thai",
            rating: 4.3,
            deliveryTime: "25 mins",
            priceForTwo: "₹400 for two",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
            offers: ["Free delivery on orders above ₹199"],
            promoted: true,
            veg: false
        },
        {
            name: "McDonald's",
            cuisine: "Burgers, Fast Food, Beverages",
            rating: 4.1,
            deliveryTime: "20 mins",
            priceForTwo: "₹400 for two",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
            offers: ["Free McSpicy Chicken on orders above ₹699"],
            veg: false
        },
        {
            name: "Subway",
            cuisine: "Healthy Food, Salads, Sandwiches",
            rating: 4.0,
            deliveryTime: "25 mins",
            priceForTwo: "₹350 for two",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
            offers: ["Buy 1 Get 1 Free on Subs"],
            veg: true
        },
        {
            name: "Barista Coffee",
            cuisine: "Cafe, Coffee, Tea, Desserts, Fast Food",
            rating: 4.4,
            deliveryTime: "20 mins",
            priceForTwo: "₹200 for two",
            image: "https://b.zmtcdn.com/data/pictures/2/20627762/e70a0cf8b3b4e2e19741196c50681850.jpg",
            offers: ["10% off on all orders"],
            promoted: true,
            
        }
    ],
    "Vashi": [
        {
            name: "McDonald's",
            cuisine: "Burgers, Fast Food",
            rating: 4.1,
            deliveryTime: "25 mins",
            priceForTwo: "₹400 for two"
        },
        {
            name: "Chinese Wok",
            cuisine: "Chinese, Asian",
            rating: 4.3,
            deliveryTime: "40 mins",
            priceForTwo: "₹500 for two"
        }
    ],
    // Add more restaurants for other locations
};

// Update restaurant menus without health info
const restaurantMenus = {
    "Domino's Pizza": {
        name: "Domino's Pizza",
        items: [
            {
                name: "Margherita Pizza",
                price: 249,
                description: "Classic delight with 100% real mozzarella cheese",
                veg: true,
                bestseller: true,
                image: "https://images.dominos.co.in/new_margherita_2502.jpg"
            },
            { name: "Farmhouse Pizza", price: 459, description: "Delightful combination of onion, capsicum, tomato & grilled mushroom", veg: true, image: "https://images.dominos.co.in/farmhouse.png" },
            { name: "Peppy Paneer Pizza", price: 399, description: "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/4/2d39b321-625f-4027-8025-36dcb7b16b72_70721410-e63e-4f77-9fb4-0ad31f747956.jpg" },
            { name: "Non Veg Supreme Pizza", price: 599, description: "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/5/29/aba46593-d03e-4c51-99ff-6bca00011011_3d144997-c87b-4f90-b239-3f39b8bead94.jpg" },
            { name: "Garlic Breadsticks", price: 149, description: "Baked to perfection. Your perfect pizza partner!", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/18/2cfcdff6-35db-4bb4-a086-81d9e60df845_d1e13486-6d1d-440c-bfcd-68f16caa1bb0.jpg" },
            { name: "Pepsi (500ml)", price: 60, description: "Sparkling and Refreshing Beverage", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/5/7/dc23843d-5fdc-4f94-a852-ab140ee2ec96_c68da80e-4ffa-4901-a6e6-13b2284de59c.jpg" }
        ]
    },
    "Biryani House": {
        name: "Biryani House",
        items: [
            { name: "Chicken Biryani", price: 299, description: "Aromatic basmati rice cooked with tender chicken pieces in authentic spices", veg: false, bestseller: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uqffjuvkqyhvgwtcxayj" },
            { name: "Mutton Biryani", price: 399, description: "Tender mutton pieces cooked with finest basmati rice and spices", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cxcpk4lqouqabnvgslck" },
            { name: "Veg Biryani", price: 249, description: "Fresh vegetables cooked with aromatic rice and spices", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rqxv3npgwpvzxsdqsqeh" },
            { name: "Chicken Kebab", price: 249, description: "Tender chicken pieces marinated and grilled to perfection", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rwlqzl8x2opirwc1zgcx" },
            { name: "Raita", price: 49, description: "Cool and refreshing yogurt with mild spices", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ac1staxtn1lpwvsxgxhb" }
        ]
    },
    "Chinese Wok": {
        name: "Chinese Wok",
        items: [
            { name: "Veg Hakka Noodles", price: 199, description: "Wok tossed noodles with fresh vegetables", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yod1z8xkxkqwgnug2zs4" },
            { name: "Chicken Fried Rice", price: 249, description: "Flavorful rice with chicken and vegetables", veg: false, bestseller: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/af33b81798b11deba338e94b7585d348" },
            { name: "Paneer Manchurian", price: 279, description: "Crispy paneer in spicy manchurian sauce", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/tbkqcrs1rprgvjjj4j8k" },
            { name: "Chilli Chicken", price: 299, description: "Spicy Indo-Chinese style chicken", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7" },
            { name: "Veg Spring Rolls", price: 149, description: "Crispy rolls filled with mixed vegetables", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f6kshrglzusn1hgfitha" }
        ]
    },
    "McDonald's": {
        name: "McDonald's",
        items: [
            { name: "McSpicy Chicken Burger", price: 199, description: "Crispy chicken patty with spicy sauce", veg: false, bestseller: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vzw6fpgb9rp8pj9kqwwc" },
            { name: "McVeggie Burger", price: 149, description: "Mixed vegetable patty with fresh veggies", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/v8j8prgc9vulvvruqscj" },
            { name: "French Fries (M)", price: 99, description: "Golden crispy fries", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cy5djbvzrdtzntcervt5" },
            { name: "Chicken McNuggets (6pc)", price: 199, description: "Tender and juicy chicken nuggets", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c0b6y0complyk3a5jzv6" },
            { name: "McFlurry Oreo", price: 129, description: "Soft serve with Oreo cookie bits", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qh6qz8ddszjjvzb9kd9x" }
        ]
    },
    "Subway": {
        name: "Subway",
        items: [
            { name: "Paneer Tikka Sub (6-inch)", price: 249, description: "Tandoori style paneer with veggies", veg: true, bestseller: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d161d12339312ffe8cfe403a721b9d73" },
            { name: "Chicken Teriyaki Sub (6-inch)", price: 279, description: "Teriyaki glazed chicken with fresh veggies", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1b1a1fbf6627487b3f6c35341a1a3d03" },
            { name: "Veggie Delite Sub (6-inch)", price: 199, description: "Fresh crunchy vegetables", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d9a979c73b17d0a7eea6655d4c406890" },
            { name: "Tuna Sub (6-inch)", price: 259, description: "Flaked tuna mixed with lite mayonnaise", veg: false, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/8b6d6f4eef50c103d30915e1bdb45cb4" },
            { name: "Cookie", price: 49, description: "Freshly baked cookies", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/6d7c8f4d300682c53f93901f65b71dd0" }
        ]
    },
    "Barista Coffee": {
        name: "Barista Coffee",
        items: [
            { name: "Cappuccino", price: 179, description: "Espresso with steamed milk and foam", veg: true, bestseller: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qtdsrw3yqgwc8cjbk0qr" },
            { name: "Cold Coffee", price: 199, description: "Creamy blended coffee frappe", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d461de295a6654e6af861c3014c48ac4" },
            { name: "Chocolate Brownie", price: 149, description: "Rich chocolate brownie", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rjl1vcustf47jhzngicj" },
            { name: "Grilled Sandwich", price: 199, description: "Vegetables and cheese grilled sandwich", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/af33b81798b11deba338e94b7585d348" },
            { name: "Green Tea", price: 129, description: "Pure and refreshing green tea", veg: true, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hqskrzg3hqc5ynqbxq3d" }
        ]
    }
};

// User health preferences (will be stored in localStorage)
const defaultHealthPreferences = {
    dietaryRestrictions: [],
    allergens: [],
    calorieGoal: 2000,
    trackNutrition: false,
    healthAppConnected: false
};

// Initialize user health preferences
if (!localStorage.getItem('healthPreferences')) {
    localStorage.setItem('healthPreferences', JSON.stringify(defaultHealthPreferences));
}

// Show/hide location dropdown
locationInput.addEventListener('click', () => {
    locationDropdown.classList.add('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!locationInput.contains(e.target) && !locationDropdown.contains(e.target)) {
        locationDropdown.classList.remove('active');
    }
});

// Handle location selection
locationItems.forEach(item => {
    item.addEventListener('click', () => {
        const location = item.getAttribute('data-location');
        locationInput.value = location;
        locationDropdown.classList.remove('active');
        showRestaurantsWithLoading(location.split(',')[0]);
    });
});

// Get current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        locationInput.value = "Detecting location...";
        showLoadingShimmer(); 

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    
                    // Use OpenStreetMap Nominatim API for reverse geocoding
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );
                    
                    if (!response.ok) throw new Error('Geocoding failed');
                    
                    const data = await response.json();
                    
                    // Extract city and area from the response
                    const area = data.address.suburb || data.address.neighbourhood || data.address.residential;
                    const city = data.address.city || data.address.town;
                    
                    if (area && city) {
                        locationInput.value = `${area}, ${city}`;
                        // If the location is in Navi Mumbai, show restaurants
                        if (city.toLowerCase().includes('navi mumbai')) {
                            await new Promise(resolve => setTimeout(resolve, 1000)); // Add small delay for better UX
                            showRestaurants(area);
                        } else {
                            alert('Sorry, we currently serve only in Navi Mumbai.');
                            locationInput.value = '';
                        }
                    } else {
                        throw new Error('Location not found');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    locationInput.value = '';
                    showLocationError();
                }
            },
            (error) => {
                console.error('Geolocation error:', error);
                locationInput.value = '';
                showLocationError();
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    } else {
        showLocationError('Geolocation is not supported by your browser');
    }
}

// Show location error message
function showLocationError(message = 'Unable to get your location. Please enter it manually.') {
    // Remove any existing error message
    const existingError = document.querySelector('.location-error');
    if (existingError) {
        existingError.remove();
    }

    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'location-error';
    errorDiv.innerHTML = `
        <div class="error-content">
            <p>${message}</p>
            <button class="error-close">OK</button>
        </div>
    `;

    // Add error styles
    const style = document.createElement('style');
    style.textContent = `
        .location-error {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .error-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            max-width: 90%;
            width: 400px;
        }
        .error-content p {
            margin-bottom: 15px;
            color: #282c3f;
        }
        .error-close {
            background: #fc8019;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
        }
        .error-close:hover {
            background: #e67312;
        }
    `;
    document.head.appendChild(style);

    // Add to document
    document.body.appendChild(errorDiv);

    // Handle close button click
    const closeBtn = errorDiv.querySelector('.error-close');
    closeBtn.addEventListener('click', () => {
        errorDiv.remove();
    });
}

// Handle current location button click
currentLocationBtn.addEventListener('click', () => {
    getCurrentLocation();
    locationDropdown.classList.remove('active');
});

locateBtn.addEventListener('click', () => {
    getCurrentLocation();
});

// Function to display restaurants for selected location
function showRestaurants(location) {
    const restaurantList = restaurants[location];
    if (restaurantList) {
        let restaurantsSection = document.querySelector('.restaurants-section');
        if (!restaurantsSection) {
            restaurantsSection = document.createElement('section');
            restaurantsSection.className = 'restaurants-section';
            document.querySelector('.hero').insertAdjacentElement('afterend', restaurantsSection);
        }

        restaurantsSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">Restaurants in ${location}</h2>
                <div class="restaurants-grid">
                    ${restaurantList.map(restaurant => `
                        <div class="restaurant-card ${restaurant.promoted ? 'promoted' : ''}">
                            <div class="restaurant-image">
                                <img src="${restaurant.image}" alt="${restaurant.name}">
                                ${restaurant.promoted ? '<span class="promoted-label">Promoted</span>' : ''}
                                ${restaurant.offers ? `
                                    <div class="offers">
                                        <i class="fas fa-tag"></i>
                                        ${restaurant.offers[0]}
                                    </div>
                                ` : ''}
                            </div>
                            <div class="restaurant-info">
                                <h3>${restaurant.name}</h3>
                                <p class="cuisine">${restaurant.cuisine}</p>
                                <div class="restaurant-meta">
                                    <span class="rating ${getRatingColor(restaurant.rating)}">
                                        <i class="fas fa-star"></i>
                                        ${restaurant.rating}
                                    </span>
                                    <span class="dot">•</span>
                                    <span class="time">
                                        <i class="fas fa-clock"></i>
                                        <span class="delivery-time">${restaurant.deliveryTime}</span>
                                        <div class="time-progress">
                                            <div class="progress-bar"></div>
                                        </div>
                                    </span>
                                    <span class="dot">•</span>
                                    <span class="price">${restaurant.priceForTwo}</span>
                                </div>
                                ${restaurant.veg ? '<span class="veg-label"><i class="fas fa-leaf"></i> Pure Veg</span>' : ''}
                            </div>
                            <div class="quick-view">
                                <span>QUICK VIEW</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Add styles for restaurants section
        const style = document.createElement('style');
        style.textContent = `
            .restaurants-section {
                padding: 40px 0;
                background-color: #f8f8f8;
            }
            .restaurants-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
                gap: 30px;
                margin-top: 20px;
            }
            .restaurant-card {
                background: white;
                border-radius: 8px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.2s;
                position: relative;
                border: 1px solid #e9e9eb;
            }
            .restaurant-card:hover {
                transform: scale(1.02);
            }
            .restaurant-image {
                position: relative;
                height: 200px;
                overflow: hidden;
            }
            .restaurant-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s;
            }
            .restaurant-card:hover .restaurant-image img {
                transform: scale(1.05);
            }
            .restaurant-info {
                padding: 20px;
            }
            .restaurant-info h3 {
                font-size: 18px;
                margin-bottom: 8px;
                color: #282c3f;
            }
            .cuisine {
                color: #686b78;
                font-size: 14px;
                margin-bottom: 8px;
            }
            .restaurant-meta {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 14px;
                margin-bottom: 10px;
            }
            .rating {
                padding: 2px 8px;
                color: white;
                display: flex;
                align-items: center;
                gap: 4px;
                font-weight: 500;
                border-radius: 4px;
            }
            .rating.good {
                background-color: #48c479;
            }
            .rating.average {
                background-color: #db7c38;
            }
            .rating.poor {
                background-color: #e1b055;
            }
            .dot {
                color: #686b78;
            }
            .offers {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 100%);
                color: white;
                padding: 10px;
                font-size: 14px;
            }
            .offers i {
                color: #fc8019;
                margin-right: 5px;
            }
            .promoted-label {
                position: absolute;
                top: 0;
                left: 0;
                background: rgb(58, 60, 65);
                color: white;
                padding: 4px 8px;
                font-size: 12px;
                border-radius: 0 0 4px 0;
            }
            .veg-label {
                color: #48c479;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .quick-view {
                opacity: 0;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: #171a29;
                color: white;
                text-align: center;
                padding: 8px;
                font-size: 13px;
                font-weight: 600;
                transition: opacity 0.3s;
            }
            .restaurant-card:hover .quick-view {
                opacity: 1;
            }
            @media (max-width: 768px) {
                .restaurants-grid {
                    grid-template-columns: 1fr;
                    gap: 20px;
                    padding: 0 15px;
                }
                .restaurant-image {
                    height: 160px;
                }
            }
        `;
        document.head.appendChild(style);

        // Add click handler to restaurant cards
        document.querySelectorAll('.restaurant-card').forEach(card => {
            card.addEventListener('click', () => {
                const restaurantName = card.querySelector('h3').textContent;
                const restaurant = restaurants[location].find(r => r.name === restaurantName);
                if (restaurant) {
                    createMenuModal(restaurant);
                }
            });
        });
    }
}

// Helper function to determine rating color
function getRatingColor(rating) {
    if (rating >= 4.0) return 'good';
    if (rating >= 3.0) return 'average';
    return 'poor';
}

// Simple search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Here you would typically make an API call to search for restaurants
    // For demo purposes, we'll just log the search term
    console.log('Searching for:', searchTerm);
});

// Add smooth scroll behavior for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href !== '#') {
            // Here you would typically handle navigation
            console.log('Navigating to:', href);
        }
    });
});

// Add hover effects for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

nextBtn.addEventListener('click', () => {
    categoriesGrid.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    categoriesGrid.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// Show/hide navigation buttons based on scroll position
categoriesGrid.addEventListener('scroll', () => {
    const maxScroll = categoriesGrid.scrollWidth - categoriesGrid.clientWidth;
    
    prevBtn.style.opacity = categoriesGrid.scrollLeft <= 0 ? '0.5' : '1';
    nextBtn.style.opacity = categoriesGrid.scrollLeft >= maxScroll ? '0.5' : '1';
});

// Initialize button states
prevBtn.style.opacity = '0.5';

nextBtnGrocery.addEventListener('click', () => {
    groceryGrid.scrollBy({
        left: groceryScrollAmount,
        behavior: 'smooth'
    });
});

prevBtnGrocery.addEventListener('click', () => {
    groceryGrid.scrollBy({
        left: -groceryScrollAmount,
        behavior: 'smooth'
    });
});

// Show/hide navigation buttons based on scroll position
groceryGrid.addEventListener('scroll', () => {
    const maxScroll = groceryGrid.scrollWidth - groceryGrid.clientWidth;
    
    prevBtnGrocery.style.opacity = groceryGrid.scrollLeft <= 0 ? '0.5' : '1';
    nextBtnGrocery.style.opacity = groceryGrid.scrollLeft >= maxScroll ? '0.5' : '1';
});

// Initialize grocery navigation button states
prevBtnGrocery.style.opacity = '0.5';

// Function to show loading animation
function showLoadingShimmer() {
    let restaurantsSection = document.querySelector('.restaurants-section');
    if (!restaurantsSection) {
        restaurantsSection = document.createElement('section');
        restaurantsSection.className = 'restaurants-section';
        document.querySelector('.hero').insertAdjacentElement('afterend', restaurantsSection);
    }

    restaurantsSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">Loading Restaurants</h2>
            <div class="dots-loader">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="restaurants-grid">
                ${Array(6).fill().map(() => `
                    <div class="restaurant-card">
                        <div class="shimmer-img"></div>
                        <div class="shimmer-content">
                            <div class="shimmer-line" style="width: 60%;"></div>
                            <div class="shimmer-line" style="width: 80%;"></div>
                            <div class="shimmer-line" style="width: 40%;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Function to show restaurants with loading animation
async function showRestaurantsWithLoading(location) {
    // Show loading shimmer
    showLoadingShimmer();

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Show actual restaurants
    showRestaurants(location);
}

// Cart state
let cart = {
    items: {},
    restaurant: null
};

// Function to get personalized food recommendations
function getPersonalizedRecommendations(restaurant, healthPreferences) {
    const menu = restaurantMenus[restaurant.name];
    if (!menu) return [];

    // Calculate remaining calories for the day
    const cartCalories = Object.entries(cart.items).reduce((total, [itemName, details]) => {
        const menuItem = menu.items.find(item => item.name === itemName);
        return total + (menuItem?.nutrition?.calories || 0) * details.quantity;
    }, 0);
    
    const remainingCalories = healthPreferences.calorieGoal - cartCalories;

    // Score each menu item based on health preferences
    const scoredItems = menu.items.map(item => {
        let score = 0;
        
        // Check if item matches dietary restrictions
        const matchesDiet = !healthPreferences.dietaryRestrictions.length || 
            item.dietaryTags?.some(tag => healthPreferences.dietaryRestrictions.includes(tag));
        if (matchesDiet) score += 30;

        // Check for allergens
        const hasAllergens = item.allergens?.some(allergen => 
            healthPreferences.allergens.includes(allergen));
        if (!hasAllergens) score += 20;

        // Check if calories fit within remaining goal
        if (item.nutrition && healthPreferences.trackNutrition) {
            if (item.nutrition.calories <= remainingCalories) score += 15;
            if (item.nutrition.calories <= remainingCalories * 0.5) score += 10; // Bonus for lower calorie options
            
            // Score nutritional balance
            if (item.nutrition.protein >= 15) score += 5; // Good protein content
            if (item.nutrition.fiber >= 5) score += 5; // Good fiber content
        }

        // Bestseller bonus
        if (item.bestseller) score += 5;

        return { ...item, score };
    });

    // Sort by score and get top recommendations
    return scoredItems
        .filter(item => item.score > 30) // Only items with decent match
        .sort((a, b) => b.score - a.score)
        .slice(0, 5); // Top 5 recommendations
}

// Update createMenuModal function to remove health features
function createMenuModal(restaurant) {
    const menu = restaurantMenus[restaurant.name];
    if (!menu) return;

    const modalHTML = `
        <div class="menu-modal">
            <div class="menu-modal-content">
                <div class="menu-left">
                    <div class="restaurant-banner" style="background-image: url('${restaurant.image}')">
                        <div class="banner-content">
                            <h2>${restaurant.name}</h2>
                            <p class="cuisine">${restaurant.cuisine}</p>
                        </div>
                    </div>

                    <div class="restaurant-info">
                        <div class="restaurant-meta">
                            <span class="rating ${getRatingColor(restaurant.rating)}">${restaurant.rating} ★</span>
                            <span class="dot">•</span>
                            <span class="time">
                                <i class="fas fa-clock"></i>
                                <span class="delivery-time">${restaurant.deliveryTime}</span>
                                <div class="time-progress">
                                    <div class="progress-bar"></div>
                                </div>
                            </span>
                            <span class="dot">•</span>
                            <span>${restaurant.priceForTwo}</span>
                        </div>
                        <div class="restaurant-tags">
                            ${restaurant.offers.map(offer => `
                                <span class="tag" onclick="event.stopPropagation(); showCouponPopup();">
                                    <i class="fas fa-tag"></i>
                                    ${offer}
                                </span>
                            `).join('')}
                        </div>
                    </div>

                    <div class="menu-search">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" class="search-input" placeholder="Search for dishes...">
                    </div>

                    <div class="menu-filters">
                        <button class="filter-btn active">All</button>
                        <button class="filter-btn"><i class="fas fa-leaf"></i> Veg Only</button>
                        <button class="filter-btn"><i class="fas fa-fire"></i> Spicy</button>
                        <button class="filter-btn"><i class="fas fa-star"></i> Bestseller</button>
                    </div>

                    <div class="menu-categories">
                        ${Object.entries(menu.items.reduce((categories, item) => {
                            const category = item.category || "Main Course";
                            if (!categories[category]) categories[category] = [];
                            categories[category].push(item);
                            return categories;
                        }, {})).map(([category, items]) => `
                            <div class="menu-category">
                                <div class="category-header">
                                    <h3 class="category-name">${category}</h3>
                                    <span class="category-count">${items.length} items</span>
                                </div>
                                <div class="category-items">
                                    ${items.map(item => `
                                        <div class="menu-item" data-item-id="${item.name}">
                                            <div class="item-details">
                                                <div class="item-name">
                                                    ${item.veg ? '<span class="veg-icon">🟢</span>' : '<span class="non-veg-icon">🔴</span>'}
                                                    <h3>${item.name}</h3>
                                                    ${item.bestseller ? '<span class="bestseller">★ Bestseller</span>' : ''}
                                                </div>
                                                <p class="item-price">₹${item.price}</p>
                                                <p class="item-description">${item.description}</p>
                                            </div>
                                            <div class="item-actions">
                                                <div class="item-image-container">
                                                    <img src="${item.image}" class="menu-item-image" alt="${item.name}" loading="lazy">
                                                </div>
                                                ${getItemQuantityHTML(item.name)}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="menu-right">
                    <div class="cart-section">
                        ${getCartHTML()}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Add event listeners
    const modal = document.querySelector('.menu-modal');
    const searchInput = modal.querySelector('.search-input');
    const filterButtons = modal.querySelectorAll('.filter-btn');
    const menuItems = modal.querySelectorAll('.menu-item');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        menuItems.forEach(item => {
            const itemName = item.querySelector('.item-name h3').textContent.toLowerCase();
            const itemDescription = item.querySelector('.item-description').textContent.toLowerCase();
            const matches = itemName.includes(searchTerm) || itemDescription.includes(searchTerm);
            item.style.display = matches ? 'flex' : 'none';
        });
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.textContent.trim();
            menuItems.forEach(item => {
                const isVeg = item.querySelector('.veg-icon') !== null;
                const isBestseller = item.querySelector('.bestseller') !== null;

                switch(filter) {
                    case 'Veg Only':
                        item.style.display = isVeg ? 'flex' : 'none';
                        break;
                    case 'Bestseller':
                        item.style.display = isBestseller ? 'flex' : 'none';
                        break;
                    default:
                        item.style.display = 'flex';
                }
            });
        });
    });

    // Add to cart functionality
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const menuItem = e.target.closest('.menu-item');
            const itemName = menuItem.querySelector('.item-name h3').textContent;
            const itemPrice = parseInt(menuItem.querySelector('.item-price').textContent.replace('₹', ''));
            
            if (e.target.classList.contains('add')) {
                addToCart(restaurant, itemName, itemPrice);
            } else if (e.target.classList.contains('remove')) {
                removeFromCart(itemName);
            }
            
            updateCartUI();
        }
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Helper function to get item image URL (no longer needed as images are in the data)
function getItemImage(itemName) {
    const defaultImage = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/unavailable-image';
    return defaultImage;
}

// Helper function to get item quantity HTML
function getItemQuantityHTML(itemName) {
    const quantity = cart.items[itemName]?.quantity || 0;
    
    if (quantity === 0) {
        return `<button class="add-item-btn quantity-btn add">ADD</button>`;
    }

    return `
        <div class="quantity-controls">
            <button class="quantity-btn remove">-</button>
            <span class="quantity">${quantity}</span>
            <button class="quantity-btn add">+</button>
        </div>
    `;
}

// Cart functions
function addToCart(restaurant, itemName, price) {
    if (cart.restaurant && cart.restaurant !== restaurant.name) {
        if (!confirm('Your cart contains items from another restaurant. Would you like to clear it and add items from this restaurant?')) {
            return;
        }
        cart.items = {};
    }
    
    cart.restaurant = restaurant.name;
    
    if (!cart.items[itemName]) {
        cart.items[itemName] = {
            quantity: 0,
            price: price
        };
    }
    
    cart.items[itemName].quantity++;
}

function removeFromCart(itemName) {
    if (cart.items[itemName]) {
        cart.items[itemName].quantity--;
        if (cart.items[itemName].quantity === 0) {
            delete cart.items[itemName];
        }
        if (Object.keys(cart.items).length === 0) {
            cart.restaurant = null;
        }
    }
}

function getCartHTML() {
    if (Object.keys(cart.items).length === 0) {
        return `
            <div class="empty-cart">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty Cart">
                <p>Your cart is empty</p>
                <p>Add items to begin your order</p>
            </div>
        `;
    }

    const subtotal = Object.values(cart.items).reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const deliveryFee = 40;
    const taxes = Math.round(subtotal * 0.05);
    const total = subtotal + deliveryFee + taxes;

    return `
        <div class="cart-header">Cart</div>
        <div class="cart-items">
            ${Object.entries(cart.items).map(([itemName, details]) => `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${itemName}</h4>
                        <p class="cart-item-price">₹${details.price}</p>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn remove">-</button>
                        <span class="quantity">${details.quantity}</span>
                        <button class="quantity-btn add">+</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>₹${subtotal}</span>
            </div>
            <div class="summary-row">
                <span>Delivery Fee</span>
                <span>₹${deliveryFee}</span>
            </div>
            <div class="summary-row">
                <span>Taxes</span>
                <span>₹${taxes}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>₹${total}</span>
            </div>
        </div>
        <button class="checkout-btn">Checkout • ₹${total}</button>
    `;
}

function updateCartUI() {
    const cartSection = document.querySelector('.cart-section');
    if (cartSection) {
        cartSection.innerHTML = getCartHTML();
    }

    // Update all item quantity controls
    document.querySelectorAll('.menu-item').forEach(item => {
        const itemName = item.querySelector('.item-name h3').textContent;
        const actionsContainer = item.querySelector('.item-actions');
        actionsContainer.innerHTML = getItemQuantityHTML(itemName);
    });
}

// Auth Modal Functions
function openAuthModal() {
    document.getElementById('authModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update form display
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(tab + 'Form').classList.add('active');
}

// User Authentication Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    return phone.length === 10 && !isNaN(phone);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Remove any existing error message
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add the new error message
    const authContainer = document.querySelector('.auth-container');
    authContainer.insertBefore(errorDiv, authContainer.firstChild);
    
    // Remove error after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Form submission handlers
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('loginPhone').value;
    
    if (!isValidPhone(phone)) {
        showError('Please enter a valid 10-digit phone number');
        return;
    }
    
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.phone === phone);
    
    if (!user) {
        showError('No account found with this phone number');
        return;
    }
    
    // Login successful
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Close modal first
    closeAuthModal();
    
    // Then update UI and show success message
    updateAuthUI();
    showNotification('Login successful!');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('signupPhone').value;
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    
    // Validation
    if (!isValidPhone(phone)) {
        showError('Please enter a valid 10-digit phone number');
        return;
    }
    
    if (name.length < 3) {
        showError('Name should be at least 3 characters long');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.phone === phone)) {
        showError('An account with this phone number already exists');
        return;
    }
    
    // Add new user
    const newUser = { phone, name, email };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    // Show success message
    showError('Account created successfully!');
    
    // Update UI
    updateAuthUI();
    
    // Close modal after 1 second
    setTimeout(() => {
        closeAuthModal();
    }, 1000);
});

function updateAuthUI() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const signInLink = document.querySelector('.nav-link.sign-in');
    
    if (currentUser) {
        signInLink.onclick = null; // Remove the click handler when user is logged in
        signInLink.innerHTML = `
            <div class="user-menu">
                <span>${currentUser.name} ▼</span>
                <div class="user-menu-dropdown">
                    <a href="#" onclick="openBudgetManager(); return false;">Budget Manager</a>
                    <a href="#" onclick="openSubscriptions(); return false;">Meal Plans</a>
                    <a href="#" onclick="openHealthPreferencesModal(); return false;">Health Preferences</a>
                    <a href="#" onclick="logout(); return false;">Logout</a>
                </div>
            </div>
        `;

        // Add dropdown styles if not already present
        if (!document.getElementById('dropdownStyles')) {
            const dropdownStyles = document.createElement('style');
            dropdownStyles.id = 'dropdownStyles';
            dropdownStyles.textContent = `
                .user-menu {
                    position: relative;
                    cursor: pointer;
                }
                
                .user-menu-dropdown {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    background: white;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    border-radius: 8px;
                    padding: 8px 0;
                    min-width: 200px;
                    display: none;
                    z-index: 1000;
                }
                
                .user-menu:hover .user-menu-dropdown {
                    display: block;
                }
                
                .user-menu-dropdown a {
                    display: block;
                    padding: 12px 20px;
                    color:rgb(0, 0, 0);
                    text-decoration: none;
                    font-size: 14px;
                    transition: background-color 0.2s;
                }
                
                .user-menu-dropdown a:hover {
                    background-color: #f2f2f2;
                }
                
                .user-menu span {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            `;
            document.head.appendChild(dropdownStyles);
        }
    } else {
        signInLink.innerHTML = 'Sign in';
        signInLink.onclick = (e) => {
            e.preventDefault();
            openAuthModal();
        };
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showNotification('Logged out successfully!');
    return false; // Prevent default anchor behavior
}

// Initialize UI
updateAuthUI();

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('authModal')) {
        closeAuthModal();
    }
});

// Remove health preferences from localStorage
localStorage.removeItem('healthPreferences');

// Health Preferences Modal Functions
function openHealthPreferencesModal() {
    const healthPreferences = JSON.parse(localStorage.getItem('healthPreferences'));
    const modalHTML = `
        <div id="healthModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Health Preferences</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="health-section">
                        <h3>Dietary Restrictions</h3>
                        <div class="dietary-options">
                            ${Object.values(DIETARY_RESTRICTIONS).map(restriction => `
                                <label class="checkbox-container">
                                    <input type="checkbox" value="${restriction}" 
                                        ${healthPreferences.dietaryRestrictions.includes(restriction) ? 'checked' : ''}>
                                    ${restriction.charAt(0).toUpperCase() + restriction.slice(1)}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="health-section">
                        <h3>Allergens to Avoid</h3>
                        <div class="allergen-options">
                            ${Object.values(ALLERGENS).map(allergen => `
                                <label class="checkbox-container">
                                    <input type="checkbox" value="${allergen}" 
                                        ${healthPreferences.allergens.includes(allergen) ? 'checked' : ''}>
                                    ${allergen.charAt(0).toUpperCase() + allergen.slice(1)}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="health-section">
                        <h3>Daily Calorie Goal</h3>
                        <input type="number" id="calorieGoal" value="${healthPreferences.calorieGoal}" 
                            min="1200" max="5000" step="50">
                    </div>
                    
                    <div class="health-section">
                        <h3>Nutrition Tracking</h3>
                        <label class="switch">
                            <input type="checkbox" id="trackNutrition" 
                                ${healthPreferences.trackNutrition ? 'checked' : ''}>
                            <span class="slider round"></span>
                        </label>
                        <p>Enable nutrition tracking for your orders</p>
                    </div>
                    
                    <div class="health-section">
                        <h3>Connect Health App</h3>
                        <button id="connectHealthApp" class="health-app-btn">
                            ${healthPreferences.healthAppConnected ? 'Connected ✓' : 'Connect to Health App'}
                        </button>
                        <p>Sync your nutrition data with your favorite health app</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="saveHealthPreferences" class="primary-btn">Save Preferences</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners
    const modal = document.getElementById('healthModal');
    const closeBtn = modal.querySelector('.close-modal');
    const saveBtn = document.getElementById('saveHealthPreferences');
    const connectBtn = document.getElementById('connectHealthApp');
    
    closeBtn.onclick = () => modal.remove();
    
    connectBtn.onclick = () => {
        // Simulate health app connection
        connectBtn.textContent = 'Connected ✓';
        connectBtn.classList.add('connected');
    };
    
    saveBtn.onclick = () => {
        const newPreferences = {
            dietaryRestrictions: [...modal.querySelectorAll('.dietary-options input:checked')].map(input => input.value),
            allergens: [...modal.querySelectorAll('.allergen-options input:checked')].map(input => input.value),
            calorieGoal: parseInt(document.getElementById('calorieGoal').value),
            trackNutrition: document.getElementById('trackNutrition').checked,
            healthAppConnected: connectBtn.classList.contains('connected')
        };
        
        localStorage.setItem('healthPreferences', JSON.stringify(newPreferences));
        modal.remove();
        showNotification('Health preferences saved successfully!');
    };
    
    // Close modal when clicking outside
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add styles for health preferences modal
const healthStyles = document.createElement('style');
healthStyles.textContent = `
    .modal {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
    
    .modal-content {
        background: white;
        margin: 5% auto;
        padding: 20px;
        width: 90%;
        max-width: 600px;
        border-radius: 8px;
        max-height: 90vh;
        overflow-y: auto;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .close-modal {
        font-size: 24px;
        cursor: pointer;
    }
    
    .health-section {
        margin-bottom: 30px;
    }
    
    .health-section h3 {
        margin-bottom: 15px;
        color: #282c3f;
    }
    
    .dietary-options, .allergen-options {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 10px;
    }
    
    .checkbox-container {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }
    
    #calorieGoal {
        width: 150px;
        padding: 8px;
        border: 1px solid #d4d5d9;
        border-radius: 4px;
    }
    
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
    
    input:checked + .slider {
        background-color: #fc8019;
    }
    
    input:checked + .slider:before {
        transform: translateX(26px);
    }
    
    .health-app-btn {
        background: #fc8019;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .health-app-btn.connected {
        background: #48c479;
    }
    
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #48c479;
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

document.head.appendChild(healthStyles);

// Budget Management Feature
const budgetFeatures = {
    monthlyBudget: {
        total: 0,
        spent: 0,
        remaining: 0,
        dailyLimit: 0,
        warningThreshold: 0.8
    },
    subscriptionPlans: {
        premium: {
            meals: 60,  // 2 meals daily
            price: 5999,
            validity: '30 days',
            description: 'Premium dining experience with priority delivery',
            features: [
                'Premium restaurant selection',
                'Priority delivery',
                'Dedicated support',
                'Special occasion bonus meals',
                'Flexible scheduling',
                'Premium packaging'
            ]
        },
        standard: {
            meals: 30,  // 1 meal daily
            price: 3599,
            validity: '30 days',
            description: 'Perfect for professionals and families',
            features: [
                'Wide restaurant selection',
                'Free delivery',
                'Weekend special meals',
                'Flexible timing',
                'Quality packaging'
            ]
        },
        student: {
            meals: 30,  // 1 meal daily
            price: 2399,
            validity: '30 days',
            description: 'Affordable plan for students',
            features: [
                'Student-friendly portions',
                'Free delivery',
                'Valid student ID required',
                'Flexible timing',
                'Budget-friendly options'
            ]
        },
        weekend: {
            meals: 8,  // Weekend meals
            price: 1299,
            validity: '30 days',
            description: 'Weekend special dining',
            features: [
                'Premium weekend meals',
                'Free delivery',
                'Special weekend menu',
                'Valid for 4 weekends',
                'Combo meals included'
            ]
        }
    }
};

// Budget Manager Modal
function openBudgetManager() {
    const currentBudget = JSON.parse(localStorage.getItem('userBudget')) || budgetFeatures.monthlyBudget;
    
    const modalHTML = `
        <div class="modal budget-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Budget Manager</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="budget-section">
                        <h3>Monthly Budget Settings</h3>
                        <div class="budget-input">
                            <label>Set Monthly Budget</label>
                            <input type="number" id="monthlyBudget" 
                                   value="${currentBudget.total}" 
                                   min="1000" step="100">
                        </div>
                        
                        <div class="budget-stats">
                            <div class="stat-item">
                                <span>Spent This Month</span>
                                <span class="amount">₹${currentBudget.spent}</span>
                            </div>
                            <div class="stat-item">
                                <span>Remaining</span>
                                <span class="amount">₹${currentBudget.remaining}</span>
                            </div>
                            <div class="stat-item">
                                <span>Daily Limit</span>
                                <span class="amount">₹${currentBudget.dailyLimit}</span>
                            </div>
                        </div>
                        
                        <div class="budget-progress">
                            <div class="progress-bar" 
                                 style="width: ${(currentBudget.spent/currentBudget.total) * 100}%">
                            </div>
                        </div>
                    </div>
                    
                    <div class="expense-history">
                        <h3>Recent Orders</h3>
                        <div class="history-list">
                            ${getRecentOrders()}
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button onclick="saveBudgetSettings()" class="primary-btn">Save Settings</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners
    const modal = document.querySelector('.budget-modal');
    const closeBtn = modal.querySelector('.close-modal');
    
    closeBtn.onclick = () => modal.remove();
    window.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Subscription Modal
function openSubscriptions() {
    const modalHTML = `
        <div class="modal subscription-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Premium Meal Subscriptions</h2>
                    <p class="modal-subtitle">Choose your perfect dining plan</p>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="subscription-plans">
                        <!-- Premium Plan -->
                        <div class="plan-card featured">
                            <div class="plan-badge">MOST POPULAR</div>
                            <h3>PREMIUM PLAN</h3>
                            <div class="plan-price">₹5,999</div>
                            <div class="price-subtitle">₹100 per meal</div>
                            <div class="plan-details">
                                <p>✓ 60 meals (2 meals daily)</p>
                                ${budgetFeatures.subscriptionPlans.premium.features.map(feature => 
                                    `<p>✓ ${feature}</p>`).join('')}
                            </div>
                            <button onclick="subscribeToPlan('premium')" class="subscribe-btn featured">
                                Subscribe Now
                            </button>
                        </div>

                        <!-- Standard Plan -->
                        <div class="plan-card">
                            <h3>STANDARD PLAN</h3>
                            <div class="plan-price">₹3,599</div>
                            <div class="price-subtitle">₹120 per meal</div>
                            <div class="plan-details">
                                <p>✓ 30 meals (1 meal daily)</p>
                                ${budgetFeatures.subscriptionPlans.standard.features.map(feature => 
                                    `<p>✓ ${feature}</p>`).join('')}
                            </div>
                            <button onclick="subscribeToPlan('standard')" class="subscribe-btn">
                                Subscribe Now
                            </button>
                        </div>

                        <!-- Student Plan -->
                        <div class="plan-card student">
                            <div class="plan-badge">STUDENT SPECIAL</div>
                            <h3>STUDENT PLAN</h3>
                            <div class="plan-price">₹2,399</div>
                            <div class="price-subtitle">₹80 per meal</div>
                            <div class="plan-details">
                                <p>✓ 30 meals (1 meal daily)</p>
                                ${budgetFeatures.subscriptionPlans.student.features.map(feature => 
                                    `<p>✓ ${feature}</p>`).join('')}
                            </div>
                            <button onclick="subscribeToPlan('student')" class="subscribe-btn student">
                                Subscribe Now
                            </button>
                        </div>

                        <!-- Weekend Plan -->
                        <div class="plan-card">
                            <h3>WEEKEND PLAN</h3>
                            <div class="plan-price">₹1,299</div>
                            <div class="price-subtitle">₹162 per meal</div>
                            <div class="plan-details">
                                <p>✓ 8 meals (weekend only)</p>
                                ${budgetFeatures.subscriptionPlans.weekend.features.map(feature => 
                                    `<p>✓ ${feature}</p>`).join('')}
                            </div>
                            <button onclick="subscribeToPlan('weekend')" class="subscribe-btn">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <p class="premium-note">* All plans include quality assurance and customer support</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Enhanced styles for premium look
    if (!document.getElementById('subscriptionStyles')) {
        const styles = document.createElement('style');
        styles.id = 'subscriptionStyles';
        styles.textContent = `
            .subscription-modal .modal-content {
                max-width: 1200px;
                background: #f8f9fa;
            }
            
            .modal-subtitle {
                text-align: center;
                color: #686b78;
                margin-top: 5px;
            }
            
            .subscription-plans {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
                gap: 25px;
                padding: 30px 0;
            }
            
            .plan-card {
                background: white;
                border: 1px solid #e9e9eb;
                border-radius: 16px;
                padding: 30px;
                text-align: center;
                transition: transform 0.3s, box-shadow 0.3s;
                position: relative;
            }
            
            .plan-card.featured {
                border: 2px solid #fc8019;
                background: #fff9f2;
                transform: scale(1.02);
            }
            
            .plan-card.student {
                border: 2px solid #48c479;
                background: #f0f9f3;
            }
            
            .plan-badge {
                position: absolute;
                top: -12px;
                left: 50%;
                transform: translateX(-50%);
                background: #fc8019;
                color: white;
                padding: 6px 20px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 0.5px;
            }
            
            .plan-card.student .plan-badge {
                background: #48c479;
            }
            
            .plan-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            }
            
            .plan-price {
                font-size: 42px;
                color: #282c3f;
                margin: 20px 0 5px;
                font-weight: bold;
            }
            
            .price-subtitle {
                color: #fc8019;
                font-size: 15px;
                margin-bottom: 25px;
                font-weight: 500;
            }
            
            .plan-details {
                margin: 25px 0;
                text-align: left;
            }
            
            .plan-details p {
                color: #686b78;
                margin: 12px 0;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .subscribe-btn {
                background: #fc8019;
                color: white;
                border: none;
                padding: 14px 30px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                width: 100%;
                transition: all 0.3s;
            }
            
            .subscribe-btn:hover {
                background: #e67312;
                transform: translateY(-2px);
            }
            
            .subscribe-btn.featured {
                background: #fc8019;
                box-shadow: 0 4px 12px rgba(252, 128, 25, 0.2);
            }
            
            .subscribe-btn.student {
                background: #48c479;
                box-shadow: 0 4px 12px rgba(72, 196, 121, 0.2);
            }
            
            .subscribe-btn.student:hover {
                background: #3ba968;
            }
            
            .modal-footer {
                text-align: center;
                padding-top: 20px;
                border-top: 1px solid #e9e9eb;
            }
            
            .premium-note {
                color: #686b78;
                font-size: 13px;
                font-style: italic;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add event listeners
    const modal = document.querySelector('.subscription-modal');
    const closeBtn = modal.querySelector('.close-modal');
    
    closeBtn.onclick = () => modal.remove();
    window.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Helper functions
function getRecentOrders() {
    const orders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    return orders.length ? orders.slice(0, 5).map(order => `
        <div class="history-item">
            <span>${order.restaurant}</span>
            <span>₹${order.amount}</span>
            <span>${order.date}</span>
        </div>
    `).join('') : '<p>No recent orders</p>';
}

function saveBudgetSettings() {
    const budget = {
        ...budgetFeatures.monthlyBudget,
        total: parseInt(document.getElementById('monthlyBudget').value),
        remaining: parseInt(document.getElementById('monthlyBudget').value) - budgetFeatures.monthlyBudget.spent,
        dailyLimit: Math.round(parseInt(document.getElementById('monthlyBudget').value) / 30)
    };
    
    localStorage.setItem('userBudget', JSON.stringify(budget));
    showNotification('Budget settings saved successfully!');
    document.querySelector('.budget-modal').remove();
}

// Add subscription plan details with recommended restaurants and meals
const subscriptionRecommendations = {
    mess: {
        restaurants: ['Biryani House', 'Chinese Wok', 'Domino\'s Pizza'],
        meals: {
            breakfast: [
                { name: 'Veg Hakka Noodles', restaurant: 'Chinese Wok', price: 199 },
                { name: 'Paneer Paratha', restaurant: 'Biryani House', price: 149 },
                { name: 'Veg Sandwich', restaurant: 'Subway', price: 199 }
            ],
            lunch: [
                { name: 'Chicken Biryani', restaurant: 'Biryani House', price: 299 },
                { name: 'Veg Fried Rice', restaurant: 'Chinese Wok', price: 249 },
                { name: 'Margherita Pizza', restaurant: 'Domino\'s Pizza', price: 249 }
            ],
            dinner: [
                { name: 'Paneer Tikka', restaurant: 'Biryani House', price: 279 },
                { name: 'Chilli Chicken', restaurant: 'Chinese Wok', price: 299 },
                { name: 'Farmhouse Pizza', restaurant: 'Domino\'s Pizza', price: 459 }
            ]
        }
    },
    mini: {
        restaurants: ['McDonald\'s', 'Subway', 'Barista Coffee'],
        meals: {
            lunch: [
                { name: 'McSpicy Chicken Burger', restaurant: 'McDonald\'s', price: 199 },
                { name: 'Paneer Tikka Sub', restaurant: 'Subway', price: 249 },
                { name: 'Grilled Sandwich', restaurant: 'Barista Coffee', price: 199 }
            ],
            dinner: [
                { name: 'Chicken McNuggets', restaurant: 'McDonald\'s', price: 199 },
                { name: 'Chicken Teriyaki Sub', restaurant: 'Subway', price: 279 },
                { name: 'Cold Coffee & Brownie Combo', restaurant: 'Barista Coffee', price: 299 }
            ]
        }
    },
    weekend: {
        restaurants: ['Domino\'s Pizza', 'McDonald\'s', 'Chinese Wok'],
        meals: {
            special: [
                { name: 'Non Veg Supreme Pizza', restaurant: 'Domino\'s Pizza', price: 599 },
                { name: 'McSpicy Chicken Meal', restaurant: 'McDonald\'s', price: 399 },
                { name: 'Chilli Chicken with Noodles', restaurant: 'Chinese Wok', price: 449 }
            ]
        }
    },
    student: {
        restaurants: ['Biryani House', 'Chinese Wok', 'McDonald\'s', 'Subway', 'Domino\'s Pizza'],
        meals: {
            daily: [
                // Week 1 meals
                { 
                  name: 'Student Thali', 
                  restaurant: 'Biryani House', 
                  price: 80, 
                  description: 'Rice, 2 rotis, dal, sabzi, raita, and salad',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/tbiztpzrxi0coxcxyyzs'
                },
                { 
                  name: 'Veg Hakka Noodles Combo', 
                  restaurant: 'Chinese Wok', 
                  price: 85, 
                  description: 'Noodles with manchurian and soup',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/7/38c2e066-8dd1-453d-b7c9-a40b4706dd55_8f6bfe25-466b-4c8a-88a5-73c27e254c42.jpg_compressed'
                },
                { 
                  name: 'McVeggie Meal', 
                  restaurant: 'McDonald\'s', 
                  price: 80, 
                  description: 'Burger, fries, and drink',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/2/12/d872ab58-bcc7-47c7-b54c-2a853508a593_3132101f-046f-4f84-9364-8e9a6c65377a.jpeg'
                },
                { 
                  name: 'Sub of the Day', 
                  restaurant: 'Subway', 
                  price: 80, 
                  description: '6-inch sub with cookie and drink',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/11/fc96ff79-438b-4167-9b56-2324a8171816_690d2a2b-f894-4677-8900-12467fe771f7.png_compressed" alt="Roasted Chicken Strip Sandwich'
                },
                { 
                  name: 'Personal Pizza Meal', 
                  restaurant: 'Domino\'s Pizza', 
                  price: 90, 
                  description: '7-inch pizza with garlic bread',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f6aak4w44zwpp7ak5bmo'
                },
                
                // Week 2 meals
                { 
                  name: 'Chicken Biryani Regular', 
                  restaurant: 'Biryani House', 
                  price: 95, 
                  description: 'Biryani with raita and salan',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/5/11/4c5f81d6-b2b8-4505-923e-68e5eb063fad_c058b7a1-8d55-45ea-9ce0-587452754772.jpeg'
                },
                { 
                  name: 'Fried Rice Combo', 
                  restaurant: 'Chinese Wok', 
                  price: 85, 
                  description: 'Veg/chicken fried rice with manchurian',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/af33b81798b11deba338e94b7585d348'
                },
                
                // Week 3 meals
                { 
                  name: 'Paneer Rice Bowl', 
                  restaurant: 'Biryani House', 
                  price: 90, 
                  description: 'Rice with paneer curry and papad',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/18/66493238-519b-430b-b454-2c0c04f42a04_e80b90cb-0020-4fc7-bcd8-88d8d89b0fd9.jpg'
                },
                { 
                  name: 'Chowmein Special', 
                  restaurant: 'Chinese Wok', 
                  price: 85, 
                  description: 'Chowmein with spring roll',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/12/12/c7aabac6-291f-44e5-8945-9ebf48624d0c_c4316473-f401-4b33-8f6d-836846316f10.jpg'
                },
                
                // Week 4 meals
                { 
                  name: 'Dal Khichdi', 
                  restaurant: 'Biryani House', 
                  price: 80, 
                  description: 'Healthy khichdi with papad and pickle',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/10/11/479d974d-28ec-4953-b9bd-2777b6a92183_0a727823-6275-48f7-9930-b2115600aa68.jpg'
                },
                { 
                  name: 'Veg Meal Box', 
                  restaurant: 'Chinese Wok', 
                  price: 80, 
                  description: 'Rice with mixed vegetables and sauce',
                  image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ry3c3f518z10t4olu4l7'
                }
            ]
        }
    }
};

function subscribeToPlan(plan) {
    const subscription = budgetFeatures.subscriptionPlans[plan];
    if (confirm(`Subscribe to ${plan.toUpperCase()} plan for ₹${subscription.price}?`)) {
        // Store subscription in localStorage
        const userSubscription = {
            plan: plan,
            startDate: new Date().toISOString(),
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
            mealsRemaining: subscription.meals
        };
        localStorage.setItem('userSubscription', JSON.stringify(userSubscription));
        
        // Show success message and recommendations
        showSubscriptionSuccess(plan);
    }
}

function showSubscriptionSuccess(plan) {
    const recommendations = subscriptionRecommendations[plan];
    const modal = document.querySelector('.subscription-modal');
    
    // Create success content
    const successContent = `
        <div class="subscription-success">
            <div class="success-header">
                <h2>🎉 Subscription Activated!</h2>
                <p>Your ${plan.toUpperCase()} plan is now active. Here are your personalized recommendations:</p>
            </div>
            
            <div class="recommended-restaurants">
                <h3>Recommended Restaurants</h3>
                <div class="restaurant-chips">
                    ${recommendations.restaurants.map(restaurant => `
                        <span class="restaurant-chip">${restaurant}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="meal-recommendations">
                <h3>Recommended Meals</h3>
                ${Object.entries(recommendations.meals).map(([mealTime, meals]) => `
                    <div class="meal-time-section">
                        <h4>${mealTime.charAt(0).toUpperCase() + mealTime.slice(1)}</h4>
                        <div class="meal-cards">
                            ${meals.map(meal => `
                                <div class="meal-card">
                                    <div class="meal-image">
                                        <img src="${meal.image}" alt="${meal.name}" loading="lazy">
                                    </div>
                                    <div class="meal-info">
                                        <h5>${meal.name}</h5>
                                        <p class="restaurant-name">at ${meal.restaurant}</p>
                                        <p class="meal-description">${meal.description}</p>
                                        <p class="meal-price">₹${meal.price}</p>
                                    </div>
                                    <button class="order-now-btn" onclick="orderRecommendedMeal('${meal.restaurant}', '${meal.name}')">
                                        Order Now
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="subscription-footer">
                <button class="close-success-btn" onclick="closeSubscriptionSuccess()">Got it!</button>
            </div>
        </div>
    `;
    
    // Add success styles if not already present
    if (!document.getElementById('subscriptionSuccessStyles')) {
        const successStyles = document.createElement('style');
        successStyles.id = 'subscriptionSuccessStyles';
        successStyles.textContent = `
            .subscription-success {
                padding: 20px;
                max-width: 800px;
                margin: 0 auto;
            }
            
            .success-header {
                text-align: center;
                margin-bottom: 30px;
            }
            
            .success-header h2 {
                color: #48c479;
                margin-bottom: 10px;
            }
            
            .recommended-restaurants {
                margin-bottom: 30px;
            }
            
            .restaurant-chips {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 15px;
            }
            
            .restaurant-chip {
                background: #fceec0;
                color: #282c3f;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 14px;
            }
            
            .meal-recommendations {
                margin-bottom: 30px;
            }
            
            .meal-time-section {
                margin-top: 20px;
            }
            
            .meal-time-section h4 {
                color: #282c3f;
                margin-bottom: 15px;
            }
            
            .meal-cards {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin-top: 15px;
            }
            
            .meal-card {
                background: white;
                border: 1px solid #e9e9eb;
                border-radius: 12px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                transition: transform 0.2s, box-shadow 0.2s;
            }
            
            .meal-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            
            .meal-image {
                width: 100%;
                height: 180px;
                overflow: hidden;
            }
            
            .meal-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s;
            }
            
            .meal-card:hover .meal-image img {
                transform: scale(1.05);
            }
            
            .meal-info {
                padding: 15px;
            }
            
            .meal-info h5 {
                color: #282c3f;
                margin-bottom: 5px;
                font-size: 16px;
            }
            
            .restaurant-name {
                color: #686b78;
                font-size: 13px;
                margin-bottom: 8px;
            }
            
            .meal-description {
                color: #686b78;
                font-size: 13px;
                margin-bottom: 10px;
                line-height: 1.4;
            }
            
            .meal-price {
                color: #fc8019;
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 15px;
            }
            
            .order-now-btn {
                margin: 0 15px 15px;
            }
            
            .order-now-btn {
                background: #fc8019;
                color: white;
                border: none;
                padding: 8px 15px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                transition: background-color 0.2s;
            }
            
            .order-now-btn:hover {
                background: #e67312;
            }
            
            .subscription-footer {
                text-align: center;
                margin-top: 30px;
            }
            
            .close-success-btn {
                background: #48c479;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.2s;
            }
            
            .close-success-btn:hover {
                background: #3ba968;
            }
        `;
        document.head.appendChild(successStyles);
    }
    
    // Update modal content
    modal.querySelector('.modal-content').innerHTML = successContent;
}

function closeSubscriptionSuccess() {
    document.querySelector('.subscription-modal').remove();
    showNotification('Subscription activated successfully!');
}

function orderRecommendedMeal(restaurantName, itemName) {
    // Find the meal details from subscriptionRecommendations
    const allMeals = Object.values(subscriptionRecommendations)
        .flatMap(category => Object.values(category.meals)
            .flat()
            .filter(meal => meal.restaurant === restaurantName && meal.name === itemName)
        );
    
    const meal = allMeals[0];
    
    if (meal) {
        // Create payment modal
        const modalHTML = `
            <div class="payment-modal">
                <div class="payment-content">
                    <div class="payment-header">
                        <h2>Complete Your Order</h2>
                        <span class="close-modal">&times;</span>
                    </div>
                    
                    <div class="order-summary">
                        <div class="meal-details">
                            <img src="${meal.image}" alt="${meal.name}" class="meal-thumbnail">
                            <div class="meal-text">
                                <h3>${meal.name}</h3>
                                <p class="restaurant">${meal.restaurant}</p>
                                <p class="description">${meal.description}</p>
                            </div>
                        </div>
                        
                        <div class="price-details">
                            <div class="price-row">
                                <span>Item Price</span>
                                <span>₹${meal.price}</span>
                            </div>
                            <div class="price-row">
                                <span>Delivery Fee</span>
                                <span class="free-tag">FREE</span>
                            </div>
                            <div class="price-row">
                                <span>Platform Fee</span>
                                <span class="free-tag">FREE</span>
                            </div>
                            <div class="price-row total">
                                <span>Total Amount</span>
                                <span>₹${meal.price}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="payment-methods">
                        <h3>Select Payment Method</h3>
                        <div class="payment-options">
                            <label class="payment-option">
                                <input type="radio" name="payment" value="upi" checked>
                                <span class="option-content">
                                    <i class="fas fa-mobile-alt"></i>
                                    UPI Payment
                                </span>
                            </label>
                            <label class="payment-option">
                                <input type="radio" name="payment" value="card">
                                <span class="option-content">
                                    <i class="fas fa-credit-card"></i>
                                    Card Payment
                                </span>
                            </label>
                            <label class="payment-option">
                                <input type="radio" name="payment" value="cod">
                                <span class="option-content">
                                    <i class="fas fa-money-bill-wave"></i>
                                    Cash on Delivery
                                </span>
                            </label>
                        </div>
                    </div>
                    
                    <button class="pay-now-btn">
                        Pay ₹${meal.price}
                    </button>
                </div>
            </div>
        `;
        
        // Add payment modal styles
        if (!document.getElementById('paymentStyles')) {
            const paymentStyles = document.createElement('style');
            paymentStyles.id = 'paymentStyles';
            paymentStyles.textContent = `
                .payment-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                
                .payment-content {
                    background: white;
                    border-radius: 12px;
                    width: 90%;
                    max-width: 500px;
                    padding: 25px;
                }
                
                .payment-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                
                .payment-header h2 {
                    color: #282c3f;
                    margin: 0;
                }
                
                .close-modal {
                    font-size: 24px;
                    cursor: pointer;
                    color: #686b78;
                }
                
                .meal-details {
                    display: flex;
                    gap: 15px;
                    padding: 15px;
                    background: #f8f9fa;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                
                .meal-thumbnail {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 8px;
                }
                
                .meal-text h3 {
                    margin: 0 0 5px;
                    color: #282c3f;
                }
                
                .meal-text .restaurant {
                    color: #686b78;
                    font-size: 14px;
                    margin-bottom: 5px;
                }
                
                .meal-text .description {
                    color: #686b78;
                    font-size: 13px;
                    line-height: 1.4;
                }
                
                .price-details {
                    border: 1px solid #e9e9eb;
                    border-radius: 8px;
                    padding: 15px;
                    margin-bottom: 20px;
                }
                
                .price-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    color: #686b78;
                    font-size: 14px;
                }
                
                .free-tag {
                    color: #48c479;
                    font-weight: 600;
                }
                
                .price-row.total {
                    border-top: 1px dashed #e9e9eb;
                    margin-top: 10px;
                    padding-top: 10px;
                    font-weight: 600;
                    color: #282c3f;
                }
                
                .payment-methods {
                    margin-bottom: 20px;
                }
                
                .payment-methods h3 {
                    color: #282c3f;
                    margin-bottom: 15px;
                }
                
                .payment-options {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                .payment-option {
                    display: flex;
                    align-items: center;
                    padding: 12px;
                    border: 1px solid #e9e9eb;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .payment-option:hover {
                    border-color: #fc8019;
                    background: #fff9f2;
                }
                
                .payment-option input {
                    margin-right: 10px;
                }
                
                .option-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .option-content i {
                    color: #fc8019;
                }
                
                .pay-now-btn {
                    width: 100%;
                    background: #fc8019;
                    color: white;
                    border: none;
                    padding: 15px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                
                .pay-now-btn:hover {
                    background: #e67312;
                }
            `;
            document.head.appendChild(paymentStyles);
        }
        
        // Add modal to DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Add event listeners
        const modal = document.querySelector('.payment-modal');
        const closeBtn = modal.querySelector('.close-modal');
        const payBtn = modal.querySelector('.pay-now-btn');
        
        closeBtn.onclick = () => modal.remove();
        
        payBtn.onclick = () => {
            const selectedPayment = modal.querySelector('input[name="payment"]:checked').value;
            modal.remove();
            showNotification('Order placed successfully! Your food will arrive soon.');
        };
        
        // Close modal when clicking outside
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }
}

// Add styles for budget management
const budgetStyles = document.createElement('style');
budgetStyles.textContent = `
    .budget-modal .modal-content,
    .subscription-modal .modal-content {
        max-width: 800px;
    }
    
    .budget-section {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
    }
    
    .budget-input {
        margin: 20px 0;
    }
    
    .budget-input label {
        display: block;
        margin-bottom: 8px;
        color: #484848;
    }
    
    .budget-input input {
        width: 200px;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .budget-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin: 20px 0;
    }
    
    .stat-item {
        background: white;
        padding: 15px;
        border-radius: 4px;
        text-align: center;
    }
    
    .stat-item .amount {
        display: block;
        font-size: 24px;
        color: #fc8019;
        margin-top: 5px;
    }
    
    .budget-progress {
        height: 8px;
        background: #e9ecef;
        border-radius: 4px;
        margin: 20px 0;
        overflow: hidden;
    }
    
    .budget-progress .progress-bar {
        height: 100%;
        background: #48c479;
        transition: width 0.3s ease;
    }
    
    .history-list {
        background: white;
        border-radius: 4px;
        overflow: hidden;
    }
    
    .history-item {
        display: grid;
        grid-template-columns: 1fr auto auto;
        padding: 12px;
        border-bottom: 1px solid #eee;
    }
    
    .subscription-plans {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px 0;
    }
    
    .plan-card {
        background: white;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        transition: transform 0.2s;
    }
    
    .plan-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .plan-price {
        font-size: 32px;
        color: #fc8019;
        margin: 15px 0;
    }
    
    .plan-details {
        margin: 15px 0;
        color: #686b78;
    }
    
    .subscribe-btn {
        background: #fc8019;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.2s;
    }
    
    .subscribe-btn:hover {
        background: #e67312;
    }
`;

document.head.appendChild(budgetStyles);

function showCouponPopup() {
    const popupHTML = `
        <div class="coupon-popup">
            <div class="coupon-content">
                <div class="coupon-header">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/1acdb97aadcb61b323307845bda86535" alt="Offers" class="offer-icon">
                    <h2>Available Offers</h2>
                    <button class="close-popup"><i class="fas fa-times"></i></button>
                </div>
                <div class="coupon-list">
                    <div class="coupon-item">
                        <div class="coupon-left">
                            <span class="coupon-code">WELCOME50</span>
                            <p>50% off up to ₹100 on your first order</p>
                        </div>
                        <button class="copy-btn">COPY</button>
                    </div>
                    <div class="coupon-item">
                        <div class="coupon-left">
                            <span class="coupon-code">SWIGGYIT</span>
                            <p>₹120 off on orders above ₹499</p>
                        </div>
                        <button class="copy-btn">COPY</button>
                    </div>
                    <div class="coupon-item">
                        <div class="coupon-left">
                            <span class="coupon-code">FREEDEL</span>
                            <p>Free delivery on your first 3 orders</p>
                        </div>
                        <button class="copy-btn">COPY</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add styles for coupon popup
    const couponStyles = document.createElement('style');
    couponStyles.textContent = `
        .coupon-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .coupon-content {
            background: white;
            border-radius: 12px;
            width: 90%;
            max-width: 480px;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .coupon-header {
            padding: 20px;
            border-bottom: 1px solid #e9e9eb;
            display: flex;
            align-items: center;
            gap: 12px;
            position: sticky;
            top: 0;
            background: white;
            z-index: 1;
        }

        .coupon-header h2 {
            font-size: 20px;
            color: #282c3f;
            margin: 0;
            flex-grow: 1;
        }

        .offer-icon {
            width: 28px;
            height: 28px;
        }

        .close-popup {
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
            color: #686b78;
            font-size: 18px;
        }

        .coupon-list {
            padding: 20px;
        }

        .coupon-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border: 1px solid #e9e9eb;
            border-radius: 8px;
            margin-bottom: 16px;
            transition: transform 0.2s;
        }

        .coupon-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .coupon-code {
            display: inline-block;
            font-weight: 600;
            color: #282c3f;
            font-size: 16px;
            margin-bottom: 6px;
        }

        .coupon-left p {
            margin: 0;
            color: #686b78;
            font-size: 14px;
        }

        .copy-btn {
            background: #fc8019;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.2s;
        }

        .copy-btn:hover {
            background: #e67312;
        }

        @media (max-width: 480px) {
            .coupon-content {
                width: 95%;
                max-height: 80vh;
            }

            .coupon-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 12px;
            }

            .copy-btn {
                width: 100%;
            }
        }
    `;
    document.head.appendChild(couponStyles);

    // Add popup to DOM
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Add event listeners
    const popup = document.querySelector('.coupon-popup');
    const closeBtn = popup.querySelector('.close-popup');
    const copyBtns = popup.querySelectorAll('.copy-btn');

    closeBtn.addEventListener('click', () => {
        popup.remove();
    });

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const couponCode = btn.parentElement.querySelector('.coupon-code').textContent;
            navigator.clipboard.writeText(couponCode);
            btn.textContent = 'COPIED!';
            setTimeout(() => {
                btn.textContent = 'COPY';
            }, 2000);
        });
    });

    // Close on outside click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.remove();
        }
    });
}

// Add coupon button to restaurant cards
document.querySelectorAll('.restaurant-card').forEach(card => {
    const offersDiv = card.querySelector('.offers');
    if (offersDiv) {
        offersDiv.style.cursor = 'pointer';
        offersDiv.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent restaurant card click
            showCouponPopup();
        });
    }
});

// Add enhanced styles
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    .header {
        position: sticky;
        top: 0;
        background: white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        z-index: 100;
        transition: transform 0.3s;
    }

    .header.hide {
        transform: translateY(-100%);
    }

    .floating-cart {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #fc8019;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(252, 128, 25, 0.4);
        transition: transform 0.2s;
        z-index: 99;
    }

    .floating-cart:hover {
        transform: scale(1.1);
    }

    .floating-cart .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #60b246;
        color: white;
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 12px;
        font-weight: 600;
    }

    .menu-header {
        position: sticky;
        top: 0;
        background: white;
        z-index: 10;
        padding: 15px 0;
        border-bottom: 1px solid #e9e9eb;
    }

    .menu-categories {
        position: sticky;
        top: 70px;
        background: white;
        z-index: 9;
        padding: 10px 0;
        border-bottom: 1px solid #e9e9eb;
        display: flex;
        gap: 20px;
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .menu-categories::-webkit-scrollbar {
        display: none;
    }

    .category-tab {
        white-space: nowrap;
        padding: 8px 16px;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 14px;
        color: #686b78;
    }

    .category-tab.active {
        background: #fc8019;
        color: white;
    }

    .category-tab:hover:not(.active) {
        background: #f0f0f0;
    }

    .offer-banner {
        position: absolute;
        top: 15px;
        left: -35px;
        background: #fc8019;
        color: white;
        padding: 6px 40px;
        transform: rotate(-45deg);
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(252, 128, 25, 0.3);
        z-index: 1;
    }

    .restaurant-card {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    .restaurant-card:hover {
        transform: translateY(-12px);
    }

    .restaurant-image img {
        transition: transform 0.5s;
    }

    .restaurant-card:hover .restaurant-image img {
        transform: scale(1.08);
    }

    .offers {
        transform: translateY(100%);
        transition: transform 0.3s;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        padding: 20px;
    }

    .restaurant-card:hover .offers {
        transform: translateY(0);
    }

    @media (max-width: 1200px) {
        .restaurants-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }
    }

    @media (max-width: 768px) {
        .restaurants-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            padding: 0 15px;
        }

        .restaurant-image {
            height: 160px;
        }

        .floating-cart {
            width: 50px;
            height: 50px;
            bottom: 15px;
            right: 15px;
        }

        .menu-categories {
            padding: 10px 15px;
        }
    }

    @media (max-width: 480px) {
        .restaurants-grid {
            grid-template-columns: 1fr;
        }

        .restaurant-card {
            border-radius: 12px;
        }

        .restaurant-info {
            padding: 15px;
        }

        .restaurant-info h3 {
            font-size: 18px;
        }

        .offer-banner {
            font-size: 12px;
            padding: 4px 30px;
        }

        .menu-header {
            padding: 10px 15px;
        }
    }
`;
document.head.appendChild(enhancedStyles);

// Add scroll behavior for header
let lastScroll = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastScroll = currentScroll;
});
  
  