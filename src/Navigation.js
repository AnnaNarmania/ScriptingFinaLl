import { useCart } from "./contexts/CartContext";
import { useCurrency } from "./contexts/CurrencyContext";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function Navigation({ activeCategory, setActiveCategory, onCartClick }) {
  const { cartItems } = useCart();
  const { currency, setCurrency } = useCurrency();
  const navigate = useNavigate();

  const categories = ["WOMEN", "MEN", "KIDS"];
  let cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navigation">
      <div className="categories">
        {categories.map((category) => {
          let className = "cat";
          if (activeCategory === category) {
            className += " active";
          }

          return (
            <button
              key={category}
              className={className}
              onClick={() => {
                setActiveCategory(category);
                navigate("/");
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="logo">
        {}
        <svg
          width="33"
          height="31"
          viewBox="0 0 33 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M30.0222 23.6646C30.0494 23.983 29.8009 24.2566 29.4846 24.2566H3.46924C3.15373 24.2566 2.90553 23.9843 2.93156 23.6665L4.7959 0.912269C4.8191 0.629618 5.05287 0.412109 5.33372 0.412109H27.5426C27.8226 0.412109 28.0561 0.628527 28.0801 0.910361L30.0222 23.6646Z"
              fill="#1DCF65"
            />
            <path
              d="M32.0989 29.6014C32.1314 29.9985 31.8212 30.339 31.4269 30.339H1.5945C1.20103 30.339 0.891044 30.0002 0.922204 29.6037L3.06388 2.34718C3.0918 1.9927 3.38438 1.71973 3.73618 1.71973H29.1959C29.5469 1.71973 29.8392 1.99161 29.8681 2.34499L32.0989 29.6014Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M15.9232 21.6953C12.0402 21.6953 8.88135 17.8631 8.88135 13.1528C8.88135 12.9075 9.07815 12.7085 9.32109 12.7085C9.56403 12.7085 9.76084 12.9073 9.76084 13.1528C9.76084 17.3732 12.5253 20.8067 15.9234 20.8067C19.3214 20.8067 22.0859 17.3732 22.0859 13.1528C22.0859 12.9075 22.2827 12.7085 22.5257 12.7085C22.7686 12.7085 22.9654 12.9073 22.9654 13.1528C22.9653 17.8631 19.8062 21.6953 15.9232 21.6953Z"
              fill="white"
            />
            <path
              d="M20.258 13.0337C20.1455 13.0337 20.033 12.9904 19.947 12.9036C19.7753 12.7301 19.7753 12.4488 19.947 12.2753L22.2259 9.97292C22.3083 9.88966 22.4201 9.84277 22.5368 9.84277C22.6535 9.84277 22.7653 9.88952 22.8477 9.97292L25.1043 12.2529C25.2761 12.4264 25.2761 12.7077 25.1043 12.8812C24.9326 13.0546 24.6542 13.0547 24.4825 12.8812L22.5367 10.9155L20.5689 12.9036C20.483 12.9904 20.3705 13.0337 20.258 13.0337Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="25.8734"
              y1="26.3337"
              x2="7.51337"
              y2="4.9008"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#52D67A" />
              <stop
                offset="1"
                stopColor="#5AEE87"
              />
            </linearGradient>
            <clipPath id="clip0">
              <rect
                width="31.16"
                height="30.176"
                fill="white"
                transform="translate(0.920044 0.412109)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="cartCurr">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="dropdown"
        >
          <option value="USD">$ USD</option>
          <option value="EUR">€ EUR</option>
          <option value="JPY">¥ JPY</option>
        </select>

        <div
          className="icon"
          onClick={onCartClick}
        >
          <svg
            className="cart"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19.5613 4.87359C19.1822 4.41031 18.5924 4.12873 17.9821 4.12873H5.15889L4.75914 2.63901C4.52718 1.77302 3.72769 1.16895 2.80069 1.16895H0.653099C0.295301 1.16895 0 1.45052 0 1.79347C0 2.13562 0.294459 2.418 0.653099 2.418H2.80069C3.11654 2.418 3.39045 2.61936 3.47434 2.92139L6.04306 12.7077C6.27502 13.5737 7.07451 14.1778 8.00152 14.1778H16.4028C17.3289 14.1778 18.1507 13.5737 18.3612 12.7077L19.9405 6.50575C20.0877 5.941 19.9619 5.33693 19.5613 4.87365L19.5613 4.87359ZM18.6566 6.22252L17.0773 12.4245C16.9934 12.7265 16.7195 12.9279 16.4036 12.9279H8.00154C7.68569 12.9279 7.41178 12.7265 7.32789 12.4245L5.49611 5.39756H17.983C18.1936 5.39756 18.4042 5.49824 18.5308 5.65948C18.6567 5.81994 18.7192 6.0213 18.6567 6.22266L18.6566 6.22252Z"
              fill="#43464E"
            />
            <path
              d="M8.44437 14.9814C7.2443 14.9814 6.25488 15.9276 6.25488 17.0751C6.25488 18.2226 7.24439 19.1688 8.44437 19.1688C9.64445 19.1696 10.6339 18.2234 10.6339 17.0757C10.6339 15.928 9.64436 14.9812 8.44437 14.9812V14.9814ZM8.44437 17.9011C7.9599 17.9011 7.58071 17.5385 7.58071 17.0752C7.58071 16.6119 7.9599 16.2493 8.44437 16.2493C8.92885 16.2493 9.30804 16.6119 9.30804 17.0752C9.30722 17.5188 8.90748 17.9011 8.44437 17.9011Z"
              fill="#43464E"
            />
            <path
              d="M15.6875 14.9814C14.4875 14.9814 13.498 15.9277 13.498 17.0752C13.498 18.2226 14.4876 19.1689 15.6875 19.1689C16.8875 19.1689 17.877 18.2226 17.877 17.0752C17.8565 15.9284 16.8875 14.9814 15.6875 14.9814ZM15.6875 17.9011C15.2031 17.9011 14.8239 17.5385 14.8239 17.0752C14.8239 16.612 15.2031 16.2493 15.6875 16.2493C16.172 16.2493 16.5512 16.612 16.5512 17.0752C16.5512 17.5188 16.1506 17.9011 15.6875 17.9011Z"
              fill="#43464E"
            />
          </svg>

          {cartCount > 0 && <span className="count">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
