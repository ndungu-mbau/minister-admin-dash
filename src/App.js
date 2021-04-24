import React from "react"
import { ApolloProvider } from "@apollo/client"
import { HashRouter, Switch, Route } from "react-router-dom"

import apolloClient from "./utils/client"

import login from "./pages/login"

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <HashRouter>
        <Switch>
          <Route path="/login" component={login} />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  )
}

export default App
