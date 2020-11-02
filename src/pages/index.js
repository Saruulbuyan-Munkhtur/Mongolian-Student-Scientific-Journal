import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SEO from "../components/seo"


import '../scss/main.scss'

const IndexPage = () => (

  <Layout>
    <Head />
    <SEO title="Home" />
    <section className="homePage-index">
    </section>
  </Layout>
)

export default IndexPage

