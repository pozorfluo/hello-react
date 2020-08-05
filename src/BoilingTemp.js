import React, { useState } from 'react';
import PropTypes from 'prop-types';

const scales = {
  c: '°C',
  f: '°F',
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export const IsItBoiling = (props) => {
  const verdict = props.celsius >= 100 ? '˳˚॰°ₒ৹๐' : '';
  return (
    <FancyBox color="blue">
      <h2>{verdict}</h2>
    </FancyBox>
  );
};

IsItBoiling.propTypes = {
  celsius: PropTypes.number.isRequired,
};

export const TemperatureInput = (props) => {
  return (
    <fieldset>
      <legend>Enter temperature in {scales[props.scale]}:</legend>
      <input
        value={props.temp}
        onChange={(event) => props.onChange(event.target.value)}
      />
      {/* <input value={props.temp} onInput={(event) => setTemp(event.target.value)} /> */}
    </fieldset>
  );
};

TemperatureInput.propTypes = {
  scale: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const Temperature = () => {
  const [temp, setTemp] = useState({ scale: 'c', value: 0 });

  const celsius = temp.scale === 'f' ? toCelsius(temp.value) : temp.value;
  const fahrenheit = temp.scale === 'c' ? toFahrenheit(temp.value) : temp.value;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temp={celsius}
        onChange={(value) => {
          value = (value !== null && value !== '') ? value : 0;
          setTemp({ scale: 'c', value: parseFloat(value) });
        }}
      />
      <TemperatureInput
        scale="f"
        temp={parseFloat(fahrenheit)}
        onChange={(value) => {
          value = (value !== null && value !== '') ? value : 0;
          setTemp({ scale: 'cf', value: parseFloat(value) });
        }}
      />
      <IsItBoiling celsius={parseFloat(celsius)} />
    </div>
  );
};

export const FancyBox = (props) => {
  return (
    <div
      style={{
        height: '100px',
        width: '100%',
        backgroundColor: props.color,
        borderRadius: '4px'
      }}
    >
      {props.children}
    </div>
  );
};

FancyBox.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.element,
};
