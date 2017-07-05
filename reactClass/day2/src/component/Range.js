import React from 'react';

export default class Range extends React.Component{
    render(){
        return(
            <input defaultValue="0" type="range" min="0" max="100" onChange={this.props.update}/>
        )
    }
}