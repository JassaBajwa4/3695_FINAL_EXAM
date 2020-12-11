# 3695_FINAL_EXAM
#NAME - JASBIR SINGH
#STUDENT ID - A01086374

1).  Instructions for running your API server

 simply run "npm install" and then "node index.js" in the given folder
 
2).  Sample queries and mutations

Get a post by id

query{
  postbyID(id: "P1"){
    topic
    user
    body
  }
}

Get a post by topic

query{
  postByTopic(topic: "Art"){
    id
    user
    body
  }
}


Mutation for creating a post
 
 mutation{
  createPost(
    id: "69",
    topic: "Art",
    user: "Mia",
    body: "I love art",
    comment: "how artistic !"
  )
  {
  id
  topic
  user
  body
  comment
}

}

note: Since user and comments were types on their own and it was difficult to relate them in queries and mutations, therefore I simply used strings instead of an array.

