const whatsappUrl = "https://wa.me/233539611355?text=Hello%20King%20Solomon%20Investment%20%26%20Supplies%2C%20I%20would%20like%20to%20ask%20about%20your%20services.";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send a WhatsApp message to 0539611355"
      title="Chat on WhatsApp"
    >
      <svg
        className="whatsapp-icon"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.82 11.82 0 0 0 12.09 0C5.53 0 .19 5.34.19 11.9c0 2.1.55 4.14 1.59 5.95L.08 24l6.31-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.88-5.34 11.89-11.9a11.82 11.82 0 0 0-3.46-8.42Zm-8.44 18.29h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89Z"
          fill="currentColor"
        />
        <path
          d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.23-.64.08-.3-.15-1.26-.47-2.39-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.28.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
      <span className="whatsapp-tooltip" aria-hidden="true">Chat on WhatsApp</span>
    </a>
  );
}