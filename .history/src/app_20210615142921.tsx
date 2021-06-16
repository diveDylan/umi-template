

// src/app.ts
export async function getInitialState() {
  const data = await Promise.resolve({
    welcome: true
  });
  return data;
}
