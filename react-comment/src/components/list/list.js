import React from 'react'
import Item from '../item/item'
import './list.css'

export default class List extends React.Component{
    render(){
        const display = this.props.comments.length === 0 ? 'block' : 'none'
        return <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
                {this.props.comments.map((comment, index) => {
                    console.log(this.props)
                    return <Item {...comment} comment={comment} key={index} remove={this.props.remove} index={index} />
                })}
            </ul>
        </div>
    }
}