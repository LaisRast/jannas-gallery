const VISITOR_ID_KEY = 'visitor_id';

const generateVisitorId = (): string => {
  return crypto.randomUUID();
};

export const getVisitorId = (): string => {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);

  if (!visitorId) {
    visitorId = generateVisitorId();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }

  return visitorId;
};
