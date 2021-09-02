import React, {FC} from "react";
import {IFormProps} from "./IPageMain";
import {Form,Formik,Field,FormikHelpers} from "formik";

const FormTitle: FC<IFormProps> =
    ({
         item,
         name,
         children
     }) => {

    interface Values {
        nameItem: string;
        titleItem: string;
    }

    return (
        <div>
            <Formik
                initialValues={{
                    nameItem: '',
                    titleItem: '',
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form>
                    <div className='row'>
                        <div className='col-md-1'>
                            <div className='col'>
                                <b>{name}</b>
                            </div>
                        </div>
                        <div className='col-md-1'>
                            <div className='col'>
                                {`№: `}{item.key}
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='col'>
                                <label htmlFor="nameItem">name:</label>
                                <Field id="nameItem" name="nameItem" placeholder={item.name} />
                            </div>
                        </div>
                        <div className='col'>
                            {item.id}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="nameItem">title:</label>
                            <Field id="nameItem" name="nameItem" placeholder={item.title} />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormTitle;