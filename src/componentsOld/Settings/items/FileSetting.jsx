import classes from "../Settings.module.css";

/**
 * @param {{title: string, description: string, value: string, onValueChange: (key: string, value: string | number | boolean) => void }} props 
 */
export default function DirectorySetting({ name, title, description, value, onValueChange }) {
  return (
    <div className={classes.item}>
      <div className={classes.itemTitle}>
        <h3 className='title-general-bold'>{title}</h3> <h4 className={classes.disableconfig}>Desabilitado</h4>
      </div>

      <p className={classes.itemDescription}>{description}</p>
      <p>Directorio actual: <pre>{value}</pre></p>
    </div>
  );
}