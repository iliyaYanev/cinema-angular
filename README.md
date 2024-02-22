# Soft Cinema
 
### An Angular application listing all the recent movies  and tv shows available.

**Short info and functionalities:**

Components:
* **auth**
  * **login**  - the login page for the user
  * **register** - the registration page for the user
* **item** - contains a movie/tv show information 
* **items banner** - a component which contains all items that need to be displayed on the page
* **slider** - a component which would dynamically switch different movies on the home page
* **videos** - a component which helps to embed videos on the details pages
* **movies** - lists all movies, component also contains searching and pagination also suggests similar movies to the user.
* **movie details** - list details for the corresponding movie, also includes a carousel with the movies actors, also contains videos, trailers and pictures about the movie.
* **genres** - lists all movie and tv show genres and allows the user to filter movies and tv shows only for a specific genre.
* **tv shows** - lists all tv shows, component also contains searching and pagination also suggests similar tv shows to the user.
* **tv show details** - list details for the corresponding tv show

Shared components between pages:
* **header** - a shared header between all pages, dynamically changed depending on if a user is logged in.
* **footer** - a shared footer between all pages.

Guards:
* **auth guard** - guest users will only have access to the login, register and home pages, the other pages require a logger in user.

Services: 
* **movies** - responsible for making all api calls related to movies.
* tv **shows** - responsible for making all api calls related to tv shows.

**Technologies used:**

Angular 15, RxJS, ExpressJS, PrimeNG

**Try it out:**

To start the project first you would need to:
1. Start the BE in the server folder by running `cd server && npm start`
2. Start the Angular app by running `ng serve`

##### I hope you like it!

![alt text](https://github.com/iliyaYanev/soft-cinema/blob/master/img.png?raw=true)

