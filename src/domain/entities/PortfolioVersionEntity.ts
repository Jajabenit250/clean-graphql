import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
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

  @OneToMany(() => PageEntity, (page) => page.portfolio)
  pages: PageEntity[];
}
