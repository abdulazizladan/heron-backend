// education.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateEducationDTO {
  @IsNumber()
  id: number;

  @IsString()
  staffId: string;

  @IsString()
  @ApiProperty({ description: 'Institution name' })
  institution: string;

  @IsString()
  @ApiProperty({ description: 'Degree obtained' })
  qualification: string;

  @IsString()
  @ApiProperty({ description: 'Field of study' })
  fieldOfStudy: string;

  @IsString()
  @ApiProperty({ description: 'Class of degree' })
  classOfDegree: string;

  @IsNumber()
  @ApiProperty({ description: 'Year obtained' })
  yearObtained: number;

  @IsString()
  @ApiProperty({ description: 'Certificate URL' })
  @IsOptional()
  certificateUrl?: string;
}

