import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import User from "./User";

@Entity('messages')
class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    adminId: number;

    @JoinColumn({ name: 'userId' })
    @ManyToOne(() => User)
    user: User
    
    @Column()
    userId: number;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;
}

export default Message;