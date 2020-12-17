import React from "react"
import { connect } from "react-redux"
import { addItem } from "../Actions"

import QuantityChanger from "./QuantityChanger"
import RemoveButton from "./RemoveButton"

const Card = ({ item, addItem, addedItems }) => {

  const getCardAction = () => {
    return addedItems.hasOwnProperty(item.id) ? (
      <div className="quantity-group">
        <QuantityChanger id={item.id} />
        <RemoveButton id={item.id} />
      </div>
    ) : (
      <button className="btn red waves-effect" onClick={() => addItem(item)}>
        Add Item
      </button>
    )
  }

  return (
    <div className="card">
      <div className="card-image responsive-img materialboxed">
        <img src={item.img} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title red-text" style={{ fontWeight: 500 }}>
          {item.title}
        </span>
        <p>{item.desc}</p>

        <h5 style={{ marginTop: '20px'}}><span className="orange-text">Price: </span> {item.price}</h5>
      </div>

      <div className="card-action">{getCardAction()}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { addedItems: state.cartItems.items }
}

export default connect(mapStateToProps, { addItem })(Card)