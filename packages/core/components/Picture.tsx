import React from 'react'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

import { Sidebar } from './Sidebar'
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
    <Modal 
      open={props.illustId != null}
      onClose={props.onClose}
    >
      <div>
        <Sidebar />
        <div className={classes.jsPicture}>
          { images.map(image => (<img src={image} />)) }
        </div>
      </div>
    </Modal>
  )
}