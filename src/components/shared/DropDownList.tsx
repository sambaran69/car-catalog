import * as React from "react";

interface IDropDownListProps {
  id: string;
  dataSource: any[];
  name: string;
  value: string;
  text: string;
  size: string;
  onchange: () => void;
}

class DropDownList extends React.Component<IDropDownListProps, {}> {
  render() {
    const dropDown: IDropDownListProps = this.props;
    const optionContent = dropDown.dataSource.map((item, idx) => {
      const optionElem = <option key={idx} value={item[dropDown.value]}>{item[dropDown.text]}</option>;
      return optionElem;
    });
    const style = {width: dropDown.size};
    return (
      <select className="bs-select form-control" style={style} name={dropDown.name} onChange={dropDown.onchange}>
          <option value="-1"> Please select one ... </option>
          {optionContent}
      </select>
    );
  }
}

export default DropDownList;
