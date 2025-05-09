import { Controller, Get } from '@nestjs/common';
import { OrganizationService } from 'src/organization-management/services/organization/organization.service';

@Controller('organization')
export class OrganizationController {

    constructor( private organizationService: OrganizationService) {

    }
    
    @Get()
    getInfo() {
        return this.organizationService.getInfo()
    }
}
