import React from 'react'
import axios from 'axios'

export default class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstShow : true,    // 第一次提示搜索页面
            loading: false,      // 搜索中ing
            users: [],           // 用户列表
            errorMsg: null       // 出错信息
        }
    }
    // 父组件更新状态并向子组件传递了新的属性时调用这个方法
    componentWillReceiveProps(nextProps){

        // 更新请求状态
        this.setState({
            firstShow: false,
            loading: true
        })

        const {searchName} = nextProps
        // 发送Ajax请求
        const url = ` https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                const items = response.data.items
                const users = items.map(item => {
                    return {
                        html_url: item.html_url,
                        avatar_url: item.avatar_url,
                        login: item.login
                    }
                })
                // 更新为成功状态
                this.setState({
                    loading: false,
                    users
                })
            })
            .catch(error => {
                // 更新为失败状态
                this.setState({
                    loading: false,
                    errorMsg: error.message
                })
            })
    }

    render(){
        const {firstShow, loading, users, errorMsg} = this.state
        // 判断状态显示不同信息
        if(firstShow){
            return <h2>Enter name to search</h2>
        }else if(loading){
            return <h2>Loading result...</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else{
            return <div className="row">
                {users.map((user, index) => {
                    return <div className="card" key={index}>
                        <a href={user.html_url} target="_blank">
                            <img src={user.avatar_url} style={{width: '100px'}}/>
                        </a>
                        <p className="card-text">{user.login}</p>
                    </div>
                })}
            </div>
        }
    }
}