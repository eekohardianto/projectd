import React, {useEffect} from 'react';
import Checkbox from '@/Components/Checkbox';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import {Head, Link, useForm} from '@inertiajs/inertia-react';

export default function Login({status, canResetPassword}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
          <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="px-5 py-7">                    
                        <Label
                            className="font-bold text-sm text-gray-600 pb-1 block"
                            forInput="email"
                            value="Email"
                        />
                        <Input
                            type="text"
                            name="email"
                            value={data.email}
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <div className="mb-3 text-normal text-red-500 ">{errors.email}</div>
                       
                        <Label
                            className="font-bold text-sm text-gray-600 pb-1 block"
                            forInput="password"
                            value="Password"
                        />
                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />
                        <div className="mb-3 text-normal text-red-500 ">{errors.password}</div>

                        <Button processing={processing} className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span className="inline-block mr-2 font-bold">Login</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>                    
                </div>              
            

                <div className="p-5">
                    <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                            
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            value={data.remember}
                                            handleChange={onHandleChange}
                                        />

                                        <span className="ml-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                            
                            </div>

                            <div className="text-center sm:text-right whitespace-nowrap">
                                {canResetPassword && (
                                    <Link href={route("password.request")} className="btn transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                        <span className="inline-block ml-1">Forgot Password</span>
                                    </Link>
                                )}
                            </div>                 
                        
                    </div>
                </div>
            </form>
            
                
            
        </Guest>
    );
}