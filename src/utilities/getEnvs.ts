import { config } from 'dotenv';

config();

const { NODE_ENV, API_URL } = process.env;

export const isEnvProd = (): boolean => NODE_ENV === 'production';
export const isEnvDev = (): boolean => NODE_ENV === 'development';
export const getApiUrl = () => API_URL;
