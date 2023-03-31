import React from 'react';

const SideBar = () => {
    return (
        <div>
            <div className='border-2 bg-blue-500/[.09] from-indigo-500 border-blue-500 text-center p-2 rounded-xl mb-7'>
                <p className='font-bold text-blue-500 text-xl'>Spent time on read : 177 min</p>
            </div>
            <div className='rounded-lg px-7 bg-neutral-100 py-5'>
                <p className='text-xl font-bold pb-3'>Bookmarked Blogs : 8</p>
                <div className='text-sm font-bold bg-white rounded-lg p-2 mb-5'>
                10 Year Challenge: How Popular iOS Apps Have Changed
                </div>
                <div className='text-sm font-bold bg-white rounded-lg p-2 mb-5'>
                10 Year Challenge: How Popular iOS Apps Have Changed
                </div>
                <div className='text-sm font-bold bg-white rounded-lg p-2 mb-5'>
                10 Year Challenge: How Popular iOS Apps Have Changed
                </div>
            </div>
        </div>
    );
};

export default SideBar;