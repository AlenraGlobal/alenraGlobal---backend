const mongoose = require("mongoose");

const DelegateApplicationSchema = new mongoose.Schema({
  packageType: String,

  // Section 1: Personal Information
  fullName: String,
  dob: String,
  gender: String,
  nationality: String,
  address: String,
  email: String,
  mobile: String,
  emergencyName: String,
  emergencyRelation: String,
  emergencyPhone: String,

  // Section 2: Education
  institution: String,
  yearLevel: String,
  englishProficiency: String,
  languages: String,

  // Section 3: Passport & Travel
  hasPassport: String,
  passportNumber: String,
  passportExpiry: String,
  passportCountry: String,
  needsVisa: String,
  hasVisa: String,

  // Section 4: Medical
  medicalConditions: String,
  medicalDetails: String,
  allergies: String,
  medications: String,
  recentDoctorVisit: String,
  activityRestriction: String,
  medicalConsent: String,

  // Section 5: Dietary
  dietaryRestrictions: String,
  dietaryNotes: String,

  // Section 6: Package Preference
  packagePreference: String,

  // Section 7: Optional Info
  interestReason: String,
  careerBenefit: String,
  priorExperience: String,
  leadershipExperience: String,

  // Section 8: Consent
  permission: String,
  liability: String,
  conduct: String,
  mediaConsent: String,

  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("DelegateApplication", DelegateApplicationSchema);