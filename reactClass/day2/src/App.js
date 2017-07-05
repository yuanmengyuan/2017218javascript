import React,{Component,Children} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';
import{Router,Route,hashHistory,browserHistory} from 'react-router';

import Header from './component/Header';
import Footer from './component/Footer';
export default class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}