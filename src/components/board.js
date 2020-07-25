import React from 'react'
import Item from './item'

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cards: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/cards/")
      .then(res => res.json())
      .then(
        (result) => 
        {
          console.log(result);
          this.setState({
            isLoaded: true,
            cards: result.cards
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, cards } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="field has-addons">
            <p className="control is-expanded">
              New Item:
          <input type="text" className="input" />
              <button className="button is-info has-text-weight-bold">
                Add
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
                {cards.map(item => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      )
    }
  }
}