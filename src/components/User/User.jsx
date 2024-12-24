import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userId} = useParams()
    console.log(userId);

    return(
        <div className="bg-orange-500 text-black text-3xl text-center py-5">{userId}</div>
    )
}