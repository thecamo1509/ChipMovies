# Welcome to ChipMovies!

Hi! this project is the interactive solution to the **Chiper-Inc** Technical Interview. ChipMovies is the solution to the SF movies challenge. The Objective of the challenge was to fetch data from an external API and set an app that renders Let's take a quick look at it:

![enter image description here](https://i.ibb.co/23Xqzd7/Group-1-2.png)

The project is composed in two parts:
 - **Backend** in the branch " **backend** " 
 -  **Frontend** in the branch "**frontend**"
# Frontend

For the Frontend I decided to use React Js in order to create a modern and scalable app that allowed to modify specific components and features without pain. In order to extend React functionalities I decided to install the following packages:

- React-Router 
- Styled Components  
- React-icons-kit  
- react-tabs  
- React-googl-maps/api  
- Material Ui  
- Apollo  
- React-Scroll-to  
- Axios

I also used some third party API's such as Google Maps API and GeoCode API. 

# Backend

The Backend is located in the current repo in the branch " **backend** " structured in two phases:
- Fetching the initial Data from the [SF Movies API](https://data.sfgov.org/resource/yitu-d5am.json)
- Parsing the data
- Creating the GraphQL Api 
- Mapping the necessary data to the DataBase.

## Technologies Used

- Sequalized ORM
- GraphQL
- Apollo Server

The Data looks initially like this: 

    [
	    {
        "title": "180",
        "release_year": "2011",
        "locations": "555 Market St.",
        "production_company": "SPI Cinemas",
        "director": "Jayendra",
        "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba",
        "actor_1": "Siddarth",
        "actor_2": "Nithya Menon",
        "actor_3": "Priya Anand"
	    }, ...
    ]
However the only attributes I needed to generate the map markers are the title and the location where the movie is being presented. For that reason I created a node.js that parses this data and turns it into something like this:

    [
	    {
        "title": "180",
        "locations": "555 Market St."
	    }, ...
    ]
Now I have the data I need to feed the database. 

## GraphQL API

My Custom API's url is [https://chipmovies.herokuapp.com/](https://chipmovies.herokuapp.com/) and it allows:

- **Queries**: The queries included in this API allow to get all the Movies with the following query structure:
	- allMovies: Get all Movies from the database
	- movie: Get the movie object depending on the ID
- **Mutation**: The mutations included:
	- createMovie: Creates a new movie from the title and location attributes

# Set Up your Project

1- Git Clone the Repo
2- Run `npm install` to install the required packages
3- Run `npm start` to run the project in your localhost
4- Your browser will be popped up on localhost:3000

# How it Works

In order to use the service it is simple, just go to the [project url.](https://chipmovie.herokuapp.com/)

You will see something like this:

![enter image description here](https://i.ibb.co/k4ZBHZq/Whats-App-Image-2020-06-28-at-3-57-22-PM.jpg)

The button will lead the user to the main functionality which is the movie filtering and location on the map:

Just type the movie you want to select and the select the autocomplete input.  this way:
![enter image description here](https://i.ibb.co/GcfBzPH/Whats-App-Image-2020-06-28-at-5-54-18-PM.jpg)
And then click Search.
This will generate different markers on the addresses where the movies are presented in SanFrancisco. Click on the any marker to see the address where it is going to be shown.

![enter image description here](https://i.ibb.co/Df4fK3x/Whats-App-Image-2020-06-28-at-5-55-08-PM-1.jpg)

### And That's it!
