import React from 'react'
import { Layout} from 'antd';
import { Button } from 'antd';
import { Icon } from 'antd';

const { Footer } = Layout;

class Inferior extends React.Component {
  state = {
    current: 'mail',
    size: 'large',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    this.setState({ size: e.target.value });
  }



  render() {
    return (
        <Layout style={{ background: '#fff'}}>
    <Footer style={{ textAlign: 'center'}}>
    <Button type="dashed">General</Button>
    <Button type="primary" disabled>Sucursal 1</Button>
    <Button type="primary" disabled>Sucursal 2</Button>
    <Button type="primary" disabled>Sucursal 3</Button>
    <Button type="primary" shape="circle" size="26px" disabled><Icon type="plus" style={{fontSize: '26px'}} /></Button> 
         <Icon type="star" theme="filled" style={{color:'#FFBF00',fontSize: '26px'}}/><Icon type="lock" theme="filled" style={{color:'#000000',fontSize: '26px'}} /> Añadir
    </Footer>
  </Layout>

    );
  }
}

export default Inferior;