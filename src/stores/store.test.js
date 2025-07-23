import { renderHook, act } from '@testing-library/react';
import useStore from './store';

test('store increments count', () => {
    const { result } = renderHook(() => useStore());

    act(() => {
        result.current.increase();
    });

    expect(result.current.count).toBe(1);

    act(() => {
        result.current.reset();
    });

    expect(result.current.count).toBe(0);
});
