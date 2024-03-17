export const useContactType = () => {
  const getContactType = (type: string, resource: string) => {
    switch (type) {
      case 'mailUs':
        return `mailto:${resource}`;
      case 'callUs':
        return `tel:${resource}`;
      default:
        return '';
    }
  };

  return getContactType;
};
