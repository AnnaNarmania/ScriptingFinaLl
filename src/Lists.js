import { useCart } from "./contexts/CartContext";
import { useCurrency } from "./contexts/CurrencyContext";
import { Link} from "react-router-dom";

import "./ListStyle.css";

export const products = [
  {
    id: 1,
    name: "Apollo Running Short",
    description:"As fuel dwindles and time slips away, Apollo races against the void. Stranded between Earth and destiny, one final mission teeters on the edge of failure. Every second counts. Every breath matters. Will humanity’s reach exceed its grasp?",
    price: 50,
    category: "MEN",
    inStock: true,
    images: [
      "https://contendersclothing.com/cdn/shop/files/20240412-Rocky-ApolloShorts-NEW-ECOM-1.jpg?v=1712955719",
      "https://contendersclothing.com/cdn/shop/files/20240412-Rocky-ApolloShorts-NEW-ECOM-1.jpg?v=1712955719",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },
  {
    id: 2,
    name: "Jupiter Wayfarer",
    description:"Breezy, playful, and effortlessly chic — this polka dot summer dress is your go-to for sunny days and spontaneous adventures. Made from lightweight, breathable fabric, it features a flattering silhouette, adjustable straps, and a classic dot pattern that never goes out of style. Perfect for picnics, beach strolls, or brunch with friends — just add your favorite sandals and you're set.",
    price: 75,
    category: "WOMEN",
    inStock: true,
    images: [
      "https://cdn-images.farfetch-contents.com/23/60/22/65/23602265_53684013_1000.jpg",
      "https://cdn-images.farfetch-contents.com/23/60/22/65/23602265_53684013_1000.jpg",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },
  {
    id: 3,
    name: "Knitted Shirt",
    description:"A cozy, knitted shirt that combines comfort and style. Perfect for layering or wearing on its own, this shirt features a soft, textured fabric that feels great against the skin. The relaxed fit and classic design make it a versatile addition to any wardrobe, suitable for both casual outings and more polished looks.",
    price: 45,
    category: "KIDS",
    inStock: true,
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjUT4nwv-oejFT1nMVQaLzWKR6df3D7scLq3w74baOgHVAZUCWByXpgRd3A_g-UM2T6UEbMdFY89crT6qUT0uB535lHmc9RCLeM2JmBC3NZURntZtl4NNhe9PY1uIQwP7wzzsnhA&usqp=CAc",
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjUT4nwv-oejFT1nMVQaLzWKR6df3D7scLq3w74baOgHVAZUCWByXpgRd3A_g-UM2T6UEbMdFY89crT6qUT0uB535lHmc9RCLeM2JmBC3NZURntZtl4NNhe9PY1uIQwP7wzzsnhA&usqp=CAc",,
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },
  {
    id: 4,
    name: "T-shirt",
    description: "A grunge t-shirt that combines comfort and style. Made from soft, breathable fabric, it features a relaxed fit and a timeless design. Perfect for casual outings or lounging at home, this t-shirt is a versatile wardrobe staple that pairs well with jeans, shorts, or skirts.",
    price: 55,
    category: "MEN",
    inStock: false,
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcw6uYe-H58d1NmAqyuhjrjudvxb5a6gZDvju91elvs9Mxhlvx5ZQ0tfMO26yc_5uYFI6HnCK6l0bUFFK1B7MkK-rNguwYDJwdjXaS0tEd-M8oXtXcrNCHhS4nMXZPdC4Eoy9oiA&usqp=CAc",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcw6uYe-H58d1NmAqyuhjrjudvxb5a6gZDvju91elvs9Mxhlvx5ZQ0tfMO26yc_5uYFI6HnCK6l0bUFFK1B7MkK-rNguwYDJwdjXaS0tEd-M8oXtXcrNCHhS4nMXZPdC4Eoy9oiA&usqp=CAc",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },
  {
    id: 5,
    name: "Classic Pink Polo",
    description: "A classic pink polo shirt that combines elegance and comfort. Made from high-quality cotton, it features a timeless design with a button-down collar and short sleeves. Perfect for casual outings or semi-formal occasions, this polo shirt adds a touch of sophistication to any outfit.",
    price: 120,
    category: "MEN",
    inStock: true,
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTP_BYvsmUXGhDWzfl8Wum-_Wy4yxyHVyyhaQYBzhaB6w7WpvrtT2mqqo2gfp9NWj638wk5KXDWGvEXUKAqU_O3lDJGfsaN4xcS5ESZHtixATAdiIeYzUSbNRJFxwfQONh5eoOWqrU&usqp=CAc",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTP_BYvsmUXGhDWzfl8Wum-_Wy4yxyHVyyhaQYBzhaB6w7WpvrtT2mqqo2gfp9NWj638wk5KXDWGvEXUKAqU_O3lDJGfsaN4xcS5ESZHtixATAdiIeYzUSbNRJFxwfQONh5eoOWqrU&usqp=CAc",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },
  {
    id: 6,
    name: "Tailored Coat",
    description: "A tailored coat that exudes sophistication and style. Made from high-quality wool, it features a classic design with a single-breasted front, notch lapels, and two front pockets. Perfect for formal occasions or adding a touch of elegance to your everyday look.",
    price: 250,
    category: "MEN",
    inStock: true,
    images: [
      "https://cdn-images.farfetch-contents.com/25/63/61/88/25636188_55782628_1000.jpg",
      "https://cdn-images.farfetch-contents.com/25/63/61/88/25636188_55782628_1000.jpg",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },


  {
    id: 7,
    name: "Elegant Evening Dress",
    description: "An elegant evening dress that combines sophistication and style. Made from luxurious fabric, it features a flattering silhouette with a fitted bodice and flowing skirt. Perfect for formal events, this dress is designed to make you feel confident and beautiful.",
    price: 350,
    category: "WOMEN",
    inStock: true,
    images: [
      "https://www.mytheresa.com/media/1094/1238/100/3e/P00917723.jpg",
      "https://www.mytheresa.com/media/1094/1238/100/3e/P00917723.jpg",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },
  {
    id: 8,
    name: "Granny Frame mini bag",
    description: "A chic and stylish mini bag that adds a touch of elegance to any outfit. Made from high-quality materials, it features a unique granny frame design with a secure clasp closure. Perfect for carrying your essentials, this mini bag is both functional and fashionable.",
    price: 420,
    category: "WOMEN",
    inStock: true,
    images: [
      "https://www.mytheresa.com/media/1094/1238/100/a6/P01059320.jpg",
      "https://www.mytheresa.com/media/1094/1238/100/a6/P01059320.jpg",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },


  {
    id: 9,
    name: "Elegant Kids' Jacket",
    description: "A stylish and comfortable jacket designed for kids. Made from high-quality materials, it features a classic design with a zip-up front and two side pockets. Perfect for keeping your little ones warm and fashionable during chilly days.",
    price: 35,
    category: "KIDS",
    inStock: true,
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8HHJLk0UovVTNSXD-QPTNS5Pq5IjrqTo_2ETOx_BCiCEYYBBGldPRz5V3ZsCMuc71FkF5-RCZLIKkMl5rCeJ1ppZRFLjkMUk82wb6ICcDv-jtbw2iB_HqFut5A9J9-2c7kQHzT7U&usqp=CAc",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8HHJLk0UovVTNSXD-QPTNS5Pq5IjrqTo_2ETOx_BCiCEYYBBGldPRz5V3ZsCMuc71FkF5-RCZLIKkMl5rCeJ1ppZRFLjkMUk82wb6ICcDv-jtbw2iB_HqFut5A9J9-2c7kQHzT7U&usqp=CAc",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  },
  {
    id: 10,
    name: "Green Knitted Sweater",
    description: "A cozy, knitted sweater that combines comfort and style. Made from soft, breathable fabric, it features a relaxed fit and a classic design. Perfect for casual outings or lounging at home, this sweater is a versatile wardrobe staple that pairs well with jeans, shorts, or skirts.",
    price: 45,
    category: "KIDS",
    inStock: false,
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxFpnLUHVeyvo3K37XO4kzpWw8lKHUnjM7E76_KAesHIofHmSiBTB7z1S_aGhuGgN5vMISimYUoPs2gbBsGgDKmBUtLsmbos97sQRFHiLGTzTS8XjpAXLvRbavNilESSI0Xy3o6Q&usqp=CAc",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxFpnLUHVeyvo3K37XO4kzpWw8lKHUnjM7E76_KAesHIofHmSiBTB7z1S_aGhuGgN5vMISimYUoPs2gbBsGgDKmBUtLsmbos97sQRFHiLGTzTS8XjpAXLvRbavNilESSI0Xy3o6Q&usqp=CAc",
      "https://focus.courrierinternational.com/2022/02/05/0/0/841/533/1280/0/60/0/1a04880_1644022456699-baby-yoda-mandalorian.jpg"
    ]
  }
];

const currencyRates = {
  USD: 1,
  EUR: 0.85,
  JPY: 110,
};

const currencySymbols = {
  USD: "$",
  EUR: "€",
  JPY: "¥",
};

function Products({ activeCategory }) {
  const { addToCart } = useCart(); //we import addToCart from the file called cartcontext, we use it to add products to the cart
  const { currency } = useCurrency(); //we import currency from the file called currencycontext, we use it to calculate the price based on the currency


  const visible = products.filter((p) => p.category === activeCategory); //we filter products by category so when category is selected, its products are shown and not other categorys products


  //to calculate the price based on the currency
  const getPrice = (price) => {
    const rate = currencyRates[currency];
    const symbol = currencySymbols[currency];
    return `${symbol}${(price * rate).toFixed(2)}`; 
  };

  return (
    <div className="products">
      <h2>{activeCategory}</h2>
      <div className="grid">
        {visible.map((product) => (
          <div key={product.id} className="product">
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="photo">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className={!product.inStock ? "grayscale" : ""}
                />
                {!product.inStock && (
                  <div className="out-of-stock">OUT OF STOCK</div> // Display "OUT OF STOCK" if the product is not in stock and disable the adding to cart 
                )}
              </div>
              <div className="details">
                <h3>{product.name}</h3>
                <p className="price">{getPrice(product.price)}</p>
              </div>
            </Link>

            {product.inStock && (
              <button
                className="add-to-cart"
                onClick={() => addToCart(product)} //if it is in stock, you can add it to cart
              >
                    <svg className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M23.4736 5.8484C23.0186 5.29247 22.3109 4.95457 21.5785 4.95457H6.19066L5.71097 3.16691C5.43262 2.12772 4.47323 1.40283 3.36082 1.40283H0.783719C0.354361 1.40283 0 1.74072 0 2.15227C0 2.56284 0.353351 2.9017 0.783719 2.9017H3.36082C3.73985 2.9017 4.06854 3.14333 4.1692 3.50577L7.25167 15.2494C7.53003 16.2886 8.48941 17.0135 9.60182 17.0135H19.6833C20.7947 17.0135 21.7808 16.2886 22.0335 15.2494L23.9286 7.80699C24.1053 7.1293 23.9543 6.40442 23.4736 5.84848L23.4736 5.8484ZM22.3879 7.46712L20.4927 14.9095C20.3921 15.272 20.0634 15.5136 19.6844 15.5136H9.60185C9.22282 15.5136 8.89413 15.272 8.79347 14.9095L6.59533 6.47717H21.5796C21.8323 6.47717 22.085 6.59798 22.237 6.79148C22.388 6.98403 22.463 7.22566 22.388 7.46729L22.3879 7.46712Z"
                        fill="white"
                      />
                      <path
                        d="M10.1332 17.978C8.69316 17.978 7.50586 19.1135 7.50586 20.4905C7.50586 21.8675 8.69326 23.0029 10.1332 23.0029C11.5733 23.0039 12.7606 21.8684 12.7606 20.4912C12.7606 19.114 11.5732 17.9778 10.1332 17.9778V17.978ZM10.1332 21.4816C9.55188 21.4816 9.09685 21.0465 9.09685 20.4906C9.09685 19.9346 9.55188 19.4995 10.1332 19.4995C10.7146 19.4995 11.1696 19.9346 11.1696 20.4906C11.1687 21.0229 10.689 21.4816 10.1332 21.4816Z"
                        fill="white"
                      />
                      <path
                        d="M18.825 17.9778C17.3849 17.9778 16.1976 19.1132 16.1976 20.4902C16.1976 21.8672 17.385 23.0027 18.825 23.0027C20.265 23.0027 21.4524 21.8672 21.4524 20.4902C21.4277 19.1141 20.265 17.9778 18.825 17.9778ZM18.825 21.4814C18.2437 21.4814 17.7886 21.0463 17.7886 20.4903C17.7886 19.9344 18.2437 19.4993 18.825 19.4993C19.4064 19.4993 19.8614 19.9344 19.8614 20.4903C19.8614 21.0227 19.3807 21.4814 18.825 21.4814Z"
                        fill="white"
                      />
                    </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;


