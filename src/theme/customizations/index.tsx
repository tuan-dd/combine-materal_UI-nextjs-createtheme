import { Theme, Components } from '@mui/material';
import Card from './Card';
import Tabs from './Tabs';
import Link from './Link';

function customizeComponents(theme: Theme): Components {
  return { ...Tabs(theme), ...Card(theme), ...Link() };
}

export default customizeComponents;
