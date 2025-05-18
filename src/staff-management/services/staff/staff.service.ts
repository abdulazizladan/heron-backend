import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from '../../dto/create-staff.dto';
import { UpdateStaffDto } from '../../dto/update-staff.dto';
import { DeepPartial, Repository } from 'typeorm';
import { Staff } from '../../entities/staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { ApiOperation } from '@nestjs/swagger';

@Injectable()
export class StaffService {

  constructor( @InjectRepository(Staff)private staffRepository: Repository<Staff>){

  }
  
  /**
   * 
   * @param createStaffDto 
   * @returns 
   */
  @ApiOperation({description: 'Create a new staff record', summary: 'Create a new staff record'})
  async create(createStaffDto: CreateStaffDto) {
    try {
      const staff = this.staffRepository.create(createStaffDto as DeepPartial<Staff>);
      await this.staffRepository.save(staff);
      return {
        success: true,
        data: staff,
        message: 'Staff created successfully'
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: error.message
      }
    }
  }

  /**
   * 
   * @returns 
   */
  @ApiOperation({description: 'Get all staff records', summary: 'Get all staff records'})
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

  /**
   * 
   * @param id 
   * @returns 
   */
  @ApiOperation({description: 'Get a staff record by ID', summary: 'Get a staff record by ID'})
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
          'certifications',
          'promotions',
          'gradeLevel',
          'gradeLevelHistory',
          'nextOfKin'
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

  /**
   * 
   * @param id 
   * @param updateStaffDto 
   * @returns 
   */
  @ApiOperation({description: 'Update a staff record by ID', summary: 'Update a staff record by ID'})
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
      this.staffRepository.update(id, updateStaffDto as DeepPartial<Staff>);
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

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id: string) {
    try {
      const staff = await this.staffRepository.findOne({where: {staffId: id}});
      if (!staff) {
        return {
          success: false,
          data: null,
          message: 'Staff not found'
        }
      }
      await this.staffRepository.delete(id);
      return {
        success: true,
        data: null,
        message: 'Staff deleted successfully'
      }
    }
    catch (error) {
      return {
        success: false,
        data: null,
        message: error.message
      }
    }
  }
}
