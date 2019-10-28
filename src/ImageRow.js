import React from 'react'

class ImageRow  extends React.Component {
  render() {
    return <table>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.image.media}/>
       </td>
        <td>
          <h3>{this.props.image.title}</h3>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default ImageRow
