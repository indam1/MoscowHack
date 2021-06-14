/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      snils
      about
      phone
      website
      email
      competence
      company
      position
      startDateWork
      endDateWork
      responsibilities
      studyPlace
      specialization
      degree
      startDateStudy
      endDateStudy
      project
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        snils
        about
        phone
        website
        email
        competence
        company
        position
        startDateWork
        endDateWork
        responsibilities
        studyPlace
        specialization
        degree
        startDateStudy
        endDateStudy
        project
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      branch
      author
      name
      imageUri
      FIO
      phone
      email
      team
      description
      advantage
      stage
      intellect
      problem
      marketUsage
      consumers
      competitors
      launchDate
      experience
      resources
      currentState
      model
      plan
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        branch
        author
        name
        imageUri
        FIO
        phone
        email
        team
        description
        advantage
        stage
        intellect
        problem
        marketUsage
        consumers
        competitors
        launchDate
        experience
        resources
        currentState
        model
        plan
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
