import React, {FC} from "react";
import {IItemProps} from "./IPageMain";

const FormKey: FC<IItemProps> =
    ({
         item,
         variant,
         children
     }) => {

     return (
         <div className='row'>
             <div className='col-md-6'>
                 <div className='col'>
                     key:{item.key}
                 </div>
                 <div className='col'>
                     {item.id}
                 </div>
             </div>
             <div className='col-md-6'>
                 <div className='col'>
                    keyParent:{item.keyParent}
                 </div>
                 <div className='col'>
                    codePoz:{item.codePoz}
                 </div>
            </div>
        </div>
    )
}

export default FormKey;
