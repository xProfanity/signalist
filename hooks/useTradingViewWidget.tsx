"use client";

import React, { useEffect, useRef } from "react";

export default function useTradingViewWidget(
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.width = "100%";
    widget.style.height = `${height}px`;
    containerRef.current.appendChild(widget);

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.textContent = JSON.stringify(config);

    containerRef.current?.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
}
