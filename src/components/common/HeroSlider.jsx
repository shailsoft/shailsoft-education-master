import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SLIDER } from '../../data/courses.js';

/**
 * Self-contained carousel replacement for the original Bootstrap slider.
 * Auto-advances every 5s, with prev/next manual controls.
 */
export default function HeroSlider() {
  const [i, setI] = useState(0);
  const count = SLIDER.length;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % count), 5000);
    return () => clearInterval(id);
  }, [count]);

  const prev = () => setI((v) => (v - 1 + count) % count);
  const next = () => setI((v) => (v + 1) % count);

  return (
    <section>
      <div id="myCarousel" className="carousel slide wed-hom-slide">
        <div className="carousel-inner">
          {SLIDER.map((s, idx) => (
            <div key={s.img} className={`item${idx === i ? ' active' : ''}`} style={{ display: idx === i ? 'block' : 'none' }}>
              <img src={s.img} alt={s.heading} />
              <div className="carousel-caption slider-con">
                <h2>{s.heading} <span>{s.accent}</span></h2>
                <p>{s.text}</p>
                <Link to="/all-courses" className="bann-btn-1">All Courses</Link>
                <Link to="/about" className="bann-btn-2">Read More</Link>
              </div>
            </div>
          ))}
        </div>

        <a className="left carousel-control" href="#myCarousel" onClick={(e) => { e.preventDefault(); prev(); }}>
          <i className="fa fa-chevron-left slider-arr"></i>
        </a>
        <a className="right carousel-control" href="#myCarousel" onClick={(e) => { e.preventDefault(); next(); }}>
          <i className="fa fa-chevron-right slider-arr"></i>
        </a>
      </div>
    </section>
  );
}
