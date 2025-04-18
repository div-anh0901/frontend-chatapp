import axios, {AxiosRequestConfig} from 'axios';
import { CreateMessageParam, CreateUserParams, ListConversations, Message, User, UserCredentialParam } from './types';

const API_URL  = import.meta.env.VITE_API_URL;
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegister = (data:CreateUserParams)=>{
   return axios.post(`${API_URL}/auth/register`, data, config);
}

export const postLogin = (data:UserCredentialParam)=>{
   return axios.post(`${API_URL}/auth/login`, data, config);
}

export const getAuthUser = ()=>{
   return axios.get<User>(`${API_URL}/auth/status`, config);
}


export const getConversations=()=>{
   return axios.get<ListConversations[]>(`${API_URL}/conversations`, config);
}

export const getMessagefollowCon=(id: number)=>{
   return axios.get<Message[]>(`${API_URL}/messages/${id}`, config);
}

export const createMessage=(data:CreateMessageParam)=>{
   return axios.post(`${API_URL}/messages`, data,config);
}