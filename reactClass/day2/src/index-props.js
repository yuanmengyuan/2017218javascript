import React,{Component} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';

import Header from './component/Header';
import Footer from './component/Footer';

class Index extends Component{
    render(){
        return(
            <div>
                <Header context="hello！ymy!"></Header>
                <Footer/>
            </div>
        )
    }
}
render(<Index/>,document.getElementById('app'));