import classes from "../Settings.module.css";

/**
 * @param {{title: string, description: string, value: string, onValueChange: (key: string, value: string | number | boolean) => void }} props 
 */
export default function DirectorySetting({ name, title, description, value, onValueChange }) {
  return (
    <div className={ classes.item }>
      <h3 className='title-general-bold'>{ title }</h3>
      <p className={ classes.itemDescription }>{description}</p>
    </div>
  );
}