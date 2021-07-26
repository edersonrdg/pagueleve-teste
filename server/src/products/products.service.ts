import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto)
    await this.productRepository.save(product)
    return product;
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }
  
  async update(id: number, updateProductDto: UpdateProductDto): Promise<void> {
    const product = await this.productRepository.findOne({ where: { id }})
    if (!product) {
      return 
    }
    await this.productRepository.update(product.id, updateProductDto)
  }

  async remove(id: number) {
    await this.productRepository.delete(id);
  }
}
