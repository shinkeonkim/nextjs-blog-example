import SideBarLayout from './sideBarLayout';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class ContentLayout extends React.Component {
  render() {
    const {children, breadcrumbs, title} = this.props;

    return (
        <SideBarLayout>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 2 }}>
              <Breadcrumb style={{ margin: '16px 0'}}>
                <Breadcrumb.Item style={{color: 'white'}}> {title} </Breadcrumb.Item>
              </Breadcrumb>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              {children}
              <Footer style={{ textAlign: 'center' }}>shinkeonkim singun11@gmail.com</Footer>
            </Content>
          </Layout>
        </SideBarLayout>
      );
  }
}


export default ContentLayout;