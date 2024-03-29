// @ts-nocheck
import type { NextPage } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { data } from '../data'
import { Renderer } from '../lib'
import { IData } from '../lib/types'

const Home: NextPage<IData> = props => {
  if (!props) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <Renderer {...props} />
    </>
  )
}

export const getStaticProps = async ({
  resolvedUrl = 'home' as string,
}: {
  resolvedUrl: string
}) => {
  return { props: { ...data[resolvedUrl] } }
}

export default Home
