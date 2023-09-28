# Movie Review App

Use the [OMDB API](https://www.omdbapi.com/) find and review movies!

* Register for an [API Key](https://www.omdbapi.com/apikey.aspx) (There is a free version, limited to 1000 requests/day)
* Test out the URL in Postman, examine the JSON object you get as a response

## Goals

* Accept user input via a form that recieves a movie title.
* Search for that user via the Github Users API endpoint: `http://www.omdbapi.com/?t=[some movie title]&apikey=[your api key]`
* Return that movies's information.
  * Include the poster, title, year, plot, and ratings
* Allow a user to list multiple movies

## Movie Lookup Guidelines

* Load the lookup form in its own component
* Clear the form's state after each search
* Pass the movie information into its own component via `props`
* load the movie information component inside the form component
* Load the form component in `App.jsx`

## UI

* Render the movie information using "card" layout [Example](https://uxplanet.org/using-card-based-design-to-enhance-ux-51f965ab70cb)
* Append new movie cards with each search.

## Level Up

* Create a second form to submit your _own_ review for each movie
* Have your review display _below_ the ratings returned from OMDB

### Tips

* You probably want to have the form appear in each movie's card component
* You'll save your reviews in the `state` for each card

## It's Over 9000

* Try to use React's Context API to globally store the movie and review information
* Can you have a single form to submit any review, but make sure that the review shows up with the correct movie? 🤔
