import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Staff } from './staff.entity';

@Entity({name: 'StaffServiceHistory'})
export class ServiceHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-json')
  postings: {
    ministry: string;
    department: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    location: string;
  }[];

  @Column('simple-json')
  trainingsAttended: {
    title: string;
    organizer: string;
    duration: string;
    year: number;
    certificateUrl?: string;
  }[];

  //@OneToOne(() => Staff, staff => staff.serviceHistory)
  //@JoinColumn({ name: 'staffId' , referencedColumnName: 'id'})
  //staff: Staff;
}