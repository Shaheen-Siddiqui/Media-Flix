import React from 'react'
import Video from '../components/video/Video'
import EmptyCaseMessages from '../components/emptyCaseMessages/EmptyCaseMessages'

const WatchLater = () => {
  return (
    <div>
      <Video/>
      <EmptyCaseMessages message="Marked any video into Watchlater" buttonMessage="Mark Now"/>

    </div>
  )
}

export default WatchLater
