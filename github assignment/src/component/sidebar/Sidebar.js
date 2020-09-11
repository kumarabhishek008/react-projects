import React,{useState} from 'react'
import './Sidebar.scss';
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Button,
    Label,
    Image
  } from 'semantic-ui-react'
function AddSidebar() {
    const [visible, setVisible] = useState(true)
    const showBar =()=> {
        setVisible(true);
    }
    const hideBar =()=> {
        setVisible(false);
    }
    return (
        <>
 <Grid id="m-grid">
      <Grid.Column width={2} id="s-grid">
        <Sidebar.Pushable as={Segment} id="m-sidebar">
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            
            onMouseOver={showBar}
           
            vertical
            visible={visible}
            width='thin'
            id="s-sidebar"
          >
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Games</Menu.Item>
            <Menu.Item as='a'>Channels</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
        </>
    )
}

export default AddSidebar
