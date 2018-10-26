/*
 * @Author: yangshuwei 
 * @Date: 2018-10-26 16:52:48 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-26 17:44:42
 */
import React,{Component} from "react";
class List extends Component{
    render(){
        const { listData } = this.props;
        return(
            listData.map((item,index)=>{
            <div>
                {item.labelName}
            </div>
            })
            
        )
    }
}
export default List;