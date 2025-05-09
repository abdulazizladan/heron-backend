import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({name: 'StaffDisciplinaryCase'})
export class DisciplinaryCase {
    @PrimaryColumn({})
    staffId: string;

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

    //@ManyToOne(() => Staff, staff => staff.disciplinaryCases)
    //@JoinColumn({ name: 'staffId', referencedColumnName: 'id' })
    //staff: Staff;
}