import React, { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

const Home = () => {

    const [blogs, setBlog] = useState([])
    useEffect( () => {
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [])

    const handleAddToCart = (mark) => {
      console.log(mark)
    }

  return (
    <div className="grid gap-3">
        {
            blogs.map((blog) => <SingleCart
             blog={blog}
             key={blog.id}
             handleAddToCart={handleAddToCart}
             ></SingleCart>)
        }
    </div>
  );
};

export default Home;
