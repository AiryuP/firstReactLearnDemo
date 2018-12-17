// 绑定数据 绑定属性 引入图片 循环数据
import React from 'react';
import '../assets/css/index.css';

class Binddata extends React.Component{

    constructor( porps ){
        super( porps );

        this.state = {
            msg: '我是一个绑定数据的组件',
            title: '我是一个title',
            style: {
                color: 'red',
                fontSize : '28px'
            }
        }
    }


    render(){
         
        return(
            <div className="bindData">
                <h2> { this.state.msg } </h2>

                <div title={ this.state.title }> 我有一个title 测试绑定属性</div>
                    <div className="hahah">
                        <div className='red' >我是一个红色的div</div>注：属性如果不是从数据（state）中获取,正常使用属性的规则
                    </div>
                <br /><br /> <br/>

                <label htmlFor="name">name</label>
                <input id="name" defaultValue={ '注意class,for等 属性的写法' }  type="text"/>

                <br/><br/>
                <div style={ {color:'red',fontSize: '18px'} } >我是一个红色div  测试行内样式</div>

                <br/>
                <div style={ this.state.style }>测试行内样式，绑定state</div>
                <br/><br/><hr/>
            </div>
        )
    }

}


export default Binddata; 
