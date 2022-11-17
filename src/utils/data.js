import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`{
    from {
        opacity:0;
    }
  
    to {
        opacity:1;
    }
}`

export const fadeInRightShorter = keyframes`
from {
  opacity: 0;
  transform: translate(-50px,0);
  transform-origin: 0 0;
}

to {
  opacity: 1;
  transform: none
}`;

export const fadeInRight = keyframes`
0% {
    -webkit-transform: translate3d(100%,0,0);
    opacity: 0;
    transform: translate3d(100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;

export const fadeInLeftShorter = keyframes`{
    from {
        opacity: 0;
        transform: translate(50px,0);
        transform-origin: 0 0;
    }
    to {
        opacity: 1;
        transform: none
    }
}`

export const fadeInLeft = keyframes`
0% {
    -webkit-transform: translate3d(-100%,0,0);
    opacity: 0;
    transform: translate3d(-100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;

export const fadeInUpShorter = keyframes`
from {
    opacity: 0;
    transform: translate(0,50px);
    transform-origin: 0 0;
}
to {
    opacity:1;
    transform:none
}`

export const fadeInUp = keyframes`
0% {
    -webkit-transform: translate3d( 0, 100%, 0 );
    opacity: 0;
    transform: translate3d( 0, 100 %, 0 )
}

to {
    -webkit-transform: translateZ( 0 );
    opacity: 1;
    transform: translateZ( 0 )
}`

export const fadeInDownShorter = keyframes`
from {
    opacity: 0;
    transform: translate(0,-50px);
    transform-origin: 0 0;
}

to {
    opacity: 1;
    transform: none
}`

export const blurIn = keyframes`{
    from {
        opacity: 0;
        filter: blur(20px);
        transform: scale(1.2);
    }
    to {
        opacity: 1;
        filter: blur(0);
        transform: none 
    }
}`

export const grayOut = keyframes`{
    from {
        opacity: 1;
        filter: grayscale(0);
    }
    15% {
        filter: grayscale(100%);
    }
    to {
        opacity: .0;
        filter: grayscale(100%);
    }
}`

export const dotPulse = keyframes`{
    from {
        opacity:1;
        transform:scale(.2)
    }
  
    to {
        opacity:0;
        transform:scale(1)
    }
}`

export const maskUp = keyframes`{
    from {
        transform: translate(0,100%)
    }
  
    to {
        transform: translate(0,0)
    }
}`

export const maskRight = keyframes`{
    from {
        transform: translate(-100%,0)
    }
    to {
        transform: translate(0,0)
    }
}`

export const maskDown = keyframes`{
    from {
        transform: translate(0,-100%)
    }
    to {
        transform: translate(0,0)
    }
}`

export const maskLeft = keyframes`{
    from {
        transform: translate(100%,0)
    }
    to {
        transform: translate(0,0)
    }
}`

export const slideInUp = keyframes`{
    0% {
        transform: translate3d(0, 100%, 0);
        visibility: visible
    }

    to {
        transform: translateZ(0)
    }
}`

export const slideInDown = keyframes`{
    0% {
        transform: translate3d(0, -100%, 0);
        visibility: visible
    }

    to {
        transform: translateZ(0)
    }
}`

export const slideInLeft = keyframes`{
    0% {
        transform: translate3d(-100%, 0, 0);
        visibility: visible
    }
  
    to {
        transform: translateZ(0)
    }
}`

export const slideInRight = keyframes`{
    0% {
        transform: translate3d(100%, 0, 0);
        visibility: visible
    }
  
    to {
        transform: translateZ(0)
    }
}`

export const flipInX = keyframes`{
    0% {
        animation-timing-function: ease-in;
        opacity: 0;
        transform: perspective(400px) rotateX(90deg)
    }
  
    to {
        transform: perspective(400px)
    }
}`

export const flipInY = keyframes`{
  0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: perspective(400px) rotateY(90deg);
  }

  to {
      transform: perspective(400px);
  }
}`

export const flipOutY = keyframes`{
    0% {
        animation-timing-function: ease-out;
        transform: perspective(400px)
    }

    to {
        opacity: 0;
        transform: perspective(400px) rotateY(90deg)
    }
}`

export const brightIn = keyframes` {
    0% {
        animation-timing-function: ease-in;
        filter: brightness(0%)
    }
  
    to {
        filter: brightness(100%)
    }
}`

export const zoomInShorter = keyframes`{
    0%{
        -webkit-transform:scale3d(.8,.8,.8);
        opacity:0;
        transform:scale3d(.8,.8,.8)
    }
    50%{
        opacity:1
    }
}`

export const bounceInUp = keyframes`{
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
        opacity: 0;
        transform: translate3d(0, 3000px, 0);
    }

    60% {
        opacity: 1;
        transform: translate3d(0, -20px, 0);
    }

    75% {
        transform: translate3d(0, 10px, 0);
    }

    90% {
        transform: translate3d(0, -5px, 0);
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}`

export const slideZoomIn = keyframes`{
    0%{
        transform:scale3d(1,1,1);
        opacity: 1;
    }
    100% {
        transform:scale3d(1.1,1.1,1);
        opacity: 1;
    }
}`

export const shopData = {
    "sizes": [
        {
            size: 'Extra Small',
            slug: 'XS'
        },
        {
            size: 'Small',
            slug: 'S'
        },
        {
            size: 'Medium',
            slug: 'M'
        },
        {
            size: 'Large',
            slug: 'L'
        },
        {
            size: 'Extra Large',
            slug: 'XL'
        }
    ],

    "colors": [
        {
            color: '#cc9966',
            color_name: 'Brown'
        },
        {
            color: '#3399cc',
            color_name: 'Blue'
        },
        {
            color: '#9966cc',
            color_name: 'Purple'
        },
        {
            color: '#333333',
            color_name: 'Black'
        },
        {
            color: '#669933',
            color_name: 'Green'
        },
        {
            color: '#cc3333',
            color_name: 'Red'
        },
        {
            color: '#999999',
            color_name: 'Grey'
        }
    ],

    "brands": [
        {
            brand: "Next",
            slug: "next"
        },
        {
            brand: "River Island",
            slug: "river-island"
        },
        {
            brand: "Geox",
            slug: "geox"
        },
        {
            brand: "New Balance",
            slug: "nex-balance"
        },
        {
            brand: "UGG",
            slug: "ugg"
        },
        {
            brand: "F&F",
            slug: "f-and-f"
        },
        {
            brand: "Nike",
            slug: "nike"
        }
    ],

    "categories": [
        {
            name: "Furniture",
            slug: "furniture",
            count: 8
        },
        {
            name: "Coffee & Tables",
            slug: "coffee-and-tables",
            count: 1
        },
        {
            name: "Lighting",
            slug: "lighting",
            count: 3
        },
        {
            name: "Decoration",
            slug: "decoration",
            count: 5
        },
        {
            name: "Electronics",
            slug: "electronics",
            count: 1
        },
        {
            name: "Beds",
            slug: "beds",
            count: 2
        },
        {
            name: "Armchairs & Chaises",
            slug: "armchairs-and-chaises",
            count: 3
        },
        {
            name: "Sofas & Sleeper Sofas",
            slug: "sofas-and-sleeper-sofas",
            count: 1
        }
    ],

    "prices": [
        {
            min: '0',
            max: '25',
            name: 'Under $25'
        },
        {
            min: '25',
            max: '50',
            name: '$25 to $50'
        },
        {
            min: '50',
            max: '100',
            name: '$50 to $100'
        },
        {
            min: '100',
            max: '200',
            name: '$100 to $200'
        },
        {
            min: '200',
            max: '9999',
            name: '$200 & Above'
        },
    ]
}

export const homeData = {
    brands: [
        {
            "name": "brand",
            "image": "images/brands/1.png",
            "width": 100,
            "height": 23
        },
        {
            "name": "brand",
            "image": "images/brands/2.png",
            "width": 101,
            "height": 34
        },
        {
            "name": "brand",
            "image": "images/brands/3.png",
            "width": 100,
            "height": 30
        },
        {
            "name": "brand",
            "image": "images/brands/4.png",
            "width": 101,
            "height": 39
        },
        {
            "name": "brand",
            "image": "images/brands/5.png",
            "width": 100,
            "height": 48
        },
        {
            "name": "brand",
            "image": "images/brands/6.png",
            "width": 100,
            "height": 23
        },
        {
            "name": "brand",
            "image": "images/brands/7.png",
            "width": 63,
            "height": 32
        },
        {
            "name": "brand",
            "image": "images/brands/8.png",
            "width": 80,
            "height": 72
        },
        {
            "name": "brand",
            "image": "images/brands/9.png",
            "width": 100,
            "height": 25
        }
    ]
}

export const mainSlider1 = {
    nav: false,
    dots: true,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3,
            dots: true
        }
    }
}

export const mainSlider2 = {
    nav: false,
    dots: false,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}

export const mainSlider3 = {
    nav: false,
    dots: false,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            nav: true,
            items: 4
        }
    }
}

export const mainSlider4 = {
    nav: false,
    dots: false,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
}

export const mainSlider5 = {
    nav: false,
    dots: true,
    margin: 20,
    loop: true,
    responsive: {
        1200: {
            nav: true
        }
    }
}

export const mainSlider6 = {
    nav: false,
    dots: true,
    margin: 20,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 2,
            nav: true
        }
    }
}

export const mainSlider7 = {
    nav: false,
    dots: true,
    items: 3,
    margin: 20,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3,
            nav: true
        }
    }
}

export const mainSlider8 = {
    nav: false,
    dots: false,
    margin: 20,
    loop: false,
    items: 2,
    responsive: {
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 4,
            dots: false
        },
        1400: {
            nav: true,
            items: 4
        }
    }
}

export const mainSlider9 = {
    nav: true,
    dots: false,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    }
}

export const mainSlider10 = {
    loop: false,
    dots: false,
    responsive: {
        772: {
            nav: true
        }
    }
}

export const mainSlider11 = {
    nav: false,
    dots: true,
    margin: 30,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            items: 6,
            nav: true,
            dots: false
        }
    }
}


export const mainSlider12 = {
    nav: true,
    dots: false,
    margin: 20,
    loop: false,
    autoplay: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}

export const featureSlider1 = {
    nav: false,
    dots: false,
    margin: 30,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            items: 6
        }
    }
}

export const featureSlider2 = {
    nav: false,
    dots: false,
    margin: 0,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            items: 6
        },
        1360: {
            items: 7
        }
    }
}

export const featureSlider3 = {
    nav: false,
    dots: false,
    margin: 0,
    items: 6,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 2
        },
        600: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        },
        1500: {
            items: 6
        }
    }
}

export const featureSlider4 = {
    nav: false,
    dots: false,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
}

export const introSlider = {
    nav: false,
    responsive: {
        992: {
            nav: true
        }
    }

}

export const brandSlider = {
    nav: false,
    dots: true,
    margin: 30,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            items: 6
        },
        1400: {
            items: 6,
            nav: true,
            dots: false
        }
    }

}

export const productSlider = {
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1280: {
            items: 5
        },
        1400: {
            items: 5,
            nav: true
        }
    }
}

export const blogSlider = {
    nav: false,
    dots: true,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3
        },
        1280: {
            items: 4,
            nav: true,
            dots: false
        }
    }

}

export const products = [
    {
        name :"SanDisk Ultra 128GB SDXC UHS-I Memory Card up to 80MB/s",
        price : "45.89",
        description : "Ultra-fast cards (2) to take better pictures and Full HD videos (1) with your compact to mid-range point-and-shoot cameras and camcorders. With SanDisk Ultra SDXC UHS-I cards you’ll benefit from faster downloads, high capacity, and better performance to capture and store 128GB (5) of high quality pictures and Full HD video (1). Take advantage of ultra-fast read speeds of up to 80MB/s (3) to save time moving photos and videos from the card to your computer. From a leader in flash memory storage, SanDisk Ultra SDXC UHS-I cards are compatible with SDHC and SDXC digital devices, and come with a 10-year limited warranty (6).",
        ratings : 4.5,
        category : ["Electronics"],
        seller : "Ebay",
        stock : 50,
        numOfReviews : 32,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [{
            public_id : "products/dsvbpny402gelwugv2le",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_4_2_300x300_ec63a5f054_pinofq.jpg"
        }],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    },
    {
        name :"CAN USB FD Adapter (GC-CAN-USB-FD)",
        price : "315.00",
        description : "Monitor a CAN network, write a CAN program and communicate with industrial, medical, automotive or other CAN based device. Connect CAN FD and CAN networks to a computer via USB with the CAN USB FD adapter.",
        ratings : 1.65,
        category : ["Electronics"],
        seller : "Amazon",
        stock : 0,
        numOfReviews : 2,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [{
            public_id : "products/61oXGZ60GfL_fixco9",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_7_2_300x300_6e6c2d02d3_fulnmm.jpg"
        }],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    },
    {
        name :"CHARMOUNT Full Motion TV Wall Mount Swivel",
        price : "26.99 ",
        description : "CHARMOUNT TV MOUNT UNIVERSAL DESIGN - Has your TV been received? Tilted TV wall mount is for 26 - 55 TVs weight up to 88lbs 40 kg. Our tilt TV mount has a compatible faceplate that fits VESA 75X75mm (3x3). CHARMOUNT TV MOUNT UNIVERSAL DESIGN - Has your TV been received? Tilted TV wall mount is for 26 - 55 TVs weight up to 88lbs 40 kg. Our tilt TV mount has a compatible faceplate that fits VESA 75X75mm (3x3) CHARMOUNT TV MOUNT UNIVERSAL DESIGN - Has your TV been received? Tilted TV wall mount is for 26 - 55 TVs weight up to 88lbs 40 kg. Our tilt TV mount has a compatible faceplate that fits VESA 75X75mm (3x3).",
        ratings : 3.5,
        category : ["Electronics"],
        seller : "Amazon",
        stock : 1,
        numOfReviews : 12,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [{
            public_id : "products/chairmount_nuubea",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_1_2_300x300_d265cc4cd6_khgzij.jpg"
        }],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    },
    {
        name :"Bose QuietComfort 35 II Wireless Bluetooth Headphones",
        price : "299.00 ",
        description : "What happens when you clear away the noisy distractions of the world? Concentration goes to the next level. You get deeper into your music, your work, or whatever you want to focus on. That’s the power of Bose QuietComfort 35 wireless headphones II. Put them on and get closer to what you’re most passionate about. And that’s just the beginning. QuietComfort 35 wireless headphones II are now enabled with Bose AR",
        ratings : 4.5,
        category : ["Headphones"],
        seller : "Amazon",
        stock : 11,
        numOfReviews : 112,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [{
            public_id : "products/headphones_t2afnb",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_6_2_300x300_76886659e2_jfn6ne.jpg"
        }],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    },
    {
        name :"Apple AirPods with Charging Case (Wired)",
        price : "126.99 ",
        description : "AirPods with Charging Case: More than 24 hours listening time, up to 18 hours talk time; AirPods (single charge): Up to 5 hours listening time, up to 3 hours talk time or 15 minutes in the case equals up to 3 hours listening time or up to 2 hours talk time.",
        ratings : 4.8,
        category : ["Electronics"],
        seller : "Amazon",
        stock : 122,
        numOfReviews : 2671,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [{
            public_id : "products/airpords_e5cqqr",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_3_2_300x300_7ef429113e_hrghmn.jpg"
        }],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    },
    {
        name :"Cable Boom Microphone - Volume Control for Playstation PS4 or Xbox",
        price : "27.99",
        description : "DESIGN INFO - 3.5mm male to 2.5mm male audio cable adapter with Upgraded Flexible, Detachable Boom Mic which also enables rotary Volume Control and Mute Switch. SteelFlex Arm for perfect microphone positioning. INPUT COMPATIBILITY - Devices supporting 3.5mm audio output such as gaming PS4 / Xbox One controller, PC, Laptop, iPhone and Android Phone.",
        ratings : 4.1,
        category : ["Accessories"],
        seller : "Amazon",
        stock : 1123,
        numOfReviews : 6,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [{
            public_id : "products/eahhtj1bkn1k9gjgd3hn",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_2_2_300x300_798eabaee1_qbmhpo.jpg"
        }],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    },
    {
        name :"Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black ",
        price : "496.95",
        description : "You don't need to be a photographer to know a great photo when you see one. And you don't need to be a photographer to take a great photo—you just need the D3500. It's as easy to use as a point-and-shoot, but it takes beautiful DSLR photos and videos that get noticed. It feels outstanding in your hands, sturdy and balanced with controls where you want them. It's compact, durable and versatile, ideal for travel. And it works seamlessly with compatible smartphones, making it easier than ever to share your great photos. Even if you've never picked up a DSLR camera, you can take beautiful pictures with D3500.",
        ratings : 4.7,
        category : ["Cameras"],
        seller : "Amazon",
        stock : 131,
        numOfReviews : 222,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [{
            public_id : "products/camera_ridc0i",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_4_2_300x300_ec63a5f054_pinofq.jpg"
        }],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    },
    {
        name :"Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray ",
        price : "949.99",
        description : "Stunning 13.3-inch Retina display with True Tone technology, Backlit Magic Keyboard and Touch ID, Tenth-generation, Intel Core i3 processor, Intel Iris Plus Graphics, Fast SSD storage, 8GB of memory, Stereo speakers with wider stereo sound",
        ratings : 4.9,
        category : ["Laptops"],
        seller : "Amazon",
        stock : 0,
        numOfReviews : 56,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [{
            public_id : "products/macbook_o2cj2k",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_7_2_300x300_6e6c2d02d3_fulnmm.jpg"
        }],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    },
    {
        name :"Kauffman Orchards Homegrown McIntosh Apples",
        price : "2.75",
        description : "McIntosh is a pretty red/green apple with white flesh Homegrown in Kauffman's orchard in healthy Lancaster County soil McIntosh apples are famous for snacking, pies, salads, and applesauce Protected with soft, high-density foam for safe shipping to your door Not for sale to California, Oregon, or Washington due to state laws governing fresh produce",
        ratings : 5,
        category : ["Food"],
        seller : "Kauffman's Fruit Farm & Market",
        stock : 500,
        numOfReviews : 1,
        reviews: [],
        variants: [
            {
                color: "#f7bf50",
                price: 0.00
            },
            {
                color: "#d49c43",
                price: 0.00
            },
            {
                color: "#8c6424",
                price: 0.00
            },
        ],
        sm_pictures: [
            {
                public_id : "products/wmoa49q9e70ze9xtcra2",
                url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_3_2_300x300_7ef429113e_hrghmn.jpg"
            },
            {
                public_id : "products/i0k1wdwi5hrpmzwxvsds",
                url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_6_2_300x300_76886659e2_jfn6ne.jpg" 
            },
            {
                public_id : "products/bshmuo9qisfhz4azvnsd",
                url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_1_2_300x300_d265cc4cd6_khgzij.jpg"
            }
        ],
        slug: "",
        sale_price: 0.00,
        new: true,
        top: true,
    }
]


export const posts = [
    {
        slug: "",
        date: Date.now(),
        image: [
            {
                url: "https://res.cloudinary.com/ds6eldued/image/upload/v1667981397/posts/post_1_8285333d58_jkro4t.jpg",
                width: 376,
                height: 250                
            }
        ],
        blog_categories: [
            { name: "Lifestyle", slug: "lifestyle" }
        ],
        comments: 2,
        title: "Sed adipiscing odbrnare"
    },
    {
        slug: "",
        date: Date.now(),
        image: [
            {
                url: "https://res.cloudinary.com/ds6eldued/image/upload/v1667981397/posts/post_2_73cf3ad8f8_eg8wpg.jpg",
                width: 376,
                height: 250                
            }
        ],
        blog_categories: [
            { name: "Shopping", slug: "shopping" }
        ],
        comments: 1,
        title: "Fusce lacifgbnia arcuet nulla."
    },
    {
        slug: "",
        date: Date.now(),
        image: [
            {
                url: "https://res.cloudinary.com/ds6eldued/image/upload/v1667981397/posts/post_3_dbb5414ec7_oo3xic.jpg",
                width: 376,
                height: 250                
            }
        ],
        blog_categories: [
            { name: "Travel", slug: "travel" }
        ],
        comments: 3,
        title: "Quisque volutpat mdbattis eros."
    },
    {
        slug: "",
        date: Date.now(),
        image: [
            {
                url: "https://res.cloudinary.com/ds6eldued/image/upload/v1667981397/posts/post_1_8285333d58_jkro4t.jpg",
                width: 376,
                height: 250                
            }
        ],
        blog_categories: [
            { name: "Lifestyle", slug: "lifestyle" }
        ],
        comments: 2,
        title: "Sed adipiscing odbrnare"
    },
    {
        slug: "",
        date: Date.now(),
        image: [
            {
                url: "https://res.cloudinary.com/ds6eldued/image/upload/v1667981397/posts/post_2_73cf3ad8f8_eg8wpg.jpg",
                width: 376,
                height: 250                
            }
        ],
        blog_categories: [
            { name: "Shopping", slug: "shopping" }
        ],
        comments: 1,
        title: "Fusce lacifgbnia arcuet nulla."
    },
    {
        slug: "",
        date: Date.now(),
        image: [
            {
                url: "https://res.cloudinary.com/ds6eldued/image/upload/v1667981397/posts/post_3_dbb5414ec7_oo3xic.jpg",
                width: 376,
                height: 250                
            }
        ],
        blog_categories: [
            { name: "Travel", slug: "travel" }
        ],
        comments: 3,
        title: "Quisque volutpat mdbattis eros."
    },
];


export const cartList = [
    {
        name: "FlashDisk",
        slug: "FlashDisk",
        qty: 1,
        price: 3.12,
        sale_price: 4.50,
        sm_pictures: [{
            public_id : "products/macbook_o2cj2k",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_7_2_300x300_6e6c2d02d3_fulnmm.jpg"
        }],
        sum: 0.00
    },
    {
        name: "Laptop",
        slug: "laptop",
        qty: 1,
        price: 3.12,
        sale_price: 4.50,
        sm_pictures: [{
            public_id : "products/camera_ridc0i",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_4_2_300x300_ec63a5f054_pinofq.jpg"
        }],
        sum: 0.00
    },
    {
        name: "Monitor",
        slug: "monitor",
        qty: 1,
        price: 3.12,
        sale_price: 4.50,
        sm_pictures: [{
            public_id : "products/eahhtj1bkn1k9gjgd3hn",
            url : "https://res.cloudinary.com/ds6eldued/image/upload/v1667901329/products/product_2_2_300x300_798eabaee1_qbmhpo.jpg"
        }],
        sum: 0.00
    }
];