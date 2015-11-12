/*!
 * @license get-has-touch
 * (c) sugarshin
 * License: MIT
 */

export default function getHasTouch() {
  return 'ontouchstart' in global ||
    (global.DocumentTouch && document instanceof DocumentTouch);
}
