import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'

ReactDOM.render(
    (<Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            {/*访问/about时，会先加载APp组件，然后在它的内部再加载Repos组件*/}
            <Route path="/about" component={About} />
            <Route path="/repos" component={Repos}>
                {/*:username通过this.props.params.username取出*/}
                <Route path="/repos/:username/:repoName" component={Repo} />
            </Route>
        </Route>
    </Router>),
  document.getElementById('root')
)