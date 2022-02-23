import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Dapp {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', { length: 128 })
  hash_key: string

  @Index()
  @Column('varchar', { length: 128 })
  name: string

  @Column('varchar', { length: 255 })
  url: string

  @Column('varchar', { length: 255, comment: 'icon image url' })
  icon: string

  @Column('varchar', { length: 255, default: '', comment: 'banner image url' })
  banner: string

  @Column('text')
  description: string

  @Column('tinyint')
  category_id: number

  @Column('text')
  extra: string

  @Column('tinyint', { default: 0, comment: '0-normal,1-reviewed,2-feature' })
  status: number

  @Column('int', { default: 0, comment: 'vote up count' })
  vote_up: number

  @Column('int', { default: 0, comment: 'vote down count' })
  vote_down: number

  @CreateDateColumn()
  create_time: number

  @UpdateDateColumn()
  update_time: number
}
