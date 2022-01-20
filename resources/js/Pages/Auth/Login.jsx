import React, {useEffect} from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
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
                <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <Input
                            type="text"
                            name="email"
                            value={data.email}
                            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}/>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            {canResetPassword && (
                                <Link href={route("password.request")} className="text-xs text-gray-500">Forget Password?</Link>
                            )}
                        </div>
                        <Input
                            type="password"
                            name="password"
                            value={data.password} 
                            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"                            
                            autoComplete="current-password"
                            handleChange={onHandleChange}/>
                    </div>
                    <div className="mt-8">
                        <Button processing={processing}
                            className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</Button>
                    </div>
                </form>
        </Guest>
    );
}