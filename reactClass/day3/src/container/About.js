import React from 'react';

export default class About extends React.Component{
    render(){
        return(
            <h1>about关于我们{this.props.params.a}</h1>
        )
    }
}