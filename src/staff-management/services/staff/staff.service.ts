import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from '../../dto/create-staff.dto';
import { UpdateStaffDto } from '../../dto/update-staff.dto';
import { Repository } from 'typeorm';
import { Staff } from '../../entities/staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';

@Injectable()
export class StaffService {

  constructor( @InjectRepository(Staff)private staffRepository: Repository<Staff>){

  }
  
  create(createStaffDto: CreateStaffDto) {
    return 'This action adds a new staff';
  }

  async findAll() {
    try {
      const staffList = await this.staffRepository.find({});
      return {
        success: true,
        data: staffList,
        message: "Staff list fetched successfully"
      }
    } catch (error) {
      return {
        success: false,
        data: [], 
        message: error
      }
    }
    
  }

  async findOne(id: string) {
    try{
      const staff = await this.staffRepository.findOne({
        where: {staffId: id},
        relations: [
          'contact', 
          'contact.emergencyContact',
          'contact.address',
          'employment',
          'education',
        ]
      })
      return {
        success: true,
        data: staff,
        message: 'Staff details fetched successfully'
      }
    } catch (error) {
      return {
        success: false, 
        data: null,
        message: error.message
      }
    }
  }

  async update(id: string, updateStaffDto: UpdateStaffDto) {
    try {
      const staff = await this.staffRepository.findOne({where: {staffId: id}});
      if (!staff) {
        return {
          success: false,
          data: null,
          message: 'Staff not found'
        }
      }
      this.staffRepository.update(id, updateStaffDto);
      return {
        success: true,
        data: null,
        message: 'Staff updated successfully'
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: error.message
      }
    }
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
