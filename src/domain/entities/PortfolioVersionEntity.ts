import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import PortfolioEntity from './PortfolioEntity';
import PageEntity from './PageEntity';

@ObjectType('PortfolioVersion')
@Entity()
export default class PortfolioVersionEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { nullable: false, default: 'draft' })
  name: string;

  @Field(() => PortfolioEntity)
  @ManyToOne(() => PortfolioEntity, { nullable: false })
  portfolio: PortfolioEntity;

  @OneToMany(() => PageEntity, (page) => page.portfolio)
  pages: PageEntity[];
}
