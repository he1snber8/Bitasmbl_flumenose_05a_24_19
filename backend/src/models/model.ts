export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsNumberString()
  @Min(1000)
  @Max(3000)
  readonly year: string;

  @IsMongoId()
  readonly authorId: string;

  @IsMongoId()
  readonly genreId: string;
}