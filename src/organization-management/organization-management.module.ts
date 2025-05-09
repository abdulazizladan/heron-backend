import { Module } from '@nestjs/common';
import { OrganizationController } from './controllers/organization/organization.controller';
import { OrganizationService } from './services/organization/organization.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';
//import { Department } from './entities/department.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Organization
    ]
  )
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService]
})
export class OrganizationManagementModule {}
