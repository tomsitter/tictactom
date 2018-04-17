import {media} from '../utils/media'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    border: 1px rgb(200,200,200) solid;
    width: 800px;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    ${media.handheld`
        width:100%
    `}
`

export const Name = styled.h2`
    display: flex;
`

export const GameListHeader = styled.h4`
    display: flex;
    padding-bottom: 2px;
    margin: 10px 0 5px 0;
`

export const GameList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 5px;
    border: 1px lightgrey solid;
    justify-content: center;
`

export const GameRecord = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    padding: 5px 0;
    margin: 3px 0;
    box-sizing: border-box;
    font-width: bold;
`

export const Column = styled.span`
    display: flex;
    width: 25%
`

export const ColumnLabels = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    padding: 5px 0;
    margin: 3px 0;
    box-sizing: border-box;
    font-weight: bold;
`