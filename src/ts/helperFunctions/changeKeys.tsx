export function changeKeys(
  arr: { [key: string]: any }[],
  keyMap: { [oldKey: string]: string }
) {
  return arr.map((obj) => {
    const newObj: any = {};
    Object.keys(obj).forEach((key) => {
      const newKey = keyMap[key] || key;
      newObj[newKey] = obj[key];
    });
    return newObj;
  });
}
