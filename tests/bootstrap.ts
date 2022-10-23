// @ts-ignore
import jestTd from 'jest-testdouble';
import 'reflect-metadata';
import td from 'testdouble';
// @ts-ignore
import tdJest from 'testdouble-jest';

import { getConnection } from '../src/main/helpers/database';
import './infra/test_helpers/graphQLResponseMatcher';

tdJest(td, jest);
jestTd(td);

afterEach(td.reset);
beforeAll(getConnection);
afterAll(async () => {
  (await getConnection()).close();
});
