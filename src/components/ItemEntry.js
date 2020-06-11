import React from 'react';

class ItemEntry extends React.Component {
    render() {
      return (
        <div id="item-entry">
          <form onSubmit={(e) => this.props.handleSubmit(e)}>
            <input type="text" placeholder="Item" value={this.props.inputValue} onChange={this.props.handleChange} />
            <button id="add-button" type="submit" disabled={this.props.inputValue === ""}>+</button>
          </form>
        </div>
      );
    }
  }

  export default ItemEntry;