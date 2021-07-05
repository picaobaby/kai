import React, { useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import TimeSlot from './components/TimeSlot'
import "./index.css"
import initData from './data_new.json'

function App() {
  const [data, setData] = useState(initData)

  const handleDragEnd = (result) => {
    if (!result.destination) return 

    const cloneData   = {...data}
    const groupIdFrom = result.source.droppableId
    const groupIdTo   = result.destination.droppableId
    const indexFrom   = result.source.index
    const indexTo     = result.destination.index

    const dataFrom    = cloneData[groupIdFrom]
    const dataTo      = cloneData[groupIdTo]
    const cloneDataFrom   = [...dataFrom]
    const cloneDataTo     = [...dataTo]

    // same group
    if (groupIdFrom === groupIdTo) {
      const [removed] = cloneDataFrom.splice(indexFrom, 1)
      cloneDataFrom.splice(indexTo, 0, removed)
      cloneData[groupIdFrom]  = cloneDataFrom
      setData(cloneData)
    } 
    // diff groups
    else {
      const [removed] = cloneDataFrom.splice(indexFrom, 1)
      cloneDataTo.splice(indexTo, 0, removed)
      cloneData[groupIdFrom]  = cloneDataFrom
      cloneData[groupIdTo]    = cloneDataTo
      setData(cloneData)
    }
  }

  return (
    <div id="content">
      <h1>Workout Scheduling</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
      <ul className="timeline">
        {Object.keys(data).map((groupId, indexGroup) => {
          const dataGroup = data[groupId]
          return <TimeSlot dataGroup={dataGroup} groupId={groupId} key={indexGroup} />
        })}
      </ul>
      </DragDropContext>
    </div>
  )
}

export default App
