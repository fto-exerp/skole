import {
    Entity, PrimaryGeneratedColumn, Column,
} from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    status: boolean;

    @Column({ nullable: true })
    title: string;

    @Column({nullable: true })
    date: string;
}
