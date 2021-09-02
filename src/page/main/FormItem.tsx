import React, {FC} from "react";
import {IFormProps} from "./IPageMain";
import FormNum from "./FormNum";
import FormKey from "./FormKey";
import FormStatus from "./FormStatus";
import FormTitle from "./FormTitle";

export const FormItem: FC<IFormProps> =
    ({
         item,
         name,
         children
     }) => {

     return (
         <>
             {(typeof item !== "object") ? null :
                 <div className='row'>

                     <FormTitle item={item} name={name} />

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
