import React from "react";
import './Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
    };
  }
  handleOnInputChange = (e) => {
    const { users } = this.props.users;
    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = users.filter(user => regex.test(user.name));
    }

    this.setState(() => ({
      suggestions,
      text: value,
    }));
  };

  suggestionSelected = (suggestion, e) => {
    this.setState(() => ({
      text: suggestion.name,
      suggestions: [],
    }));
    this.doThisOnSuggestionSelected(suggestion, e);
  };

  doThisOnSuggestionSelected = (suggestion, e) => e.view.location.assign(`/user/${suggestion.id}`);

  renderSuggestions = () => {
    const { suggestions } = this.state;
    console.log("suggestions :", suggestions);
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.name} onClick={(e) => this.suggestionSelected(suggestion, e)}>
            {suggestion.name}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { text } = this.state;
    return (
      <div className="s-container">
        <div className="s-container__heading">Search any user</div>
        <label className="s-container__label" htmlFor="search-input">
          <input
            type="text"
            value={text}
            id="search-input"
            placeholder="Search by Name..."
            onChange={this.handleOnInputChange}
          />
          <i className="fa fa-search fa-2x s-container__icon" />
        </label>
        <div className="s-container__autocompletebox">
        {this.renderSuggestions()}
        </div>
      </div>
    );
  }
}
export default Search;
