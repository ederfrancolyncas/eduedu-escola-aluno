import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { useUserStore } from "../stores/user-store";
import { BaseError, BaseResponse } from "./api-types";

export class API {
  static readonly api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  private static readonly tokenInterceptorId =
    this.api.interceptors.request.use(this.appendToken);

  private static readonly _rtiid = this.api.interceptors.response.use(
    this.transformResponse,
    this.transformError
  );

  private static appendToken(req: InternalAxiosRequestConfig<unknown>) {
    const { accessToken } = useUserStore.getState();

    return {
      ...req,
      headers: {
        ...req.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    } as InternalAxiosRequestConfig<unknown>;
  }

  private static transformResponse(res: AxiosResponse<BaseResponse<unknown>>) {
    const { data: actualData, errors } = res.data;
    return { ...res, data: actualData, errors };
  }

  private static async transformError(err: AxiosError<BaseError>) {
    if (err.response) {
      if (err.response?.status === 401) {
        return await API.checkToken();
      }

      if (err.response?.status === 403) {
        // return showErrorNotification(
        //   ["Você não tem permissão para acessar este recurso"],
        //   "Acesso negado"
        // );
      }

      if (err.response?.status === 500) {
        // return showErrorNotification(
        //   ["Por favor contate um administrador"],
        //   "Erro interno"
        // );
      }

      // showErrorNotification(err.response.data.errors);

      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw err.response.data.errors;
    } else throw err;
  }

  private static async checkToken() {
    try {
      const { accessToken } = useUserStore.getState();
      if (!accessToken) throw Error();

      const { data } = await this.api.get<{ valido: boolean }>(
        "login/token-valido"
      );

      if (!data.valido) throw Error();
    } catch {
      useUserStore.setState({ accessToken: "" });
      window.location.pathname = "/login";
    }
  }
}
