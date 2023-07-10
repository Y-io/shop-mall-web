import { BaseAPI } from "../BaseAPI";

export interface CreateAdminRequest {
  username: string;
  password: string;
}

export class UserApi extends BaseAPI {
  createAdmin(params: CreateAdminRequest) {}
}
