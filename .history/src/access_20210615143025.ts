// src/access.ts

export default function accessFactory(initialState: any) {
  return {
    canUse: initialState.welcome,
  };
}
