import React from 'react';

class Tofrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'react表单',
            name: '',
            sex: '1',
            city: '',
            citys:[
                '北京','上海','深圳'
            ],
            hobby: [
                {
                    "title":'睡觉',
                    "checked": true
                },
                {
                    'title': '吃饭', 
                    "checked": false
                },
                {
                    'title': '敲代码', 
                    "checked": true
                }
            ],
            info :''
         };
    }

    handelSubmit = (e)=>{
        // 组织submit的提交事件（from 的默认事件）
        e.preventDefault();
        console.log( this.state.name ,this.state.sex,this.state.city,this.state.hobby,this.state.info)
    }

    handelName =(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handelSex =(e)=>{
        this.setState({
            sex : e.target.value
        })
    }

    handelCity = (e)=>{
        this.setState ({
            city: e.target.value
        })
    }

    handelBobby = (key)=>{
        // this.setState.hoby = e.target.value
        var hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }

    handelInfo = (e)=>{
        this.setState({
            info: e.target.value
        })
    }

    render() {
        return (
            <div>
                
                <h2>深入表单事件</h2>
                <p>1、react中的表单中，  value 会被管理， defaultValue才是相当于原生的value,约束性组件( value )与非约束性组件( defaultValue )</p>
                <br/><br/>

                <form onSubmit = { this.handelSubmit }>
                
                    用户名：<input type="text" value={ this.state.name } onChange={ this.handelName } /> <br/><br/>
                    性  别：男<input type="radio" value="1" checked={ this.state.sex == 1 } onChange={ this.handelSex } /> 
                           女<input type="radio" value="0"  checked={ this.state.sex == 0 } onChange={ this.handelSex } /> <br/><br/>
                    居住城市：
                        <select value={ this.state.city } onChange={ this.handelCity }>
                        
                            {
                                this.state.citys.map(function(value,key){
                                    return <option key={ key }  >{ value }</option>
                                })
                            }

                        </select> <br/><br/>
                    爱好:
                            {
                                this.state.hobby.map((value,key)=>{
                                    return (
                                        <span key={ key } > 
                                        
                                           <input type="checkbox" checked={ value.checked } onChange={ this.handelBobby.bind( this,key ) } name="" id=""/>  { value.title } 

                                        </span>
                                    )
                                })
                                
                            }
                            <br/><br/>
                    备注：
                        <textarea value={ this.state.info } onChange={ this.handelInfo } name="" id="" cols="30" rows="10"></textarea>

                    <br/>
                    <input type="submit" value="提交"  />

                </form>


                <br /><br /><br /><hr/>
            </div>
        );
    }
}

export default Tofrom;