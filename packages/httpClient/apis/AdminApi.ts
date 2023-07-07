import { BaseAPI, RequestArgs } from "../BaseAPI";
import {
  assertParamExists,
  createRequestFunction,
  serializeDataIfNeeded,
  setOAuthToObject,
  setSearchParams,
  toPathString,
} from "../common";

import axiosStatic, { AxiosRequestConfig } from "axios";
import { Configuration } from "../configuration";

export type AdminLoginRequest = {
  username: string;
  password: string;
};

export type LoginSuccessResponse = {
  username: string;
  password: string;
};

export const AdminApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    adminLogin: (
      body: AdminLoginRequest,
      options?: AxiosRequestConfig,
    ): RequestArgs => {
      assertParamExists("addPet", "body", body);
      const localVarPath = `/admin-login`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "http://eeeeeeawaewaewa.com",
      );
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication petstore_auth required
      // oauth required
      setOAuthToObject(
        localVarHeaderParameter,
        "petstore_auth",
        ["write:pets", "read:pets"],
        configuration,
      );

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(options?.headers ?? {}),
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );
      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

export const AdminApiFp = (configuration?: Configuration) => {
  const localVarAxiosParamCreator = AdminApiAxiosParamCreator(configuration);
  console.log({ localVarAxiosParamCreator });
  return {
    adminLogin: (body: AdminLoginRequest, options?: AxiosRequestConfig) =>
      createRequestFunction(
        localVarAxiosParamCreator.adminLogin(body, options),
        axiosStatic,
        "",
        configuration,
      ),
  };
};

export class AdminApi extends BaseAPI {
  adminLogin(params: AdminLoginRequest) {
    return AdminApiFp(this.configuration).adminLogin(params);
  }
}
