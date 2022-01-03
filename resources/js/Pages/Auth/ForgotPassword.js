import React from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Guest>
            <Head title="Forgot Password" />
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="px-5 py-7">
                    <div className="mb-4 text-sm text-gray-500 leading-normal">
                        Forgot your password? No problem. Just let us know your email address and we will email you a password
                        reset link that will allow you to choose a new one.
                    </div>
                    
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />                    
                </div>   
                
                <div className="p-5">
                    <div className="grid grid-cols-1 gap-1">
                        <div className="text-center sm:text-right whitespace-nowrap">  
                        <Button processing={processing} className="btn transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-blue-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                                    </svg>
                                    <span className="inline-block ml-1">Email Password Reset Link</span>
                                </Button>
                        </div>
                    </div>
                </div>
                
            </form>            
        </Guest>
    );
}
