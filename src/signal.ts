// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signal = <EventmitHandler extends (...args: any[]) => any>() => {
  const set = new Set<EventmitHandler>();
  return {
    connect(handler: EventmitHandler) {
      set.add(handler);
    },
    disconnect(handler: EventmitHandler) {
      set.delete(handler);
    },
    disconnectAll() {
      set.clear();
    },
    emit(...args: Parameters<EventmitHandler>) {
      set.forEach((handler) => handler(...args));
    },
  };
};
