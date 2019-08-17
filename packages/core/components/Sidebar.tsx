import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import StarIcon from '@material-ui/icons/Star'
import StarOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import { Paper, List, ListItem } from '@material-ui/core';
import { useFavorited } from '../hooks/useFavorited';

export function Sidebar(props: { illustId?: string, onClose:() => void }) {
  const [isFavorited, setFavorited] = useFavorited(props.illustId)
  return (
    <Paper>
      <List>
        <ListItem onClick={props.onClose}>
          <ArrowBackIcon />
        </ListItem>
        <ListItem>
          <AssignmentIcon />
        </ListItem>
        <ListItem onClick={() => setFavorited(true)}>
          { isFavorited ? <StarIcon /> : <StarOutlinedIcon /> }
        </ListItem>

      </List>
    </Paper>
  )
}