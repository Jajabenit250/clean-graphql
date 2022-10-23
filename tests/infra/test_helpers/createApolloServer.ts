import { Config } from 'apollo-server-core';

import { createSchema } from '../../../src/main/helpers/createSchema';
import createApolloServer from '../../../src/main/helpers/createApolloServer';

export default function createApolloServerTesting(config?: Config) {
  return createApolloServer({
    schema: createSchema(),
    ...config,
  });
}
