import React,{Component,Children} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';

import Header from './component/Header';
import Footer from './component/Footer';
class App extends Component{
    render(){
        return(
            <List>
                <h1>111111</h1><h2>222222</h2><h3>3333333</h3>
            </List>
        )
    }
}

/*<div>
 {this.props.children}
 </div>*/
class List extends Component{
    render(){
        let nodelist=Children.map(this.props.children,function (item) {
            return <li>{item}</li>
        })
        return(
            <ul>
                {nodelist}
            </ul>
        )
    }
}
render(<App/>,document.getElementById('app'));