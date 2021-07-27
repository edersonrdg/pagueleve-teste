import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto {
  @ApiProperty({ type: String})
  public readonly name?: string;

  @ApiProperty({ type: Number})
  public readonly price?: number;

  @ApiProperty({ type: Number})
  public readonly qntd?: number;

  @ApiProperty({ type: String})
  public readonly description?: string;
}