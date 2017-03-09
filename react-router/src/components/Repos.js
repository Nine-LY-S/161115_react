import React from 'react'
import MyLink from './MyLink'

export default class Repos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            repos: [
                {username: 'a', repoName: 'react'},
                {username: 'b', repoName: 'react-router'},
                {username: 'c', repoName: 'angular'},
                {username: 'd', repoName: 'angular-cli'},
            ]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(){
        let repos = this.state.repos
        let newRepo = {
            username: this.refs.username.value.trim(),
            repoName: this.refs.repoName.value.trim(),
        }
        if(!newRepo.username || !newRepo.repoName){
            return
        }
        repos.push(newRepo)
        this.setState({repos})
        this.refs.username.value = ''
        this.refs.repoName.value = ''
    }
    render () {
        return <div>
            <h2>Repos</h2>
            <ul>
                {this.state.repos.map((repo, index) => {
                    return <li key={index}>
                        <MyLink to={`/repos/${repo.username}/${repo.repoName}`}>
                            {repo.repoName}
                        </MyLink></li>
                })}
                <li>
                    <input type="text" placeholder="用户名" ref="username" />/
                    <input type="text" placeholder="仓库名" ref="repoName" />
                    <button onClick={this.handleSubmit}>添加</button>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}