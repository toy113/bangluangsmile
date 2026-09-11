// Google Ads conversion tracking for bangluangsmile.com.
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', 'AW-16850592359');

// Track appointment and phone-contact links for Google Ads optimization.
document.addEventListener('click', function (event) {
  var lineLink = event.target.closest('a[href*="line.me/ti/p/~0959476759"]');
  var phoneLink = event.target.closest('a[href="tel:0959476759"]');

  if (lineLink) {
    gtag('event', 'conversion', {
      send_to: 'AW-16850592359/3D_-CLOa7vMcEOfE_uI-',
      value: 1.0,
      currency: 'THB'
    });
  }

  if (phoneLink) {
    gtag('event', 'conversion', {
      send_to: 'AW-16850592359/UzBrCLDhkfQcEOfE_uI-',
      value: 1.0,
      currency: 'THB'
    });
  }
});
