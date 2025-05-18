import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./contact.entity";
import { Title } from "../enums/titles.enum";
import { Gender } from "../enums/gender.enum";
import { MaritalStatus } from "../enums/marital-status.enum";
import { Religion } from "../enums/religion.enum";
import { Status } from "../enums/status";
import { Employment } from "./employment.entity";
import { Education } from "./education.entity";
import { Certification } from "./certification.entity";
import { GradeLevel } from "./grade-level.entity";
import { Promotion } from "./promotion.entity";
import { ServiceHistory } from "./service-history.entity";
import { DisciplinaryCase } from "./staff-disciplinary-case.entity";
import { GradeLevelHistory } from "./grade-level-history.entity";
import { NextOfKin } from "./next-of-kin.entity";

@Entity({name: 'Staff'})
export class Staff {
    @PrimaryGeneratedColumn()
    id: number; // Generated UUID

    @Column({unique: true})
    staffId: string; // Government-issued ID (e.g. "FCTA/HR/2023/001")

    @Column({})
    title: Title;

    @Column({})
    firstName: string;

    @Column({})
    middleName?: string;

    @Column({})
    lastName: string;
    
    @Column({})
    dateOfBirth: Date;

    @Column({})
    gender: Gender;

    @Column({})
    maritalStatus: MaritalStatus;

    @Column({})
    stateOfOrigin: string; 

    @Column({})
    lgaOfOrigin: string;

    @Column({default: "Nigerian"})
    nationality: string;

    @Column({})
    religion?: Religion;

    @Column({})
    biometricId: string; // For fingerprint integration

    @Column({})
    photoUrl: string;

    @Column()
    employmentDate: Date;

    @Column({default: Status.active})
    status: Status;

    @Column({nullable: true})
    remark: string;

    @CreateDateColumn({})
    createdAt: Date;

    @UpdateDateColumn({})
    updatedAt: Date;

    @OneToOne((type) => Contact, contact => contact.staff)
    contact: Contact;

    @OneToMany((type) => Education, education => education.staff)
    education: Education[];

    @OneToMany(() => Employment, employment => employment.staff)
    employment: Employment[];

    @OneToMany((type) => Certification, certification => certification.staff, {cascade: true})
    certifications: Certification[];

    @OneToMany((type) => Promotion, promotion => promotion.staff)
    promotions: Promotion[];

     
    @OneToOne((type) => GradeLevel, gradeLevel => gradeLevel.staff)
    gradeLevel: GradeLevel;

    @OneToMany((type) => GradeLevelHistory, gradeLevelHistory => gradeLevelHistory.staff)
    gradeLevelHistory: GradeLevelHistory[];

    @OneToMany((type) => DisciplinaryCase, disciplinaryCase => disciplinaryCase.staff)
    disciplinaryCases: DisciplinaryCase[]; 

    @OneToOne((type) => NextOfKin, nextOfKin => nextOfKin.staff)
    nextOfKin: NextOfKin;

    /**

    @OneToOne((type) => ServiceHistory, serviceHistory => serviceHistory.staff)
    serviceHistory: ServiceHistory;

    
    **/
  }