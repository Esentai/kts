import React, { Component } from 'react'
import axios from 'axios';
import '../style.css';
import '../animate.css';


export default class Form extends Component{
    

    state={
        name:'',
        phone:'',
        sent: false
    }

    //handle inputs
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    //handle inputs
    handlePhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }

    formSubmit=(e)=>{
        e.preventDefault();
        let data = {
            name:this.state.name,
            phone:this.state.phone,
        }

    axios.post('/api/forma',data)
    .then(res=>{
        this.setState({
            sent:true,
        },this.resetForm())
    })
    .catch(()=>{
        console.log('message not sent');
    })
    }


    resetForm=()=>{
        this.setState({
            name:'',
            phone:'',
        })

        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        }, 3000)
    }


    
	

    render() {
        return (
            <div>
                <div className="overlay unselectable active" id="coverlay">
                    <span>Вся безопасность из одних рук.</span>
                </div>
                <div className="moda1l">
                    <span className="clos1e modal__cross"></span>
                    <div className="mf_content"> 
                        <div className="mf_left"> 
                            <div className="mf_overlay"></div> 
                        </div> 
                        <div className="mf_right"> 
                            <h2 className="mf_title">Оставьте заявку и мы свяжемся с вами в ближайшее время</h2> 
                            <div role="form" lang="ru-RU">
                                <div className="screen-reader-response"></div>
                                <form onSubmit={this.formSubmit} method='POST'> 
                                    <p>
                                        {/* single Item */}
                                        <span>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Ваше имя"
                                                value={this.state.name}
                                                onChange={this.handleName}
                                                required
                                            />
                                        </span>
                                        {/* end of Item */}

                                        <br></br>

                                        {/* single Item */}
                                        <span>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                placeholder="Ваш номер"
                                                value={this.state.phone}
                                                onChange={this.handlePhone}
                                                required
                                            />
                                        </span>
                                        {/* end of Item */}
                                        <br></br>
                                        <span className="agree"></span>
                                    </p>
                                    <div className={this.state.sent ?'msg msgAppear':'msg'}> Message has been sent  </div>
                                    <p>
                                        <input type="submit" value="Отправить" className="btn_gr"/>
                                    </p>
                                </form>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        )
    }
}