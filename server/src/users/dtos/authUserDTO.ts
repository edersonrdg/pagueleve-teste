import { ApiProperty } from "@nestjs/swagger";

export class AuthUserDTO {
  @ApiProperty({ type: String, description: 'email'})
  public readonly email: string;

  @ApiProperty({ type: String, description: 'password'})
  public readonly password: string;
}
