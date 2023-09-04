

const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name:"Skechers",
        img:"https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        price:4500,
        desc:"Women Go Walk Stretch Fit Walking Shoes"
    },
    {
        name:"Red Tape",
        img:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
        price:7100,
        desc:"Women 327 Sports Shoes"
    },
    {
        name:"Nike",
        img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        price:599,
        desc:"Kids Blue Mesh NRGY Comet Running Shoes"
    },
    {
        name:"Puma",
        img:"https://images.unsplash.com/photo-1615290642708-a37192ba54ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
        price:1200,
        desc:"Men Future Play Youth Football Boots"
    },
    {
        name:"NIVIA",
        img:"https://images.unsplash.com/photo-1592962879424-fab5e296b7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        price:1443,
        desc:"Men Hy-Court 2.0 Lightweight Non-Marking Badminton Shoes"
    },
    {
        name:"HRX by Hrithik Roshan",
        img:"https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        price:4521,
        desc:"Men ICON Running Shoess"
    },
    {
        name:"Columbia",
        img:"https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
        price:14500,
        desc:"Men Escape Thrive Ultra Trekking Shoes"
    },
    {
        name:"ASICS",
        img:"https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=641&q=80",
        price:2345,
        desc:"Men White Colourblocked PU Sneakers"
    },
    {
        name:"U.S. Polo Assn.",
        img:"https://images.unsplash.com/photo-1621996659546-b0dd8b7e57af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:3149,
        desc:"Men Gabbro Pro Mid-Top Trekking Shoes"
    },
    {
        name:"Xtep",
        img:"https://images.unsplash.com/photo-1606297255627-c58c609140e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        price:6000,
        desc:"Men Grey Running Non-Marking Shoes"
        
    },
    {
        name:"Duke",
        img:"https://images.unsplash.com/photo-1634243967207-8f8a09cb578b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80",
        price:1399,
        desc:"Men Colourblocked Running Shoes"
    }  
    
]

async function seedDB(){
   await Product.insertMany(products);
  console.log("data seeded successfully");
}
module.exports = seedDB;