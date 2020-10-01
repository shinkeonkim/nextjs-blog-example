import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBarLayout from './components/sideBarLayout';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {  
  render() {
    return (
      <>
        <SideBarLayout>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>shinkeonkim singun11@gmail.com</Footer>
          </Layout>
        </SideBarLayout>
      </>
    );
  }
}

export default Home;
