import React from 'react';

class ItemsList extends React.Component {
    render() {
      return (
        <div id="items">
          <ol>
            {
              Object.entries(this.props.items).map((item, idx) => {
                return (
                  <li className="item" key={item[0]}>
                    <span>{item[1]}</span>
                    <button className="item-delete" onClick={() => this.props.handleDelete(item[0])}>X</button>
                  </li>
                );
              })
            }
          </ol>
        </div>
      );
    }
  }

  export default ItemsList;