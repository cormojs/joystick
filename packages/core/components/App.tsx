import React from 'react'

import { useIllust } from '../hooks/useIllust'
import { Picture } from './Picture'
import { Illust } from '../models/Illust';

export function App() {
  const [illust, setIllust] = useIllust()
  return (
    <Picture
      illustId={illust.illustId}
      onClose={() => setIllust(new Illust(undefined)) } />
  )
}