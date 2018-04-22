import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import {Header, Main} from '../styled/App'

injectTapEventPlugin()

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavDrawer/>
                    <Header>
                        Tic-Tac-Tom
                    </Header>
                    <Main />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App