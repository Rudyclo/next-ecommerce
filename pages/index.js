import Head from 'next/head'
import { Children } from 'react'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <Layout title="Home">
    <h1 className='text-3xl font-bold'>Next Ecommerce</h1>
    <p>수업 끝내주세요</p>
    </Layout>
  )
}
