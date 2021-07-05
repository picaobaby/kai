import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import WorkoutMove from './WorkoutMove'
import workoutData from '../data/workouts.json'

function TimeSlot({groupId, dataGroup}) {

  const xxx_dataGroup = {
      "group_0": {
          "id"        : "group_0",
          "name"      : "Group 0 Name",
          "desc"      : "Group 0 some description here",
          "time_range": "6:00 - 7:00 AM",
          "workouts"  : ["workout_0", "workout_1", "workout_3"]
      },        
      "group_1": {
          "id"        : "group_1",
          "name"      : "Group 1 Name",
          "desc"      : "Group 1 some description here, looks like this works",
          "time_range": "7:00 - 8:00 AM",
          "workouts"  : ["workout_1", "workout_3"]
      }, 
      "group_2": {
          "id"        : "group_2",
          "name"      : "Group 2 Name",
          "desc"      : "Group 2 some description here",
          "time_range": "8:00 - 9:00 AM",
          "workouts"  : ["workout_0", "workout_1", "workout_3"]
      },        
      "group_3": {
          "id"        : "group_3",
          "name"      : "Group 3 Name",
          "desc"      : "Group 3 some description here, looks like this works",
          "time_range": "9:00 - 10:00 AM",
          "workouts"  : ["workout_1", "workout_3"]
      }   
  }

    return (
      <li className="event" data-date="7:00 - 8:00 AM">
        <h3>Opening Ceremony</h3>
        <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an opening show.</p>    
  
        <Droppable droppableId={`${groupId}`} direction="horizontal">
        {(provided, snapshot) => (
          <div className="droppable-area" ref={provided.innerRef} {...provided.droppableProps}>
          {/* 
          {xxx_dataGroup.map( (item, index) => (
            <WorkoutMove item={item} index={index} key={index} />
          ))}
           */}
          
          {Object.keys(xxx_dataGroup).map((groupId, index) => {
            const workouts = xxx_dataGroup[groupId]['workouts']       // ['workout_0', 'workout_3']

           workouts.map( (workoutId, indexItem) => {
            let itemData = workoutData[workoutId]
            console.log('workoutId --------' + workoutId)
            console.log('item data -------- ' + itemData)
             return <WorkoutMove item={itemData} index={indexItem} key={indexItem} />
           })

          })}
          {provided.placeholder}
          </div>
        )}
        </Droppable>
      </li>
    )
}

export default TimeSlot
