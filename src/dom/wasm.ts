let linearMemory!: WebAssembly.Memory;

/**
 * Extracts a UTF-16/ASCII string from WebAssembly linear memory using a pointer offset and length.
 *
 * @param {number} offset The byte offset (pointer) where the string starts in linear memory.
 * @param {number} length The byte length of the string to read.
 * @returns {string} The decoded string from memory.
 */
export function extractStringFromMemory(offset: number, length: number): string {
    const stringBuffer = new Uint8Array(linearMemory.buffer, offset, length);

    let str = '';

    for (let i = 0; i < stringBuffer.length; i++) {
        str += String.fromCharCode(stringBuffer[i] ?? 0);
    }

    return str;
}