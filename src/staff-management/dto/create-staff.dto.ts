import { Type } from 'class-transformer';
import { IsString, IsNumber, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { CreateEducationDTO } from './create-education.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CreateEmploymentDto } from './create-employment.dto';

export class CreateStaffDto {
  
    @IsString()
    @ApiProperty({ description: 'Staff ID' })
    staffId: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff title' })
    title: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff first name' })
    firstName: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff middle name' })
    @IsOptional()
    middleName?: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff last name' })
    lastName: string;
  
    @IsNumber()
    @ApiProperty({ description: 'Staff date of birth' })
    dateOfBirth: number;
  
    @IsString()
    @ApiProperty({ description: 'Staff gender' })
    gender: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff marital status' })
    maritalStatus: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff state of origin' })
    stateOfOrigin: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff local government area of origin' })
    lgaOfOrigin: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff nationality' })
    nationality: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff religion' })
    religion: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff biometric ID' })
    biometricId: string;
  
    @IsString()
    @ApiProperty({ description: 'Staff photo URL' })
    photoUrl: string;
  
    @IsNumber()
    @ApiProperty({ description: 'Staff employment date' })
    employmentDate: number;
  
    @IsString()
    @ApiProperty({ description: 'Staff status' })
    status: string;
  
    @IsOptional()
    @ApiProperty({ description: 'Staff remark' })
    remark?: string | null;
  
    @IsString()
    createdAt: string;
  
    @IsString()
    updatedAt: string;
  
    @IsOptional()
    contact?: any | null;
  
    @IsArray()
    @ValidateNested({ each: true })
    
    @IsArray()
    @ApiProperty({type: [CreateEmploymentDto], description: 'Staff employment details'})
    @ValidateNested({ each: true })
    @Type(() => CreateEmploymentDto) // Replace with EmploymentDTO if available
    employment: any[];
  
    @IsArray()
    @ApiProperty({ type: [CreateEducationDTO], description: 'Staff education details' })
    @ValidateNested({ each: true })
    @Type(() => CreateEducationDTO)
    education: CreateEducationDTO[];
}
