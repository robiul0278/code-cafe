import React, { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

const Home = () => {

    const [blogs, setBlog] = useState([])
    useEffect( () => {
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [])



  return (
    <div className="grid gap-3">
        {
            blogs.map((blog) => <SingleCart blog={blog}></SingleCart>)
        }
    </div>
  );
};

export default Home;
