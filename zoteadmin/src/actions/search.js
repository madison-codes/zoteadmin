import { SEARCHTERM } from '../constants'

export function search(v) {
  return {
    type: SEARCHTERM,
    amount: v
  };
}
