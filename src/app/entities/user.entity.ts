import { hashSync } from "bcrypt";
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @BeforeInsert()
    hash = () => this.password = hashSync(this.password, 10)

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}
