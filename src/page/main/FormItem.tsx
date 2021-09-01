import React, {FC} from "react";
import {IItemProps} from "./IPageMain";
import FormNum from "./FormNum";
import FormKey from "./FormKey";
import FormStatus from "./FormStatus";

export const FormItem: FC<IItemProps> =
    ({
         item,
         variant,
         children
     }) => {

     return (
         <>
             {(typeof item !== "object") ? null :
                 <div className='row'>
                      <span>
                          <input type="checkbox"/>
                          <span>
                              <b>{`  `} {item.name}</b>
                          </span>
                      </span>
                     <b>{item.title}</b>
                     <div className='col-md-6'>
                         <FormNum item={item} />
                     </div>
                     <div className='col-md-6'>
                         <FormStatus item={item} />
                     </div>
                     <div className='col-md-12'>
                        <FormKey item={item} />
                     </div>
                </div>
             }
         </>
     );
}
