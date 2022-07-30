import React from 'react'
import './Card.css'

export const Card = () => {
    return (
        <div className=''>
            <div className='row flex justify-center'>
                <div class="max-w-sm paper m-5 rounded-xl overflow-hidden shadow-slate-900 shadow-lg">
                    {/* <img class="w-full" src="" alt="Sunset in the mountains"> */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coolest Idea</div>
                        <p class="text-gray-700 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-3 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Read More</span>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-3 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Support</span>
                        <span class="inline-block bg-gray-300 shadow shadow-slate-600 hover:bg-gray-500 span rounded-full px-3 py-1 text-sm font-semibold text-gray-900 hover:text-white  mr-2 mb-2">Donate</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
