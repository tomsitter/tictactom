import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import RaisedButton from 'material-ui/RaisedButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import { Link } from 'react-router-dom'
import { NavToggleButton } from '../styled/NavDrawer'
import Auth from '../utils/auth.js'

class NavDrawer extends Component {
    state = {
        open: false,
        width: 250
    }

    toggle = () => {
        this.setState((prevState, props) => {
            return {
                open: !prevState.open
            }
        })
    }

    login = () => {
        const auth = new Auth(); 
        auth.testHistory();
    }

    render() {
        return (
            <div>
                <NavToggleButton
                    toggle={this.toggle}
                    open={this.state.open}
                    width={this.state.width}
                />
                <FloatingActionButton
                    onTouchTap={this.toggle}
                >
                    <Menu/>
                </FloatingActionButton>
                <Drawer
                    open={this.state.open}
                    width={this.state.width}
                >
                    <div 
                        style={{
                            height: '200px',
                            width: '100%',
                            backgroundColor: 'salmon'
                        }}
                    >
                        <RaisedButton
                            onTouchTap={this.login}
                        > 
                            Login
                        </RaisedButton>
                    </div>
                    <Divider/>
                    <Link
                        to={'/'}>
                        <MenuItem 
                            onTouchTap={this.toggle}
                            primaryText={'Play'}
                        />
                    </Link>
                    <Link
                        to={'/profile'}>
                        <MenuItem 
                            onTouchTap={this.toggle}
                            primaryText={'Profile'}
                        />
                    </Link>

                </Drawer>

            </div>
        )
    }
}

export default NavDrawer