// PWA Installation and Update Handler
let deferredPrompt;
let installButton;

// Check if PWA is already installed
function isPWAInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone === true;
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('✅ Service Worker registered successfully:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateNotification();
            }
          });
        });
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}

// Show update notification
function showUpdateNotification() {
  const updateBanner = document.createElement('div');
  updateBanner.className = 'update-banner';
  updateBanner.innerHTML = `
    <div class="update-content">
      <i class="fas fa-sync-alt"></i>
      <span>Update tersedia!</span>
      <button class="update-btn" onclick="window.location.reload()">Refresh</button>
      <button class="close-update" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  document.body.appendChild(updateBanner);
}

// Create install button if not already installed
function createInstallButton() {
  if (isPWAInstalled()) {
    console.log('PWA sudah terinstall');
    return;
  }

  installButton = document.createElement('button');
  installButton.className = 'install-pwa-btn';
  installButton.innerHTML = `
    <i class="fas fa-download"></i>
    <span>Install App</span>
  `;
  installButton.style.display = 'none';
  document.body.appendChild(installButton);

  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) return;

    installButton.style.display = 'none';
    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    
    if (outcome === 'accepted') {
      showInstallSuccessMessage();
    }
    
    deferredPrompt = null;
  });
}

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  if (!installButton) {
    createInstallButton();
  }
  
  setTimeout(() => {
    if (installButton) {
      installButton.style.display = 'flex';
    }
  }, 3000);
});

// Listen for app installed event
window.addEventListener('appinstalled', () => {
  console.log('✅ PWA berhasil diinstall!');
  deferredPrompt = null;
  
  if (installButton) {
    installButton.remove();
  }
});

// Show success message
function showInstallSuccessMessage() {
  const successMsg = document.createElement('div');
  successMsg.className = 'install-success-msg';
  successMsg.innerHTML = `
    <div class="success-content">
      <i class="fas fa-check-circle"></i>
      <span>Berhasil diinstall! Cek home screen Anda 🎉</span>
    </div>
  `;
  document.body.appendChild(successMsg);
  
  setTimeout(() => {
    successMsg.remove();
  }, 5000);
}

// Initialize on page load
window.addEventListener('load', () => {
  createInstallButton();
  
  // Log PWA status
  if (isPWAInstalled()) {
    console.log('🚀 Running as installed PWA');
  }
});

// Add CSS styles dynamically
const style = document.createElement('style');
style.textContent = `
  .install-pwa-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #6B8E6F 0%, #8FA68A 100%);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(107, 142, 111, 0.3);
    transition: all 0.3s ease;
    z-index: 9999;
    animation: slideInRight 0.5s ease;
  }

  .install-pwa-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(107, 142, 111, 0.4);
  }

  .install-pwa-btn i {
    font-size: 16px;
  }

  .update-banner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #6B8E6F 0%, #8FA68A 100%);
    color: white;
    padding: 15px;
    z-index: 10000;
    animation: slideInDown 0.5s ease;
  }

  .update-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: 'Poppins', sans-serif;
  }

  .update-btn {
    background: white;
    color: #6B8E6F;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .update-btn:hover {
    transform: scale(1.05);
  }

  .close-update {
    background: transparent;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    margin-left: auto;
  }

  .install-success-msg {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
    z-index: 10000;
    animation: slideInRight 0.5s ease;
  }

  .success-content {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .install-pwa-btn {
      bottom: 15px;
      right: 15px;
      padding: 12px 20px;
      font-size: 13px;
    }
  }
`;
document.head.appendChild(style);