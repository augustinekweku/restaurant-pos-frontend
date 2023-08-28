import { NuxtAxiosInstance } from "@nuxtjs/axios";
import AuthRepository from "~/respositories/auth-repository";
import AuthService from "~/services/auth-service";
import { $axios } from "~/utils/api";

const authRepository = new AuthRepository();

const authService = new AuthService(authRepository);

const DI = {
  authService,
};

export default DI;
