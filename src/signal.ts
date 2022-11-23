export const signal = <EventHandler extends (...args: any[]) => any>() => {
  const set = new Set<EventHandler>();
  return {
    connect(handler: EventHandler) {
      set.add(handler);
    },
    disconnect(handler: EventHandler) {
      set.delete(handler);
    },
    disconnectAll() {
      set.clear();
    },
    emit(...args: Parameters<EventHandler>) {
      set.forEach((handler) => handler(...args));
    },
  };
};
