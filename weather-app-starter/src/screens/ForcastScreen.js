/**
 * TODO:
 * 实现可以在搜索框里输入城市的英文名称，
 * 然后更新此页面的data为相应的城市的天气预报
 * 更新方式为：页面上方的city和country的名字会发生相应的改变
 * 并生成40张Card，每张Card里面为获取到的天气list中3个小时的数据
 * 
 * 现在页面刚mount的时候会触发componentDidMount来获取chengdu的天气data
 * 
 * Extra Credit：
 * 搜索的城市不存在时，用alert() 向用户报错
 */

import React from "react"
import axios from 'axios'
import { Menu, Segment, Container } from 'semantic-ui-react'

import Card from '../components/Card'

const API = 'https://api.openweathermap.org/data/2.5/forecast?q='
const APPID = '&APPID=eda439d629165a345559e6e9043cf085&units='
const UNIT = 'metric'

class ForcastScreen extends React.Component{
    constructor(props){
        super(props)
        //set initial state
        this.state = {
            city: 'chengdu',
            country:''
        };
    }

    componentDidMount() {
        
        //从state中获取当前city的名字
        const { city } = this.state

        axios.get(API + city + APPID + UNIT)
        //if success
        .then(res => {
            const data = res.data
            this.setState({
                city:data.city.name,
                country:data.city.country,
            })
            console.log(res)
        })
        //if error
        .catch(error => {
            console.log(error)
        })
    }

    /**
     * incomplete
     */
    handleChange = (ev) => {
        console.log('You need to figure out how to reset state when the text in the input field change')
    }

    /**
     * incomplete
     */
    handleSubmit = (ev) => {
        console.log('clicked submit button')
    }

    render(){

        return (
            <div>
                <Segment inverted>
                    <Container>
                        <Menu inverted secondary>
                            <Menu.Item position="left">
                                <h1>Weather</h1>
                            </Menu.Item>
                            <Menu.Item>
                                <h1>Get forcasts</h1>
                            </Menu.Item>
                            <Menu.Item position='right'>
                                {/* 需要给input的onChange props传入相应function，从而每一次input的值改变的时候，state里相应的值会发生改变 */}
                                <input />

                                {/* 需要给button的onClick props传入相应function，在function里触发axios请求，从API获取新的data */}
                                <button>Search</button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
                <Container>

                    {/* 此处需要根据当前城市进行动态更新 */}
                    <div style={{color:'white'}}>
                        <h1>Chengdu</h1>
                        <h2>CN</h2>
                    </div>

                    {/* 用获得的天气data生成Cards 
                        不要hard code，请用map()来批量生成
                        例如this.state.data.map(elem => (<Card/>))
                    */}
                    <Card />
                </Container>
            </div>
        )
    }
}


export default ForcastScreen