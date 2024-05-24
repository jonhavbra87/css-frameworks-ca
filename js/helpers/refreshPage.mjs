/**
 * Refreshes the current page after a short delay.
 *
 * This function reloads the current page after a delay of 300 milliseconds.
 * It can be useful for ensuring that the page is refreshed to reflect any changes
 * made or to reset the state of the page.
 */

export function refreshPage() {
    setTimeout(() => {
        location.reload();
      }, 300);
}