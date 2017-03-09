import React from 'react'
import Add from '../add/add'
import List from '../list/list'

export default class App extends React.Component{
    constructor(props){
        super(props)
        // 初始化状态
        this.state = {
            comments: []
        }
        this.add = this.add.bind(this)
    }

    componentDidMount () {
        // 模拟请求获取数据
        let comments = [
            {username: 'Alice', content: 'Today is happy!'},
            {username: 'Tom', content: 'You so beautiful!'}
        ]
        // 更新状态
        this.setState({comments})
    }

    add = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    remove = (index) => {
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
    }

    render(){
        return <div>
            <header className="site-header jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <Add add={this.add} />
                <List comments={this.state.comments} remove={this.remove} />
            </div>
        </div>
    }
}