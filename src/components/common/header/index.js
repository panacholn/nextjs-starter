import { Layout, Menu } from 'antd'

const { Header } = Layout

const PageHeader = () => (
  <Header>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px', display: 'inline-block' }}
    >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
      <Menu.Item key="4">nav 4</Menu.Item>
      <Menu.Item key="5">nav 5</Menu.Item>
      <Menu.Item key="6">nav 6</Menu.Item>
      <Menu.Item key="7">nav 7</Menu.Item>
    </Menu>
    <style jsx>{`
      .logo {
        display: inline-block;
        height: 64px;
        width: 128px;
        background: #404040 url('/static/images/logo_jobthai.jpg') no-repeat;
        background-size: 128px;
      }
    `}</style>
  </Header>
)

export default PageHeader
