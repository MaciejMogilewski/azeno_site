'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import apiCall from "@/api/api";

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
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        apiCall({endpoint: "messages", method: "POST", body: data})
    }

    return (
        <div className="max-w-5xl m-auto">
            <h1 className="text-center mb-3 text-5xl">Contact us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black" {...register("fullName")}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="mail" className="text-sm font-medium text-gray-700">Mail</label>
                    <input id="mail" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black" {...register("mail")}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black" {...register("message")}/>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
            </form>
        </div>
    );
}

export default FormContact;