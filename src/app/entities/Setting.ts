import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('settings')
class Setting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Setting