# PROJECT NAME
The Mixologist’s Cookbook
>**PROJECT DESCRIPTION:** 
The Mixologist’s Cookbook is an application where users will be able to find a recipe for any cocktail available in TheCocktailDB API. It will also be a place where they can store their favorite cocktails they have had, and search for a cocktail based on the ingredients they have. There will also be an option to choose a random cocktail if the user does not know what to make

## Technologies Used
FrontEnd
  Angular 12
    HTTP Requests
    fetch()
    Observables
    NGX-Bootstrap
    TheCocktailDB API
    MVC design pattern

  BackEnd
    GCP PostgreSQL
    Hibernate
    Javalin
    Log4j
    JUnit
    RESTful architecture


## Features
List of features ready and TODOs for future development
    Refactor the backend to use Spring Framework
    Add functionality to incorporate more of CocktailDB API
    Bring reviews functionality to front end
    Link users if they want to be “friends”
    Edit user profile
    Give users statuses
    Allow users to upload their own recipes / twists
## Getting Started

git clone command
  git clone https://github.com/MesfinMT/P2.git

environment setup steps
  Import the cloned backend spring project as Gradle project
  
  Run the project as java project (the application only works on GCP, unless you modified the database configuration file)
  
  The database is on GCP If you want to modify the database to be locally, modify the URL in hibernate.cfg.xml file to be localhost instead of GCP IP address.

what it should look like
Layout
![Layout1](https://user-images.githubusercontent.com/44088080/139850686-cd91cf9a-138e-4163-ba4f-af7bdbf26378.png)
![Layout3](https://user-images.githubusercontent.com/44088080/139851271-691bedcb-cfdb-49ab-9c9f-7dcf68f0801a.png)
![Layout2](https://user-images.githubusercontent.com/44088080/139851247-e74f992e-445c-4f16-b750-06bbadc8c526.png)

## Usage
Login using username:username and password:password
Then follow the above layout images to search and choose your favorite drinks
## Contributors
Andreas Kustas, Freddie Tadeolomelin, Mesfin Tabor, Djetry Joseph, Evan Coye
## License
None
