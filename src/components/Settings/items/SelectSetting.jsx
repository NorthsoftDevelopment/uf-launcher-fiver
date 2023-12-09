import classes from "../Config.module.css";

/**
 * @template ValueT
 * @param {{name: string, title: string, description: string, options: {value: ValueT, label: string}[], value: ValueT, onValueChange: (name: string, value: string | number | boolean) => void }} props 
 */
export default function SelectSetting({ name, title, description, options, value, onValueChange }) {
  return (
    <div className={ [classes.item, classes.itemRow].join(" ") }>
      <div className={ classes.itemText }>
        <h2 className={ classes.itemTitle }>{ title }</h2>
        <p className={ classes.itemDescription }>{ description }</p>
      </div>
      <div className={ classes.itemValue }>
        <select name={ name } onChange={(e) => onValueChange(name, e.target.value)}>
          { options.map(({ value, label }) => (<option key={value} value={ value }>{ label }</option>)) }
        </select>
      </div>
    </div>
  );
}