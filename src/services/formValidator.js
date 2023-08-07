export class FormValidator {
  static min(inputValue, min) {
    return inputValue < min ? `輸入內容不可小於 ${min} 個字元` : "";
  }

  static max(inputValue, max) {
    return inputValue > max ? `輸入內容不可大於 ${max} 個字元` : "";
  }
}
