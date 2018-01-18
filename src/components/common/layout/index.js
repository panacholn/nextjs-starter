import { Layout, LocaleProvider } from 'antd'
import thTH from 'antd/lib/locale-provider/th_TH'
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'

const { Content } = Layout

const PageLayout = ({ children }) => (
  <LocaleProvider locale={thTH}>
    <div className="container">
      <Layout>
        <Head>
          <meta name="viewport" content="width=1280, initial-scale=0" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css" />
        </Head>
        <Header />
        <Content style={{ margin: '60px', 'text-align': 'center' }}>
          { children }
        </Content>
        <Footer />
      </Layout>
      <style jsx>{`
        @media (min-width: 1281px) {
          .container {
            width: 100%;
          }
        }
        @media (max-width: 1280px) {
          .container {
            width: 1280px !important;
          }
        }
      `}</style>
    </div>
  </LocaleProvider>
)

export default PageLayout
