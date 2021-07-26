import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  qntd: number;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: string;
  
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: number;
}
