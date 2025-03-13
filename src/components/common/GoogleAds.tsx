import React, { useEffect } from "react";

interface AdSenseBannerProps {
  client: string;
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  client,
  slot,
  format = "auto",
  responsive = true,
  className = "",
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className={`adsense-banner ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdSenseBanner;
