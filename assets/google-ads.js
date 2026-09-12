// Google Ads conversion tracking for bangluangsmile.com.
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', 'AW-16850592359');

// Record a qualified contact click before sending the visitor to LINE or phone.
document.addEventListener('click', function (event) {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  var lineLink = event.target.closest('a[href*="line.me/ti/p/~0959476759"]');
  var phoneLink = event.target.closest('a[href="tel:0959476759"]');
  var link = lineLink || phoneLink;
  if (!link) return;

  event.preventDefault();

  var conversionLabel = lineLink
    ? 'AW-16850592359/3D_-CLOa7vMcEOfE_uI-'
    : 'AW-16850592359/UzBrCLDhkfQcEOfE_uI-';
  var destination = link.href;
  var continued = false;

  function continueToDestination() {
    if (continued) return;
    continued = true;
    window.location.assign(destination);
  }

  gtag('event', 'conversion', {
    send_to: conversionLabel,
    value: 1.0,
    currency: 'THB',
    event_callback: continueToDestination,
    event_timeout: 1000
  });

  window.setTimeout(continueToDestination, 1100);
});
