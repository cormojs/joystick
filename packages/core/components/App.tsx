import React from 'react'

import { useIllusts } from '../hooks/useIllusts'
import { Picture } from './Picture'

export function App() {
  const [counter, setCounter] = React.useState<number>(0)
  const [illusts, setIllusts] = useIllusts(n => setCounter(n))

  return (
    <Picture
      illustId={illusts.length > 0 ? illusts[counter % illusts.length].illustId : undefined}
      onClose={() => setIllusts([])}
      onClick={() => setCounter(n => n+1)}
    />
  )
}