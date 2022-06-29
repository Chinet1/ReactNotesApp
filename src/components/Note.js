import React from "react";

function Note({id, text, date, handleDelete}) {
    return (
        <div className="w-80 h-48 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <span className="text-gray-800 dark:text-gray-100 text-sm">{text}</span>
            <div className="flex justify-between">
                <div className="dark:text-gray-100 text-sm">{date}</div>
                <div className="text-white cursor-pointer" onClick={() => handleDelete(id)} >X</div>
            </div>
        </div>
    )
}

export default Note