import { useEffect, useState } from "react";

export type colSize = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

function useBootstrapBreakpoint(colSize: colSize) {
  //   const [breakpoint, setBreakpoint] = useState("xs");

  //   const updateBreakpoint = () => {
  //     const width = window.innerWidth;
  //     if (width < 576) setBreakpoint("xs");
  //     else if (width < 768) setBreakpoint("sm");
  //     else if (width < 992) setBreakpoint("md");
  //     else if (width < 1200) setBreakpoint("lg");
  //     else if (width < 1400) setBreakpoint("xl");
  //     else setBreakpoint("xxl");
  //   };

  const [nowcolSize, setNowcolSize] = useState(1);
  const updateBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 576) setNowcolSize(colSize.xs ?? 1);
    else if (width < 768) setNowcolSize(colSize.sm ?? 1);
    else if (width < 992) setNowcolSize(colSize.md ?? 1);
    else if (width < 1200) setNowcolSize(colSize.lg ?? 1);
    else if (width < 1400) setNowcolSize(colSize.xl ?? 1);
    else setNowcolSize(12);
  };

  useEffect(() => {
    updateBreakpoint(); // 初期判定
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, [colSize]);

  return nowcolSize;
}

export { useBootstrapBreakpoint };
export default useBootstrapBreakpoint;
