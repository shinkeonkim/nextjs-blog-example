import ContentLayout from './components/contentLayout';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Profile extends React.Component {
  render() {
    return (
      <ContentLayout title = "profile">
        
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          Bill is a cat.
        </div>
      </ContentLayout>
    );
  }
}


export default Profile;