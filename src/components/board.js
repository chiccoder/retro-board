import React, { useState } from 'react'

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <div className="navbar-item">
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
          </div>
        </div>
      </div>
  )
}