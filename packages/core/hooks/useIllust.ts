import React from 'react'

import { Illust } from '../models/Illust'

export function useIllust(): [Illust, React.Dispatch<React.SetStateAction<Illust>>] {
  const [illust, setIllust] = React.useState<Illust>(new Illust(undefined))

  React.useEffect(() => {
    const handleClick = (event: Event) => {
      event.preventDefault()
      window.console.log('before')
      const img = event.target as HTMLElement
      window.console.log('after')
      setIllust(new Illust(
        img != null ? img.getAttribute('illust_id') || undefined : undefined
      ))
    }
    document
      .querySelectorAll('.nijiedao')
      .forEach(elem => {
        const img = elem.querySelector('img')
        if (img != null) {
          img.addEventListener('click', handleClick)
        }
      })
    return () => {
      document
      .querySelectorAll('.nijiedao')
      .forEach(elem => {
        const img = elem.querySelector('img')
        if (img != null) {
          img.removeEventListener('click', handleClick)
        }
      })
    }
  })
  return [illust, setIllust]
}