import PortfolioEntity from '../../../src/domain/entities/PortfolioEntity';
import createApolloServer from '../../infra/test_helpers/createApolloServer';
import createPortfolioEntity from '../../domain/mocks/createPortfolioHelper';

describe('PortfoliosResolver', () => {
  const QUERY = `
    query ListPortfolios {
      listPortfolios {
        id
        name
        url
      }
    }
  `;

  let portfolio1: PortfolioEntity;
  let portfolio2: PortfolioEntity;
  let portfolio3: PortfolioEntity;
  beforeAll(async () => {
    portfolio1 = await createPortfolioEntity();
    portfolio2 = await createPortfolioEntity();
    portfolio3 = await createPortfolioEntity();
  });
  const server = createApolloServer();

  // test get portfolios
  test('return 3 items', async () => {

    const response = await server.executeOperation({
      query: QUERY,
      variables: {},
    });
    expect(response).toGraphQLResponseData({
      listPortfolios: [
        {
          id: portfolio1.id,
          name: portfolio1.name,
          url: portfolio1.url,
        },
        {
          id: portfolio2.id,
          name: portfolio2.name,
          url: portfolio2.url,
        },
        {
          id: portfolio3.id,
          name: portfolio3.name,
          url: portfolio3.url,
        },
      ],
    });
  });

});