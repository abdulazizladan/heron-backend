import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
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

  @ManyToOne((type) => Staff, staff => staff.promotions)
  @JoinColumn({name: 'staffId', referencedColumnName: 'staffId'})
  staff: Staff;

}