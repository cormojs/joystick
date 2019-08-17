import React from 'react'

export function useFavorited(illustId: string | undefined): [boolean, ((faved: boolean) => void)] {
  const [favorited, setFavorited] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (illustId != null) {
      fetch(`http://nijie.info/view.php?id=${illustId}`)
        .then(body => body.text())
        .then(text => {
          const dom = new DOMParser().parseFromString(text, "text/html")
          const link = dom.querySelector("#view-center-right li a")
          if (link != null) {
            setFavorited(link.getAttribute("id") === "bukuma")
          }
        })
      }
  }, [illustId])

  function favorite(faved: boolean): void {
    setFavorited(faved)
    if(faved) {
      fetch('http://nijie.info/bookmark_add.php', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `tag=&id=${illustId}`
      })
    } else {
      // todo bookmark_delete.php

    }
  }

  return [favorited, favorite]
}