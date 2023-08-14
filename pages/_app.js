import React from 'react'
import { Layout } from './Components'
// import 'bootstrap/dist/css/bootstrap.css'
// import '../css/style.css'
// import '../css/Button.css'

const MyApp = ({Component, pageProps}) =>{
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp