import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({name: 'StaffDisciplinaryCase'})
export class DisciplinaryCase {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({unique: true})
    caseId: string;

    @Column({})
    date: Date;

    @Column({})
    offense: string;

    @Column({})
    actionTaken: string;

    @Column({})
    duration?: string;

    @Column({}) 
    memoReference: string;

    @Column({})
    notes?: string;

    @ManyToOne((type) => Staff, staff => staff.disciplinaryCases)
    @JoinColumn({ name: 'staffId', referencedColumnName: 'staffId' })
    staff: Staff;
}