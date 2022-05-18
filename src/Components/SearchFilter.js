import { Component } from "react";

import { user_data } from "./user_DATA";
import "./SearchFilter.css";

class SearchFilter extends Component {
  state = {
    keyword: "",
  };

  handleInputChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    const keyword = this.state.keyword.toLowerCase();
    const keywordRegExp = RegExp(keyword, "ig");
    let newFirstName, newLastName, newEmail;

    const userDataFilter = (row) => {
      // const keyword = this.state.keyword.toLowerCase()

      return (
        row.first_name.toLowerCase().includes(keyword) ||
        row.last_name.toLowerCase().includes(keyword) ||
        row.email.toLowerCase().includes(keyword)
      );
    };

    const tablerows = user_data.filter(userDataFilter);
    const tablerows_elm = tablerows.map((row, index) => {
      if (keyword !== "" && row.first_name.toLowerCase().includes(keyword)) {
        newFirstName = row.first_name.replaceAll(keywordRegExp, (match) => {
          return `<mark>${match}</mark>`;
        });
      }

      if (keyword !== "" && row.last_name.toLowerCase().includes(keyword)) {
        newLastName = row.last_name.replaceAll(keywordRegExp, (match) => {
          return `<mark>${match}</mark>`;
        });
      }

      if (keyword !== "" && row.email.toLowerCase().includes(keyword)) {
        newEmail = row.email.replaceAll(keywordRegExp, (match) => {
          return `<mark>${match}</mark>`;
        });
      }

      // <div dangerouslySetInnerHTML={{__html: txt}}></div>
      return (
        <tr key={row.id}>
          <th scope="row">{index + 1} </th>

          {newFirstName ? (
            <td dangerouslySetInnerHTML={{ __html: newFirstName }}></td>
          ) : (
            <td> {row.first_name} </td>
          )}
          {newLastName ? (
            <td dangerouslySetInnerHTML={{ __html: newLastName }}></td>
          ) : (
            <td> {row.last_name} </td>
          )}
          {newEmail ? (
            <td dangerouslySetInnerHTML={{ __html: newEmail }}></td>
          ) : (
            <td> {row.email} </td>
          )}

          <td>{row.gender}</td>
        </tr>
      );
    });

    return (
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Search</label>
          <input
            type="text"
            className="form-control"
            value={this.state.keyword}
            onChange={this.handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            {" "}
            search for people's names or emails .
          </small>
        </div>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>{tablerows_elm}</tbody>
        </table>
      </div>
    );
  }
}

export default SearchFilter;
