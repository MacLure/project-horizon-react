# Horizon - Client

> Front end client for the Horizon web app.

<p align="center">
  <img src="https://github.com/MacLure/project-horizon-react/blob/master/src/assets/img/logo-orange.png" />
</p>

Horizon is a student outcomes and success app designed for schools.

## Table of contents

<!-- - [Screenshots](#screenshots) -->
- [Motivation](#motivation)
- [Getting started](#getting-started)
- [Take a Tour](#take-a-tour)
- [Run Horizon Locally](#run-horizon-locally)
- [Tech Stack](#tech-stack)
- [Developer team](#developer-team)

<!-- ## Screenshots

Your school's outcomes and student success portal with everything you need to track assignments, events, and teacher comments - all in one place.


Students:  Access your assignments, upcoming events, and view feedback on your own personal dashboard. -->

## Motivation

We wanted to make an app for schools to manage their outcomes and student success programs, and for students to easily view and submit career-related assignments ans events.

## Take a Tour :rocket:

### [Live App](https://project-horizon-react.herokuapp.com/)

## Run Horizon Locally:

1. Clone this repository 
2. In the repository's directory, download dependencies:
```
npm install
```
3. Clone the [Horizon server](https://github.com/MacLure/project-horizon-rails) repository
4. In the server repository's directory, install gems:
```
bundle install
```
5. In the server repository's directory, run migrations and seeds:
```
rails db:migrate
rails db:seed
```
6. Start servers in each directory:
- In the server directory:
```
rails server
```
- In the client directory:
```
npm start
```

## Tech Stack

### Front-end:

- [React](https://reactjs.org//)
- [Redux](https://redux.js.org/)

### Back-end: [horizon_server](https://github.com/MacLure/project-horizon-rails)

## Developer team

- Malcolm MacLure - [Website](http://malcolmmaclure.com/) - [GitHub](https://github.com/MacLure) - [LinkedIn](https://www.linkedin.com/in/malcolmmaclure/)
- Benjamin Hoppe - [Website](https://benjaminhoppe.co/) - [GitHub](https://github.com/BenjaminHoppe) - [LinkedIn](https://www.linkedin.com/in/mrbenjaminhoppe/)
- Gabriela Cuello - [GitHub](https://github.com/gabaza) - [LinkedIn](https://www.linkedin.com/in/gabriela-roa-411058176/)
