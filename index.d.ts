/**
 * Customize the hexadecimal string output
 * @property grouped - Enable/disable grouped output
 * @property uppercase - Enable/disable the uppercase output
 */
export interface strToHexOptions {
    uppercase?: boolean,
    grouped?: boolean
}

/**
 * Decode a hexadecimal string
 * @param hex - Hexadecimal string
 */
export function hexToStr(hex: string): string | false;

/**
 * Validate a hexadecimal string
 * @param hex - Hexadecimal string
 * @param stric - Enable/disable stric mode
 */
export function isHex(hex: string, stric?: boolean): boolean;

/**
 * Encode a string to a hexadecimal string
 * @param str - String to encode
 * @param options - Ouput options
 */
export function strToHex(str: string, options?: strToHexOptions): string;
