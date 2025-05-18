import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Staff } from './staff.entity';

@Entity({name: 'StaffGradeLevel'})
export class GradeLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  currentGrade: number;

  @Column()
  currentStep: number;

  @Column('decimal')
  currentSalary: number;

  @Column()
  effectiveDate: Date;

  @OneToOne(() => Staff, staff => staff.gradeLevel)
  @JoinColumn({name: 'staffId', referencedColumnName: 'staffId'})
  staff: Staff; 
}