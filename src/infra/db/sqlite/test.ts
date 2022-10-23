import ConfigInterface from '../config/ConfigInterface';

const config: ConfigInterface = {
  env: 'test',
  database: {
    type: 'sqlite' as const,
    cache: false,
    database: ':memory:',
    dropSchema: true,
    entities: ['src/domain/entities/*.ts'],
    logger: 'advanced-console' as const,
    synchronize: true,
  },
  graphQLPath: '/graphql',
  resolvers: [`${__dirname}/../../../graphql/**/*resolver.ts`],
};

export default config;
