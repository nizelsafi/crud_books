const express = require('express');
var bodyParser = require('body-parser');

const mysql = require('mysql');


const app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'useruser',
    database: 'crud_books'
});

connection.connect(function(err){
    (err)? console.log(err): console.log('connection to mysql');
});


// Get all books 
app.get('/books', function (req, res) {
    connection.query('SELECT * FROM book1', function (error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});


// Add a new book  
app.post('/book', function (req, res) {
    let book = req.body.book;
    if (!book) {
      return res.status(400).send({ error:true, message: 'Please provide book' });
    }
    connection.query("INSERT INTO book1 (isbn, book_name, price, availability, author) values(?,?,?,?,?)", [book.isbn, book.book_name, book.price, book.availability, book.author], function (error, results, fields) {
        if (error) throw error;
    return res.send({ error: false, data: results, message: 'New book has been created successfully.' });
    });
});

 
// Get book with id 
app.get('/book/:id', function (req, res) {
    let book_id = req.params.id;
    if (!book_id) {
     return res.status(400).send({ error: true, message: 'Please provide book_id' });
    }
    connection.query('SELECT * FROM book1 where id=?', book_id, function (error, results, fields) {
     if (error) throw error;
      return res.send({ error: false, data: results[0], message: 'Get book with id.' });
    });
});

//  Update book with id
app.put('/book/:id', function (req, res) {
    let book_id = req.params.id;
    let book = req.body.book;
    if (!book_id || !book) {
      return res.status(400).send({ error: book, message: 'Please provide book and book_id' });
    }
    connection.query("UPDATE book1 SET isbn = ?, book_name=?,price= ?,availability= ?,author= ? WHERE id = ?", [book.isbn, book.book_name, book.price, book.availability, book.author, book_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'book has been updated successfully.' });
     });
    });
    
//  Delete book
app.delete('/book/:id', function (req, res) {
    let book_id = req.params.id;
    if (!book_id) {
        return res.status(400).send({ error: true, message: 'Please provide book_id' });
    }
    connection.query('DELETE FROM book1 WHERE id = ?', [book_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'book has been deleted successfully.' });
    });
    }); 

    
const port = process.env.PORT || 4080;
//start server
app.listen(port, () => {
  console.log('start server crud_books: Connected to port ' + port)
})