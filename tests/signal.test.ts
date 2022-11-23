import { expect, test } from 'vitest';
import { signal } from '../src';

test('signal', () => {
  const event = signal<(key: string, value: number) => void>();
  event.connect((value1, value2) => {
    expect(value1).toBe('value');
    expect(value2).toBe(666);
  });

  event.connect((value) => {
    expect(value).toBe('value');
  });

  // Invoke handler
  event.emit('value', 666);

  // Unregister handler
  event.disconnectAll();

  event.emit('value', 0);
});
