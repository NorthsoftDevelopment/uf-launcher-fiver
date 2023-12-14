import classes from "../Settings.module.css";

/**
 * @template ValueT
 * @param {{name: string, title: string, description: string, options: {value: ValueT, label: string}[], value: ValueT, onValueChange: (name: string, value: string | number | boolean) => void }} props 
 */
export default function SelectSetting({ name, title, description, options, value, onValueChange }) {
  return (
    <div className={[classes.item, classes.itemRow].join(" ")}>
      <div className={classes.itemText}>
        <div className={classes.itemTitle}>
          <h3 className='title-general-bold'>{title}</h3>
          <h4 className={classes.perfomanceconfig}>Rendimiento</h4>
        </div>
        <p className={classes.itemDescription}>{description}</p>
      </div>
      <div className={classes.itemValue}>
        <select className={classes.select} value={value} name={name} onChange={(e) => onValueChange(name, e.target.value)}>
          {options.map(({ value, label }) => (<option key={value} value={value}>{label}</option>))}
        </select>
      </div>
    </div>
  );
}