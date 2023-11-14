   // ページが読み込まれたときの処理
   window.onload = function () {
    // 初期の計算結果（仮の値）
    const initialResults = {
      手取り収入: 50, 
      厚生年金: 50, 
      健康保険: 50, 
      雇用保険: 50, 
      国民年金: 50,
      国民健康保険: 50,
      所得税: 50,
      住民税: 50
    };

    // チャート用のデータを作成
    const chartData = {
      labels: Object.keys(initialResults), // 計算結果の項目をラベルとして使用
      datasets: [{
        data: Object.values(initialResults), // 計算結果の金額をデータとして使用
        backgroundColor: [
          '#F08080', '#FFA07A', '#FFFF66', '#78FF94', 
          '#AEFFBD', '#6495ED','#AFEEEE',  '#E6E6FA'
        ]
      }]
    };

    // チャートを描画
    const ctx = document.getElementById('myDonutChart').getContext('2d');
    const myDonutChart = new Chart(ctx, {
      type: 'doughnut',
      data: chartData,
      options: {
        legend: {
          display: true,
          position: 'right'
        }
      }
    });

    // ボタンクリック時に円グラフを再描画する関数
    function drawDonutChart(results) {
      myDonutChart.data.datasets[0].data = Object.values(results);
      myDonutChart.update();
    }

    // ボタンクリックで円グラフを再描画
    document.getElementById('send-button').addEventListener('click', function () {
      calculateSalary(drawDonutChart);
    });
  }

  // フォームから入力値を取得し、計算して円グラフを描画する関数
  function calculateSalary(callback) {
    // フォームから入力値を取得
    var basicSalary = parseInt(document.getElementById("basicSalary").value);
    // 他の入力値も同様に取得

    // 月収の計算ロジック（ここでは簡単な例を示します）
    var totalSalary = basicSalary;

    // 各項目の計算（簡単な例）
    var pensionAmount = Math.floor(basicSalary * 0.1); // 厚生年金
    var healthInsuranceAmount = Math.floor(basicSalary * 0.05); // 健康保険
    var employmentInsuranceAmount = Math.floor(basicSalary * 0.02); // 雇用保険
    var nationalPensionAmount = 10000; // 国民年金
    var nationalHealthInsuranceAmount = 5000; // 国民健康保険
    var incomeTaxAmount = Math.floor(basicSalary * 0.1); // 所得税
    var residentTaxAmount = Math.floor(basicSalary * 0.05); // 住民税

    // 手取り収入の計算
    var netIncome = totalSalary - (pensionAmount + healthInsuranceAmount + employmentInsuranceAmount + nationalPensionAmount + nationalHealthInsuranceAmount + incomeTaxAmount + residentTaxAmount);

    // 計算結果を表に出力
    document.getElementById("basicSalaryAmount").textContent = basicSalary + " 円";
    document.getElementById("pensionAmount").textContent = pensionAmount + " 円";
    document.getElementById("healthInsuranceAmount").textContent = healthInsuranceAmount + " 円";
    document.getElementById("employmentInsuranceAmount").textContent = employmentInsuranceAmount + " 円";
    document.getElementById("nationalPensionAmount").textContent = nationalPensionAmount + " 円";
    document.getElementById("nationalHealthInsuranceAmount").textContent = nationalHealthInsuranceAmount + " 円";
    document.getElementById("incomeTaxAmount").textContent = incomeTaxAmount + " 円";
    document.getElementById("residentTaxAmount").textContent = residentTaxAmount + " 円";
    document.getElementById("netIncome").textContent = netIncome + " 円";

    // コールバック関数を実行
    if (typeof callback === 'function') {
      callback({
        手取り収入: netIncome,
        厚生年金: pensionAmount,
        健康保険: healthInsuranceAmount,
        雇用保険: employmentInsuranceAmount,
        国民年金: nationalPensionAmount,
        国民健康保険: nationalHealthInsuranceAmount,
        所得税: incomeTaxAmount,
        住民税: residentTaxAmount
      });
    }
  }