import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateEmploymentDto {
    @IsString()
    @ApiProperty({ description: 'Staff ID' })
    staffId: string;
    
    @IsString()
    @ApiProperty({ description: 'Employment type' })
    employmentType: string;
    
    @IsString()
    @ApiProperty({ description: 'Department' })
    department: string;
    
    @IsString()
    @ApiProperty({ description: 'Designation' })
    designation: string;
    
    @IsString()
    @ApiProperty({ description: 'Employment status' })
    employmentStatus: string;
    
    @IsNumber()
    @ApiProperty({ description: 'Date of first appointment' })
    dateOfFirstAppointment: number;
    
    @IsNumber()
    @ApiProperty({ description: 'Date of confirmation' })
    dateOfConfirmation: number;
    
    @IsNumber()
    @ApiProperty({ description: 'Date of last promotion' })
    dateOfLastPromotion: number;
    }