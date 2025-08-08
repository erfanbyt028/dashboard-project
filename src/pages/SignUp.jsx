import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/user/userSlice';

const signUpSchema = z
  .object({
    name: z.string().min(2, 'نام حداقل ۲ کاراکتر'),
    email: z.string().email('ایمیل معتبر نیست'),
    password: z.string().min(6, 'رمز عبور حداقل ۶ کاراکتر'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'تکرار رمز عبور صحیح نیست',
    path: ['confirmPassword'],
  });

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (values) => {
    const { name, email } = values;
    dispatch(registerUser({ name, email }));
    navigate('/profile');
  };

  return (
    <div className="max-w-md bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4">ثبت نام</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">نام</label>
          <input className="w-full border rounded px-3 py-2" type="text" {...register('name')} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">ایمیل</label>
          <input className="w-full border rounded px-3 py-2" type="email" {...register('email')} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">رمز عبور</label>
          <input className="w-full border rounded px-3 py-2" type="password" {...register('password')} />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">تکرار رمز عبور</label>
          <input className="w-full border rounded px-3 py-2" type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button disabled={isSubmitting} className="w-full bg-teal-500 text-white py-2 rounded">
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default SignUp;

