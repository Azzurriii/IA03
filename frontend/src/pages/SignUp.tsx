import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { registerUser, type RegisterData } from '../api/user';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [successMessage, setSuccessMessage] = useState<string>('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>();

  const mutation = useMutation({
    mutationFn: (data: RegisterData) => registerUser(data),
    onSuccess: (data) => {
      setSuccessMessage(`${data.message}! Welcome, ${data.user.email}`);
      reset();
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    },
    onError: (error: any) => {
      console.error('Registration failed:', error);
    },
  });

  const onSubmit = (data: FormData) => {
    setSuccessMessage('');
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  const password = watch('password');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600">Sign up to get started</p>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        {mutation.isError && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {mutation.error?.response?.data?.message || 'Registration failed. Please try again.'}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please provide a valid email address',
                },
              })}
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-800"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-800"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) => value === password || 'Passwords do not match',
              })}
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-800"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {mutation.isPending ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-800 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

