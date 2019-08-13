import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { List, ListItem, ListItemIcon } from '@material-ui/core';

export class Sidebar extends React.Component {
  render() {
    return (
      <Drawer open={true} variant="permanent">
      <div>
        <List>
          <ListItem>
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
          </ListItem>
        </List>
      </div>
    </Drawer>
    )
  }
}