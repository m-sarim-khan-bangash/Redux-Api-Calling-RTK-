import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlicer";

const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.product.data);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());

    const timer = setTimeout(() => {
      setShowProducts(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      {!showProducts && <div>Loading...</div>}
      {data.error && <div>Error...</div>}

      {showProducts &&
        data?.map((product) => (
          <div key={product.id}>
            <ul>
              <li>
                <b>{product.title}</b>
              </li>
              <p>{product.description}</p>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Todo;
