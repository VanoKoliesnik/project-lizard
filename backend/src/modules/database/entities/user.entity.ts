import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Ephemeral } from 'secure-remote-password/server';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  verifier: string;

  @Column()
  salt: string;

  @Column({
    nullable: true,
    type: 'json',
    transformer: {
      to: (value: Ephemeral) => JSON.stringify(value),
      from: (value: string) => JSON.parse(value),
    },
  })
  serverEphemeral: Ephemeral;
}
