// import React from 'react'
// import Todo from './components/Todo'
// import Products from './components/Products'

// const App = () => {
//   return (
//     <div>
//       {/* <Todo /> */}
//       <Products />
//     </div>
//   )
// }

// export default App

import React from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "./features/apiSlice";

export default function App() {
  const { data: allProductsData, error: allProductsError } =
    useGetAllProductsQuery();
  const { data: singleProductData, error: singleProductError } =
    useGetProductQuery("iphone");

  if (allProductsError) return <div>Error loading all products</div>;
  if (singleProductError) return <div>Error loading product</div>;

  console.log(allProductsData);
  console.log(singleProductData);

  return (
    <div>
      <h1>Data:</h1>
      {allProductsData &&
        allProductsData?.products?.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
    </div>
  );
}
