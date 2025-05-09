import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "./organization.entity";

/**@Entity({name: 'Department'})
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    organizationCode: string;

    @Column({unique: true})
    name: string;

    @Column({unique: true})
    code: string;

    //@ManyToOne((type) => Organization, organization => organization.departments)
    //@JoinColumn()
    //organization: Organization; 
}*/