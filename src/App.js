import React, { Component } from 'react';  
  
import { Container, Button } from 'react-bootstrap';  
import BookList from './BookList';  
import AddBook from './AddBook';  
import axios from 'axios';  
  
class App extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddBook: false,  
      error: null,  
      response: {},  
      bookData: {},  
      isEditBook: false,  
    }  

      
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddBook: true });  
  }  
   
  
  onFormSubmit(data) {  
    this.setState({ isAddBook: true });  
    let body = {
      book : {
        isbn: data.isbn,  
        book_name: data.book_name,  
        price: data.price,  
        availability: data.availability,  
        author: data.author, 
      }
  }

    if (this.state.isEditBook) {  
     axios.put(`http://localhost:4080/book/${data.id}`, body).then(result => {  
      alert(result.data.message);  
        this.setState({  
          response:result,    
          isAddBook: false,  
          isEditBook: false,
        })  
      });  
    } else {
      axios.post('http://localhost:4080/book', body).then(result => {  
        alert(result.data.message);  
          this.setState({  
            response:result,    
            isAddBook: false,  
            isEditBook: false  
          })  
        });
    }
    
  }  
  
  editBook = bookId => {    
   axios.get("http://localhost:4080/book/" + bookId).then(result => {  
  
        this.setState({  
          isEditBook: true,  
          isAddBook: true,  
          bookData: result.data.data
                     
        });  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )       
  }  
  
  render() {  
    
    let bookForm;  
    if (this.state.isAddBook || this.state.isEditBook) {    
      bookForm = <AddBook onFormSubmit={this.onFormSubmit} book={this.state.bookData} />  
    }  
    return (  
      <div className="App">  
 <Container>  
        <h1 style={{ textAlign: 'center' }}>CURD operation in React</h1>  
        <hr></hr>  
        {!this.state.isAddBook && <Button variant="primary" onClick={() => this.onCreate()}>Add Book</Button>}  
        <br></br>  
        {!this.state.isAddBook && <BookList editBook={this.editBook} />}  
        {bookForm}  
        </Container>  
      </div>  
    );  
  }  
}  
export default App;  