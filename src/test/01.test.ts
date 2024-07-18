import {splitIntoWords, sum} from "./01";
import exp from "node:constants";

test('sum should be correct', () => {
    let a = 1
    let b = 2

    const result = sum(a, b)

    expect(result).toBe(3)
})

test('string split', () => {
    let s = 'Hello my friends'

    const result = splitIntoWords(s)

    expect(result[0]).toBe('Hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friends')
})