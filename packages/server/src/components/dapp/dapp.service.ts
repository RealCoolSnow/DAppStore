import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Category } from './entity/category.entity'
import { Dapp } from './entity/dapp.entity'

@Injectable()
export class DAppService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Dapp)
    private dappRepository: Repository<Dapp>
  ) {}

  getCategories(): Promise<Category[]> {
    return this.categoryRepository.find()
  }

  getDapps(where?: string, whereArgs?: {}, limit?: number): Promise<Dapp[]> {
    return this.dappRepository
      .createQueryBuilder('dapp')
      .leftJoinAndSelect(Category, 'category', 'dapp.category_id=category.id')
      .where(where, whereArgs)
      .select(
        `
      dapp.id as id,
      dapp.hash_key as hash_key,
      dapp.name as name,
      dapp.url as url,
      dapp.icon as icon,
      dapp.description as description,
      dapp.category_id as category_id,
      dapp.status as status,
      dapp.vote_up as vote_up,
      dapp.vote_down as vote_down,
      dapp.banner as banner,
      category.name as category_name,
      category.color as category_color
      `
      )
      .limit(limit)
      .getRawMany()
  }
}
