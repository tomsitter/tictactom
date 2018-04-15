import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'
import {Switch, Route} from 'react-router-dom' 

export const Header = styled.header`
    text-align: center;
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 80%;
    min-height: 80vh;
    ${media.handheld`
        width: 100%;
    `}
`

export const Main = (props) => {
    return (
        <Container>
            <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/" component={TicTacToe} />
            </Switch>
        </Container>
    )
}