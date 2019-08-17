import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Dialog, List, ListItem, Grid } from '@material-ui/core';
import { useImages } from '../hooks/useImages'
import { Sidebar } from './Sidebar'

const useStyles = makeStyles(
  createStyles({
    jsPicture: {
      width: 'auto',
      height: 'auto'
    }
  })
)

export const Picture = (props: { illustId?: string, onClose(): void, onClick(): void }) => {
  const classes = useStyles()
  const images = useImages(props.illustId)
  return (
    <Dialog
      open={props.illustId != null}
      fullScreen
      maxWidth="lg"
      onClose={props.onClose}
    >
      <Grid container>
        <Grid item xs={1}>
          <Sidebar illustId={props.illustId} onClose={props.onClose} />
        </Grid>
        <Grid item xs={11}>
          <div className={classes.jsPicture}>
            <List>
              { images.map(image => (
                <ListItem onClick={() => props.onClick() }>
                  <img src={image} />
                </ListItem>
              )) }
            </List>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  )
}