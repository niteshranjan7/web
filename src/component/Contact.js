import React, { Component } from 'react';

class Contact extends Component {
    state = {
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
        console.log(this.state);
        this.setState({
            email:'',
            subject:'',
            content:'',
        })
    };

    render() {
        return (
            <div>
               <div className="contact-header">
                   <h2> Contact </h2>
               </div> 
              <form className="App-contact">
                <div className="contact-email"> Email:   
                   <input
                      type="email"
                      name="email"
                      size="30"
                      placeholder="Email" 
                      
                      value={this.state.email} 
         //   onChange={e => this.setState({ email: e.target.value})}/>
                      onChange={this.change}/>
               </div>
               <div className="contact-subject">
                    <input 
                       name="subject"
                       placeholder="Subject" 
                       value={this.state.subject} 
         //   onChange={e => this.setState({ subject: e.target.value})}/>
                       onChange={this.change}/>
               </div>
               <div className ="contact-button">
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
               </div>
               <div className="contact-content">
                    <input 
                       name="content"
                       placeholder="Content" 
                       value={this.state.content} 
         //   onChange={e => this.setState({ content: e.target.value})}/>
                       onChange={this.change}/>
               </div>
             </form>
             </div>
            
        );
    }
} 

export default Contact;