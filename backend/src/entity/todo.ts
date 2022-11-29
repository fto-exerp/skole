import {
    Entity, PrimaryGeneratedColumn, Column,
} from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    desc: string;

    @Column({nullable: true })
    date: string;
}
