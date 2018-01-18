import { Pagination } from 'antd'
import Layout from '../src/components/common/layout'
import withData from '../src/lib/withData'
import locales from '../src/locales'

export const About = () => (
  <Layout>
    <div>
      <h1>{locales.t('greeting')}</h1>
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </div>
  </Layout>
)

export default withData(About)
