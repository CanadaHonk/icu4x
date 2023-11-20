import { usize } from "./diplomat-runtime"
import { FFIError } from "./diplomat-runtime"
import { ICU4XDataProvider } from "./ICU4XDataProvider";
import { ICU4XError } from "./ICU4XError";

/**

 * See the {@link https://docs.rs/icu/latest/icu/normalizer/struct.DecomposingNormalizer.html Rust documentation for `DecomposingNormalizer`} for more information.
 */
export class ICU4XDecomposingNormalizer {

  /**

   * Construct a new ICU4XDecomposingNormalizer instance for NFC

   * See the {@link https://docs.rs/icu/latest/icu/normalizer/struct.DecomposingNormalizer.html#method.new_nfd Rust documentation for `new_nfd`} for more information.
   * @throws {@link FFIError}<{@link ICU4XError}>
   */
  static create_nfd(provider: ICU4XDataProvider): ICU4XDecomposingNormalizer | never;

  /**

   * Construct a new ICU4XDecomposingNormalizer instance for NFKC

   * See the {@link https://docs.rs/icu/latest/icu/normalizer/struct.DecomposingNormalizer.html#method.new_nfkd Rust documentation for `new_nfkd`} for more information.
   * @throws {@link FFIError}<{@link ICU4XError}>
   */
  static create_nfkd(provider: ICU4XDataProvider): ICU4XDecomposingNormalizer | never;

  /**

   * Normalize a string

   * Ill-formed input is treated as if errors had been replaced with REPLACEMENT CHARACTERs according to the WHATWG Encoding Standard.

   * See the {@link https://docs.rs/icu/latest/icu/normalizer/struct.DecomposingNormalizer.html#method.normalize_utf8 Rust documentation for `normalize_utf8`} for more information.
   * @throws {@link FFIError}<{@link ICU4XError}>
   */
  normalize(s: string): string | never;

  /**

   * Check if a string is normalized

   * Ill-formed input is treated as if errors had been replaced with REPLACEMENT CHARACTERs according to the WHATWG Encoding Standard.

   * See the {@link https://docs.rs/icu/latest/icu/normalizer/struct.DecomposingNormalizer.html#method.is_normalized_utf8 Rust documentation for `is_normalized_utf8`} for more information.
   */
  is_normalized(s: string): boolean;

  /**

   * Return the index a slice of potentially-invalid UTF-8 is normalized up to

   * See the {@link https://docs.rs/icu/latest/icu/normalizer/struct.DecomposingNormalizer.html#method.is_normalized_utf8_up_to Rust documentation for `is_normalized_utf8_up_to`} for more information.
   */
  is_normalized_up_to(s: string): usize;
}
