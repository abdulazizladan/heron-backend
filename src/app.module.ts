import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationManagementModule } from './organization-management/organization-management.module';
import { StaffModule } from './staff-management/staff.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    StaffModule,
    OrganizationManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
