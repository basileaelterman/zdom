import { extractStringFromMemory } from "./wasm.js";

let elementCache = [];

/**
 * Queries the DOM for a selector extracted from WebAssembly memory and caches the resulting element.
 *
 * @param {number} start The memory offset (pointer) where the query string begins.
 * @param {number} length The byte length of the query string in memory.
 * @returns {number} The index/handle of the cached DOM element in `elementCache`.
 */
export function js_query_selector(start: number, length: number): number {
    const query = extractStringFromMemory(start, length);
    const element = document.querySelector(query);

    const index = elementCache.length;
    elementCache.push(element);

    return index;
}