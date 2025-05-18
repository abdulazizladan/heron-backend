import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity({name: "StaffNextOfKin"})
export class NextOfKin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  relationship: "Spouse" | "Parent" | "Sibling" | "Child";

  @Column()
  phone: string;

  @Column()
  address: string;

  //@Column()
  //percentageAllocation?: number; // For benefit distribution

  @OneToOne((type) => Staff, staff => staff.nextOfKin)
  @JoinColumn({name: 'staffId', referencedColumnName: 'staffId'})
  staff: Staff;
}