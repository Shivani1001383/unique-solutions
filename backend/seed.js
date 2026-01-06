
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const productData = [
    {
        name: "Welding Rods",
        img: "https://www.lawsonproducts.com/cdn/shop/files/DV_ZoomOriginal_I_CW1058A.jpg?v=1738907653&width=1264",
        items: [
            "Mild Steel Electrodes",
            "Stainless Steel Rods",
            "Cast Iron Electrodes",
            "MIG Wires",
            "TIG Filler Rods",
            "Flux Cored Wires"
        ]
    },
    {
        name: "Nuts & Bolts",
        img: "https://cdn11.bigcommerce.com/s-fd9xotfhbf/images/stencil/1280w/image-manager/banner-main.jpg?t=1731957497",
        items: [
            "Hex Bolts & Nuts",
            "Anchor Fasteners",
            "Studs & Threaded Rods",
            "Washers (All Types)",
            "Screws (Self-Tapping, Machine)",
            "Rivets & Circlips"
        ]
    },
    {
        name: "Valves",
        img: "https://www.dnow.com/hubfs/WC/Images/Products/Valves%20and%20Actuation/valves_featured-image.jpg",
        items: [
            "Ball Valves",
            "Gate Valves",
            "Check Valves",
            "Butterfly Valves",
            "Globe Valves",
            "Strainers"
        ]
    },
    {
        name: "Tools & Equipment",
        img: "https://jcblhandtools.com/wp-content/uploads/2024/12/Guide-to-Workshop-Hand-Tools-2.webp",
        items: [
            "Spanners & Wrenches",
            "Pliers & Cutters",
            "Hammers",
            "Measuring Tools",
            "Tool Kits",
            "Power Tools (Drills, Grinders)"
        ]
    },
    {
        name: "Safety Gear",
        img: "https://emag.directindustry.com/wp-content/uploads/sites/3/iStock-947254500.jpg",
        items: [
            "Safety Helmets",
            "Safety Gloves",
            "Safety Goggles",
            "Ear Protection",
            "Safety Shoes",
            "Full Body Harness"
        ]
    },
    {
        name: "Machinery Parts",
        img: "https://thumbs.dreamstime.com/b/close-up-precision-planetary-gear-assembly-four-interlocking-steel-gears-central-shaft-showcasing-industrial-413988879.jpg",
        items: [
            "Bearings",
            "V-Belts",
            "Pulleys",
            "Sprockets",
            "Couplings",
            "Gears"
        ]
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('MongoDB Connected');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Products Cleared');

        // Add new products
        await Product.insertMany(productData);
        console.log('Products Added Successfully');

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
