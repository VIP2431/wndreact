import React, {FC} from "react";
import {IFormProps} from "./IPageMain";
import FormNum from "./FormNum";
import FormKey from "./FormKey";
import FormStatus from "./FormStatus";

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

                     <div className='row'>
                         <div className='col-md-2'>
                            <div className='col'>
                                Wnd:<b>{`  `}{name}</b>
                            </div>
                         </div>
                          <div className='col-md-1'>
                              <div className='col'>
                                  {`№: `}{item.key}
                              </div>
                          </div>
                         <div className='col-md-6'>
                             <div className='col'>
                                <b>{`  `}{item.name}</b>
                             </div>
                         </div>
                     </div>
                     <div className='row'>
                         <div className='col'>
                             <b>{item.title}</b>
                         </div>
                     </div>
                     <div className='col-md-6'>
                         <FormNum item={item} />
                     </div>
                     <div className='col-md-6'>
                         <FormStatus item={item} />
                     </div>
                     <div className='col-md-12'>
                         <FormKey item={item} />
                         <div className='col'>
                             {item.id}
                         </div>

                     </div>
                </div>
             }
         </>
     );
}
