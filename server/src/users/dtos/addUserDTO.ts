import { ApiProperty } from "@nestjs/swagger";

export class AddUserDTO {
  @ApiProperty({ type: String })
  public readonly name: string;

  @ApiProperty({ type: String })
  public readonly email: string;

  @ApiProperty({ type: String })
  public readonly password: string;

  @ApiProperty({ type: String })
  public readonly confirm_password: string;
}
