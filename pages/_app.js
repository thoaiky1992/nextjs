import React from 'react'
import App, { Container } from 'next/app'
import {Provider} from 'react-redux';
import store from '../store/index';
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
        <Provider store={store}>  
          <Component {...pageProps} />  
        </Provider>
    )
  }
}

export default MyApp