import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
// import Layout from 'react-tackle-box/Layout'
// import Card from '../Card'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'


const propTypes = {}

function Card({ children, className, style }) {
  return (
    <div className={`${className || ''} card`} style={style}>
      {children}
    </div>
  )
}

Card.propTypes = propTypes

const DragAndDropCalendar = withDragAndDrop(Calendar)
const formatName = (name, count) => `${name} ID ${count}`
const events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
]

class Dnd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events,
      draggedEvent: null,
      counters: {
        item1: 0,
        item2: 0,
      },
      displayDragItemInCell: true,
    }
  }

  handleDragStart = event => {
    this.setState({ draggedEvent: event })
  }

  handleDisplayDragItemInCell = () => {
    this.setState({
      displayDragItemInCell: !this.state.displayDragItemInCell,
    })
  }

  dragFromOutsideItem = () => {
    return this.state.draggedEvent
  }

  customOnDragOver = event => {
    // check for undroppable is specific to this example
    // and not part of API. This just demonstrates that
    // onDragOver can optionally be passed to conditionally
    // allow draggable items to be dropped on cal, based on
    // whether event.preventDefault is called
    if (this.state.draggedEvent !== 'undroppable') {
      console.log('preventDefault')
      event.preventDefault()
    }
  }

  onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent, counters } = this.state
    const event = {
      title: formatName(draggedEvent.name, counters[draggedEvent.name]),
      start,
      end,
      isAllDay: allDay,
    }
    const updatedCounters = {
      ...counters,
      [draggedEvent.name]: counters[draggedEvent.name] + 1,
    }
    this.setState({ draggedEvent: null, counters: updatedCounters })
    this.newEvent(event)
  }

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent(event) {
    let idList = this.state.events.map(a => a.id)
    let newId = Math.max(...idList) + 1
    let hour = {
      id: newId,
      title: event.title,
      allDay: event.isAllDay,
      start: event.start,
      end: event.end,
    }
    this.setState({
      events: this.state.events.concat([hour]),
    })
  }

  render() {
    return (
      <div>
        <Card className="examples--header" style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <h4 style={{ color: 'gray', width: '100%' }}>
              Outside Drag Sources
            </h4>
            {Object.entries(this.state.counters).map(([name, count]) => (
              <div
                style={{
                  border: '2px solid gray',
                  borderRadius: '4px',
                  width: '100px',
                  margin: '10px',
                }}
                draggable="true"
                key={name}
                onDragStart={() =>
                  this.handleDragStart({ title: formatName(name, count), name })
                }
              >
                {formatName(name, count)}
              </div>
            ))}
            <div
              style={{
                border: '2px solid gray',
                borderRadius: '4px',
                width: '100px',
                margin: '10px',
              }}
              draggable="true"
              key={1}
              onDragStart={() => this.handleDragStart('undroppable')}
            >
              Draggable but not for calendar.
            </div>
          </div>

          <div>
            <label>
              <input
                style={{ marginRight: 5 }}
                type="checkbox"
                checked={this.state.displayDragItemInCell}
                onChange={this.handleDisplayDragItemInCell}
              />
              Display dragged item in cell while dragging over
            </label>
          </div>
        </Card>
        <DragAndDropCalendar
          selectable
          localizer={this.props.localizer}
          events={this.state.events}
          onEventDrop={this.moveEvent}
          dragFromOutsideItem={
            this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
          }
          onDropFromOutside={this.onDropFromOutside}
          onDragOver={this.customOnDragOver}
          resizable
          onEventResize={this.resizeEvent}
          onSelectSlot={this.newEvent}
          onD
          defaultView={Views.MONTH}
          defaultDate={new Date(2015, 3, 12)}
        />
      </div>
    )
  }
}

export default Dnd
