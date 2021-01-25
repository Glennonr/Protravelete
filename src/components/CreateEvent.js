import React from "react";

export default function App() {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [targetDistance, settargetDistance] = React.useState("");
  const [targetPace, settargetPace] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Name: ${name}
      Date: ${date}
      Time: ${time}
      TargetDistance: ${targetDistance}
      TargetPace: ${targetPace}
      Email: ${email}
      Password: ${password}
      Accepted Terms: ${acceptedTerms}
    `);

    var newLine = "\r\n";
    alert('Name: ' + name + newLine + 'Distance: ' + 
    targetDistance + newLine + 'Pace: ' + targetPace + 
    newLine + 'Email: ' + email + newLine +
    'Date: ' + date + newLine + 'Time: ' + time);


    fetch("https://protravelete-api.herokuapp.com/postEvent/"+name+"/"+date+"/"+time+"/"+email+"/"+targetDistance+"/"+targetPace+"/"+location, 
    {method: "post",
})
.then(res => res.json())
.catch(error => console.error('error:', error))



    


    // event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Event</h1>

      <label>
        Name:
        <input
          name="Name"
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </label>

      <label>
        Date:
        <input
          name="Date"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required />
      </label>


      <label>
        Time:
        <input
          name="Time"
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          required />
      </label>

      <label>
        Target Distance:
        <input
          name="targetDistance"
          type="targetDistance"
          value={targetDistance}
          onChange={e => settargetDistance(e.target.value)}
          required />
      </label>

      <label>
        Target Pace:
        <input
          name="targetPace"
          type="targetPace"
          value={targetPace}
          onChange={e => settargetPace(e.target.value)}
          required />
      </label>


      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      {/* <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label> */}


      <label>
        Location:
        <input
          name="Location"
          type="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required />
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button>Submit</button>
    </form>
  );
}