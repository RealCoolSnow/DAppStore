import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', { length: 128 })
  name: string

  @Column('int')
  age: number

  @CreateDateColumn()
  create_time: number

  @UpdateDateColumn()
  update_time: number
}
