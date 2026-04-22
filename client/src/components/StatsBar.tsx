/* ==========================================================================
   STATS BAR — CPZ Fitness "Spartan Engineer" design
   Horizontal band of key credibility stats between hero and about
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ number, suffix, label, delay = 0 }: { number: number; suffix: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(number, 1400, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setStarted(true), delay); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="stat-item" style={{ flex: 1 }}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section
      style={{
        backgroundColor: "#1a1d21",
        borderTop: "1px solid rgba(255, 130, 0, 0.15)",
        borderBottom: "1px solid rgba(255, 130, 0, 0.15)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <StatItem number={25} suffix="+" label="Years in Tech" delay={0} />
          <div style={{ width: "1px", backgroundColor: "rgba(255,255,255,0.06)", margin: "1rem 0" }} />
          <StatItem number={15} suffix="+" label="Years Training" delay={150} />
          <div style={{ width: "1px", backgroundColor: "rgba(255,255,255,0.06)", margin: "1rem 0" }} />
          <StatItem number={41} suffix="lb" label="Gained in Transformation" delay={300} />
          <div style={{ width: "1px", backgroundColor: "rgba(255,255,255,0.06)", margin: "1rem 0" }} />
          <div className="stat-item" style={{ flex: 1 }}>
            <div className="stat-number" style={{ color: "#ff8200", fontSize: "3rem" }}>FREE</div>
            <div className="stat-label">To Join the Community</div>
          </div>
        </div>
      </div>
    </section>
  );
}
