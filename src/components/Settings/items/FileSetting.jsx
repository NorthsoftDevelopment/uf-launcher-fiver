import classes from "../Settings.module.css";

/**
 * @param {{title: string, description: string, value: string, onValueChange: (key: string, value: string | number | boolean) => void }} props 
 */
export default function DirectorySetting({ name, title, description, value, onValueChange }) {
  return (
    <div className={ classes.item }>
      <h2>{ title }</h2>
      <p className={ classes.itemDescription }>{description}</p>
    </div>
  );
}