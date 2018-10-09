import React from 'react'
import { Layout} from 'antd';
import { Button } from 'antd';
import { Icon } from 'antd';
import './footer.css'
const { Footer } = Layout;

const styles={
  margins: {
     marginRight: "20px"
  }
}

class Inferior extends React.Component {



  render() {
    return (
 
    <Footer className="footer">
       <div className="sucursales">
          <Button type="dashed"  style={styles.margins} >General</Button>
          <Button type="primary" style={styles.margins} disabled>Sucursal 1</Button>
          <Button type="primary" style={styles.margins} disabled>Sucursal 2</Button>
          <Button type="primary" style={styles.margins} disabled>Sucursal 3</Button>  
         
       </div>
      
      <div className="sucursal_adicional">
        <Button type="primary" style={styles.margins} shape="circle" size="26px" disabled><Icon type="plus" style={{fontSize: '26px'}} /></Button> 
        <Icon type="star" theme="filled" style={{color:'#FFBF00',fontSize: '26px', marginRight:"10px"}}/>
        <Icon type="lock" theme="filled" style={{color:'#000000',fontSize: '26px',  marginRight:"10px"}} /> Añadir
      </div>
     
     
    </Footer>


    );
  }
}

export default Inferior;