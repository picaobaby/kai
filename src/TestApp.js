import React from 'react'

function TestApp() {
    const testObj = {
        g1:{
            id: "g1", 
            name: "group 1", 
            img: "1.jpg", 
            workouts: ['w1', 'w2', 'w3']
        }, 
        g2:{
            id: "g2", 
            name: "group 2", 
            img: "2.jpg", 
            workouts: ['w2', 'w3']
        }, 
        g3:{
            id: "g3", 
            name: "group 3", 
            img: "3.jpg", 
            workouts: ['w1']
        }
    }

    const testArr = [
        {
            id: "g1", 
            name: "group 1", 
            img: "1.jpg", 
            workouts: ['w1', 'w2', 'w3']
        },
        {
            id: "g2", 
            name: "group 2", 
            img: "2.jpg", 
            workouts: ['w2', 'w3']
        },
        {
            id: "g3", 
            name: "group 3", 
            img: "3.jpg", 
            workouts: ['w1']
        }
    ]

    const wList = {
        "w1": {
            "id"        : "workout_1",
            "name"      : "Workout 1 Name",
            "desc"      : "",
            "img"       : "2.jpg",
            "vid"       : "",
            "repeats"   : 10
        }, 
        "w2": {
            "id"        : "workout_2",
            "name"      : "Workout 2 Name",
            "desc"      : "",
            "img"       : "3.jpg",
            "vid"       : "",
            "repeats"   : 10
        }, 
        "w3": {
            "id"        : "workout_3",
            "name"      : "Workout 3 Name",
            "desc"      : "",
            "img"       : "4.jpg",
            "vid"       : "",
            "repeats"   : 10
        }
    }

    return (
        <div id="content" style={{color: "white"}}>
            {testArr.map( ({id, name, img, workouts}, index) => 
                <h1 key={index}>
                    { workouts.map( (wid, indexItem) => 
                        <div key={indexItem}>{wList[wid]['name']}</div>
                    )}
                </h1>
            )}
        </div>
    )
}

export default TestApp
