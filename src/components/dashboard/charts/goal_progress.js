import React, {PureComponent, useState, useEffect} from 'react';
import {useQuery, Loading, Error} from 'react-admin';
// import Tree from 'react-d3-tree';
import './GoalTree';
import { GoalTree } from "./GoalTree";


class GoalProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };

    console.log('constructor')
    console.log('State After:', this.state)
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/goals/7")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
            translate: {
              x: 20,
              y: 20
            }
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    console.log('componentDidMount')
    console.log('State After:', this.state)
  }


  render() {
    const {error, isLoaded, data} = this.state;

    console.log('render')
    console.log('State Before:', this.state)

    const cluster = data.resolve();
    // const cluster = {
    //   "name": "T",
    //   "children": [{
    //     "name": "A",
    //     "children": [
    //       { "name": "A1" },
    //       { "name": "A2" },
    //       { "name": "C",
    //         "children": [{
    //           "name": "C1"
    //         }]},
    //     ]}, {
    //     "name": "B",
    //     "children": [
    //       { "name": "B1"},
    //       { "name": "B2"},
    //       { "name": "B3"},
    //     ]},{
    //     "name": "X",
    //     "children": [{
    //       "name": "Z"
    //     }]}
    //   ],
    // };

    const myTreeData = [
      {
        name: 'Top Level',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        children: [
          {
            name: 'Level 2: A',
            attributes: {
              keyA: 'val A',
              keyB: 'val B',
              keyC: 'val C',
            },
            children: [
              {
                name: 'Level 2: A',
                attributes: {
                  keyA: 'val A',
                  keyB: 'val B',
                  keyC: 'val C',
                },
                children: [
                  {
                    name: 'Level 2: A',
                    attributes: {
                      keyA: 'val A',
                      keyB: 'val B',
                      keyC: 'val C',
                    },
                  },
                  {
                    name: 'Level 2: B',
                  },
                ],
              },
              {
                name: 'Level 2: B',
              },
            ],
          },
          {
            name: 'Level 2: B',
            attributes: {
              keyA: 'val A',
              keyB: 'val B',
              keyC: 'val C',
            },
            children: [
              {
                name: 'Level 2: A',
                attributes: {
                  keyA: 'val A',
                  keyB: 'val B',
                  keyC: 'val C',
                },
                children: [
                  {
                    name: 'Level 2: A',
                    attributes: {
                      keyA: 'val A',
                      keyB: 'val B',
                      keyC: 'val C',
                    },
                  },
                  {
                    name: 'Level 2: B',
                  },
                ],
              },
              {
                name: 'Level 2: B',
              },
            ],
          },
        ],
      },
    ];


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        /* <Tree /> will fill width/height of its container; in this case `#treeWrapper` */
        <div id="treeWrapper" style={{width: '100em', height: '50em'}}>

          <GoalTree data={cluster} height={500} width={500}/>

        </div>
      )
    }
  };
}

export default GoalProgress;

