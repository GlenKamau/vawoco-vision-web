import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in-bottom">
      <div className="container mx-auto max-w-4xl bg-card border border-primary/20 rounded-2xl shadow-glow p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl animate-float">
            <Cookie className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg mb-2">Cookie Preferences</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAccept} className="shadow-glow">
                Accept All
              </Button>
              <Button onClick={handleReject} variant="outline">
                Reject All
              </Button>
            </div>
          </div>
          <button
            onClick={handleReject}
            className="p-2 hover:bg-primary/10 rounded-lg transition-smooth"
            aria-label="Close cookie consent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
