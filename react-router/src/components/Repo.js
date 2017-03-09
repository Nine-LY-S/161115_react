import React from 'react'

export default class Repo extends React.Component{
    render () {
        let {username, repoName} = this.props.params
        return <p>用户名：{username}，仓库名：{repoName}</p>
    }
}