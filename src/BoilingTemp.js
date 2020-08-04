import React, { useState, useEffect } from 'react';

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
  const verdict = props.celsius >= 100 ? '˳˚॰°ₒ৹๐' : '_______';
  return <h2>{verdict}</h2>;
};

export const TemperatureInput = (props) => {
  return (
    <fieldset>
      <legend>Enter temperature in {scales[props.scale]}:</legend>
      <input
        value={props.temp}
        onInput={(event) => props.onChange(event.target.value)}
      />
      {/* <input value={props.temp} onInput={(event) => setTemp(event.target.value)} /> */}
    </fieldset>
  );
};

export const Temperature = (props) => {
  const [temp, setTemp] = useState({ scale: 'c', value: '' });

  const celsius = temp.scale === 'f' ? toCelsius(temp.value) : temp.value;
  const fahrenheit = temp.scale === 'c' ? toFahrenheit(temp.value) : temp.value;

  return (
    <React.Fragment>
      <TemperatureInput
        scale="c"
        temp={celsius}
        onChange={(value) => setTemp({ scale: 'c', value: value })}
      />
      <TemperatureInput
        scale="f"
        temp={fahrenheit}
        onChange={(value) => setTemp({ scale: 'f', value: value })}
      />
      <IsItBoiling celsius={parseFloat(celsius)} />
    </React.Fragment>
  );
};
