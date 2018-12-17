import React  from 'react';

class Home extends React.Component{


    constructor( props ){
        super( props );

        this.state = {
            msg: "我是一个组件",
            
        }


    }

    run =( e ) => {
        console.log( e );

        console.log( e.target );

        // e.target.style.background = 'red';
        console.log( e.target.getAttribute('aid') )
    }

    getData = ()=>{
        
    }

    render(){
        return(
            <div>
                { this.state.msg }
                <br /><hr />
                <button aid="123" onClick={ this.run }>事件对象</button>
                <br /> <br /> <br /><hr />

                <input /><button onClick={ this.getData }>获取input的值</button>
            </div>
        )
    }


}

export default Home;