import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Countries from './components/Countries'
import Detail from './components/Detail'

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Switch>
          <Route path="/:countryCode">
            <Detail />
          </Route>
          <Route path="/">
            <Countries />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}
export default App
