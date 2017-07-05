import React from 'react';
import propTypes from 'prop-types';

export default class Home extends React.Component{
    componentDidMount(){
        this.context.router.setRouteLeaveHook(this.props.route,this.LeaveHook)
    }
    LeaveHook(nextLocation){
        alert('你确定要离开首页吗？')
    }
    render(){
        return(
            <div>
                <h1>home这是首页</h1>
            </div>
        )
    }
}
Home.contextTypes={
    router:propTypes.object
}