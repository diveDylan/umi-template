// src/access.ts
import { InitialState } from 'umi';

export default function accessFactory(initialState: InitialState) {
  return {
    test: initialState.welcome,
  };
}
