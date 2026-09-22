// =====================================================================
//  Topics of interest — what EF mission members would like to hear about.
//  Add a line per topic. status: "wanted" | "scheduled" | "covered".
//  seminar: id of the seminar that covers it (adds a link), or null.
//  Prefer opening an issue (Suggest a topic) so it can be discussed;
//  then record the outcome here.
// =====================================================================

window.TOPICS = [
  // ---- From the Mission's own priorities (all teams are moving to work with raw observations directly) ----
  { topic: "Robust inference from raw observations: faulty sensors, calibration errors, contamination",
    why: "Sensor faults and calibration drift are the norm in environmental data.",
    proposed_by: "EF mission", status: "scheduled", seminar: "2026-briol", issue: null },
  { topic: "Working directly with raw observations rather than gridded or reanalysis products",
    why: "All Mission teams are moving this way; shared methods and pitfalls.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Bias correction of observations and of model output",
    why: "Needed before raw observations can be combined or assimilated.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Transfer learning across regions, sensors and models",
    why: "Reuse what is learned where data are rich in places where they are sparse.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Simulation and simulation-based inference for environmental models",
    why: "Many EF models have intractable likelihoods; simulators are the data source.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },

  // ---- Broader ML-for-forecasting themes ----
  { topic: "Hybrid data assimilation + machine learning (learned observation operators, ML priors, 4D-Var with neural surrogates)",
    why: "Where forecasting practice actually meets ML.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Uncertainty quantification and calibration for ML forecasts",
    why: "Point forecasts are not enough for decision making.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Foundation and large weather/climate models: what transfers to regional and environmental problems?",
    why: "Rapidly moving area; separating hype from usable results.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Generative models for ensembles, downscaling and scenario generation",
    why: "Diffusion/flow models are replacing perturbation-based ensembles in some settings.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Forecast verification: metrics, baselines (persistence, climatology) and fair comparison",
    why: "Shared standards for evaluating ML forecasts across the mission.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Sea ice, ocean and cryosphere forecasting with ML",
    why: "Active mission workstreams; cross-pollination with other domains.",
    proposed_by: "EF mission", status: "wanted", seminar: null, issue: null },
  { topic: "Mathematics of deep learning and interpretable AI",
    why: "Possible knowledge exchange with Math4DL (University of Bath and partner universities).",
    proposed_by: "Shaerdan", status: "wanted", seminar: null, issue: null },
];
