import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Dialog, List, ListItem } from '@material-ui/core';
import { useImages } from '../hooks/useImages'

const useStyles = makeStyles(
  createStyles({
    jsPicture: {
      width: 'auto',
      height: 'auto'
    }
  })
)

export const Picture = (props: { illustId?: string, onClose(): void }) => {
  const classes = useStyles()
  const images = useImages(props.illustId)
  return (
    <Dialog
      open={props.illustId != null}
      maxWidth="lg"
      onClose={props.onClose}
    >
      <div>
        <div className={classes.jsPicture}>
          <List>
            { images.map(image => (
              <ListItem>
                <img src={image} />
              </ListItem>
            )) }
          </List>
        </div>
      </div>
    </Dialog>
  )
}