export const localState = () => {
  try {
    const local = localStorage.getItem('HS Local Data');
    if (local === null) return;
    return JSON.parse(local);
  } catch (err) {
    return;
  }
};

export const saveState = state => {
  try {
    const local = JSON.stringify(state);
    localStorage.setItem('HS Local Data', local);
  } catch (err) {
    console.error(err)
  }
}