# Marvel Explorer (inclass demo)

## How to Run

  - `cd` into project 
  - `yarn install`
  - `yarn start`

## Learning Objectives
  
  - Compose JSX
  - Understand React components
  - Understand React props
  - Understand React state
  - Practice "lifting" state and interrogate the question of state "ownership"

## App requirements

  - As a Marvel fan, I want to view a list of the most recently updated Marvel characters. 
  - As a Marvel fan, I want to click a character's name and see that character's thumbnail image in a lightbox centered on the page.
  - When I click a different character's name, that character's thumbnail should replace the previous one in that centered lightbox.

## Notes to Instructor

  - It's not ideal to have that lightbox live within the CharacterItem component, but it serves the purpose of the exercise. 
  - The Marvel API needs to be accessed from a server-side app, so I set up a proxy [here](https://marvel-proxy.herokuapp.com/api/characters).
