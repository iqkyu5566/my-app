import React from "react";

type ProductPage = { params: { slug: string[] } };

async function getData() {
  // const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function ProductPage(props: ProductPage) {
  const { params } = props;
  const products = await getData();
  console.log(products);
  return (
    <div className="grid grid-cols-4 mt-5">
      {/* <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div key={product.id}>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="p-8 rounded-t-lg" src={product.images} alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </a>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white"> $ {product.price}</span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      {params.slug && (
        <>
          <p>Category: {params.slug[0]}</p>
          <p>Gender: {params.slug[1]}</p>
          <p>Id: {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
