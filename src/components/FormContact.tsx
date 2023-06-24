'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import React, {useState} from "react";
import apiCall from "@/api/api";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

type Inputs = {
    fullName: string;
    mail: string;
    message: string;
}

function FormContact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset
    } = useForm<Inputs>()

    const [formSent, setFormSent] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await apiCall({endpoint: "messages", method: "POST", body: data})
        setFormSent(true);
        reset();
    }

    function validateEmail(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "Email address must be a valid address"
    }

    return (
        <div className="max-w-5xl m-auto">
            <h1 className="text-center mb-3 text-5xl">Contact us</h1>
            {formSent && (
                <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-2 mb-4 rounded-md">
                    Formularz został poprawnie wysłany!
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input id="name"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                           {...register("fullName")}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="mail" className="text-sm font-medium text-gray-700">Mail</label>
                    <input id="mail"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                           {...register("mail", {
                               required: "Email is required!",
                               validate: validateEmail
                           })
                           }/>
                    {errors.mail?.message && <p className="text-red-500 mt-1 text-sm">{errors.mail?.message}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                              {...register("message", {required: true})}/>
                    {errors.message && <p className="text-red-500 mt-1 text-sm">Message is required!</p>}
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
            </form>
        </div>
    );
}

export default FormContact;