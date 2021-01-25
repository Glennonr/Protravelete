import React from 'react';
import './App.css';
import {Buttons} from './components/Buttons';


function App() {
  return(
    <div className="App">
      <div class = "background">
        <div class ="welcome">
          <a href=""><img src="https://iili.io/2nJ52n.md.png" alt="2nJ52n.md.png" id="logo"/></a>
        </div>
        <div id="spacer"></div>
        <div id="buttons">
          <Buttons/>
        </div>
        <div class= "about background">
          <br/><br/><br/><br/>
          <hr/>          <hr/>
          <hr/>
            <img src="https://i.ibb.co/qjzyH1J/Scroll-copy.jpg" alt="Group Runners" max-height="100%" max-width="100%"/>
          <h1>About:</h1>
          
          <p>Have you ever been out of town somewhere new and not known where to run? 
            Have you ever wished when you knew when groups were running in the area? 
            then you've come to the right place.
            ProTravelete works to connect like-minded athletes to make running on the go easier. 
            Nobody knows running path and the places to be better than the people who run them daily, 
            so why was there no easy way to connect with one of them?<br/></p>
            {/* <div width='10' height='10'>
            <img src = 'https://discoveries.childrenshospital.org/wp-content/uploads/2020/03/Running.jpeg'  id = 'hp'/>
            </div> */}
            <h1>How it Works:</h1>
            <p>if you are a runner and want to put your name on the list of events for others to join, 
            click the 'Sign Up an Athlete' button. 
            <br/>If you want to create a group run event, click the 'Create an Event' button. 
            <br/>
            If you would just like to view the upcoming events in the area and the contact information for the owner of the event, click view all events. 
            <br/>
            Happy running!</p>
            <br/>
            <br/>
            <div class='footer'>
              <p class='redText'>Proof of concept by Richie Glennon</p>
            </div>
        </div>
      </div>
      
    </div> 
      );
}

export default App;
