import {storage} from '@core/utils';

const defaultState = {
  rowState: {},
  colState: {},
  data: {}, // {'0:1': 'door'}
  currentText: '',
}

export const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState
