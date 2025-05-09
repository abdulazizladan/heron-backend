import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Staff } from './staff.entity';


export class DisciplinaryRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-json')
  cases: [];

  
}