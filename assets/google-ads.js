// Google Ads conversion tracking for bangluangsmile.com.
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', 'AW-16850592359');

// Track every appointment link to the clinic's official LINE account.
document.addEventListener('click', function (event) {
  var link = event.target.closest('a[href*="line.me/ti/p/~0959476759"]');
  if (!link) return;

  gtag('event', 'conversion', {
    send_to: 'AW-16850592359/3D_-CLOa7vMcEOfE_uI-',
    value: 1.0,
    currency: 'THB'
  });
});
