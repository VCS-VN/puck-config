export type AnalyticsPayload = Record<string, any>;

export const sendAnalyticsEvent = (
  name: string,
  payload?: AnalyticsPayload
) => {
  try {
    const event = new CustomEvent("analytics:" + name, {
      detail: payload || {},
    });
    window.dispatchEvent(event);
  } catch {}
};
