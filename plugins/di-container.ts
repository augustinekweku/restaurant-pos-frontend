import { NuxtAxiosInstance } from "@nuxtjs/axios";
import AuthRepository from "~/respositories/auth-repository";
import AuthService from "~/services/auth-service";
import { $axios } from "~/utils/api";

const newAuthRepository = new AuthRepository();

const newAuthService = new AuthService(newAuthRepository);

const DI = {
  newAuthService,
};

export default DI;
