import { useEffect, useRef } from "react";
import classes from "../Settings.module.css";

/**
 * @template ValueT
 * @param {{name: string, title: string, description: string, options: {value: ValueT, label: string}[], value: ValueT, onValueChange: (name: string, value: string | number | boolean) => void }} props 
 */
export default function SliderSetting({ name, title, description, options, value, onValueChange }) {
  /** @type {React.MutableRefObject<HTMLInputElement>} */
  const sliderEl = useRef();

  useEffect(() => {
    const updateBgGradient = (progress) => {
      const linear = `linear-gradient(to right, var(--slider-selected-bg) ${progress}%, var(--slider-bg) ${progress}%)`;
      sliderEl.current.style.background = linear;
    };

    const inputHandler = (event) => {
      const tempSliderValue = event.target.value;
      const progress = (tempSliderValue / sliderEl.current.max) * 100;
      updateBgGradient(progress);
    };

    sliderEl.current.addEventListener('input', inputHandler);

    // Set Initial progress
    const progress = (sliderEl.current.value / sliderEl.current.max) * 100;
    updateBgGradient(progress);

    return () => {
      sliderEl.current.removeEventListener('input', inputHandler);
    };
  }, []);

  return (
    <div className={ [classes.item, classes.itemColumn].join(" ") }>
      <div className={ classes.itemText }>
        <h2>{ title }</h2>
        <p>{ description }</p>
      </div>
      <div className={ classes.sliderContainer }>
        <input
          ref={ sliderEl }
          className={ classes.slider }
          type="range"
          min={ 0 }
          max={ options.length - 1 }
          value={ options.findIndex((v) => v == value) }
          onChange={ (e) => onValueChange(name, options[e.target.value]) }
        />
        <div className={ classes.sliderValue }>{ value } GB</div>
      </div>
    </div>
  );
}