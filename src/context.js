import React, { Component } from "react"
import items from "./data"
const RoomContext = React.createContext()
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  }

  componentDidMount() {
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter(room => room.featured === true)
    let maxPrice = Math.max(...rooms.map(item => item.price))
    let maxSize = Math.max(...rooms.map(item => item.size))

    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    })
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(img => img.fields.file.url)
      let room = { ...item.fields, images, id }
      return room
    })
    return tempItems
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find(room => room.slug === slug)
    return room
  }
  handleChange = event => {
    const type = event.target.type
    const name = event.target.name
    const value = event.target.value
  }

  filterRooms = () => {}
  render() {
    return <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>{this.props.children}</RoomContext.Provider>
  }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <RoomConsumer>{value => <Component {...props} context={value} />}</RoomConsumer>
  }
}

export { RoomProvider, RoomConsumer, RoomContext }
