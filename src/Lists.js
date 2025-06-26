import { useCart } from "./contexts/CartContext";
import { useCurrency } from "./contexts/CurrencyContext";
import { Link, useNavigate } from "react-router-dom";

import "./ListStyle.css";

export const products = [
  {
    id: 1,
    name: "Apollo Running Short",
    price: 50,
    category: "MEN",
    inStock: true,
    images: [
      "https://contendersclothing.com/cdn/shop/files/20240412-Rocky-ApolloShorts-NEW-ECOM-1.jpg?v=1712955719",
      "https://contendersclothing.com/cdn/shop/files/20240412-Rocky-ApolloShorts-NEW-ECOM-1.jpg?v=1712955719",
      "https://contendersclothing.com/cdn/shop/files/20240412-Rocky-ApolloShorts-NEW-ECOM-1.jpg?v=1712955719"
    ]
  },
  {
    id: 2,
    name: "Jupiter Wayfarer",
    price: 75,
    category: "WOMEN",
    inStock: true,
    images: [
      "https://cdn-images.farfetch-contents.com/23/60/22/65/23602265_53684013_1000.jpg",
      "https://cdn-images.farfetch-contents.com/23/60/22/65/23602265_53684013_1000.jpg",
      "https://cdn-images.farfetch-contents.com/23/60/22/65/23602265_53684013_1000.jpg"
    ]
  },
  {
    id: 3,
    name: "Saturn Sport Tee",
    price: 45,
    category: "KIDS",
    inStock: false,
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjUT4nwv-oejFT1nMVQaLzWKR6df3D7scLq3w74baOgHVAZUCWByXpgRd3A_g-UM2T6UEbMdFY89crT6qUT0uB535lHmc9RCLeM2JmBC3NZURntZtl4NNhe9PY1uIQwP7wzzsnhA&usqp=CAc",
       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjUT4nwv-oejFT1nMVQaLzWKR6df3D7scLq3w74baOgHVAZUCWByXpgRd3A_g-UM2T6UEbMdFY89crT6qUT0uB535lHmc9RCLeM2JmBC3NZURntZtl4NNhe9PY1uIQwP7wzzsnhA&usqp=CAc",,
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjUT4nwv-oejFT1nMVQaLzWKR6df3D7scLq3w74baOgHVAZUCWByXpgRd3A_g-UM2T6UEbMdFY89crT6qUT0uB535lHmc9RCLeM2JmBC3NZURntZtl4NNhe9PY1uIQwP7wzzsnhA&usqp=CAc"
    ]
  },
  {
    id: 4,
    name: "T-shirt",
    price: 55,
    category: "MEN",
    inStock: false,
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcw6uYe-H58d1NmAqyuhjrjudvxb5a6gZDvju91elvs9Mxhlvx5ZQ0tfMO26yc_5uYFI6HnCK6l0bUFFK1B7MkK-rNguwYDJwdjXaS0tEd-M8oXtXcrNCHhS4nMXZPdC4Eoy9oiA&usqp=CAc",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcw6uYe-H58d1NmAqyuhjrjudvxb5a6gZDvju91elvs9Mxhlvx5ZQ0tfMO26yc_5uYFI6HnCK6l0bUFFK1B7MkK-rNguwYDJwdjXaS0tEd-M8oXtXcrNCHhS4nMXZPdC4Eoy9oiA&usqp=CAc",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcw6uYe-H58d1NmAqyuhjrjudvxb5a6gZDvju91elvs9Mxhlvx5ZQ0tfMO26yc_5uYFI6HnCK6l0bUFFK1B7MkK-rNguwYDJwdjXaS0tEd-M8oXtXcrNCHhS4nMXZPdC4Eoy9oiA&usqp=CAc"
    ]
  },
  {
    id: 5,
    name: "Classic Leather Jacket",
    price: 120,
    category: "MEN",
    inStock: true,
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTP_BYvsmUXGhDWzfl8Wum-_Wy4yxyHVyyhaQYBzhaB6w7WpvrtT2mqqo2gfp9NWj638wk5KXDWGvEXUKAqU_O3lDJGfsaN4xcS5ESZHtixATAdiIeYzUSbNRJFxwfQONh5eoOWqrU&usqp=CAc",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTP_BYvsmUXGhDWzfl8Wum-_Wy4yxyHVyyhaQYBzhaB6w7WpvrtT2mqqo2gfp9NWj638wk5KXDWGvEXUKAqU_O3lDJGfsaN4xcS5ESZHtixATAdiIeYzUSbNRJFxwfQONh5eoOWqrU&usqp=CAc",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTP_BYvsmUXGhDWzfl8Wum-_Wy4yxyHVyyhaQYBzhaB6w7WpvrtT2mqqo2gfp9NWj638wk5KXDWGvEXUKAqU_O3lDJGfsaN4xcS5ESZHtixATAdiIeYzUSbNRJFxwfQONh5eoOWqrU&usqp=CAc"
    ]
  },
  {
    id: 6,
    name: "Tailored Coat",
    price: 250,
    category: "MEN",
    inStock: true,
    images: [
      "https://cdn-images.farfetch-contents.com/25/63/61/88/25636188_55782628_1000.jpg",
      "https://cdn-images.farfetch-contents.com/25/63/61/88/25636188_55782628_1000.jpg",
      "https://cdn-images.farfetch-contents.com/25/63/61/88/25636188_55782628_1000.jpg"
    ]
  },


  {
    id: 7,
    name: "Elegant Evening Dress",
    price: 350,
    category: "WOMEN",
    inStock: true,
    images: [
      "https://www.mytheresa.com/media/1094/1238/100/3e/P00917723.jpg",
      "https://www.mytheresa.com/media/1094/1238/100/3e/P00917723.jpg",
      "https://www.mytheresa.com/media/1094/1238/100/3e/P00917723.jpg"
    ]
  },
  {
    id: 8,
    name: "Luxury Blazer",
    price: 420,
    category: "WOMEN",
    inStock: true,
    images: [
      "https://www.mytheresa.com/media/1094/1238/100/a6/P01059320.jpg",
      "https://www.mytheresa.com/media/1094/1238/100/a6/P01059320.jpg",
      "https://www.mytheresa.com/media/1094/1238/100/a6/P01059320.jpg"
    ]
  },


  {
    id: 9,
    name: "Cartoon Hoodie",
    price: 35,
    category: "KIDS",
    inStock: true,
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8HHJLk0UovVTNSXD-QPTNS5Pq5IjrqTo_2ETOx_BCiCEYYBBGldPRz5V3ZsCMuc71FkF5-RCZLIKkMl5rCeJ1ppZRFLjkMUk82wb6ICcDv-jtbw2iB_HqFut5A9J9-2c7kQHzT7U&usqp=CAc",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8HHJLk0UovVTNSXD-QPTNS5Pq5IjrqTo_2ETOx_BCiCEYYBBGldPRz5V3ZsCMuc71FkF5-RCZLIKkMl5rCeJ1ppZRFLjkMUk82wb6ICcDv-jtbw2iB_HqFut5A9J9-2c7kQHzT7U&usqp=CAc",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8HHJLk0UovVTNSXD-QPTNS5Pq5IjrqTo_2ETOx_BCiCEYYBBGldPRz5V3ZsCMuc71FkF5-RCZLIKkMl5rCeJ1ppZRFLjkMUk82wb6ICcDv-jtbw2iB_HqFut5A9J9-2c7kQHzT7U&usqp=CAc"
    ]
  },
  {
    id: 10,
    name: "Summer Dress",
    price: 45,
    category: "KIDS",
    inStock: true,
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxFpnLUHVeyvo3K37XO4kzpWw8lKHUnjM7E76_KAesHIofHmSiBTB7z1S_aGhuGgN5vMISimYUoPs2gbBsGgDKmBUtLsmbos97sQRFHiLGTzTS8XjpAXLvRbavNilESSI0Xy3o6Q&usqp=CAc",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxFpnLUHVeyvo3K37XO4kzpWw8lKHUnjM7E76_KAesHIofHmSiBTB7z1S_aGhuGgN5vMISimYUoPs2gbBsGgDKmBUtLsmbos97sQRFHiLGTzTS8XjpAXLvRbavNilESSI0Xy3o6Q&usqp=CAc",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxFpnLUHVeyvo3K37XO4kzpWw8lKHUnjM7E76_KAesHIofHmSiBTB7z1S_aGhuGgN5vMISimYUoPs2gbBsGgDKmBUtLsmbos97sQRFHiLGTzTS8XjpAXLvRbavNilESSI0Xy3o6Q&usqp=CAc"
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
  const { addToCart } = useCart();
  const { currency } = useCurrency();
  const navigate = useNavigate();

  const visible = products.filter((p) => p.category === activeCategory);

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
                  <div className="out-of-stock">OUT OF STOCK</div>
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
                onClick={() => addToCart(product)}
              >
                🛒
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;


