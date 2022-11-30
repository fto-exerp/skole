import {
    Entity, PrimaryGeneratedColumn, Column,
} from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true , default: false})
    status: boolean;

    @Column({ nullable: true })
    title: string;
}
