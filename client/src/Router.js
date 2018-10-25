import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import HomePage from './pages/home'

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={HomePage} />
          {/* <Route path="/screener" component={ScreenerPage} />
          <Route path="/quote" component={QuotePage} />
          <Route path="/gem" component={GemPage} />
          <Route path="/share_holders(/:type)" component={GuruPage} />
          <Route path="/port" component={PortPage} />
          <Route path="/report" component={ReportPage} />
          <Route path="/new_article" component={AddArticlePage} />
          <Route path="/article(/:id)" component={ArticlePage} />
          <Route path="/login_page" component={LoginPage} />
          <Route path="/index.html" component={HomePage} /> */}
          {/* <Route path="*" component={HomePage} /> */}
        </Route>
      </Router>
  )
}

export default AppRouter
