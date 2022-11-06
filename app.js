const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products =[
  {
    id: 1,
    title: "iPhone X",
    price: 519,
    colors:[
      {
        code: "black",
        img:"./image/images/IPhoneX_Black.jpg",
      },
      {
        code: "white",
        img:"./image/images/IPhoneX_white.jpg",
      },
    ],
    sizes:[
      {
        code: "blackreg",
        img:"./image/images/IPhoneX_Black.jpg",
      },
      {
        code: "blackpro",
        img:"./image/images/iphone_XR_black.jpg",
      },
      {
        code: "blackpromax",
        img:"./image/images/iphoneXS_Pro_black.jpg",
      },
      {
        code: "whitereg",
        img:"./image/images/IPhoneX_white.jpg",
      },
      {
        code: "whitepro",
        img:"./image/images/iphone-xr-white.png",
      },
      {
        code: "whitepromax",
        img:"./image/images/iphoneXS_Pro_white.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "iPhone 11",
    price: 765,
    colors:[
      {
        code: "black",
        img:"./image/images/iphone11_black.jpg",
      },
      {
        code: "silicon",
        img:"./image/images/iphone11_silicon.jpg",
      },
    ],
    sizes:[
      {
        code: "blackreg",
        img:"./image/images/iphone11_black.jpg",
      },
      {
        code: "blackpro",
        img:"./image/images/iphone11_pro_black.jpg",
      },
      {
        code: "blackpromax",
        img:"./image/images/iphone11_promax_black.jpg",
      },
      {
        code: "siliconreg",
        img:"./image/images/iphone11_silicon.jpg",
      },
      {
        code: "siliconpro",
        img:"./image/images/iphone11_pro_silicon.jpg",
      },
      {
        code: "siliconpromax",
        img:"./image/images/iphone11_promax_silicon.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "iPhone 12",
    price: 805,
    colors:[
      {
        code: "black",
        img:"./image/images/iphone12_black.jpg",
      },
      {
        code: "purple",
        img:"./image/images/iphone12_purple.jpg",
      },
    ],
    sizes:[
      {
        code: "blackreg",
        img:"./image/images/iphone12_black.jpg",
      },
      {
        code: "blackpro",
        img:"./image/images/iphone12_pro_black.png",
      },
      {
        code: "blackpromax",
        img:"./image/images/iphone12_promax_black.jpg",
      },
      {
        code: "purplereg",
        img:"./image/images/iphone12_purple.jpg",
      },
      {
        code: "purplepro",
        img:"./image/images/iphone12_pro_purple.jpg",
      },
      {
        code: "purplepromax",
        img:"./image/images/iphone12_promax_purple.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "iPhone 13",
    price: 1388,
    colors:[
      {
        code: "black",
        img:"./image/images/iphone13_black.jpg",
      },
      {
        code: "pink",
        img:"./image/images/iphone13_pink.png",
      },
    ],
    sizes:[
      {
        code: "blackreg",
        img:"./image/images/iphone13_black.jpg",
      },
      {
        code: "blackpro",
        img:"./image/images/iphone13_pro_black.jpg",
      },
      {
        code: "blackpromax",
        img:"./image/images/iphone13_promax_black.jpg",
      },
      {
        code: "pinkreg",
        img:"./image/images/iphone13_pink.png",
      },
      {
        code: "pinkpro",
        img:"./image/images/iphone13_pro_pink.jpg",
      },
      {
        code: "pinkpromax",
        img:"./image/images/iphone13_promax_pink.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "iPhone 14",
    price: 1994,
    colors:[
      {
        code: "black",
        img:"./image/images/Iphone14_Black.jpg",
      },
      {
        code: "white",
        img:"./image/images/iphone14_white.jpg",
      },
    ],
    sizes:[
      {
        code: "blackreg",
        img:"./image/images/Iphone14_Black.jpg",
      },
      {
        code: "blackpro",
        img:"./image/images/Iphone14_Pro_Black.jpg",
      },
      {
        code: "blackpromax",
        img:"./image/images/Iphone14_Promax_black.jpg",
      },
      {
        code: "whitereg",
        img:"./image/images/iphone14_white.jpg",
      },
      {
        code: "whitepro",
        img:"./image/images/Iphone14_Pro_white.jpg",
      },
      {
        code: "whitepromax",
        img:"./image/images/Iphone14_Promax_white.jpg",
      },
    ],
  },
];



let choosenProduct =products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
  item.addEventListener("click",()=>{

    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index)=>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  })  
});

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductImg.src = choosenProduct.sizes[index].img
  })
})

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    })
    size.style.backgroundColor="black";
    size.style.color="white";
  })
});
currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductColors.forEach((color)=>{
      color.style.border = "1px solid black";
    })
    color.style.border = "3px solid blue";
  })
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex";
})
close.addEventListener("click",()=>{
  payment.style.display="none";
})