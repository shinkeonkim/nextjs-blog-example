import Head from 'next/head';
import styles from '../../styles/Layout.module.css';

const userName = "shinkeonkim"
const siteName = "shinkeonkim's blog"

class Layout extends React.Component {
  render() {
    const { children, home } = this.props;
    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>
            {siteName}
          </title>
        </Head>
        <div className={styles.container}>
          {children}
        </div>
      </>
    )
  }
}

export default Layout;