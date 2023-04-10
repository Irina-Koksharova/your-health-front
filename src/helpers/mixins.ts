const flex = (main: string, secondary: string) => `
  display: flex;
  justify-content: ${main};
  align-items: ${secondary};
`;

const hover = (scale: number) => `
  transform: scale(${scale});
`;

const focus = (radius: string | undefined = undefined) => `
  outline: none;
  box-shadow: 0px 0px 6px 0px rgba(11, 11, 11, 1);
  border-radius: ${radius ? radius : "3px"};
`;

export { flex, hover, focus };
