import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Address from "./Address";
import axios from 'axios';

class Contact extends Component {
    state = {
        name:'',
        email:'',
        subject:'',
        content:'',
    };

    // Create own change function
    change = (e) =>{
        this.setState({
            [e.target.name]:[e.target.value]
        })   
    }
    // default behaviour of form tag update URL after submit i.e. why we pass e event 
    onSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        console.log(this.state);
        console.table(this.state);

        //Axios connection frontend-backend
        const newform={
            name:this.state.name,
            email:this.state.email,
            subject:this.state.subject,
            content:this.state.content,
        };

        axios.post('http://localhost:4000/todos/add', newform)
                .then(res=>console.log(res.data));
        this.setState({
            name:'',
            email:'',
            subject:'',
            content:'',
        })
    };

    render() {
        return (
            <ScrollableAnchor id={'App-contact'}>
            <div className="App-contact">
               <div className="contact-header">
                   <h2> Contact </h2>
               </div> 
              <div className="App-body">
             <Address />
                <div className="column2">
                <div className="contact-name"> Name:           
                   <input
                      name="name"
                      size="40"
                      placeholder="Name" 
                      
                      value={this.state.name} 
         //   onChange={e => this.setState({ name: e.target.value})}/>
                      onChange={this.change}/>
               </div>
                <div className="contact-email"> Email:           
                   <input
                      type="email"
                      name="email"
                      size="40"
                      placeholder="Email" 
                      
                      value={this.state.email} 
         //   onChange={e => this.setState({ email: e.target.value})}/>
                      onChange={this.change}/>
               </div>
               <div className="contact-subject"> Subject: 
                    <input 
                       name="subject"
                       placeholder="Subject" 
                       size="40"
                       value={this.state.subject} 
         //   onChange={e => this.setState({ subject: e.target.value})}/>
                       onChange={this.change}/>
               </div>
               <div className ="contact-button">
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
               </div>
               </div>
               <div className="contact-content">Message:
                    <textarea rows="10" columns="50"
                       name="content"
                       
                       placeholder="Content" 
                       value={this.state.content} 
         //   onChange={e => this.setState({ content: e.target.value})}/>
                       onChange={this.change}/>
               </div>
             </div>
             </div>
             </ScrollableAnchor>  
        );
    }
} 

export default Contact;