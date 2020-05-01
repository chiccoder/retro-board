import React from 'react'

export default function Item(props) {
    return (
      <div className="card">
        <div className="card-content">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <p className={`title ${props.item.done ? "has-text-grey-light" : ""}`}>{props.item.value}</p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item buttons">
                <button className={`button has-text-weight-bold ${props.item.liked ? "is-warning" : "is-primary"}`}>{props.item.liked ? "Un-heart" : "Heart"}</button>
                <button className="button is-danger has-text-weight-bold">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }