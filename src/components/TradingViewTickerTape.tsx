import React, { useEffect, useRef } from 'react';

interface TradingViewTickerTapeProps {
  locale?: string;
  theme?: 'dark' | 'light';
}

export const TradingViewTickerTape: React.FC<TradingViewTickerTapeProps> = ({
  locale = 'es',
  theme = 'dark',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isLoaded = false;
    let observer: IntersectionObserver | null = null;

    const loadWidget = () => {
      if (isLoaded || !container) return;
      isLoaded = true;

      // Clear previous children
      container.innerHTML = '';

      const widgetWrapper = document.createElement('div');
      widgetWrapper.className = 'tradingview-widget-container';
      widgetWrapper.style.width = '100%';
      widgetWrapper.style.borderRadius = '14px';
      widgetWrapper.style.overflow = 'hidden';

      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'tradingview-widget-container__widget';
      widgetWrapper.appendChild(widgetDiv);

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: 'FOREXCOM:SPXUSD',
            title: 'S&P 500',
          },
          {
            proName: 'FOREXCOM:NSXUSD',
            title: 'Nasdaq 100',
          },
          {
            proName: 'FOREXCOM:DJI',
            title: 'Dow Jones',
          },
          {
            proName: 'INDEX:000001',
            title: 'Shanghai Composite',
          },
          {
            proName: 'FX_IDC:EURUSD',
            title: 'EUR/USD',
          },
          {
            proName: 'BITSTAMP:BTCUSD',
            title: 'BTC/USD',
          },
          {
            proName: 'BITSTAMP:ETHUSD',
            title: 'ETH/USD',
          },
        ],
        showSymbolLogo: true,
        isTransparent: true,
        displayMode: 'adaptive',
        colorTheme: theme,
        locale: locale,
      });

      widgetWrapper.appendChild(script);
      container.appendChild(widgetWrapper);
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadWidget();
            if (observer && container) observer.unobserve(container);
          }
        },
        { rootMargin: '300px' }
      );
      observer.observe(container);
    } else {
      loadWidget();
    }

    return () => {
      if (observer) observer.disconnect();
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [locale, theme]);

  return (
    <div className="ticker-wrapper w-full rounded-[16px] overflow-hidden border border-white/[0.1] bg-[#040817]/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] p-1.5 sm:p-2.5">
      <div
        ref={containerRef}
        className="tradingview-widget-mount w-full min-h-[78px] sm:min-h-[88px] flex items-center justify-center overflow-hidden pointer-events-auto cursor-pointer"
      >
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-cyan-400/70 py-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-ping" />
          <span>CONECTANDO SERVIDORES TRADINGVIEW API...</span>
        </div>
      </div>
    </div>
  );
};
