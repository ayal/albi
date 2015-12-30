import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout'
import MainView from 'views/MainView'


export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={MainView} />
	<Route path='/albi/' component={MainView} />
  </Route>
)
