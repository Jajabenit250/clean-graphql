import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import PortfolioVersionEntity from './PortfolioVersionEntity';
import PortfolioEntity from './PortfolioEntity';

@ObjectType('Page')
@Entity()
export default class PageEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { nullable: false })
  name: string;

  @Field()
  @Column('varchar', { nullable: false, unique: true })
  url: string;

  @Field(() => PortfolioVersionEntity)
  @ManyToOne(() => PortfolioVersionEntity, { nullable: false })
  portfolioVersion: PortfolioVersionEntity;

  @Field(() => PortfolioEntity)
  @ManyToOne(() => PortfolioEntity, { nullable: false })
  portfolio: PortfolioEntity;
}
