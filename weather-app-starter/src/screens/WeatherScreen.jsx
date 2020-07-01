/**
 * 显示各种城市当前天气的screen
 * 
 * 要求：
 * 像ForcastScreen一样，在右上角添加searchBar，
 * 输入城市名字并点add之后，add一张有被搜索城市的天气的card到当前屏幕
 * 
 * Extra Credit：
 * 当前被搜索城市名不存在时用alert() 报错
 */

import React from 'react'
import axios from 'axios'

const API = 'https://api.openweathermap.org/data/2.5/weather?q='
const APPID = '&APPID=eda439d629165a345559e6e9043cf085&units='
const UNIT = 'metric'

export default class WeatherScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            city:'chengdu'
        }
    }

    componentDidMount() {

        const { city } = this.state

        axios.get(API + city + APPID + UNIT)
        .then(res => {
            console.log('weather data:  ', res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <h1 style={{color:'white'}}>Open console to see the weather data</h1>
            </div>
        )
    }
}