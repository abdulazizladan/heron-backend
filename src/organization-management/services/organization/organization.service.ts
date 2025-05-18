import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from 'src/organization-management/entities/organization.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationService {
    constructor( @InjectRepository(Organization)private organizationRepository: Repository<Organization>) {

    }

    async getInfo() {
        try{
        const info = await  this.organizationRepository.find({relations: ['departments']});
        return {
            success: true,
            data: info,
            message: "Organization info fetched successfully"
        }
        } catch (error) {
            return {
                success: false,
                data: null, 
                message: error
              }
        }
    }

    async addDepartment(){
        try{
            //const department = new Department();
        } catch (error) {
            return {
                success: false,
                data: null,
                message: error
            }
        }
    }
}
