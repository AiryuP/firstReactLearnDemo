import React  from 'react';

class EventMethod extends React.Component{


    constructor( props ){
        super( props );

        this.state = {
            msg: "我是事件、方法组件",
            canshu: '我是原始数据'
            
        }


    }

    run =( e ) => {
        // console.log( e );

        // console.log( e.target );

        e.target.style.background = 'red';
        // console.log( e.target.getAttribute('aid') )
    }

    getData = ()=>{
        console.log( this.state.msg )
    }

    setData = () =>{
        this.setState({
            msg: '我被改变了'
        })
        // alert( this.state.msg )
    }

    setMessage = ( str )=> {
        this.setState({
            canshu: str
        })
        console.log("hahahah")
    }

    render(){
        return(
            <div>
                { this.state.msg }
                <br />
                <button aid="123" onClick={ this.run }>事件对象</button>
                <br /> <br /> <br />
                <button onClick={ this.getData }>获取this.steat的数据</button>
                <br/>
                改变this指向的几种方法

                &lt;  &gt;

                <br/>
                <p>1.在行内绑定方法的时候bind( this )把this穿进去</p>
                <p>2.在书写方法的时候，在构造函数里面，通过bind绑定 例如： this.run = this.run.bind( this ) </p>
                <p>3.通过ES6 的箭头函数改变this指向  run = ()=>"{"{}"}"</p>
                              
                <br /> <br /> <br />
                改变this.state里面的值
                <br/>
                <div onClick={ this.setData }>点我改变</div>

                <br/>
                <br/>
                <br/>
                执行方法传值(方法传参)
                <br/>
                { this.state.canshu }
                <br/>
                <button onClick={ this.setMessage.bind( this,'我是改变的参数' ) }> 点击改变参数 </button>
                <br/>
                <b><s>目前还是比较浅显的传参，关于穿数组，对象这样的复杂的情况目前还没遇到，留一个疑问先。</s></b>
                <br /> <br /> <br />
                <br/><br/><hr/>
            </div>
        )
    }


}

export default EventMethod;