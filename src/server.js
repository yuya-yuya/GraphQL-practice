const { ApolloServer, gql } = require("apollo-server");

//HackersNewsの1つ1つの投稿
let links = [
  {
    id: "link-0",
    description: "GraphQLチュートリアルをUdemyで学ぶ",
    url: "www.udemy-graphql-tutorial.com"
  }
]

// GraphQLスキーマの定義
const typeDefs = gql`
  type Query {
    info: String!
    feed: [Link]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

// リゾルバー関数
const resolvers = {
  Query: {
    info: () => "HackersNewsクローン",
    feed: () => links,
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({url}) => console.log('${url}でサーバーを起動中...'));
