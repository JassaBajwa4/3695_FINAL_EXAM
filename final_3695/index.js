const { ApolloServer, gql, PubSub } = require('apollo-server')
const user = require('./src/users')
const post = require('./src/posts')
const comment = require('./src/comments')

const typeDefs = gql
` 
  type Post {
    id: ID!
    user: String!
    topic: String!
    body: String!
    comment: String!
  }

  type User {
    id: ID!
    name: String
    email: String
  }

  type Comment {
    id: ID!
    user: String!
    responses: String
    post: String 
  }

  type Query {
    post: [Post]
    postbyID(id: ID!): Post
    postByTopic(topic: String!): Post
  }

  type Mutation {
      createPost(id: ID!, topic: String!, body: String!, user: String!, comment:String!) : Post!,
      writeComment(id: ID!, user: String!, body: String!, responses: String!, post: String!): String
 }

  `

const resolvers = {
    Query: {
        post: () => post,
        postbyID: (_, { id }) => {
            const posts = post.find(b => b.id == id)
            return posts
          },
        postByTopic: (_, { topic }) => {
            const postsByTopic = post.find(b => b.topic == topic)
            return postsByTopic
          }
        
    },

    Mutation: {
        createPost: (_, { id, topic, user, body, comment }) => {
            const addpost = { id, topic, user, body, comment }
            post.push(addpost)
            return addpost
        },

        writeComment: (_, {id, user, body, responses, post}) => {
            const writeComment = (id, {user: user, body: body, responses: responses, post: post})
            comment.push(writeComment)
            return writeComment
        }
        
    }
  }

  
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});