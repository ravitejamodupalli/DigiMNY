// /scripts/viz.js

function charting({
  datasetUrl = "",
  borderColor = "",
  chartParentEle = document.body,
}) {
  let chartInstance = null;
  let bitcoinData = null;

  function getYearData() {
    const quotes = bitcoinData.data.assetBySlug.year.quotes;
    const labels = quotes.map((q) => {
      const d = new Date(q.timestamp);
      return d.toLocaleString("en-US", { month: "short" });
    });
    const datasetData = quotes.map((q) => parseFloat(q.price));
    return { labels, datasetData };
  }

  function updateChart() {
    // 1) figure out what the user picked
    const rawType = chartParentEle.querySelector(".chartTypeSelect").value;
    // 2) if it's “area” or “stepped” we still use type='line'
    const chartType = rawType === "area" || rawType === "stepped"
      ? "line"
      : rawType;

    const { labels, datasetData } = getYearData();

    // destroy old instance
    if (chartInstance) chartInstance.destroy();
    const ctx = chartParentEle.querySelector(".myChart").getContext("2d");

    // — your existing animation & commonOptions (unchanged) —
    const totalDuration = 1000;
    const delayBetweenPoints = totalDuration / datasetData.length;
    const previousY = (ctxArg) =>
      ctxArg.index === 0
        ? ctxArg.chart.scales.y.getPixelForValue(100)
        : ctxArg.chart
            .getDatasetMeta(ctxArg.datasetIndex)
            .data[ctxArg.index - 1]
            .getProps(["y"], true).y;
    const animation = {
      x: {
        type: "number",
        easing: "linear",
        duration: delayBetweenPoints,
        from: NaN,
        delay(ctxArg) {
          if (ctxArg.type !== "data" || ctxArg.xStarted) return 0;
          ctxArg.xStarted = true;
          return ctxArg.index * delayBetweenPoints;
        },
      },
      y: {
        type: "number",
        easing: "linear",
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctxArg) {
          if (ctxArg.type !== "data" || ctxArg.yStarted) return 0;
          ctxArg.yStarted = true;
          return ctxArg.index * delayBetweenPoints;
        },
      },
    };
    const commonOptions = {
      animation,
      scales: {
        y: {
          ticks: { maxTicksLimit: 3, color: "#000" },
          grid: { color: "#e5e7eb" },
        },
        x: {
          ticks: { maxTicksLimit: 12, color: "#000" },
          grid: { display: true },
        },
      },
      plugins: { legend: { display: false } },
      elements: { point: { radius: 0 } },
      responsive: true,
      maintainAspectRatio: false,
    };
    // — end commonOptions —

    // 3) build the dataset flags
    const isArea = rawType === "area";
    const isStepped = rawType === "stepped";

    const dataset = {
      data: datasetData,
      borderColor: borderColor,
      backgroundColor: isArea
        ? borderColor + "33"     // hex + 20% opacity
        : borderColor,
      fill: isArea,
      tension: isArea ? 0.2 : 0,
      // this is the magic for stepped lines:
      stepped: isStepped ? "middle" : false,
    };

    const config = {
      type: chartType,
      data: { labels, datasets: [dataset] },
      options: commonOptions,
    };

    chartInstance = new Chart(ctx, config);
  }

  // redraw when dropdown changes
  chartParentEle
    .querySelector(".chartTypeSelect")
    .addEventListener("change", updateChart);

  // initial fetch + render
  fetch(datasetUrl)
    .then((r) => r.json())
    .then((data) => {
      bitcoinData = data;
      updateChart();
    });
}

// init all your charts...
charting({
  datasetUrl: "/data-points/bitcoin.json",
  chartParentEle: document.getElementById("btc-chart"),
  borderColor: "#f7931a",
});
charting({
  datasetUrl: "/data-points/ethereum.json",
  chartParentEle: document.getElementById("eth-chart"),
  borderColor: "#627EEA",
});
charting({
  datasetUrl: "/data-points/tether.json",
  chartParentEle: document.getElementById("tet-chart"),
  borderColor: "#22a17b",
});
charting({
  datasetUrl: "/data-points/xrp.json",
  chartParentEle: document.getElementById("xrp-chart"),
  borderColor: "#000000",
});
charting({
  datasetUrl: "/data-points/solana.json",
  chartParentEle: document.getElementById("sol-chart"),
  borderColor: "#9945FF",
});
