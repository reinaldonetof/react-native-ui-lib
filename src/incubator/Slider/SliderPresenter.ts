import {SliderProps} from '../../components/slider';

export function getXForValue(value: number, trackWidth: number, props: SliderProps) {
  const {minimumValue = 0, maximumValue = 1} = props;

  const range = maximumValue - minimumValue;
  const relativeValue = minimumValue - value;
  const v = minimumValue < 0 ? Math.abs(relativeValue) : value - minimumValue; // for negative values
  const ratio = v / range;
  const x = ratio * trackWidth;
  return x;
}

function countDecimals(value: number) {
  if (Math.floor(value.valueOf()) === value.valueOf()) {
    return 0;
  }
  return value.toString().split('.')[1].length || 0; 
}

export function getValueForX(x: number, trackWidth: number, props: SliderProps) {
  const {minimumValue = 0, maximumValue = 1, step = 0} = props;

  if (trackWidth) {
    const ratio = x / trackWidth;
    const range = maximumValue - minimumValue;
    const decimals = countDecimals(step);
    const val = step > 0 ? Number((Math.round((ratio * range) / step) * step).toFixed(decimals)) : ratio * range;
    return Math.max(minimumValue, Math.min(maximumValue, minimumValue + val));
  }
  return 0;
}

export function validateValues(props: SliderProps) {
  const {useRange, value, minimumValue, maximumValue, initialMinimumValue, initialMaximumValue} = props;
  if (minimumValue > maximumValue || 
    (useRange && initialMinimumValue && initialMaximumValue && initialMinimumValue > initialMaximumValue)) {
    console.error('Your passed values are invalid. Please check if minimum values are not higher than maximum values');
  }
  if (value !== undefined && minimumValue && maximumValue && !inRange(value, minimumValue, maximumValue)) {
    console.error(`Your passed value (${value}) is invalid. Please check that it is in range of the minimum (${minimumValue}) and maximum (${maximumValue}) values`);
  }
  if (useRange && initialMinimumValue && initialMaximumValue) {
    if (
      !inRange(initialMinimumValue, minimumValue, maximumValue) ||
      !inRange(initialMaximumValue, minimumValue, maximumValue)
    ) {
      console.error('Your passed values are invalid. Please check that they are in range of the minimum and maximum values');
    }
  }
}

function inRange(value: number, min: number, max: number) {
  return value >= min && value <= max;
}
