// YouTube Flow - Auto-dismiss "Video paused" prompt
const observer = new MutationObserver(() => {
  const btn = document.querySelector('tp-yt-paper-button#button');
  if (btn && btn.offsetParent !== null) {
    const dialog = btn.closest('tp-yt-paper-dialog');
    if (dialog && dialog.querySelector('.style-scope.ytd-popup-container')) {
      btn.click();
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
