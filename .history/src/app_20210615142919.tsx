

// src/app.ts
export async function getInitialState() {
  const data = await Promise.resolve({
    welcom: true
  });
  return data;
}
