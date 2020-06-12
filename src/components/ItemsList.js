import React from 'react';

class ItemsList extends React.PureComponent {
    render() {
      console.log("ARGH");
      return (
        <div id="items">
          <ol>
            {
              this.props.items.map(item => {
                return (
                  <li className="item" key={item.key}>
                    <span>{item.value}</span>
                    <button className="item-delete" onClick={() => this.props.handleDelete(item.key)}>X</button>
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