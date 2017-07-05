import React,{Component,Children} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';

import root from './routers';
import 'antd/dist/antd.css';//antd的公共样式
import './assets/fonts/iconfont.css';//引入字体图标的公共样式
render(root,document.getElementById('app'));