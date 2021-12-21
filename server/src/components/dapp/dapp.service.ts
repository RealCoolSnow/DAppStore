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

  getDapps(where?: {}): Promise<Dapp[]> {
    return this.dappRepository.find({
      where,
      select: [
        'id',
        'hash_key',
        'name',
        'url',
        'icon',
        'description',
        'category_id',
      ],
    })
  }
}
