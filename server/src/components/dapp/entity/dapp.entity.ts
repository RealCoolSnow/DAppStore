import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Dapp {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', { length: 128 })
  hash_key: string

  @Column('varchar', { length: 128 })
  name: string

  @Column('varchar', { length: 255 })
  url: string

  @Column('varchar', { length: 255 })
  icon: string

  @Column('text')
  description: string

  @Column('tinyint')
  category_id: number

  @Column('text')
  extra: string

  @CreateDateColumn()
  create_time: number

  @UpdateDateColumn()
  update_time: number
}
