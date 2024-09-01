import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todoSlicer";

const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.todo?.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const deleteItem = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    console.log(updatedData);
  }

  return (
    <div>
      {data.isLoading && <div>Loading...</div>}
      {data.error && <div>Error...</div>}

      {data &&
        data.slice(0, 20).map((todo, index) => (
          <div key={todo.id}>
            <ul>
              <li onClick={deleteItem(index)}>{todo.title}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Todo;
