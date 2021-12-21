import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Category {
  @Column('tinyint', { primary: true, unique: true })
  id: number

  @Column('varchar', { length: 100 })
  name: string

  @Column('varchar', { length: 100 })
  tag: string

  @Column('varchar', { length: 32, default: 'rgb(255,255,255)' })
  color: string

  @CreateDateColumn()
  create_time: number

  @UpdateDateColumn()
  update_time: number
}
