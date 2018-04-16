import React, { Component } from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/TicTacToe'

class TicTacToe extends Component {

    constructor(props) {
        super(props)
        this.combos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    }

    state = {
        rows: 3,
        gameState: new Array(9).fill(false),
        ownMark: 'X',
        otherMark: 'O',
        gameOver: false,
        yourTurn: true,
        win: [],
    }

    componentWillMount() {
        let height = window.innerHeight
        let width = window.innerWidth
        let size = (height < width) ? height * 0.8 : width * 0.8
        let rows = this.state.rows
        let unit = size / rows
        let coordinates = []
        for (let y=0; y<rows; y++) {
            for (let x=0; x<rows; x++) {
                coordinates.push([x*unit, y*unit])
            }
        }

        this.setState({
            unit,
            size,
            rows,
            coordinates
        })
    }
    
    move = (index, marker) => {
        console.log('Player placed', marker, 'at', index)
        let newGameState = this.state.gameState;
        newGameState[index] = marker;
        let win = this.winChecker(newGameState)
        let gameOver = win ? true : false
        if (gameOver) {
            this.state.yourTurn ? console.log("You won!") : console.log("You lost!")
        }
        this.setState((prevState, props) => {
            return {
                gameState: newGameState,
                yourTurn: !prevState.yourTurn,
                win: win,
                gameOver: gameOver
            }
        })
        
        if (!gameOver && !this.state.yourTurn) this.makeAiMove(newGameState)
    }

    makeAiMove = (gameState) => {
        let otherMark = this.state.otherMark
        let openSquares = []
        gameState.forEach( (square, index) => {
            if (!square) {
                openSquares.push(index)
            }
        })
        let aiMove = openSquares[this.random(0, openSquares.length)]
        this.move(aiMove, otherMark)
    }

    random = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max-min)) + min
    }

    winChecker = (gameState) => {
        let combos = this.combos
        return combos.find( (combo) => {
            let [a,b,c] = combo
            return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a] !== false)
        })
    }

    turingTest = () => {

    }

    recordGame = () => {

    }

    render() {
        let {
            unit,
            size,
            rows,
            coordinates,
            gameState,
            win,
            gameOver,
            yourTurn,
            ownMark
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
                    <Squares
                        unit={unit}
                        coordinates={coordinates}
                        gameState={gameState}
                        gameOver={gameOver}
                        ownMark={ownMark}
                        yourTurn={yourTurn}
                        win={win}
                        move={this.move}
                    />
                </Stage>
            </div>
        )
    }
}

export default TicTacToe