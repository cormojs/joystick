import React from 'react'

import { Illust } from '../models/Illust'

export function useIllusts(setCounter: (n: number) => void): [Illust[], React.Dispatch<React.SetStateAction<Illust[]>>] {
  const [illusts, setIllusts] = React.useState<Illust[]>([])
  var counter = 0

  React.useEffect(() => {
    const handleClick = (event: Event) => {
      event.preventDefault()
      const img = (event.target || undefined) as Element
      setCounter(img != null ? parseInt(img.getAttribute('data-index') || "0") : 0)
      setIllusts(
        Array.from<Element>(document.querySelectorAll('.nijiedao'))
          .map(elem => {
            const img = elem.querySelector('img')
            return new Illust(
              img != null ? img.getAttribute('illust_id') || undefined : undefined
            )
          })
      )
    }
    document
      .querySelectorAll('.nijiedao')
      .forEach(elem => {
        const img = elem.querySelector('img')
        if (img != null) {
          img.setAttribute('data-index', `${counter++}`)
          img.addEventListener('click', handleClick)
        }
      })
    return () => {
      document
      .querySelectorAll('.nijiedao')
      .forEach(elem => {
        const img = elem.querySelector('img')
        if (img != null) {
          img.removeAttribute('data-index')
          img.removeEventListener('click', handleClick)
        }
      })
    }
  })
  return [illusts, setIllusts]
}