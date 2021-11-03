import React from 'react';
import axios from 'axios';

export default class LoanTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message1: "",
      message2: "",
      message3: "",
      items: [],
      loanDetails: [],
      loanData: [],
    }

    axios.get(`http://localhost:4000/api/usersExpenseData/get/${props.ID}`)
    .then((res) => {
        // setAccData(res.data);
        console.log(res.data);
    })
    .catch( (error) => {
        console.log(error);
    })
  }

  updateMessage1(event) {
    this.setState({
      message1: event.target.value
    });
  }
  updateMessage2(event) {
    this.setState({
      message2: event.target.value
    });
  }
  updateMessage3(event) {
    this.setState({
      message3: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;
    var loanDetails = this.state.loanDetails;

    loanDetails.push(this.state.message1)
    loanDetails.push(this.state.message2)
    loanDetails.push(this.state.message3)
    items.push(loanDetails)
    this.setState({
      items: items,
      loanDetails: [],
      message1: "",
      message2: "",
      message3: "",
    });
  }

  handleItemChanged1(i, event) {
    var items = this.state.items;
    items[i][0]  = event.target.value;

    this.setState({
      items: items
    });
  }
  handleItemChanged2(i, event) {
    var items = this.state.items;
    items[i][1]  = event.target.value;

    this.setState({
      items: items
    });
  }
  handleItemChanged3(i, event) {
    var items = this.state.items;
    items[i][2]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    <input
                      type="text"
                      value={o[0]}
                      onChange={context.handleItemChanged1.bind(context, i)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={o[1]}
                      onChange={context.handleItemChanged2.bind(context, i)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={o[2]}
                      onChange={context.handleItemChanged3.bind(context, i)}
                    />
                  </td>
                  <td>
                    <button onClick={context.handleItemDeleted.bind(context, i)} >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
        <div>
            <h3 className="WelcomeText-profile">
                Enter Loan/EMI
                <div className="blackLine-profile"></div>
            </h3>
            <table className="">
                <thead>
                    <tr>
                        <th>
                            Loan Name
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Due Date
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
            <input
                type="text"
                placeholder = "Loan Name"
                value={this.state.message1}
                onChange={this.updateMessage1.bind(this)}
            />
            <input
                type="text"
                placeholder = "Amount"
                value={this.state.message2}
                onChange={this.updateMessage2.bind(this)}
            />
            <input
                type="text"
                placeholder = "dd/mm/yyyy"
                value={this.state.message3}
                onChange={this.updateMessage3.bind(this)}
            />
            <button onClick={this.handleClick.bind(this)} >
                Add Loan
            </button>
        </div>
    );
  }
}