import { axiosInstance } from "../../../infrastructure/configurations/http-client";
import { AxiosResponse } from "axios";

export class UserService {

    public static async getAll() : Promise<AxiosResponse> {
        return await axiosInstance.get('/users/find-all')
    }

    public static async getById(id : any) : Promise<AxiosResponse> {
        return await axiosInstance.get(`/users/find-by-id/${id}`)
    }

    public static async login(user : any) : Promise<AxiosResponse> {
        return await axiosInstance.post('/auth/login', user)
    }

    public static async create(user : any) : Promise<AxiosResponse> {
        return await axiosInstance.post('/users/create', user)
    }

    public static async updateById(id : any, user : any) : Promise<AxiosResponse> {
        return await axiosInstance.put(`/users/update/${id}`, user)
    }

    public static async deleteById(id : any) : Promise<AxiosResponse> {
        return await axiosInstance.get(`/users/delete/${id}`)
    }
}