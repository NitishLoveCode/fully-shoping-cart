import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../sote/slices/cartSlice";

export default function Home() {
  const dispatch=useDispatch();
  const [allProducts, setallProducts] = useState();

  // ---------------calling products api--------------
  const products_api = async () => {
    const All_products = await fetch("https://dummyjson.com/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const products_results = await All_products.json();
    setallProducts(products_results.products);
  };

  useEffect(() => {
    products_api();
  }, []);

  const toCart=(product)=>{
    const quantity = {...product, quantity:1};
    dispatch (addToCart(quantity));

  }

  return (
    <>
      <div className="mt-9 ml-5 mr-5 flex flex-wrap gap-2 justify-center">
        {allProducts?.map((product, id) => {
          return (
            <>
              <div
                key={Math.floor((Math.random() * 10000)+3)}
                className="w-[200px] cursor-pointer hover:border hover:border-solid hover:border-gray-300"
               >
                <div
                  key={Math.floor((Math.random() * 10000)+3)}
                  className="flex relative justify-center items-center"
                >
                  <img
                    key={Math.floor(Math.random() * 10000 + 3)}
                    className="w-full"
                    src={product?.thumbnail}
                    alt={product?.title}
                  />
                  <div key={Math.floor((Math.random() * 10000)+3)}>
                    <button onClick={()=>toCart(product)}
                      key={Math.floor(Math.random() * 10000 + 3)}
                      className="absolute bottom-4 right-4 bg-blue-500 p-2 text-white rounded-md active:bg-blue-400"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div
                  key={Math.floor(Math.random() * 10000 + 3)}
                  className="pl-1 pr-1"
                >
                  <p
                    key={Math.floor(Math.random() * 10000 + 3)}
                    className="font-semibold text-gray-400"
                  >
                    {product?.brand}
                  </p>

                  {/* ----------------------chaecked keys------------------ */}
                  <div
                    key={Math.floor(Math.random() * 10000 + 3)}
                    className="flex items-center gap-2"
                  >
                    <p key={Math.floor(Math.random() * 10000 + 3)}>
                      {product?.title}
                    </p>
                    <span key={Math.floor(Math.random() * 10000 + 3)}>
                      <img
                        key={Math.floor(Math.random() * 10000 + 3)}
                        className="h-4"
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                        alt="Assourd image"
                      />
                    </span>
                  </div>
                  {/* ----------cheacked key------------ */}
                  <div
                    key={Math.floor(Math.random() * 10000 + 3)}
                    className="flex gap-2 items-center"
                  >
                    <span
                      key={Math.floor(Math.random() * 10000 + 3)}
                      className="text-xl font-semibold"
                    >
                      ₹ {product?.price}
                    </span>
                    <del
                      key={Math.floor(Math.random() * 10000 + 3)}
                      className="text-gray-400"
                    >
                      ₹ 199
                    </del>
                    <span
                      key={Math.floor(Math.random() * 10000 + 3)}
                      className="text-green-500 text-sm font-bold"
                    >
                      {product?.discountPercentage}% off
                    </span>
                  </div>
                  <p key={Math.floor(Math.random() * 10000 + 3)}>
                    <span
                      key={Math.floor(Math.random() * 10000 + 3)}
                      className="text-gray-400"
                    >
                      Size
                    </span>
                    E S, M, L, XL, XXL
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
