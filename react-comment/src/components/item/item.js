import React from 'react'
import './item.css'

export default class Item extends React.Component{
    removeComment = () => {
        const {remove, comment, index} = this.props
        if(confirm(`确定删除${comment.username}吗？`)){
            console.log(index)
            remove(index)
        }
    }
    render(){
        return  <li className="list-group-item">
            <div className="handle">
                <a href="javascript:;" onClick={this.removeComment}>删除</a>
            </div>
            <p className="user"><span >{this.props.username}</span><span>说:</span></p>
            <p className="centence">{this.props.content}</p>
        </li>
    }
}