import React, { Component } from 'react';

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
        console.log(this.state);
        this.setState({
            name:'',
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

              <div className="App-contact">
              <div className="mail-address">
              
            <i> Address: </i>
            
              <div>                  T-25,602</div>
              <div>                  Paras Tierea</div>
              <div>                  Sector-137</div>
              <div>                  Noida </div>
              <div>                  Uttar Pradesh</div>
              <div>                  India - 201301</div>
            
                <i>Mobile: </i>
                 <div>                +91-8821993997</div>

                 <i>Email: </i>
                 <div>                k.niteshranjan@gmail.com</div>
             
               
              </div>

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
             
            
        );
    }
} 

export default Contact;