import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
//import { Department } from "./department.entity";

@Entity({name: 'Organization'})
export class Organization {

    @PrimaryGeneratedColumn()
    code: number;
    
    @Column()
    name: string;

    //@OneToMany((type) => Department, department => department.organization)
    //departments: Department[];
}