import { SEARCHTERM } from '../constants';

export function search(e) {
  console.log('action', e);
  return {
    type: SEARCHTERM,
    amount: e
  };
}
