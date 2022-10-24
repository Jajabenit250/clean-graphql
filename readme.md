# Full-Stack / Backend homework (TypeScript, GraphQL)

Welcome to the Digication work sample for Full-Stack developers (TypeScript, GraphQL, React)! This is our way to get
some experience working with you and to gauge your skill in using TypeScript, GraphQL and databases. There is no
official time-limit for this exercise, but you should finish it within a week. We encourage you to take the time you
need in order to **provide quality work that best reflects your skills**.

# Architecture

I have refactored the project to Use Clean Architecture to separate concerns and provide room for my application to grow, maintainable and support robust implementations by following The Dependency Rule which state that that source code dependencies can only point inwards. which Means in Clean Architecture **Entities** Depends on UseCases, **UseCases** Depends on Interface Adapters  (Controllers or Resolvers in GraphQl), and **Interface Adapters** depends on Framework which is apollo server

# Folder Structure

- App folder ( Represents or containsRelationships the Use Cases of My Application)
- Domain folder ( Represents or contains the Entities of my Application)
- Infra folder ( Represents or contains the Interface Adapters of my application such us database and graphql Resolvers)
- Main folder ( Represents or contains Framework configurations)

# Installation & Available Scripts

installation

### `yarn`

### `yarn audit`

Migrate database

### `yarn db:migrate`

Run Tests

### `yarn test`

Start the Development Server

### `yarn dev`

# Context & Portfolio Versioning Options

a portfolio can keep only one version of a set of pages. We would like to extend the service, so a portfolio can support many
versions of a set of pages.
to handle this issue i thought of 3 ways of doing it.

1. User Can Create Portfolio Versions for a certain Portfolio and assign Version on a page
    this approach gives user flexibility to create as many versions as he wants and set rules to each versions plus meaningful relationships between table each portfolio have unique versions. the problems that this approach my bring is the processing time to fetch Pages that belongs to a certain Portfolio and queries are a bit complicated.

    **Relationships**
    A `Portfolio` can have a set of many `Portfolio Version`.
    One `Portfolio Version` must belong to exactly one `Portfolio`.
    A `Portfolio Version` can have a set of many `Pages`.
    One `Page` must belong to exactly one `Portfolio Version`.

2. User Can Create a Portfolio and Create a Portfolio Version and assign Portfolio and Portfolio  
    Version to a page this approach give system and user flexibility to assign Portfolio versions to work on multiple Portfolio and fetching portfolio pages and their versions is fast. problems might occur when i want to fetch portfolio versions of a certain portfolio.

    **Relationships**

    A `Portfolio` can have a set of many `Pages`.
    A `Portfolio Version` can have a set of many `Pages`.
    One `Page` must belong to exactly one `Portfolio` and to exact one `Portfolio Version`.

**Versioning of Pages Choice** since my focus is on Pages Versioning I have used choice  **2**

    A `Portfolio` can have a set of many `Pages`.
    A `Portfolio Version` can have a set of many `Pages`.
    One `Page` must belong to exactly one `Portfolio` and to exact one `Portfolio Version`.

**Versioning of Pages Choice** since my focus is on Pages Versioning I have used choice  **2**
