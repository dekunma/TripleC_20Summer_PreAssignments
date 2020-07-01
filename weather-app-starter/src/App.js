/**
 * 这个component不用改
 */

import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { Menu, Container } from 'semantic-ui-react'

import ForcastScreen from './screens/ForcastScreen'
import AboutScreen from './screens/AboutScreen'
import WeatherScreen from './screens/WeatherScreen'


class App extends React.Component{
    render(){
        return <div>
            <BrowserRouter>
                <Route path = "/" exact={true} component={AboutScreen} />
                <Route path = "/forcast" exact={true} component={ForcastScreen} />
                <Route path = "/weather" exact={true} component={WeatherScreen} />
                <div style={{height: 100}}></div>
                <Navbar style={{backgroundColor: "#1c1c1c"}} variant="dark" expand="lg" fixed="bottom">
                <Container>
                    <Menu inverted>
                        <Menu.Item to="/" as={Link}><h4>About</h4></Menu.Item>
                        <Menu.Item to="/forcast" as={Link}><h4>Forcast</h4></Menu.Item>
                        <Menu.Item to="/weather" as={Link}><h4>Weather</h4></Menu.Item>
                    </Menu>
                    </Container>
                </Navbar> 
            </BrowserRouter>
        </div>
    }
}


export default App