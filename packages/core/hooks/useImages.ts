import React from 'react'

export function useImages(illustId?: string) {
  const [images, setImages] = React.useState<(string | undefined)[]>([])
  React.useEffect(() => {
    if (illustId != null) {
      setImages([])
      fetch(`http://nijie.info/view_popup.php?id=${illustId}`)
        .then(resp => resp.text())
        .then(body => {
          const dom = new DOMParser().parseFromString(body, 'text/html')
          dom
            .querySelectorAll('#img_window img:not(.filter)')
            .forEach(elem => {
              setImages(images => images.concat([elem.getAttribute('src') || undefined]))
            })
        })
      }
    }, [illustId])
  return images
}