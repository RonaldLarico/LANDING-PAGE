import React from 'react'

import Head from 'next/head'

import NavBar from '../navbar/Index'

const Layout = ({ children }) => {
  return (
    <div>
    <Head>
      <title>JESAC - Metalúrgica</title>
      <meta name='description' content='JESAC' />
      <link rel='icon' href='/close.svg' />
    </Head>

    <NavBar />

    <main>
      { children }
    </main>

  </div>
  )
}

export default Layout