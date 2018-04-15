import React, { Component } from 'react'
import {Stage} from 'react-konva'
import {Board} from '../styled/TicTacToe'

class TicTacToe extends Component {

    state = {
        rows: 3,
        // gameState: newArray(9).fill(false),
        // ownMark: 'X',
        // otherMark: 'O',
        // gameOver: false,
        // yourTurn: true,
        // winner: false,
    }

    componentWillMount() {
        let height = window.innerHeight
        let width = window.innerWidth
        let size = (height < width) ? height * 0.8 : width * 0.8
        let rows = this.state.rows
        let unit = size / rows

        this.setState({
            size,
            rows,
            unit
        })
    }
    
    makePlayerMove = () => {
        // player moves
    }

    makeAiMove = () => {
        // ai moves
    }

    turingTest = () => {

    }

    recordGame = () => {

    }

    render() {
        let {
            unit,
            size,
            rows
        } = this.state

        return (
            <div>
                <Stage
                    width={this.state.size}
                    height={this.state.size}
                >
                    <Board 
                        unit={unit}
                        size={size}
                        rows={rows}
                    />
                    {/* <Squares/> */}
                </Stage>
            </div>
        )
    }
}

export default TicTacToe