import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

function WorkoutMove({item, index}) {
  // item, is each workout object, inside workouts: {{}, {}}
  console.log('Item -----' + item) 

    return (
      <Draggable draggableId={`${item.id}`} index={index}>
      {(provided, snapshot) => (
        <a href="/" className="drag" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <img className="workout_thumb" src={`../images/${item.img}`} alt={item.name} />
        </a>
        )}
      </Draggable>
    )
}

export default WorkoutMove
