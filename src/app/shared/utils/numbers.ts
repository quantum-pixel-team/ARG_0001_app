export function lPad(value: number,
                     targetLength = 2,
                     paddingCharacter = '0'): string {
  let stringValue = value.toString();
  while (stringValue.length < targetLength) {
    stringValue = paddingCharacter + stringValue;
  }
  return stringValue;
}
