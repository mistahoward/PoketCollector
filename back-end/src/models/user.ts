import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity() 
export class User {
	@PrimaryGeneratedColumn()
	id!: number;
  
	@Column()
	userName!: string;
  
	@Column()
	email!: string;

	@Column()
	password!: string;

	@Column()
	salt!: string;
  
	@CreateDateColumn()
	createdAt!: Date;
  
	@UpdateDateColumn()
	updatedAt!: Date;
  }