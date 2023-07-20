// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const APS_ACCESS_TOKEN =
 // Specify your access token
 "eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiI5Ylg2Y3huNVlvcFhxaW9JMncyWW9JOXFyYnVibk9TcyIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiJFSHhQU3B3b3Rwc0x0N3NFUWdPNkpicm5YaHFEeEM5S2FmdHRlVUNUTzFRQlNzUDM2R3JSS2JTa3NLcGRMZUtSIiwiZXhwIjoxNjg5ODk2NDkzfQ.YIGGbUrTtEkL6gXrlHyqtVgDVSIv0BT4BUwIHgrWoMyamZedDSbiNdQ4rc44M8uPWfH_BrITKmZvama6gw0RGFvkxfxf43tmLDvD68yMhfyB3aNWLaFpNayDpVc8UiTahVWeTYtOzu6C11kKM4Fb1tjxtTn54VongdB-v_eWd2GZBtWl6Ix_lMuXqcEWLa_zsvTh6tK-FGT2aRGxPo6EDdsKNIL48vz_DmvVAINpeI1bGS9Q1SeRenI3Zbgjb2_2__qOneD-M7M2oP8jzDUYXwNqG5Yghw6hYJ4mWRmfTimKOAV_a-emsJ_E0Q3gm5LaSPBr36-8eBk6FmPZxhOtCQ"
const APS_MODEL_URN =
"dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6OWJ4NmN4bjV5b3B4cWlvaTJ3MnlvaTlxcmJ1Ym5vc3MtYmFzaWMtYXBwL2NsYXctd3JlbmNoLWZ1c2lvbi0zNjAtaW52ZW50b3ItZmlsZXMtMS5zbmFwc2hvdC4zLnppcA";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (!APS_ACCESS_TOKEN || !APS_MODEL_URN) {
  root.render(
    <div>
      Please specify <code>APS_ACCESS_TOKEN</code> and{" "}
      <code>APS_MODEL_URN</code> in the source code.
    </div>
  );
} else {
  root.render(<App token={APS_ACCESS_TOKEN} urn={APS_MODEL_URN} />);
}