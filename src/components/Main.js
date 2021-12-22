import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Main extends Component {

  render() {
    return (
        
      <div className="container-fluid mt-5">
          <form onSubmit={(event) => {
                event.preventDefault()
                const content = this.postContent.value
                this.props.createPost(content)
            }}>
            <div className="form-group mr-sm-2">
                <input
                id="postContent"
                type="text"
                ref={(input) => { this.postContent = input }}
                className="form-control"
                placeholder="What's on your mind?"
                required />
            </div>
            <button
                className="btn btn-link btn-sm float-right pt-0"
                // name={this.post.id}
                onClick={(event) => {
                    let tipAmount = window.web3.utils.toWei('1', 'Ether')
                    this.props.tipPost(event.target.name, tipAmount)
                }}
                >
                TIP 1 ETH
                </button>
            </form>
      </div>
    );
  }
}

export default Main;