import React from 'react'
import './TicTacToe.css'
const TicTacToe = () => {
  return (
    <div>
      <h1 className='heading'>Tic Tac Toe</h1>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TicTacToe