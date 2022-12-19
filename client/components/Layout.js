import Head from "next/head"
import Link from "next/link"
import Router from "next/router"
import NProgress from "nprogress"
import React from "react"
import "nprogress/nprogress.css"


Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Layout = ({ children }) => {

    const head = () => (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
                crossOrigin="anonymous" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                crossOrigin="anonymous" />
            <link rel="stylesheet" href="/static/css/styles.css" />

        </React.Fragment>

    )

    const nav = () => (
        <ul className="nav nav-tabs bg-warning ">
            <li className="nav-item ">
                <Link href="/" className="nav-link text-dark">
                    Home
                </Link>
            </li>


            <li className="nav-item">
                <Link href="/login" className="nav-link text-dark">
                    Login
                </Link>
            </li>


            <li className="nav-item">
                <Link href={"/register"} className="nav-link text-dark">
                    Register
                </Link>
            </li>
        </ul>
    )
    return <>{head()} {nav()} <div className="container pt-5 pb-5"></div> {children}</>
}

export default Layout