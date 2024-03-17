const flex = (
  flexDirection: string = 'row',
  justifyContent: string = 'flex-start',
  alignItems: string = 'stretch'
) => `
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

const hover = (scale: number) => `
  transform: scale(${scale});
`;

const focus = (radius: string | undefined = undefined) => `
  outline: none;
  box-shadow: 0px 0px 6px 0px rgba(11, 11, 11, 1);
  border-radius: ${radius ? radius : '3px'};
`;

export const mixins = { flex, hover, focus };
