import React from 'react'
import Item from './item'

export default function Navbar() {
  const items = [
    {
      "id": Date.now(),
      "value": "Kudos to team",
      "likes": 1
    },
    {
      "id": Date.now()+1,
      "value": "Stuff didn't go well",
      "likes": 0  
    }
  ]
  return (
    <div>
      <div className="field has-addons">
        <p className="control is-expanded">
          <input type="text" className="input" />
        </p>
        <p className="control">
          <button className="button is-info has-text-weight-bold">
            Add Item
                </button>
        </p>
      </div>
      <div>
        <div className="hero is-info">
          <div className="hero-body has-text-centered">
            <p className="title is-1">Items</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            {items.map(item => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}