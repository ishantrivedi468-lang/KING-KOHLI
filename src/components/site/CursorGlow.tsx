import { useEffect, useRef, useState } from "react";

/**
 * Cinematic pointer lighting.
 * Desktop: a soft spotlight + a thin gold ring cursor that trails the mouse.
 * Touch:   the spotlight follows the finger and a gold ripple blooms on tap,
 *          plus a gentle device-tilt parallax so the glow feels alive.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setTouch(coarse);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let gx = x;
    let gy = y;
    let rx = x;
    let ry = y;
    let raf = 0;
    let visible = false;

    const frame = () => {
      gx += (x - gx) * 0.12;
      gy += (y - gy) * 0.12;
      rx += (x - rx) * 0.24;
      ry += (y - ry) * 0.24;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
        glowRef.current.style.opacity = visible ? "1" : "0";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.opacity = visible ? "1" : "0";
      }
      raf = requestAnimationFrame(frame);
    };

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      visible = true;
    };
    const leave = () => {
      visible = false;
    };

    const press = (e: PointerEvent) => {
      move(e);
      ringRef.current?.classList.add("is-down");
    };
    const release = () => {
      ringRef.current?.classList.remove("is-down");
    };

    const tap = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => setRipples((r) => r.filter((v) => v.id !== id)), 650);
    };

    const tilt = (e: DeviceOrientationEvent) => {
      if (!coarse || e.gamma == null || e.beta == null) return;
      x = window.innerWidth / 2 + Math.max(-30, Math.min(30, e.gamma)) * 6;
      y = window.innerHeight / 2 + Math.max(-30, Math.min(30, e.beta - 45)) * 4;
      visible = true;
    };

    const onDown = (e: PointerEvent) => {
      move(e);
      press(e);
      tap(e);
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    window.addEventListener("pointerleave", leave);
    if (coarse) window.addEventListener("deviceorientation", tilt);

    if (!reduce) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("deviceorientation", tilt);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <div ref={glowRef} className="pointer-glow" />
      {!touch ? <div ref={ringRef} className="pointer-ring" /> : null}
      {ripples.map((r) => (
        <span key={r.id} className="pointer-ripple" style={{ left: r.x, top: r.y }} />
      ))}
    </div>
  );
}
