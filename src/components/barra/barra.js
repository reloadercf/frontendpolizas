import React from 'react'
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Popover, Button } from 'antd';
import { Avatar } from 'antd';
import esteban from './esteban.png'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Barra extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
    <Row>
      
      
    
      <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
        <Col span={10} push={0}>
          <Menu.Item key="mail">
          <Popover placement="bottom" title={"Notificaciones"} content={"visita www.dipra.com.mx"} trigger="click">
        <Button>
            <Icon type="notification" theme="outlined"  style={{ fontSize: '26px' }} />
       </Button>
      </Popover>
          </Menu.Item>
        </Col>
        <SubMenu title={<span className="submenu-title-wrapper"><p  style={{ fontSize: '26px' }}>Promotor <Icon type="appstore" theme="outlined" style={{ fontSize: '26px' }}/></p></span>}>
        
            <MenuItemGroup title="Configurar">
              <Menu.Item key="setting:1"><p  style={{ fontSize: '20px' }}><Avatar size="large" src={esteban}/>Perfil</p></Menu.Item>
              <Menu.Item key="setting:2"><p  style={{ fontSize: '20px' }}><Icon type="setting" theme="outlined" style={{ fontSize: '16px' }}/>Sistema</p></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Administrar">
              <Menu.Item key="setting:3"><p  style={{ fontSize: '20px' }}><Icon type="loading" theme="outlined" style={{ fontSize: '16px' }} />Cuenta</p></Menu.Item>
              <Menu.Item key="setting:4"><p  style={{ fontSize: '20px' }}><Icon type="usergroup-add" theme="outlined" style={{ fontSize: '16px' }} />Usuarios</p></Menu.Item>
              <Menu.Item key="setting:4"><p  style={{ fontSize: '20px' }}><Icon type="usergroup-add" theme="outlined" style={{ fontSize: '16px' }} />Cerrar Sesión</p></Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </Row>
  </div>
    );
  }
}

export default Barra;