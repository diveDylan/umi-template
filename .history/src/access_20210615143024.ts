// src/access.ts

export default function accessFactory(initialState: any) {
  return {
    canUser: initialState.welcome,
  };
}
