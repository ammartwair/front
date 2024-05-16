import React from 'react'
import { Helmet } from 'react-helmet'

export default function Home() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MediConnect Pro | Home Page</title>
        <meta name='description' content='This is home page' />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <h2 className='my-4'>Home Page</h2>
      </div>
    </>
  )
}
