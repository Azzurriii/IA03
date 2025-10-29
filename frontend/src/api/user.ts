import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api-ia-03.vercel.app';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface RegisterData {
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    email: string;
    createdAt: string;
  };
}

export const registerUser = async (data: RegisterData): Promise<RegisterResponse> => {
  const response = await api.post('/user/register', data);
  return response.data;
};

