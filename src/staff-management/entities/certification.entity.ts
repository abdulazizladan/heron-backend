import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({name: 'StaffCertification'})
export class Certification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    staffId: string;

    @Column({})
    name: string;

    @Column({})
    year: number;

    @Column({})
    licenseNumber?: string;

    //@ManyToOne((type) => Staff, staff => staff.certifications)
    //@JoinColumn({name: 'staffId', referencedColumnName: 'staffId'})
    //staff: Staff;
}