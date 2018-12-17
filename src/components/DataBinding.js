// 表单事件，ref,数据双向绑定
import React from 'react';

class DataBinding extends React.Component{

    constructor ( props ) {
        super( props );
        this.state = {
            msg: '我是一个表单事件，ref,数据双向绑定的学习组件',
            userName : '',
            userName2: '',
            userName3: ''
        }


    }

    run = (e) =>{
        
        if( e.target.style.backgroundColor === 'red' ){
            e.target.style.backgroundColor = 'white';
            e.target.style.borderColor = 'blue';
        }else{
            e.target.style.backgroundColor = 'red';
            e.target.style.borderColor = '';
        }

        // 获取dom节点的属性

        let aid = e.target.getAttribute('aid');
        alert( aid )
    }

    getMsg=( e )=>{
        let inputValue = e.target.value;
        // console.log( inputValue );
        this.setState({
            userName : inputValue
        })
    }

    fuzhi = ()=>{

        console.log( this.state.userName )
        document.getElementById('ccc').innerHTML = this.state.userName;
    }

    refInputChange = ()=>{
        let val = this.refs.userName2.value;
        console.log( val );
        this.setState({
            userName2: val
        })
    }

    getRefValue = ()=>{
        console.log( this.state.userName2 )
    }

    keyUp = ( e ) =>{
        // console.log( e.keyCode );
        this.setState({
            userName3 : e.target.value
        })
        if( e.keyCode === 13 ){
            console.log( this.state.userName3 );
        }
    }

    render(){
        return (
            <div className="dataBindBox">
                { this.state.msg }
                <br/>
                <button aid = "123" onClick={ this.run }>事件对象</button>

                <br/><br/><br/><br/>
                <h2>表单事件</h2>
                {/* 
                    获取表单的值
                    
                    1、 监听表单改变事件
                    2、 在改变的时间里面获取表单输入的值
                    3、 把表单输入的值赋给userName
                    4、 点击按钮的时候获取steat 里面的userName
                */}

                <input onChange={ this.getMsg } type="text"/>  <button onClick={ this.fuzhi }>点击获取input的值</button>
                <div id="ccc" ></div>
                下面的div似乎已经实现了数据的双向绑定？单向绑定。
                <div>{ this.state.userName }</div>


                <br/><br/><br/><br/>
                <h2>通过ref获取dom节点</h2>

                <input ref="userName2" onChange={ this.refInputChange } type="text"/>
                <br/>
                <button onClick={ this.getRefValue }>点击通过ref获取数据</button>

                <br/><br/><br/>

                <h4>获取dom节点</h4>
                <p>1、 给元素定义ref属性，详情看代码 </p>
                {/* 
                    <input ref="userName" />

                    this.refs.userName   获取的事dom元素
                */}
                <p>2、 通过 event 获取dom元素 </p>


                <h3>键盘事件</h3>
                <input onKeyUp={ this.keyUp } type="text"/>
                <div>
                    键盘事件，同原生时间很像；
                    onKeyUp:       键盘弹起来触发
                    onKeyDown:     键盘按下去触发
                    onKeyPress:    表示的是一个过程 &lt; 需要自己查找资料 &gt;
                </div>
                


            <br /><br /><br /><hr/>

            </div>
        )
            
        
    }
}

export default DataBinding;