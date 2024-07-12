export const extractId = (url: string): string | undefined => {
    return url.split('/').filter(Boolean).pop();
  };