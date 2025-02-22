import React from 'react'

const Loading = () => {
    return (
        <div className="flex bg-secondary  rounded-xl  w-full h-full justify-center items-center py-4">
            <div className="w-6 h-6 border-4 border-primarySolid border-t-secondary rounded-full animate-spin"></div>
        </div>
    )
}

export default Loading
