import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Staff } from "./staff.entity";
import { EmergencyContact } from "./emergency-contact.entity";
import { Address } from "./address.entity";

@Entity({name: 'StaffContact'})
export class Contact {
    @PrimaryColumn({unique: true})
    staffId: string;

    @Column({})
    officialEmail: string;

    @Column({})
    personalEmail?: string;

    @Column({})
    phoneNumber: string;

    @OneToOne((type) => Staff, staff => staff.contact)
    @JoinColumn({name: 'staffId', referencedColumnName: 'staffId'})
    staff: Staff;

    @OneToOne((type) => Address, address => address.contact)
    address: Address;

    @OneToOne((type) => EmergencyContact, emergencyContact => emergencyContact.contact)
    emergencyContact: EmergencyContact;
}