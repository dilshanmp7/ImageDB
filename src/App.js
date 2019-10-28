import React, { Component } from 'react';
import './App.css';
import ImageRow from './ImageRow.js'
import $ from 'jquery'


class App extends Component {
  constructor(props){
        super(props)
        this.state = {}
        this.performSearch("")
      }
      performSearch(searchtext) {
        const urlString = "https://localhost:44315/api/images/"+searchtext.split(/[ ,]+/).join(',')
        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("Fetched data successfully")
              const results = JSON.parse(searchResults)
              var imageRows = []
              results.forEach((image) => {
              const imageRow = <ImageRow image={image}/>
              imageRows.push(imageRow)
            })
            this.setState({rows: imageRows})
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
        })
      }

      searchChangeHandler(event) {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
      }
  render() {
    return (
      <div className="App">
          <table className="titleBar" >
            <tbody>
              <tr>
                <td>
                <img alt="app icon" width="30" src="camera.svg"/>
                </td>
                <td>
                 <h3> ImageDB Search</h3>
                </td>
              </tr>
            </tbody>
          </table>

          <input style={{
            fontSize: 24,
            display: 'block',
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }} onChange={this.searchChangeHandler.bind(this)}  placeholder="Enter search term"/>
          {this.state.rows}

          </div>
    );
  }
}
export default App;
