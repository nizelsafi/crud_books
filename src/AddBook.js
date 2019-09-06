import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
  
class AddBook extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      id: '',  
      isbn: '',  
      book_name: '',  
      price: '',  
      availability: '',  
      author: '', 
    }  
  
    if (props.book.id) {  
      this.state = props.book  
    } else {  
      this.state = this.initialState;  
    }  
  
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  
  }  
  


  handleChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    })  
  }  
  
  handleSubmit(event) {  
    event.preventDefault(); 
    this.props.onFormSubmit(this.state);  
    this.setState(this.initialState);  
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.id) {  
  
      pageTitle = <h2>Edit Book</h2>  
      actionStatus = <b>Update</b> 
    } else {  
      pageTitle = <h4>Add Book</h4>  
      actionStatus = <b>Save</b>  
    }  
  
    return (  
      <div>        
        <h1> {pageTitle}</h1>  
        <Row>  
          <Col sm={7}>  
            <Form onSubmit={this.handleSubmit}>  
              <Form.Group controlId="isbn">  
                <Form.Label>isbn</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="isbn"  
                  value={this.state.isbn}  
                  onChange={this.handleChange}  
                  placeholder="isbn" />  
              </Form.Group>  
              <Form.Group controlId="book_name">  
                <Form.Label>Book Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="book_name"  
                  value={this.state.book_name}  
                  onChange={this.handleChange}  
                  placeholder="book name" />  
              </Form.Group>  
              <Form.Group controlId="price">  
                <Form.Label>price</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="price"  
                  value={this.state.price}  
                  onChange={this.handleChange}  
                  placeholder="price" />  
              </Form.Group>  
              <Form.Group controlId="availability">  
                <Form.Label>availability</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="availability"  
                  value={this.state.availability}  
                  onChange={this.handleChange}  
                  placeholder="availability" />  
              </Form.Group>  
              <Form.Group controlId="author">  
                <Form.Label>author</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="author"  
                  value={this.state.author}  
                  onChange={this.handleChange}  
                  placeholder="author" />  
              </Form.Group>   
              <Form.Group>  
                <Form.Control type="hidden" name="id" value={this.state.id} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
  
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddBook;