// =====================================================================
//  ML for Environmental Forecasting — seminar series data
//  ---------------------------------------------------------------------
//  This is the ONLY file you need to edit to update the site.
//  * SERIES   — page title, blurb, organiser contact, repo URL.
//  * SEMINARS — one object per seminar (upcoming or past).
//  Dates are ISO "YYYY-MM-DD". Use null for anything not yet fixed;
//  the page shows "TBC" for it. Past/upcoming is decided automatically
//  from the date. Trailing commas are fine.
// =====================================================================

window.SERIES = {
  title: "ML for Environmental Forecasting",
  kicker: "Seminar series · Environmental Forecasting mission · The Alan Turing Institute",
  short: "EF ML Seminar",          // used in calendar entries
  blurb: "Invited talks on machine learning for environmental forecasting: " +
         "probabilistic and physics-informed ML, data assimilation, uncertainty " +
         "quantification, and forecast evaluation. Open to all EF mission members " +
         "and collaborators.",
  cadence: "Roughly monthly · 45 min talk + 15 min discussion",   // free text, shown under the blurb
  contact: { name: "Shaerdan", email: "TODO@turing.ac.uk" },       // TODO: fill in
  repo: "https://github.com/alan-turing-institute/ef-ml-seminars",
};

window.SEMINARS = [
  {
    id: "2026-briol",   // short, unique, URL-safe; used for permalinks (#2026-briol)
    title: "Some advances in robust and scalable probabilistic machine learning",
    speaker: "Prof. François-Xavier Briol",
    affiliation: "Professor of Statistics and Machine Learning, University College London",
    speaker_url: "https://fxbriol.github.io/",
    date: null,                 // "YYYY-MM-DD" once confirmed
    time: null,                 // e.g. "14:00–15:00 (UK time)"
    duration_min: 60,           // used for the calendar entry
    location: null,             // room / "Online" / "Hybrid"; null = "Venue TBC"
    online: null,               // meeting link, if you want it public (see README: Pages sites are public)
    abstract:
      "Probabilistic machine learning methods rely on statistical models that are inevitably imperfect. " +
      "In environmental forecasting, for example, measurements may be corrupted by faulty sensors, " +
      "calibration errors, or occasional extreme contamination. Such errors can lead to poor predictions " +
      "and unreliable uncertainty quantification. Robust methods can mitigate these effects, but often at " +
      "the cost of additional computation. In this talk, I will show how generalised Bayesian inference can " +
      "often avoid this trade-off, yielding methods that are both robust and scalable. Gaussian process " +
      "regression will provide the main running example, but I will also discuss broader applications to " +
      "Kalman filtering, change-point detection, simulation-based inference, and beyond.",
    bio: null,                  // optional short bio (plain text; blank line = new paragraph)
    tags: ["probabilistic ML", "generalised Bayesian inference", "Gaussian processes",
           "robustness", "Kalman filtering", "change-point detection", "simulation-based inference"],
    slides: null,               // URL after the talk
    recording: null,            // URL after the talk
  },

  // ---- Template for the next seminar (copy, uncomment, fill in) ----
  // {
  //   id: "2026-surname",
  //   title: "",
  //   speaker: "",
  //   affiliation: "",
  //   speaker_url: null,
  //   date: null, time: null, duration_min: 60,
  //   location: "TBC", online: null,
  //   abstract: "",
  //   bio: null,
  //   tags: [],
  //   slides: null, recording: null,
  // },
];
