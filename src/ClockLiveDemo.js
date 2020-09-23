import React, { Component } from 'react'  
import Clock from 'react-live-clock';  
import './lockdemo.css';  
export class ClockLiveDemo extends Component {  
        render() {  
                return (  
                        <div>  
                            <div className="container">  
                               <div class="row" className="hdr">  
                                   <div class="col-sm-12 btn btn-info">  
                                      Temporizador react 
                                    </div>  
                                 </div>  
                         <div className="clk">  
                              <Clock format={'HH:mm:ss'} ticking={true} />  
                           </div>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default ClockLiveDemo 