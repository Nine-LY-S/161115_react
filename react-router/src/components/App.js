import React from 'react'
import MyLink from './MyLink'

export default class App extends React.Component{
    render () {
        return <div>
            <h2>Hello,React Router!</h2>
            <ul>
                <li><MyLink to="/about">About</MyLink></li>
                <li><MyLink to="/repos">Repos</MyLink></li>
            </ul>
            {this.props.children} {/*此属性为子组件*/}
        </div>
    }
}