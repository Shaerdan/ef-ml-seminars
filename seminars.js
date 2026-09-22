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
  blurb: "The Environmental Forecasting (EF) mission's monthly seminar series: invited talks on " +
         "machine learning for environmental forecasting, a way to share ideas with the wider " +
         "university network and develop new opportunities together. Open to the whole Mission " +
         "and to collaborators.",
  cadence: "Monthly · online · 1 hour (30 min talk + 30 min Q&A)",   // free text, shown under the blurb
  organisers: "Shaerdan Shataer (lead), with Louisa Van Zeeland and Evangeline Corcoran " +
              "(speaker suggestions) and Kelin Yue (logistics). The lead rotates every six months.",
  contact: { name: "Shaerdan Shataer", email: "sshataer@turing.ac.uk" },
  repo: "https://github.com/Shaerdan/ef-ml-seminars",
};

window.SEMINARS = [
  {
    id: "2026-briol",   // short, unique, URL-safe; used for permalinks (#2026-briol)
    title: "Some advances in robust and scalable probabilistic machine learning",
    speaker: "Prof. François-Xavier Briol",
    affiliation: "Professor of Statistics and Machine Learning, University College London",
    speaker_url: "https://fxbriol.github.io/",
    date: "2026-09-24",
    time: "11:00–12:00 (UK time)",
    duration_min: 60,           // used for the calendar entry
    location: "Online",         // room / "Online" / "Hybrid"; null = "Venue TBC"
    online: null,               // meeting link, if you want it public (see README: Pages sites are public)
    note: "30 min talk + 30 min Q&A. Hosted by the sea-ice team; the whole Mission is invited. " +
          "Joining link circulated by email.",
    abstract:
      "Probabilistic machine learning methods rely on statistical models that are inevitably imperfect. " +
      "In environmental forecasting, for example, measurements may be corrupted by faulty sensors, " +
      "calibration errors, or occasional extreme contamination. Such errors can lead to poor predictions " +
      "and unreliable uncertainty quantification. Robust methods can mitigate these effects, but often at " +
      "the cost of additional computation. In this talk, I will show how generalised Bayesian inference can " +
      "often avoid this trade-off, yielding methods that are both robust and scalable. Gaussian process " +
      "regression will provide the main running example, but I will also discuss broader applications to " +
      "Kalman filtering, change-point detection, simulation-based inference, and beyond.",
    bio:
      "François-Xavier Briol is Professor of Statistics and Machine Learning at UCL Statistical Science, " +
      "where he co-leads the Fundamentals of Statistical Machine Learning group and leads the Computational " +
      "Statistics and Machine Learning theme. From 2020 to 2023 he was a Group Leader in Data-Centric " +
      "Engineering at The Alan Turing Institute.\n\n" +
      "His research merges large-scale scientific models with data: new computational methods, inference that " +
      "stays robust when the model is misspecified or the data are corrupted, and uncertainty quantification. " +
      "Recent work with his group develops generalised Bayesian methods that are both robust and scalable, for " +
      "Gaussian process emulators, online change-point detection, Kalman filtering and simulation-based " +
      "inference. His earlier work on probabilistic numerics and Bayesian quadrature includes his most-cited " +
      "paper (Statistical Science, 2019).\n\n" +
      "He is director of research of the UCL CDT in Data-Intensive Science, co-director of the London ELLIS " +
      "unit, an associate editor of the SIAM/ASA Journal on Uncertainty Quantification and of Bayesian " +
      "Analysis, an area chair for NeurIPS, and an organiser of the One World Approximate Bayesian Inference " +
      "seminar series. He studied at Warwick (MMORSE, then a PhD through the Warwick–Oxford CDT) and held " +
      "postdoctoral positions at Imperial College London and the University of Cambridge before joining UCL " +
      "in 2019.",
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
  //   location: "Online", online: null,
  //   note: null,
  //   abstract: "",
  //   bio: null,
  //   tags: [],
  //   slides: null, recording: null,
  // },
];
