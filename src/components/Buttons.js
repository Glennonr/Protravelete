import React from 'react';
import SignUp from './SignUp';
import CreateEvent from './CreateEvent'; 
import ShowAllEvents from './ShowAllEvents'; 




export class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.state = {showSignUp: false, showCreateEvent: false, showShowAllevents: false,
    showSignUpButton: true, showCreateEventButton: true, showAllEventsButton: true, showExitButton: false}

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
    this.handleShowAllEvents = this.handleShowAllEvents.bind(this);
    this.handleExit = this.handleExit.bind(this);



  }

    handleSignUp(e) {
    e.preventDefault();
    // alert('showing sign up');
    this.setState(state => ({
      showSignUp: true, showCreateEvent: false, showShowAllevents: false, 
      showSignUpButton: false, showCreateEventButton: true, showAllEventsButton: true, showExitButton: true
    }));
    }

    handleCreateEvent(e) {
      // alert('showing create event');
      this.setState(state => ({
        showSignUp: false, showCreateEvent: true, showShowAllevents: false, 
        showCreateEventButton: false, showSignUpButton: true, showAllEventsButton: true, showExitButton: true
      }));
    };
  
    handleShowAllEvents() {
      // alert('showing all events');
      this.setState(state => ({
        showSignUp: false, showCreateEvent: false, showShowAllevents: true, 
        showAllEventsButton: false, showCreateEventButton: true, showSignUpButton: true, showExitButton: true
      }));
    };

    handleExit(e) {
      e.preventDefault();
      // alert('showing sign up');
      this.setState(state => ({
        showSignUp: false, showCreateEvent: false, showShowAllevents: false, 
        showSignUpButton: true, showCreateEventButton: true, showAllEventsButton: true, showExitButton: false
      }));
      }



    render(){
    return(
        <div>
          {this.state.showSignUp ? <SignUp/> : ''}
          {this.state.showCreateEvent? <CreateEvent/> : ''}
          {this.state.showShowAllevents ? <ShowAllEvents/>: ''}


          {this.state.showSignUpButton ? 
          <button id="button1" onClick = {this.handleSignUp} >Sign up an Athlete</button>: ''}

          {this.state.showCreateEventButton ? 
            <button id="button2" onClick = {this.handleCreateEvent}>Create an Event</button>: ''}

          {this.state.showAllEventsButton ? 
            <button id="button3" onClick = {this.handleShowAllEvents}>View all Events</button>: ''}

          {this.state.showExitButton ? 
            <button id="button4" onClick = {this.handleExit} >Exit</button>: ''}




      </div>

    )}
}