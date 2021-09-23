import {
  ChakraProvider
} from "@chakra-ui/react"
import * as React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

export const App = () => (
  <ChakraProvider>
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  </ChakraProvider>
)
