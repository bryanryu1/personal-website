"use client";

import { useLayoutEffect, useRef, useState } from "react";

const dog = {
  "awake": "/^^^\\\n/ . . \\\nV\\ Y /V\n / - \\\n |    \\\n ||(__V",
  "asleep": "/^^^\\\n/ - - \\\nV\\ Y /V\n / - \\\n |    \\\n ||(__V"
};

export function Jimmy() {
  const [barking, setBarking] = useState(false);
  return <div className="jimmy-studio">
    <button type="button" className={`field-critter field-dog animal-button ${barking ? "is-playing" : ""}`} aria-label="Jimmy: wake him for an ASCII bark" aria-pressed={barking} onClick={() => setBarking(!barking)}>
      <div className="jimmy-drawing">
        <pre className="jimmy-asleep" aria-hidden="true">{dog.asleep}</pre>
        <pre className="jimmy-awake" aria-hidden="true">{dog.awake}</pre>
        <div className="jimmy-dream" aria-hidden="true"><span>z</span><span>z</span><span>Z</span></div>
        <pre className="jimmy-bark" aria-hidden="true">{" /\n-- woof!\n \\"}</pre>
      </div>
      <span>JIMMY / DO NOT DISTURB</span>
      <span className="animal-hint">hover or tap to wake him</span>
    </button>
  </div>;
}

// Each landing is tied to a specific card entering view, rather than an average section height.
function useBunnyPosition() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const animal = ref.current;
    const section = animal?.parentElement;
    if (!animal || !section) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let active = -1;
    let previous = { x: 0, y: 0 };
    let animation: Animation | undefined;
    const update = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const cards = Array.from(section.querySelectorAll<HTMLElement>(".field-work-card"));
      if (!cards.length) return;
      let index = 0;
      if (!reduced.matches) cards.forEach((card, i) => {
        if (card.getBoundingClientRect().top < innerHeight * .62) index = i;
      });
      const atBorder = !reduced.matches && bounds.bottom < innerHeight * .52;
      if (atBorder) index = cards.length;
      const card = cards[Math.min(index, cards.length - 1)].getBoundingClientRect();
      const left = index % 2 === 1;
      const x = atBorder ? bounds.width - animal.offsetWidth - 34
        : left ? card.left - bounds.left + 22 : card.right - bounds.left - animal.offsetWidth - 22;
      const y = atBorder ? bounds.height - animal.offsetHeight - 6 : card.top - bounds.top - animal.offsetHeight + 3;
      if (x === previous.x && y === previous.y && index === active) return;
      animation?.cancel();
      animal.style.transform = "translate(" + x + "px," + y + "px)";
      animal.style.setProperty("--facing", left ? "-1" : "1");
      if (active >= 0 && index !== active && !reduced.matches) {
        animation = animal.animate([
          { transform: "translate(" + previous.x + "px," + previous.y + "px)" },
          { transform: "translate(" + (previous.x+x)/2 + "px," + (Math.min(previous.y,y)-70) + "px)", offset: .45 },
          { transform: "translate(" + x + "px," + y + "px)" },
        ], {duration: 850, easing: "ease-in-out"});
      }
      animal.dataset.perch = atBorder ? "border" : String(index + 1);
      animal.dataset.side = left ? "left" : "right";
      previous = {x,y};
      active = index;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(section);
    addEventListener("scroll", schedule, {passive:true});
    addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      animation?.cancel();
      observer.disconnect();
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
    };
  }, []);
  return ref;
}

type TrailPoint = { x: number; y: number };

function useSnailPace(paused: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useRef(0);
  const started = useRef(false);
  useLayoutEffect(() => {
    const snail = ref.current;
    const habitat = snail?.parentElement;
    const section = habitat?.closest<HTMLElement>(".field-journey");
    if (!snail || !habitat || !section) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const route = habitat.querySelector<SVGSVGElement>(".snail-route");
    const trail = route?.querySelector("polyline");
    let points: TrailPoint[] = [];
    let lengths: number[] = [];
    let total = 0;
    let halfWidth = 0, halfHeight = 0;
    let frame = 0;
    let lastTime = 0;
    const draw = () => {
      if (points.length < 2) return;
      let remaining = Math.min(distance.current, total);
      let segment = 0;
      while (segment < lengths.length-1 && remaining > lengths[segment]) remaining -= lengths[segment++];
      const from = points[segment], to = points[segment+1];
      const fraction = lengths[segment] ? remaining / lengths[segment] : 0;
      const position = {x: from.x+(to.x-from.x)*fraction, y: from.y+(to.y-from.y)*fraction};
      snail.style.left = position.x-halfWidth + "px";
      snail.style.top = position.y-halfHeight + "px";
      // Horizontal mirroring keeps the snail and its caption upright, including on vertical legs.
      if (to.x !== from.x) snail.style.setProperty("--facing", to.x < from.x ? "-1" : "1");
      trail?.setAttribute("points", [...points.slice(0,segment+1),position].map(p => p.x+","+p.y).join(" "));
    };
    const tick = (time: number) => {
      frame = 0;
      if (!started.current || paused || reduced.matches || document.hidden || distance.current >= total) {
        lastTime = 0;
        return;
      }
      if (lastTime) distance.current = Math.min(total, distance.current + Math.min((time-lastTime)/1000,.1)*24);
      lastTime = time;
      draw();
      if (distance.current < total) frame = requestAnimationFrame(tick);
    };
    const run = () => {
      if (!frame && started.current && !paused && !reduced.matches && !document.hidden && distance.current < total) {
        lastTime = 0;
        frame = requestAnimationFrame(tick);
      }
    };
    const measure = () => {
      const box = habitat.getBoundingClientRect();
      const cards = Array.from(habitat.querySelectorAll<HTMLElement>(".field-stop-card"), card => card.getBoundingClientRect());
      const markers = habitat.querySelectorAll<HTMLElement>(".field-stop-marker");
      if (cards.length < 2 || markers.length < 2) return;
      halfWidth = snail.offsetWidth/2;
      halfHeight = snail.offsetHeight/2;
      const first = markers[0].getBoundingClientRect(), second = markers[1].getBoundingClientRect();
      const startY = (first.top+first.height/2+second.top+second.height/2)/2-box.top;
      const endY = section.getBoundingClientRect().bottom-box.top-halfHeight-24;
      const sideX = (card: DOMRect, left: boolean) => Math.max(halfWidth,Math.min(box.width-halfWidth,
        left ? card.left-box.left-halfWidth-8 : card.right-box.left+halfWidth+8));
      const progress = total ? distance.current/total : null;
      points = [{x:sideX(cards[0],false),y:startY}];
      cards.slice(1).forEach((card,i) => {
        const y = card.top-box.top-halfHeight-14;
        points.push({x:points[points.length-1].x,y});
        points.push({x:sideX(card,i%2===0),y});
      });
      points.push({x:points[points.length-1].x,y:endY});
      lengths = points.slice(1).map((p,i)=>Math.hypot(p.x-points[i].x,p.y-points[i].y));
      total = lengths.reduce((sum,n)=>sum+n,0);
      distance.current = progress === null ? Math.min(distance.current,total) : progress*total;
      route?.setAttribute("viewBox","0 0 "+box.width+" "+(endY+halfHeight));
      if (route) route.style.height = endY+halfHeight+"px";
      draw();
      run();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(habitat);
    resize.observe(section);
    const entrance = new IntersectionObserver(entries => {
      if (entries.some(entry=>entry.isIntersecting)) {
        started.current = true;
        run();
      }
    });
    entrance.observe(section);
    const visibility = () => { lastTime=0; run(); };
    document.addEventListener("visibilitychange",visibility);
    reduced.addEventListener("change",visibility);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      entrance.disconnect();
      document.removeEventListener("visibilitychange",visibility);
      reduced.removeEventListener("change",visibility);
    };
  }, [paused]);
  return ref;
}

export function ProjectBunny() {
  const ref = useBunnyPosition();
  return <div ref={ref} className="field-critter project-bunny" role="img" aria-label="A bunny hopping between personal projects and the scenic route">
    <pre aria-hidden="true">{" (\\_/)\n (o.o)>\n c(\")(\")"}</pre>
  </div>;
}

export function TrailSnail() {
  const [paused, setPaused] = useState(false);
  const ref = useSnailPace(paused);
  return <><svg className="snail-route" aria-hidden="true"><polyline fill="none" /></svg><div ref={ref} className="field-critter trail-snail" role="img" aria-label="A snail weaving around the career cards: slow and steady">
    <pre aria-hidden="true">{"  ___   o o\n / @ \\ _|/\n \\___/____)"}</pre>
    <span>slow and<br />steady</span>
  </div><button type="button" className="snail-control" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Resume snail" : "Pause snail"}</button></>;
}

export function Frog() {
  const [playing, setPlaying] = useState(false);
  return <button type="button" className={`field-critter field-about-critter animal-button field-frog ${playing ? "is-playing" : ""}`} aria-label="Frog: toggle tongue" aria-pressed={playing} onClick={() => setPlaying(!playing)}>
    <div className="frog-drawing">
      <pre className="frog-rest" aria-hidden="true">{"  @..@\n (----)\n( >__< )"}</pre>
      <pre className="frog-tongue" aria-hidden="true">{"  @..@\n (--U-)\n( >__< )"}</pre>
    </div>
    <span>see you out there</span>
  </button>;
}
