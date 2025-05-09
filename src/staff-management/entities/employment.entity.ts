import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Staff } from './staff.entity';
import { EmploymentType } from '../enums/employment-type.enum';

@Entity({name: 'StaffEmployment'})
export class Employment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ministry: string;

  @Column()
  department: string;

  @Column({ nullable: true })
  unit?: string;

  @Column()
  designation: string;

  @Column({})
  employmentType: EmploymentType;

  @Column()
  cadre: string;

  @Column({ default: false })
  isHeadOfDepartment: boolean;

  @Column({ nullable: true })
  supervisorId?: string;

  @ManyToOne(() => Staff, staff => staff.employment)
  @JoinColumn({name: 'staffId', referencedColumnName: 'staffId'})
  staff: Staff;

  //@ManyToOne(() => Staff, { nullable: true })
  //supervisor?: Staff;
}