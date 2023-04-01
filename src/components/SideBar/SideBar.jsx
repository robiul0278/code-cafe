import React from "react";

const SideBar = ({cart, time}) => {
  let total = 0;
  for (const read of time) {
    total = total + read.readTime;
  }

  return (
    <div className="sticky top-0 h-screen">
      <div className="border-2 bg-blue-500/[.09] from-indigo-500 border-blue-500 text-center p-2 rounded-xl mb-7">
        <p className="font-bold text-blue-500 text-xl">
          Spent time on read : {total} min
        </p>
      </div>
      <div className="rounded-lg px-7 bg-neutral-100 py-5">
        <p className="text-xl font-bold pb-3">
          Bookmarked Blogs: <span className="text-blue-500">{cart.length}</span>
        </p>
        <ul>
          {cart.map((cart) => (
            <li className="text-lg  bg-white rounded-lg p-4 mb-5">
              {cart.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
