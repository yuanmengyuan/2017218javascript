import React,{Component,Children} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            a:0,
            destoryed:false
        }
    }
    change(){
        this.setState({
            a:'哈哈哈哈😄'
        })
    }
    componentWillMount(){//勾子函数
        alert('componentWillMount')
    }
    componentDidMount(){
        alert('componentDidMount')
    }
    shouldComponentUpdate(){
        alert('componentShouldUpdate')
        return true;
    }
    componentWillUpdate(){
        alert('componentWillUpdate')
    }
    componentDidUpdate(){
        alert('componentDidUpdate')
    }
    destory(){
        this.setState({
            destoryed:true
        })
    }
    componentWillUnmount(){
        //拿到数据
        alert('componentWillUnmount')
    }
    render(){
        if(this.state.destoryed){
            return null;
        }
        alert('render');
        return(
            <div>
                <h1 onClick={this.change.bind(this)}>hello!ymy~ {this.state.a}</h1>
                <input type="button" onClick={this.destory.bind(this)} value="销毁"/>
            </div>
        )

    }
}
render(<App/>,document.getElementById('app'));