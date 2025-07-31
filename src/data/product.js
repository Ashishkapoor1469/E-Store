const products = [
  {
    name: "iPhone 14",
    description: "Apple's latest smartphone with A15 Bionic chip, dual-camera system, and iOS 16.",
    price: 80000,
    category: "Smartphone",
    stock: 25,
    image: "https://i0.wp.com/cdnssl.ubergizmo.com/wp-content/uploads/2022/09/iphone-14-review-06.jpg"
  },
  {
    name: "Samsung Galaxy S23",
    description: "Flagship Android phone with Snapdragon 8 Gen 2, 50MP camera, and AMOLED display.",
    price: 75000,
    category: "Smartphone",
    stock: 30,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZfyzn8sPF-q7w4dltN5cSn0Xyhvx0ZEiiA&s"
  },
  {
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise-cancelling headphones with 30-hour battery life.",
    price: 29000,
    category: "Headphones",
    stock: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhCdpKme8C9jOEC8RMIyJbFdZNWq81hMLKw&s"
  },
  {
    name: "MacBook Air M2",
    description: "Apple's lightweight laptop with M2 chip, 13.6-inch Retina display, and 18-hour battery.",
    price: 115000,
    category: "Laptop",
    stock: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-8zR3Uxxq5s6ZS1mgZnwOuvfTX7NFTpdfg&s"
  },
  {
    name: "Dell XPS 13",
    description: "High-performance Windows laptop with 11th Gen Intel Core and 13.4-inch 4K display.",
    price: 95000,
    category: "Laptop",
    stock: 20,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Canon EOS R50",
    description: "Compact mirrorless camera with 24.2MP APS-C sensor and 4K video recording.",
    price: 85000,
    category: "Camera",
    stock: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVmUq-IsbT27pZ962-XiR_2DoAbSo6qKAYw&s"
  },
  {
    name: "Google Pixel 9",
    description: "Google's latest smartphone with Tensor G3 chip and advanced AI camera features.",
    price: 82000,
    category: "Smartphone",
    stock: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3u_aR87xZG-NpVSmlb_Blhm4uoeN9_RsUAQ&s"
  },
  {
    name: "Bose QuietComfort 45",
    description: "Premium noise-cancelling headphones with superior sound and 24-hour battery life.",
    price: 27000,
    category: "Headphones",
    stock: 22,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sony Alpha 7 IV",
    description: "Full-frame mirrorless camera with 33MP sensor and 4K 60fps video.",
    price: 185000,
    category: "Camera",
    stock: 8,
    image: "https://i.pinimg.com/474x/de/43/29/de43299001b3495a634cd502989f0bcd.jpg"
  },
  {
    name: "Microsoft Surface Laptop 5",
    description: "Sleek Windows laptop with 12th Gen Intel Core and 13.5-inch PixelSense display.",
    price: 105000,
    category: "Laptop",
    stock: 15,
    image: "https://images-cdn.ubuy.co.in/634d0aca1603b968196814e6-surface-pro-5th-gen-intel-core-m3.jpg"
  },
  {
    name: "AirPods Pro 2",
    description: "Wireless earbuds with active noise cancellation and adaptive audio.",
    price: 25000,
    category: "Headphones",
    stock: 30,
    image: "https://www.apple.com/v/airpods-pro/m/images/meta/og__eui2mpgzwyaa_overview.png"
  },
  {
    name: "Fitbit Versa 4",
    description: "Fitness-focused smartwatch with heart rate monitoring and 6-day battery life.",
    price: 20000,
    category: "Smartwatch",
    stock: 27,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtmquB_TiF4T9oN7Hvp4ZO4oNl628O0qFWw&s"
  },
  {
    name: "PlayStation 5 Pro",
    description: "Next-gen gaming console with 8K support, ray tracing, and 825GB SSD.",
    price: 65000,
    category: "Gaming Console",
    stock: 15,
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/11/full/1726031224-467.jpg?im=FeatureCrop,size=(826,465)"
  },
  {
    name: "Xbox Series X",
    description: "Powerful gaming console with 4K gaming, 1TB SSD, and Quick Resume feature.",
    price: 55000,
    category: "Gaming Console",
    stock: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSejJb1acLJt2zRq4zAqqX47S80RF2TkMp-A&s"
  },
  {
    name: "Amazon Echo Dot (5th Gen)",
    description: "Smart speaker with Alexa, improved audio, and smart home control.",
    price: 5500,
    category: "Smart Home",
    stock: 40,
    image: "https://www.reliancedigital.in/akamai/images/products/Amazon-Echo-Dot-5th-Gen-2023-Black-21.png"
  },
  {
    name: "Google Nest Hub (2nd Gen)",
    description: "Smart display with Google Assistant, 7-inch touchscreen, and sleep tracking.",
    price: 10000,
    category: "Smart Home",
    stock: 25,
    image: "https://www.cnet.com/a/img/resize/bc859600a71f1e14791595133e77e121617de9bd/hub/2021/03/24/e55e20d5-39bd-40d0-ae28-521d98d6ddde/google-nest-hub-2nd-gen-1.jpg?auto=webp&fit=crop&height=362&width=644"
  },
  {
    name: "DJI Mini 4 Pro",
    description: "Compact drone with 4K HDR video, 34-minute flight time, and obstacle sensing.",
    price: 75000,
    category: "Drone",
    stock: 10,
    image: "https://www.xboom.in/wp-content/uploads/2023/10/Group-5-1.jpg"
  },
  {
    name: "Ring Video Doorbell 4",
    description: "Smart doorbell with 1080p HD video, motion detection, and two-way talk.",
    price: 18000,
    category: "Smart Home",
    stock: 20,
    image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/ring-video-doorbell-4-8.jpg?q=70&fit=contain&w=1200&h=628&dpr=1"
  },
  {
    name: "Fujifilm X-T5",
    description: "Mirrorless camera with 40.2MP APS-C sensor and 6.2K video recording.",
    price: 140000,
    category: "Camera",
    stock: 8,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Asus ROG Zephyrus G14",
    description: "Gaming laptop with AMD Ryzen 9, RTX 4060, and 14-inch QHD display.",
    price: 120000,
    category: "Laptop",
    stock: 12,
    image: "https://images-cdn.ubuy.co.in/633ab19cbf46b94fe72f7035-asus-rog-zephyrus-15-6-quot-qhd.jpg"
  },
  {
    name: "Jabra Elite 10",
    description: "Wireless earbuds with Dolby Atmos, noise cancellation, and 6-hour battery.",
    price: 22000,
    category: "Headphones",
    stock: 28,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpO2KU4xVlp-drOXTfaFf_Mosh8wdiUBkWIA&s"
  },
  {
    name: "Garmin Forerunner 965",
    description: "Premium running smartwatch with AMOLED display and advanced training metrics.",
    price: 45000,
    category: "Smartwatch",
    stock: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-TvQPrIPrVXuNlJiR39j2hczsmpW3L3Hzw&s"
  }
];

export default products;