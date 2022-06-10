import React from 'react';

import {
  InputComponent, InputMaskComponent, Group, LabelComponent, SelectComponent
} from './styles';

const Input = ({
  label, register, required, type,
}) => (
  <Group className={type === 'checkbox' ? 'checkbox-group' : ''}>
    <LabelComponent>{label}</LabelComponent>
    <InputComponent
      type={type}
      {...register(label, { required })}
    />
  </Group>
);

const InputPhone = ({
  mask, label, register, required,
}) => (
  <Group>
    <LabelComponent>{label}</LabelComponent>
    <InputMaskComponent
      mask={mask}
      {...register(label, { required })}
    />
  </Group>
);

const Select = ({
  label, register, required, values,
}) => (
  <Group>
    <LabelComponent>{label}</LabelComponent>
    <SelectComponent {...register(label, { required })}>
      {
          values.map((value, index) => (
            <option key={index} value={value}>{value}</option>
          ))
      }
    </SelectComponent>
  </Group>
);

export { Input, InputPhone, Select };
