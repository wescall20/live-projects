/* Gemini handoff point: replace false flags and adapters when services are connected. */
window.RENEW_API_CONFIG = {
  mode: "email-fallback",
  endpoints: {
    leadSubmission: "",
    photoUpload: "",
    leadStatus: "",
    markDashboard: "dashboard.html"
  },
  features: {
    geminiSummary: false,
    firestore: false,
    firebaseStorage: false,
    placesAutocomplete: false,
    addressValidation: false,
    googleCalendar: false,
    transactionalEmail: false,
    sms: false,
    payments: false
  }
};
