import {metrics} from '@constants';

const rem = (value: number) => {
  return `${value / metrics.rem}rem`
};

export default rem;