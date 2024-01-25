import { AuthResponseInterface } from '../interface/auth-response.interface';

export class AuthResponseDto implements AuthResponseInterface {
  accessToken!: string;
  refreshToken!: string;
}
