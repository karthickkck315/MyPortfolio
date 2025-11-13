// Event tracking utility for Google Sheets
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby38a4Z1Qzh2QZLEQo_V7pHiUg5g1QL7_fUn1Qh2YJhADB6-ACaGJ5Y-Ye1qMcdvW26/exec';

/**
 * Detect the platform/device type
 * @returns 'iOS', 'Android', or 'Web'
 */
const detectPlatform = (): string => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // Check for iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'iOS';
  }
  
  // Check for Android
  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  
  // Default to Web
  return 'Web';
};

/**
 * Track events to Google Sheets
 * @param eventType - Type of event (e.g., 'resume_download', 'contact_click')
 * @param label - Label for the event (e.g., 'Email', 'LinkedIn', 'PDF', 'DOCX')
 * @param source - Source of the event (e.g., 'portfolio', 'header', 'hero', 'contact')
 */
export const trackEvent = async (
  eventType: string,
  label: string,
  source: string = 'portfolio'
) => {
  try {
    const platform = detectPlatform();
    // Include platform as separate field and also append to label for easy viewing
    const labelWithPlatform = `${label} [${platform}]`;
    
    const eventData = {
      eventType,
      label: labelWithPlatform,
      platform, // Add platform as separate field
      source,
    };

    // Send event to Google Sheets (fire and forget - don't wait for response)
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    }).catch((error) => {
      // Silently fail - don't interrupt user experience
      console.error('Event tracking error:', error);
    });
  } catch (error) {
    // Silently fail - don't interrupt user experience
    console.error('Event tracking error:', error);
  }
};

