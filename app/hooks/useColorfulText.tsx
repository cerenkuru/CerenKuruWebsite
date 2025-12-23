import { useMemo } from "react";

export function useColorfulText(text: string) {
    const colors = [
        '#FF6B6B',
        '#FF6B6B',
        '#FF6B6B',
        '#68b56e',
        '#87B3C9',
        '#87B3C9',
        '#E3D967'
    ];

    return useMemo(() => {
        return text.split('').map((char, index) => ({
            char,
            color: colors[index % colors.length]
        }));
    }, [text]);
}
