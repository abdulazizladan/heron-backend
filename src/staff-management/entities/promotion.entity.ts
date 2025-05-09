import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Staff } from './staff.entity';

@Entity({name: 'StaffPromotion'})
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  previousGrade: string;

  @Column()
  newGrade: string;

  @Column()
  effectiveDate: Date;

  @Column()
  approvalDate: Date;

  @Column()
  approvedBy: string;

  @Column()
  memoReference: string;

  @Column({ nullable: true })
  remarks?: string;

  //@ManyToOne(() => Staff, staff => staff.promotions)
  //staff: Staff;

}