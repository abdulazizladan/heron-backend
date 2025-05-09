import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Staff } from './staff.entity';

@Entity({name: 'StaffEducation'})
export class Education {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: false})
    staffId: string;
   
    @Column()
    institution: string;

    @Column()
    qualification: string;

    @Column()
    fieldOfStudy: string;

    @Column()
    classOfDegree?: string;

    @Column()
    yearObtained: number;

    @Column()
    certificateUrl?: string;

    @ManyToOne((type) => Staff, staff => staff.education)
    @JoinColumn({name: 'staffId', referencedColumnName:'staffId'})
    staff: Staff;
}