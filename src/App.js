import React from 'react';
import './App.css';
import { Layout, Descriptions } from 'antd';

const { Header, Footer, Content } = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTitle: '',
    };
  }

  render() {
    return (
      <>
        <Layout>
          <Header className='title'>用户服务卡</Header>
          <Content className='formTable'>
            <Descriptions
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item className='Lines' label='产品型号:'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
              <Descriptions.Item className='Lines' label='项目名称:'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
              <Descriptions.Item className='Lines' label='项目地址:'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
              <Descriptions.Item className='Lines' label='GPS信息：'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
              <Descriptions.Item className='Lines' label='安装时间：'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
              <Descriptions.Item className='Lines' label='维护单位:'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
              <Descriptions.Item className='Lines' label='售后服务电话:'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
              <Descriptions.Item className='Lines' label='产品串号:'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
              <Descriptions.Item className='Lines' label='维修记录:'>
                <span className='underLine'>FR-uk60L</span>
              </Descriptions.Item>
            </Descriptions>
          </Content>
          <Footer className='footer'>北京致为技术有限公司</Footer>
        </Layout>
      </>
    );
  }
}
