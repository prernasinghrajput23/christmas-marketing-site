// Event listener for "Start Shopping" button
document.getElementById("btn-1").addEventListener("click", function() {
    alert("Welcome to the Christmas Market! Start shopping now!");
});

// Event listener for "Learn More" button
document.querySelector(".btn-2").addEventListener("click", function() {
    alert("You can become a vendor by signing up on our website.");
});

// Hover effect on navigation items
const navItems = document.querySelectorAll("nav ul li");
navItems.forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.color = "beige";  // Change color on hover
    });
    item.addEventListener("mouseout", function() {
        item.style.color = "gold";   // Revert color when hover ends
    });
});

// Smooth scrolling for links (optional)
const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});




// Data for all cart items (images, details, prices)
const cartData = [
    {
        category: "Christmas Decorations",
        items: [
            {
                image: "images/christmas1.jpg",
                title: "Christmas Star Ornaments",
                price: "₹499",
                description: "TOYXE Large Christmas Star with Hanging Paper Ornaments for Decor Pack of 6 Pcs"
            },
            {
                image: "images/christmas2.jpg",
                title: "LED Christmas Lights",
                price: "₹999",
                description: "Bright and colorful LED lights to illuminate your space."
            },
            {
                image: "images/christmas3.jpg",
                title: "Wreath Decorations",
                price: "₹799",
                description: "Decorative wreaths to hang on your door."
            },
            {
                image: "images/christmas4.jpg",
                title: "Corashan Christmas Decoration",
                price: "₹809",
                description: " Christmas Light Up Ornaments Father Christmas tree snowman"

            },
            {
                image: "images/christmas5.jpg",
                title: "Christmas Window Decorations",
                price: "₹490",
                description: " Christmas Window Decorations Christmas Light Up Ornaments Father Christmas tree snowman"

            },
            {
                image: "images/christmas6.jpg",
                title: "LYU Xmas Tree Handicraft with Bell Decor Electroplated Anti-rust Christmas Decoration Desktop Simulated Christmas Trees for Home",
                price: "₹789",
                description: " This mini Christmas tree is processed by electroplating process, using thickened environmental protection materials, wear-resistant and rust-proof, can be saved for a long time, is a good decorative ornaments."
            }
            
        ]
    },
    {
        category: "Arts & Crafts",
        items: [
            {
                image: "images/arts1.jpeg",
                title: "Painting Kit",
                price: "₹199",
                description: "Complete painting kit for beginners and professionals."
            },
            {
                image: "images/arts2.jpeg",
                title: "DIY Craft Kit",
                price: "₹399",
                description: "Perfect DIY craft kit to boost your creativity."
            },
            {
                image: "images/arts3.jpeg",
                title: "Sketchbook Set",
                price: "₹239",
                description: "High-quality sketchbook set for artists."
            },
            {
                image: "images/arts4.jpeg",
                title: "Best Christmas Arts and Crafts",
                price: "₹999",
                description: "Making Christmas crafts is a great tradition to start with the family. Kids love to put ornaments that they have made on the tree. Making a nativity creche together helps remind us of the real reason for the holiday. Wreaths and centerpieces take on a special meaning when personally crafted. Christmas crafts are beautiful and thoughtful gifts to give."
            },
            {
                image: "images/arts5.jpeg",
                title: "Christmas Tree Crafts",
                price: "₹769",
                description: "This Accordion Paper Christmas Tree is an insanely easy craft to make with your kids.."

            },
            {
                image: "images/arts6.jpeg",
                title: "christmas crafts ideas",
                price: "₹569",
                description: "High-quality  set for artists."
            }
        ]
    },
    {
        category: "Clothes & Accessories",
        items: [
            {
                image: "images/clothes1.jpeg",
                title: "Set of christmas outfit & accessories",
                price: "₹1999",
                description: "Stay warm and stylish with this premium winter christmas outfits."
            },
            {
                image: "images/clothes2.jpeg",
                title: "christmas clothes vectors & illustrations",
                price: "₹599",
                description: "Add a touch of elegance with this trendy & illustrations clothes."
            },
            {
                image: "images/clothes3.jpeg",
                title: "Brown Leaf Merry Christmas Combo Accessories",
                price: "₹2499",
                description: "Nice Christmas Gifts: you can prepare holiday headband for your backup or send to your friends, relatives, colleagues, classmates and neighbors as delicate gifts on Christmas, bringing much convenience to them and improving your relations."
            },
            {
                image: "images/clothes4.jpeg",
                title: "Winter Clothes Shoes Accessories and Christmas Decor",
                price: "₹1300",
                description: "this is very nice and comfortable."

            },
            {
                image: "images/clothes5.jpeg",
                title: "Christmas headbands & hair accessories",
                price: "₹1299",
                description: "We’re talking tinsel, light up headbands, even a three-tiered present hat headband – perfect for the jokesters and big kids at heart.  "
            },
            {
                image: "images/clothes6.jpeg",
                title: "Christmas Accessories",
                price: "₹2499",
                description: "If you looking for accessories which are match with Christmas celebration party, then this hamper is one of the best matches for you"
            }
        ]
    },
    {
        category: "Kids Toys",
        items: [
            {
                image: "images/toys1.jpeg",
                title: "Discover the Top Toys for Christmas 2024: The Ultimate Gift Guide for Kids",
                price: "₹799",
                description: "We’ve compiled a comprehensive list of the top Christmas toys in various categories, from trendy tech gadgets to eco-friendly and sustainable toys."
            },
            {
                image: "images/toys2.jpeg",
                title: "Top 10 Toy Predictions For Christmas 2024",
                price: "₹1299",
                description: "rom high-tech gadgets that’ll have kids of all ages buzzing with excitement to classic favourites that never go out of style, we’ve scoured the toy universe to bring you the ultimate list of must-have toys. So, grab a cup of cocoa, gather ’round the fire, and get ready to discover the toys that will make this holiday season the merriest and brightest yet!."
            },
            {
                image: "images/toys3.jpeg",
                title: "Plush Teddy Bear",
                price: "₹499",
                description: "Soft and cuddly plush teddy bear for kids."
            },
            {
                image: "images/toys4.jpeg",
                title: "Plush Teddy Bear",
                price: "₹499",
                description: "Soft and cuddly plush teddy bear for kids."

            }
        ]
    }
];

// Select all cart cards
const cartCards = document.querySelectorAll('.cart-card');

// Function to display modal with details
function showDetails(categoryIndex, itemIndex = 0) {
    const selectedCategory = cartData[categoryIndex];
    const selectedItem = selectedCategory.items[itemIndex];

    // Remove existing modal if any
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    // Create a new modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = '#fff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.style.width = '30%';
    modal.style.maxWidth = '300px';
    modal.style.zIndex = '1000';
    modal.innerHTML = `
        <h2>${selectedCategory.category}</h2>
        <img src="${selectedItem.image}" alt="${selectedItem.title}" style="width: 100%; border-radius: 8px;">
        <h3>${selectedItem.title}</h3>
        <p><strong>Price:</strong> ${selectedItem.price}</p>
        <p>${selectedItem.description}</p>
        <div style="margin-top: 10px; display: flex; justify-content: space-between;">
            <button class="prev-btn" style="padding: 10px; background: #007bff; color: white; border: none; cursor: pointer;">Previous</button>
            <button class="next-btn" style="padding: 10px; background: #007bff; color: white; border: none; cursor: pointer;">Next</button>
        </div>
        <button class="close-modal" style="margin-top: 20px; padding: 10px 20px; background: red; color: white; border: none; cursor: pointer;">Close</button>
    `;

    // Append modal to the body
    document.body.appendChild(modal);

    // Add functionality to close the modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    // Add functionality for navigation buttons
    document.querySelector('.prev-btn').addEventListener('click', () => {
        const prevIndex = (itemIndex - 1 + selectedCategory.items.length) % selectedCategory.items.length;
        showDetails(categoryIndex, prevIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        const nextIndex = (itemIndex + 1) % selectedCategory.items.length;
        showDetails(categoryIndex, nextIndex);
    });
}

// Add click event listeners to each cart card
cartCards.forEach((card, index) => {
    card.addEventListener('click', () => showDetails(index));
});


