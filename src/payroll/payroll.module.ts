import { Module } from '@nestjs/common';
import { PayrollService } from './services/payroll/payroll.service';
import { PayrollController } from './controllers/payroll/payroll.controller';

@Module({
  providers: [PayrollService],
  controllers: [PayrollController]
})
export class PayrollModule {}
