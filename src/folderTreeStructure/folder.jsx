// import React from 'react'
import { useState } from "react";
import explorer from "../assets/data/folder";

const SingleHirracthre = (data) => {

    const [open, setOpen] = useState([])

    // console.log("The data is : ", data)
    // if (!data.data.isFolder) {
    //     return (
    //         <>
    //             <span className=" text-center">{data.data.name}</span>
    //         </>)
    // }

    return (
        <>
            {data.data.items.map((val) => {
                if (val.isFolder) {
                    return (
                        <>
                            <div className="container mt-[5px] ml-5">
                                <div className="folder-name cursor-pointer" onClick={() => { setOpen(!open) }}>
                                    {val.isFolder && <span className="text-center  text-yellow-50 mr-3">📂 {val.name}</span>}
                                </div>
                                <div className="another"
                                    style={{ display: `${open ? "block" : "none"}` }}

                                >

                                    {val.isFolder && <SingleHirracthre data={val} />}
                                </div>
                            </div>
                        </>
                    )
                }
                else {
                    return (
                        <>
                            <span className="mt-[5px] ml-5 text-center  text-red-100 ">🗃 {val.name}</span>
                        </>
                    )
                }
            })}
        </>)

}
const FolderTree = () => {
    console.log(explorer)
    return (
        <>
            <div className="main-container">
                <div className="root text-yellow-50 mr-3">📂 {explorer.name}</div>
                <SingleHirracthre data={explorer} />
            </div>
        </>
    )
}

export default FolderTree;