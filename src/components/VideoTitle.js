import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-[20%] px-24  w-screen aspect-video bg-gradient-to-r from-black text-white absolute">
            <h1 className="text-6xl font-bold">
                {title}
            </h1>
            <p  className="py-6 text-lg w-1/4">{overview}</p>
            <button  className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-50">Play</button>
            <button  className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
        </div>
    )
}

export default VideoTitle