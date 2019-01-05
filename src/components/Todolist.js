import React from 'react';
import '../assets/css/todolist.css'

class Todolist extends React.Component{
    
    constructor( props ) {
        super( props );
        this.state = {
            msg: '这是一个代办事件组件！',
            list : [],
            listed:[
                
            ],
            hehe: [
                {
                    a:'111',
                    b: '222'
                },
                {
                    a:'333',
                    b: '444'
                }
            ]
        }
    }

    addData =()=>{
        // alert(this.refs.title.value)
        if( this.refs.title.value == "" || this.refs.title.value == undefined || this.refs.title.value == null ){
            alert('请输入正确的代办事件')
        }else{
            var temList = this.state.list;
            temList.push( this.refs.title.value );
            this.refs.title.value = '';//输入框中的值变成空
            this.setState({
                list: temList
            })
        }

    }

    delData =(key) =>{
        var temList = this.state.list;

        temList.splice(key,1);
        this.setState({
            list: temList
        })
    }
    keyDown = (e)=>{
        
        if( e.keyCode === 13 ) {
            this.addData();
        }
    }

    listedDelData = (key)=>{
        var temListed = this.state.listed;
        temListed.splice(key,1);
        this.setState({
            listed: temListed
        })
    }

    checkChange = ( key )=>{
        // if( this.checked == true ){

        // }
        console.log()
        console.log( this.state.hehe )
        this.state.hehe.splice( 1,1 )
        console.log( this.state.hehe )
    }

    render(){
        return (
            <div className="todoBox"> 
                <h2>{ this.state.msg }</h2>

                <br/> <br/>
                <input className="inp" placeholder="添加Todo" onKeyDown={ this.keyDown } ref="title" type="text"/> <button className="btn-info"  onClick={ this.addData }>增加</button>
                <br/>
                <hr/>
                <br/>
                <p className="pTit">正在进行</p>

                <div className="listsBox">
                    {/* 用到this要注意this的指向 */}
                    {
                        this.state.list.map(( value, key)=>{
                            return (
                                <div key={ key } className="lists clearfix">
                                    <div className="greenList"></div>
                                    <div className="listContent" >
                                    <input type="checkbox"  onChange={ this.checkChange } />&nbsp;&nbsp;
                                    { value } 
                                    </div>
                                    <div className="del-btn" onClick={ this.delData.bind( this,key ) }></div>
                                </div>
                            )
                        })
                    }

                </div>
                <p className="pTit">已经完成</p>

                <div className="listsBox">
                    
                    {
                        this.state.listed.map(( value, key)=>{
                            return (
                                <div key={ key } className="lists clearfix">
                                <div className="huiList"></div>
                                <div className="listContent" >
                                <input type="checkbox"  onChange={ this.checkChange } />&nbsp;&nbsp;
                                    { value } 
                                </div>
                                <div className="del-btn" onClick={ this.delData.bind( this,key ) }></div>
                            </div>
                            )
                        })
                    }

                </div>



                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><hr/>
            </div>    
        )

    }


}

export default Todolist;