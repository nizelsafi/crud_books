# crud_books

## How to run the app?
- Setup the database
    - install MySQL: 
        https://dev.mysql.com/downloads/windows/installer/8.0.html
    - create database with name "crud_books"
    - create a table named "book 1" with this query:
                CREATE TABLE `crud_books`.`book1` (
                    `id` INT NOT NULL AUTO_INCREMENT,
                    `isbn` INT NOT NULL,
                    `book_name` VARCHAR(45) NOT NULL,
                    `price` INT NOT NULL,
                    `availability` INT NOT NULL,
                    `author` VARCHAR(45) NOT NULL,
                    PRIMARY KEY (`id`));

- Run `npm install` to install required dependencies.
- Run `npm start` to run the reactjs app
- Start the crud_books backend
  - `cd backend` to enter into the backend folder
  - Run `npm install` to install required dependencies.
  - `nodemon server` to start the nodemon server




