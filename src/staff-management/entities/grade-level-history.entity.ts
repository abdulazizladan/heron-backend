import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({name: 'StaffGradeLevelHistory'})
export class GradeLevelHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    grade: number;

    @Column()
    step: number;

    @Column()
    salary: string;

    @Column()
    effectiveDate: Date;

    @Column()
    approvedBy: string;

    @ManyToOne((type) => Staff, staff => staff.gradeLevelHistory)
    @JoinColumn({name: 'staffId', referencedColumnName: 'staffId'})
    staff: Staff;
}