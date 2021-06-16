

// src/app.ts
export async function getInitialState() {
  const data = await Promise.resolve({
    welcome: false
  });
  return data;
}



