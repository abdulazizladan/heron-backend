import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity({name: 'StaffEmergencyContact'})
export class EmergencyContact {
    @PrimaryColumn({})
    staffId: string;
    
    @Column()
    name: string;

    @Column()
    relationship: string;

    @Column()
    phone: string;

    @OneToOne((type) => Contact, contact => contact.emergencyContact)
    @JoinColumn({name: 'staffId', referencedColumnName: 'staffId'})
    contact: Contact;
  }