import React from 'react';

const SideBar = () => {
    return (
        <div>
            <div className='border-2 bg-blue-500/[.09] from-indigo-500 border-blue-500 p-2 text-center rounded-xl mb-4'>
                <p className='font-bold text-blue-500 text-xl'>Spent time on read : 177 min</p>
            </div>
            <div className='rounded-xl pl-4 bg-neutral-200 px-2'>
                <p className='text-xl font-bold '>Bookmarked Blogs : 8</p>
                <div className='text-lg font-bold'>
                10 Year Challenge: How Popular iOS Apps Have Changed
                </div>
            </div>
        </div>
    );
};

export default SideBar;