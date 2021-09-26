import {
  ChakraProvider
} from "@chakra-ui/react"
import * as React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App () {
  return (
    <ChakraProvider>
      <div className="wrapper">
        <Header />
        <AmplifySignOut />
        <Main />
        <Footer />
      </div>
    </ChakraProvider>
  )
}

export default withAuthenticator(App)