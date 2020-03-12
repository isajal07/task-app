import React from 'react';
import dataset from './dataset';

import HeatMap from "react-heatmap-grid";

const yLabels = ["00", "", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16", "", "18", "", "20", "", "22", ""];
const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const xLabels=["1","2","3","4"]
// const yLabels=["Sun", "Mon", "Tue", "Wed"]

//   const dateList = dataset.map(a=>a.date)
//   const stringDate = new Date(dateList[10])

//   console.log(stringDate.toString().split(' ')[0])
//   const timeInList = dataset.map(a=>a.timeIn.slice(0,2))
//   const timeOutList = dataset.map(a=>a.timeOut.slice(0,2))
//   const time = timeInList.concat(timeOutList)



//   var uniqs = time.reduce((acc, val) => {
//     acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
//     return acc;
//   }, {});
//   console.log(uniqs)

// const number = () => Math.random() * 4;

// const data = new Array(yLabels.length)
//   .fill(1)
//   .map(() =>
//     new Array(xLabels.length).fill(1).map(() => Math.floor(number())));
// const data = [[4,2,4,2],[2,4,2,4],[3,1,3,1],[1,3,1,3]];


//Static data from the dataset
const data = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 3, 1, 1, 1, 1],
  [1, 1, 2, 1, 3, 1, 1],
  [1, 1, 2, 2, 2, 1, 1],
  [1, 1, 2, 2, 2, 1, 1],
  [1, 1, 1, 2, 2, 1, 1],
  [1, 1, 2, 2, 2, 1, 1],
  [1, 1, 2, 1, 2, 1, 1],
  [1, 1, 2, 2, 2, 1, 1],
  [1, 1, 1, 1, 2, 1, 1],
  [1, 1, 2, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1]
]
const index = [[1, 2, 3, 4]];

function App() {

  return (
    <div className="ui container segment">
      Time
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"bottom"}
        data={data}

        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (3.5 - min)})`,
          borderStyle: 'solid',
          borderWidth: '0.4pt',
          borderColor: 'grey'

        })}
      />
      <br /> <br />
      <HeatMap
        xLabels={["", "", "", ""]}
        yLabels={[""]}
        xLabelsLocation={"bottom"}
        data={index}
        squares
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / 7})`,
          margin: '0.5px',
          borderStyle: 'solid',
          borderWidth: '0.1px',
          borderColor: 'grey',

        })}
      />

    </div>
  );

}


export default App;
