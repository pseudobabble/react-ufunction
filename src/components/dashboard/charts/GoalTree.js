import React from 'react';
import { Group } from '@vx/group';
import { Cluster } from '@vx/hierarchy';
import { LinkVertical } from '@vx/shape';
import { hierarchy } from 'd3-hierarchy';
import { LinearGradient } from '@vx/gradient';
import { Node } from './nodes'

// todo REFACTOR: styling should not be hardcoded
//todo REFACTOR: graph links should be expandable

export class GoalTree extends React.Component {
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
    fetch("http://127.0.0.1:8000/goals/14")
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

    let map_children = function(d) {
      return d.subgoals;
    }
    const root_data = hierarchy(data, map_children);

    let margin = {
      top: 40,
      left: 0,
      right: 0,
      bottom: 110
    }

    let width = 1300
    let height = 700
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const green = '#79d259';
    const aqua = '#37ac8c';
    const merlinsbeard = '#f7f7f3';
    const bg = '#306c90'

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <svg width={width} height={height}>
            <LinearGradient id="top" from={green} to={aqua}/>
            <rect width={width} height={height} rx={14} fill={bg}/>
            <Cluster root={root_data} size={[xMax, yMax]}>
              {data => {
                return (
                  <Group top={margin.top} left={margin.left}>
                    {data.links().map((link, i) => {
                      console.log(link, i);
                      return (
                        <LinkVertical
                          key={`cluster-link-${i}`}
                          data={link}
                          stroke={merlinsbeard}
                          strokeWidth="1"
                          strokeOpacity={0.2}
                          fill="none"
                        />
                      );
                    })}
                    {data.descendants().map((node, i) => {
                      console.log(node, i);
                      return <Node key={`cluster-node-${i}`} node={node}/>;
                    })}
                  </Group>
                );
              }}
            </Cluster>
          </svg>
        </div>
      )
    }
  }
}
