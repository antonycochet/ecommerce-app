//add pair key/value in localstorage
const setToLocalStorage = (key: string, value: string | object | []) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//get a pair key/value in localstorage
const getLocalStorageWithKey = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || '{}')
    : null;
};

// we check if a pair key/value exist
// if exist , then update value to append more content
// if not we create one
const handleAddLocalStorageValue = (
  key: string,
  value: string | object | [],
  type: string
) => {
  const localStorageData = getLocalStorageWithKey(key);

  if (localStorageData) {
    if (type === 'array') localStorageData.push(value);
    setToLocalStorage(key, localStorageData);
  } else {
    if (type === 'array') setToLocalStorage(key, [value]);
    else setToLocalStorage(key, value);
  }
};

export { getLocalStorageWithKey, handleAddLocalStorageValue };
