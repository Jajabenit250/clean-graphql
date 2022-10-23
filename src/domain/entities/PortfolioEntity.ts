import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import PortfolioVersionEntity from './PortfolioVersionEntity';

@ObjectType('Portfolio')
@Entity()
export default class PortfolioEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { nullable: false })
  name: string;

  @Field()
  @Column('varchar', { nullable: false, unique: true })
  url: string;

  @OneToMany(() => PortfolioVersionEntity, (version) => version.portfolio)
  version: PortfolioVersionEntity[];
}
