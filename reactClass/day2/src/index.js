import React,{Component,Children} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';
import{Router,Route,hashHistory,browserHistory} from 'react-router';

import App from './App';
import Shouye from './component/Shouye';
import Details from './component/Details';
import About from './component/About';
class Index extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="/shouye" component={Shouye}/>
            </Router>
        )
    }
}
render(<Index/>,document.getElementById('app'));