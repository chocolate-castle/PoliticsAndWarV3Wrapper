import { GraphQLClient } from "graphql-request";

class PoliticsAndWarAPIv3 {
  key;
  variables;
  query;
  constructor(key: string, variables: object) {
    this.key = key;
    this.variables = variables;
  }

  async initializeData(): Promise<any> {
    const link = "https://api.politicsandwar.com/graphql?api_key=" + this.key;
    const client = new GraphQLClient(link);
    return await client.request(this.query, this.variables);
  }
}

export default PoliticsAndWarAPIv3;
