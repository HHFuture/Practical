import * as React from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export default class MyDropdown extends React.Component {
  state = {
    options: [],
    selectedKey: null
  };

  componentDidMount() {
    this.loadOptions();
  }

  loadOptions = async () => {
    const items = await sp.web.lists.getByTitle('YourListName').items.select('Title').get();
    const options = items.map(item => ({ key: item.Title, text: item.Title }));
    this.setState({ options });
  };

  onChange = (event, option) => {
    this.setState({ selectedKey: option.key });
    this.filterList(option.key);
  };

  filterList = async (key) => {
     // Implement your filtering logic here
    const filteredItems = await sp.web.lists.getByTitle('Cars').items.filter(`Title eq '${key}'`).get();
    // Update your component state or UI with the filtered items
  };
  
  render() {
    return (
      <Dropdown
        placeholder="Select an option"
        options={this.state.options}
        onChange={this.onChange}
        selectedKey={this.state.selectedKey}
      />
    );
  }
}
