import { moduleStateAEndpoints } from '../endpoints';

const damagedModuleAdder = {
  label: 'Wybierz uszkodzone moduły w tym obiekcie',
  name: 'moduleNumber',
  defaultOptionLabel: 'Wybierz moduł',
  refEndpoint: moduleStateAEndpoints.get,
  refModuleNumberKey: 'module.moduleNumber',
  required: false,
};

export default damagedModuleAdder;
