import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table} from 'react-bootstrap';



    class BookList extends Component {
      constructor(props) {
        super(props);
        this.state = {
          emps: [],
        }  
        
      }
    
    getBooks() {
      axios.get('http://localhost:4080/books')
      .then(res => {
        const emps = res.data;
        this.setState({ emps });
        console.log(res.data);
          })
    }    
    
    componentDidMount() {
        this.getBooks();
    }

    delete(bookId) {  
      const { emps } = this.state;     
     axios.delete('http://localhost:4080/book/' + bookId).then(result=>{  
       alert(result.data.message);  
        this.setState({  
          response:result,  
          emps:emps.filter(book=>book.id !== bookId)  
        });  
      });  
    }

    render(){         
      const{error,emps}=this.state;  
      if(error){  
          return(  
              <div>Error:{error.message}</div>  
          )  
      }  
      else  
      {  
          return(  
       <div>  
                    
                <Table>  
                  <thead className="btn-primary">  
                    <tr>  
                      <th>isbn</th>  
                      <th>Name</th>  
                      <th>price</th>  
                      <th>availability</th>  
                      <th>author</th>  
                      <th>Action</th>  
                    </tr>  
                  </thead>  
                  <tbody>  
                    {emps.map(emp => (  
                      <tr key={emp.id}>  
                        <td>{emp.isbn}</td>  
                        <td>{emp.book_name}</td>  
                        <td>{emp.price}</td>  
                        <td>{emp.availability}</td>  
                        <td>{emp.author}</td>   
                        <td><Button variant="info" onClick={() => this.props.editBook(emp.id)}>Edit</Button>       
                        <Button variant="danger" onClick={() => this.delete(emp.id)}>Delete</Button>  
                        
                        </td>  
                      </tr>  
                    ))}  
                  </tbody>  
                </Table>  
              </div>
            )  
      }  
  }  
}  

    export default BookList;