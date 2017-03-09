import React from 'react'
import Search from './search'
import List from './list'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchName: null
        }
    }

    setSearchName = (searchName) => {
        this.setState({searchName}) // 取得Search传过来的searchName
    }

    render(){
        return   <div className="container">
            <Search setSearchName={this.setSearchName} />
            <List searchName={this.state.searchName} />
        </div>
    }
}