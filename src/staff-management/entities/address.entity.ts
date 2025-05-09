import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity({name: 'StaffAddress'})
export class Address {
    @PrimaryColumn({ unique: true })
    staffId: string;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column({ nullable: true })
    postalCode?: string;

    @OneToOne(() => Contact, contact => contact.address)
    @JoinColumn({ name: 'staffId', referencedColumnName: 'staffId' })
    contact: Contact;
  };