/**
 * 显示每一天的weather用的Card
 * 你当然也可以无视这个component，
 * 用别的UI库的Card，
 * 或者自己写别的样子的Card
 */

import React from 'react'

export default class Card extends React.Component{
    
    //uncomment below to use the constructor to set props
    
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div style={{border:'solid 1px white', color:'white'}}>Your need to pass props to this card to make it work</div>
        )
    }
}