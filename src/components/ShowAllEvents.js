import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

export default class ShowAllEvents extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://cors-anywhere.herokuapp.com/https://protravelete-api.herokuapp.com/getAllEvents')
    console.log(res.data)
    this.setState({loading:false, events: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'Name',  
      accessor: 'name' ,
      }
     
     ,{  
     Header: 'Date',  
     accessor: 'date' ,
     }

     ,{  
      Header: 'Location',  
      accessor: 'location' ,
      }

     ,{  
     Header: 'Distance',  
     accessor: 'distance',
     }

     ,{  
      Header: 'Pace',  
      accessor: 'pace',
     }

     ,{  
      Header: 'Time',  
      accessor: 'time',
     },


     {  
      Header: 'Email',  
      accessor: 'email',
      minWidth: 200,
      Cell: (row) => {
        return <a href={`mailto:${row.original.email}?subject=Protravelete%20Running%20Buddy&body=Hi%20I%20clicked%20your%20event%20on%20Protravelete.com%20and%20would%20love%20to%20go%20run%20with%20you!%20`} target="_blank">{row.original.email}</a>
      }}

  ]
  
    return (
      <ReactTable  
      data={this.state.events}  
      columns={columns}  
   />
    )
  }
}