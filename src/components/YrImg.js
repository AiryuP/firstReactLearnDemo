// 引入图片，本地引入与第三方引入,循环数据

import React from 'react';
import leidian from '../assets/images/leidian.gif';

class YrImg extends React.Component{

    constructor ( porps ){
        super( porps );
        this.state = {
            msg: '这是一个引入图片的组件',
            src: 'https://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png',
            list: ["1111111","22222222222","33333333333333"],
            list2 : [ <h1 key="0">我是H1</h1>, <h2 key="1">我是h2</h2>, <h3 key="2" >我是h3</h3> ]
        }
    }

    render(){
        return(
            <div>
                { this.state.msg }
                <br/>
                <img src={ leidian } alt=""/>
                
                <br/>
                rect的引入图片与平常的引入图片有很大的不同，在本地，需要把图片的路径引入进来，使用的情况与数据的导入相同
                <br/>
                <img src={ require('../assets/images/leidian.gif') } alt=""/>
                <br/>
                或者适应ES6的语法，通过require()导入

                <br/>
                <img src="https://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png" alt=""/>
                引入远程图片直接连接
                <br/>
                <img src={ this.state.src } alt=""/>
                <br/>
                通过数据的方式导入
                <br/><br/> <br/> <br/>
                <h3>循环数据</h3>
                <br/><br/>
                <ul>
                    { 
                        this.state.list.map(function( v , k ){
                            return <li key={ k }>{ v }</li>
                        })
                    }
                </ul>

                { this.state.list2 }


                <br/><br/><hr/>
            </div>
        )
    }

}

export default YrImg;