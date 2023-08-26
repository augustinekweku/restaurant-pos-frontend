import { NuxtAxiosInstance } from "@nuxtjs/axios";
import AuthRepository from "~/respositories/auth-repository";
import { $axios } from "~/utils/api";

export default class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async getTodo() {
    const res = await this.authRepository.getTodo();
    return res;
  }
}
