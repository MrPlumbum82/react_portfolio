import React, { useState } from 'react'

import Main from './main/Main'
import Work from './work/Work'
import Play from './play/Play'
import Rest from './rest/Rest'

import '../styles/App.css'

const App = () => {
  const [sceneNo, setSceneNo] = useState(0)

  const handleSceneChange = (newSceneNo: number) => setSceneNo(newSceneNo);

  const setCurrentScene = (sceneNo: number) => {
    switch (sceneNo) {
      case 1:
        return <Work sceneChangeHander={handleSceneChange}></Work>
      case 2:
        return <Play sceneChangeHander={handleSceneChange}></Play>
      case 3:
        return <Rest sceneChangeHander={handleSceneChange}></Rest>
      default:
        return <Main sceneChangeHander={handleSceneChange}></Main>
    }
  };

  return (
    <div className="App">
      {setCurrentScene(sceneNo)}
    </div>
  )
}

export default App