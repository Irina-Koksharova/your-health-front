export const useSvgStyle = () => {
  const getStyle = (width: number, height: number, color: string) => ({
    width: `${width}px`,
    height: `${height}px`,
    fill: color,
  });

  return getStyle;
};
