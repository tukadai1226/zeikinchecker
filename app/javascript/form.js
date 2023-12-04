function setupBasicSalaryInput() {
  // 基本給の入力フィールドを取得
  const basicSalaryInput = document.getElementById('basicSalary');

  // 計算ボタンを取得
  const calculateButton = document.getElementById('send-button');

  // 基本給の入力が変更されたときに呼び出される関数
function handleBasicSalaryChange() {
  // 入力があるかどうかを確認し、ボタンの有効/無効を切り替える
  calculateButton.disabled = !basicSalaryInput.value.trim() || !document.getElementById('age').value.trim() || !document.getElementById('workLocation').value.trim();
  }
  // 基本給の入力が変更されたときに呼び出すように設定
  basicSalaryInput.addEventListener('input', handleBasicSalaryChange);
  // ページ読み込み時にも初期状態を確認
  handleBasicSalaryChange();
}

// ページが読み込まれた時に実行
document.addEventListener('DOMContentLoaded', setupBasicSalaryInput);

// Turbo ページ遷移時にも実行
document.addEventListener('turbo:load', setupBasicSalaryInput);

function setupCalculationButton() {
  // 年齢のセレクトボックスと都道府県のセレクトボックスを取得
  const ageSelect = document.getElementById('age');
  const workLocationSelect = document.getElementById('workLocation');

  // 計算ボタンを取得
  const calculateButton = document.getElementById('send-button');

  // 年齢と都道府県のセレクトボックスが変更されたときに呼び出される関数
function handleInputsChange() {
  // 年齢と都道府県のバリューがあるかどうかを確認し、ボタンの有効/無効を切り替える
  calculateButton.disabled = !ageSelect.value.trim() || !workLocationSelect.value.trim() || !document.getElementById('basicSalary').value.trim();
}

  // 年齢と都道府県のセレクトボックスが変更されたときに呼び出すように設定
  ageSelect.addEventListener('change', handleInputsChange);
  workLocationSelect.addEventListener('change', handleInputsChange);

  // ページ読み込み時にも初期状態を確認
  handleInputsChange();
}

// ページが読み込まれた時に実行
document.addEventListener('DOMContentLoaded', setupCalculationButton);

// Turbo ページ遷移時にも実行
document.addEventListener('turbo:load', setupCalculationButton);