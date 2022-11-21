import { embedDashboard } from "@superset-ui/embedded-sdk";
import React from "react";

export default function Superset() {
  React.useEffect(() => {
    embedDashboard({
      id: "35ef25bb-f8da-42a4-b8c5-0496d659b33c", // given by the Superset embedding UI
      supersetDomain: "https://superset-osiris.srcli.xyz.dmmy.me/",
      mountPoint: document.getElementById("my-superset-container"), // any html element that can contain an iframe
      fetchGuestToken: () =>
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZ3Vlc3RhZG1pbkBzaXJjbG8uY29tIn0sInJlc291cmNlcyI6W3siaWQiOiIzNWVmMjViYi1mOGRhLTQyYTQtYjhjNS0wNDk2ZDY1OWIzM2MiLCJ0eXBlIjoiZGFzaGJvYXJkIn1dLCJybHNfcnVsZXMiOlt7ImNsYXVzZSI6Im9mZmljaWFsX3N0b3JlID0gJ0FCQyBPZmZpY2lhbCBTdG9yZScifV0sImlhdCI6MTY2OTAxNjc4Ny44NTQxNDY3LCJleHAiOjE2NjkwMjAzODcuODU0MTQ2NywiYXVkIjoiaHR0cDovLzAuMC4wLjA6ODA4MC8iLCJ0eXBlIjoiZ3Vlc3QifQ.BOciai90e4Y1-qfE_QJE7ywt89a2fCchTFhSLneOyoo",
      dashboardUiConfig: { hideTitle: true }, // dashboard UI config: hideTitle, hideTab, hideChartControls (optional)
    });
  }, []);

  return <div id="my-superset-container" />;
}
