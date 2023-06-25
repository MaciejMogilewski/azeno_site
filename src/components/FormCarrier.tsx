'use client'

import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import validateEmail from "@/helpers/validators";

function FormCarrier() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset
    } = useForm<>()

    const [formSent, setFormSent] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
            <div className="mb-5">
                <label htmlFor="mail" className="text-sm font-medium text-gray-700">Contact email</label>
                <input
                    id="mail"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black px-3 py-2"
                    {...register("mail", {
                        required: "Email is required!",
                        validate: validateEmail
                    })}
                />
                {errors.mail?.message && <p className="text-red-500 mt-1 text-sm">{errors.mail?.message}</p>}
            </div>
            <div className="relative mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <input
                    id="cv"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    {...register("cv", {
                        required: "CV is required!"
                    })}
                />
                <label htmlFor="cv" className="text-sm font-medium text-gray-700">
                    <span className="text-blue-500">Drag and drop</span> or click to upload CV
                </label>
            </div>

            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">Send</button>
        </form>

    );
}

export default FormCarrier;