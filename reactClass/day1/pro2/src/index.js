import React from 'react';
import ReactDom from 'react-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

var data=[
    {
        title:'表天11111',
        content:'我是文章的内容1111111'
    },
    {
        title:'表天2222',
        content:'我是文章的内容2222'
    }
]
class Index extends React.Component{
    render(){
        return(
            <div>
                <Header content={data[1].content}></Header>
                <Footer/>
            </div>
        )
    }
}
ReactDom.render(<Index/>,document.getElementById('app'))
