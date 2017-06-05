import React from 'react';
import ReactDom from 'react-dom';

import Header from './component/Header';

//最后要做的就是把Header直接渲染到页面上去；
ReactDom.render(<Header></Header>,document.getElementById('app'));