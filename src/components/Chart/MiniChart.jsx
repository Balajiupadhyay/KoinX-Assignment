/* eslint-disable react/prop-types */
import{ useEffect, useRef } from 'react';

function MiniChart({ symbol, chartColor}) {
  const container = useRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbol": symbol,
        "width": 160,
        "height": 80,
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor":chartColor,
        "underLineColor": "rgba(255, 255, 255, 1)",
        "underLineBottomColor": "rgba(255, 255, 255, 0)",
        "isTransparent": true,
        "autosize": false,
        "largeChartUrl": "",
        "chartOnly": true,
        "noTimeScale": true
    });

    container.current.appendChild(script);

  }, [symbol,chartColor]);

  
  return (
    <div className="tradingview-widget-container" ref={container}></div>
  );
}

export default MiniChart;
