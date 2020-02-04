import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Formik, Form, Field} from 'formik';
import {CloudUpload} from '@material-ui/icons';
import Dropzone from 'react-dropzone';

const SharingForm = ()=> {
    const handleSubmit = (values)=> {
      console.log(values)
      axios.post('http://localhost:3001/api/v1/file/new', values, {
        headers: {"Accept": "multipart/form-data"}
      })
      .then (response=> console.log(response))
    }  

    return ( 
      <div className='w-full max-w-sm container min-w-xs'>
              <Formik 
            onSubmit={handleSubmit}
            initialValues = {{
              receipientEmail : '', message: '',
              senderEmail : '', files:  []
            }}      
            >
              {
                (
                  {
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting, setFieldValue
                }
                )=> (              
                    <Form className='rounded-lg bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 my-20' onSubmit={handleSubmit} >
                    <div>
                        <h3 className='text-center text-xl font-bold tracking-normal'>TRANSFER FILES</h3>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='receipientEmail' className='block text-gray-700 text-sm font-bold mb-2 mt-8'>Send files to this email:</label>
                        <Field type='email' className='bg-gray-100 focus:bg-white shadow-sm appearance-none border-b-2  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500 ' name='receipientEmail' id='receipientEmail'/>
                    </div>
                    <div  className=''>
                        <label htmlFor='senderEmail' className='block text-gray-700 text-sm font-bold mb-2'>Your email:</label>
                        <Field type='email' className='bg-gray-100 focus:bg-white shadow-sm appearance-none border-b-2 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-blue-500 ' name='senderEmail' id='senderEmail' />
                    </div>
                    <div  className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>Message:</label>
                        <Field name='message' className='bg-gray-100 focus:bg-white shadow-sm appearance-none border-b-2 border-blue-500  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' row='7' id='message' component='textarea'/>
                    </div>
                    <div className='border-dashed border-gray-600 border-2 h-20 mb-4'>
                    </div>
                    <button type='submit' onClick={handleSubmit} className='rounded-full shadow-lg w-full bg-indigo-700 rounded-lg text-white font-bold p-2'>Transfer</button>
                  </Form>     
                )
              }
            </Formik>
              </div>
    )
}

export default SharingForm;