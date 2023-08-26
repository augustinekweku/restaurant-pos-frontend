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

export default class AuthRepository {
  BASE_URL = "https://jsonplaceholder.typicode.com";
  constructor() {}
  //
  async getTodo() {
    $axios.setHeader("Authorization", "Bearer 123");
    const res = await $axios.get<ApiResponse<GetTodoResponse>>(
      `${this.BASE_URL}/todos/1`
    );
    return res.data;
  }
  async login() {}
}
