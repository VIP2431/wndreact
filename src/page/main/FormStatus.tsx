import React, {FC} from "react";
import {IItemProps} from "./IPageMain";
import {GetNameUnit} from "../../services/GetNameUnit";
import {GetNameCategory} from "../../services/GetNameCategory";


const FormStatus: FC<IItemProps> =
    ({
         item,
         variant,
         children
     }) => {

        return (
            <div className='row'>
                <div className='col-md'>
                    <div className='col'>
                        {`type: `}{item.type}
                    </div>
                    <div className='col'>
                        {`status: `}{item.status}
                    </div>
                    <div className='col'>
                        {`unit:  `}<GetNameUnit name={item.unit}/>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='col'>
                        {`flags: `}{item.flags}
                    </div>
                    <div className='col'>
                        {`category:  `}<GetNameCategory name={item.category}/>
                    </div>
                    <div className='col'>
                        {`code: `}{item.code}
                    </div>
                    <div className='col'>
                        {`vendor: `}{item.vendor}
                    </div>
                </div>
            </div>
        )
    }

export default FormStatus;