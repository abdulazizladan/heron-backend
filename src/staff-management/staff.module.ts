import { Module } from '@nestjs/common';
import { StaffService } from './services/staff/staff.service';
import { StaffController } from './controllers/staff/staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './entities/staff.entity';
import { Contact } from './entities/contact.entity';
import { EmergencyContact } from './entities/emergency-contact.entity';
import { ContactService } from './services/contact/contact.service';
import { Education } from './entities/education.entity';
import { Certification } from './entities/certification.entity';
import { ContactController } from './controllers/contact/contact.controller';
import { Employment } from './entities/employment.entity';
import { Promotion } from './entities/promotion.entity';
import { GradeLevel } from './entities/grade-level.entity';
import { GradeLevelHistory } from './entities/grade-level-history.entity';
import { NextOfKin } from './entities/next-of-kin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        Staff, 
        Contact, 
        EmergencyContact, 
        Education,
        Employment, 
        Certification,
        Promotion,
        GradeLevel,
        GradeLevelHistory,
        NextOfKin
      ]
    )
  ],
  controllers: [StaffController, ContactController],
  providers: [StaffService, ContactService],
})
export class StaffModule {}
