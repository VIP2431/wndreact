import React, {FC} from "react";
import {IItemProps} from "./IPageMain";


const FormNum: FC<IItemProps> =
    ({
         item,
         variant,
         children
     }) => {

    return (
        <div className='row'>
            <div className='col-md'>
                <div className='col'>
                    <span className='name-item'> {`i1: `}{item.i1}</span>
                </div>
                <div className='col'>
                    {`i2: `}{item.i2}
                </div>
                <div className='col'>
                    {`i3: `}{item.i3}
                </div>
            </div>
            <div className='col-md'>
                <div className='col'>
                    {`d1: `} {item.d1}
                </div>
                <div className='col'>
                    {`d2: `}{item.d2}
                </div>
                <div className='col'>
                    {`d3: `}{item.d3}
                </div>
                <div className='col'>
                    {`d4: `}{item.d4}
                </div>
            </div>
        </div>
    )
}

export default FormNum;