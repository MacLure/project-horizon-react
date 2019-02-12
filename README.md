# Horizon - Client

> Front end client for the Horizon web app.

<p align="center">
  <img src="src//assets/horizon_text2.svg" />
</p>

Horizon is a student outcomes and success app designed for schools.

## Table of contents

- [Screenshots](#screenshots)
- [Motivation](#motivation)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Developer team](#developer-team)

## Screenshots

Your school's outcomes and student success portal with everything you need to track assignments, events, and teacher comments - all in one place!


Students:  Access your assignments, upcoming events, and view feedback on your own personal dashboard.

## Motivation

We wanted to make an app for schools to manage their outcomes and student success programs, and for students to easily view and submit career-related assignments ans events.

## Take a Tour :rocket:

### [Live App](https://project-horizon-react.herokuapp.com/)

#### login credentials:
##### Admin login:
:bust_in_silhouette: `sally.mcadmin@horizon.com`
:key: `password`

##### Student login:
:bust_in_silhouette: `clara.ostudent@okboom.com`
:key: `"password"`

## Run Horizon Locally:

1. Clone the [horizon_server](https://github.com/MacLure/project-horizon-rails) repo.
2. Run migrations and seeds:
```
rails db:migrate
rails db:seed
```
3. Clone this repository
4. Download dependencies:
```
npm install
```
5. Start a server:
```
cd project-horizon-react
npm start
```

## Tech Stack

### Front-end

- [React](https://reactjs.org//)
- [Redux](https://redux.js.org/)

### Back-end: [horizon_server](https://github.com/MacLure/project-horizon-rails)

## Developer team

- Malcolm MacLure - [GitHub](https://github.com/MacLure) - [LinkedIn](https://www.linkedin.com/in/malcolmmaclure/)
- Benjamin Hoppe - [GitHub](https://github.com/BenjaminHoppe) - [LinkedIn](https://www.linkedin.com/in/mrbenjaminhoppe/)
- Gabriela Cuello - [GitHub](https://github.com/gabaza) - [LinkedIn](https://www.linkedin.com/in/gabriela-roa-411058176/)
