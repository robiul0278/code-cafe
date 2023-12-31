import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'



const SingleCart = ({blog, handleAddToCart, handleReadTime}) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-x">
        <figure className="h-96">
          <img
          className=" bg-cover bg-center rounded-xl"
            src={blog.image}
            alt="image"
          />
        </figure>
        <div className="card-body">
            <div className="flex justify-between pb-3">
                <div className="flex items-center">
                    <div>
                        <img
                        className="rounded-full w-14"
                         src={blog.authorImage}
                         alt="author" />
                    </div>
                    <div className=" px-3 leading-6">
                        <p className="text-lg font-bold">{blog.authorName}</p>
                        <p className="text-neutral-500 text-sm">{blog.date}</p>
                    </div>
                </div>
                <div className="px-3 ">
                    <span className="text-neutral-500 pr-2 text-xl">{blog.readTime} min read</span>
                    <button
                    onClick={()=> handleAddToCart(blog)}
                    ><FontAwesomeIcon className="hover:text-blue-400 text-blue-500 text-xl" icon={faBookmark} 
                    /></button>
                </div>
            </div>
          <h2 className="card-title text-3xl font-bold py-3">{blog.title}</h2>
          <p className="py-1 text-xl">#beginners #programming</p>
          <a onClick={()=> handleReadTime(blog)} className="pb-2 text-indigo-600 font-bold" href="#">Mark as read</a>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
