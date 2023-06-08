import React from "react";

import {StarOutlined} from '@ant-design/icons';
export default function BlockRating({evaluation}){
    return (
        <div className= "film_point">
            <p className="point">{evaluation}</p>
            <p className="star">
            <StarOutlined />
            </p>
        </div>
    )
}