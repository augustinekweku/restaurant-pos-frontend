import { $axios } from "~/utils/api";
import { ApiResponse } from "../types";
import { NuxtAxiosInstance } from "@nuxtjs/axios";
// import { AxiosClient } from "../utils/clients";

export type GetTodoResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {};
};

export default class AuthRepository {
  BASE_URL = "http://127.0.0.1:8000/api";
  constructor() {}
  //
  async getTodo() {
    $axios.setHeader("Authorization", "Bearer 123");
    const res = await $axios.get<ApiResponse<GetTodoResponse>>(
      `${this.BASE_URL}/todos/1`
    );
    return res.data;
  }
  async login(payload: LoginPayload) {
    const res = await $axios.post<ApiResponse<LoginResponse>>(
      `${this.BASE_URL}/login`,
      payload
    );
    return res.data;
  }
}
