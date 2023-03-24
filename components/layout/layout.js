import { Fragment } from "react"
import MainHeader from "./mainHeader"
import MainFooter from "./mainFooter"


function Layout(props) {
  return (
    <Fragment>
        <MainHeader/>
        <main>
            {props.children}
        </main>
      <MainFooter/>
    </Fragment>
  )
}

export default Layout
