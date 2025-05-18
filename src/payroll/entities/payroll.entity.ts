import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Staff } from 'src/staff-management/entities/staff.entity';

@Entity()
export class Payroll {
  @PrimaryGeneratedColumn()
  id: number;

  //@ManyToOne(() => Staff, employee => employee.payrolls)
  //employee: Staff;

  @Column({ type: 'decimal' })
  basicSalary: number;

  @Column({ type: 'decimal' })
  housingAllowance: number;

  @Column({ type: 'decimal' })
  transportAllowance: number;

  @Column({ type: 'decimal' })
  tax: number; // Including PAYE for Nigeria

  @Column({ type: 'decimal' })
  pension: number; // Contributory Pension Scheme

  // Other Nigeria-specific deductions
}