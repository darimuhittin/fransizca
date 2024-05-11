const mongoose = require("mongoose");

const complianceSchema = new mongoose.Schema({
  fr: {
    lang: {
      type: String,
      default: "fr",
    },
    pageTitle: {
      type: String,
    },
    titleImg: {
      type: String,
    },
    titleH1Text1: {
      type: String,
    },
    pText1: {
      type: String,
    },
    img1: {
      type: String,
    },
    liText1: {
      type: String,
    },
    liText2: {
      type: String,
    },
    liText3: {
      type: String,
    },
    liText4: {
      type: String,
    },
    pText2: {
      type: String,
    },
    quoteText1: {
      type: String,
    },
    titleH1Text2: {
      type: String,
    },
    pText3: {
      type: String,
    },
    img2: {
      type: String,
    },
    Icon1: {
      type: String,
    },
    IconTitleText1: {
      type: String,
    },
    IconPText1: {
      type: String,
    },
    Icon2: {
      type: String,
    },
    IconTitleText2: {
      type: String,
    },
    IconPText2: {
      type: String,
    },
    titleH1Text3: {
      type: String,
    },
    pText4: {
      type: String,
    },
    panelTitleText1: {
      type: String,
    },
    panelPText1: {
      type: String,
    },
    panelTitleText2: {
      type: String,
    },
    panelPText2: {
      type: String,
    },
    panelTitleText3: {
      type: String,
    },
    panelPText3: {
      type: String,
    },
    titleH1Text4: {
      type: String,
    },
    pText5: {
      type: String,
    },
    liText5: {
      type: String,
    },
    liText6: {
      type: String,
    },
    liText7: {
      type: String,
    },
    liText8: {
      type: String,
    },
  },
  en: {
    lang: {
      type: String,
      default: "en",
    },
    pageTitle: {
      type: String,
    },
    titleImg: {
      type: String,
    },
    titleH1Text1: {
      type: String,
    },
    pText1: {
      type: String,
    },
    img1: {
      type: String,
    },
    liText1: {
      type: String,
    },
    liText2: {
      type: String,
    },
    liText3: {
      type: String,
    },
    liText4: {
      type: String,
    },
    pText2: {
      type: String,
    },
    quoteText1: {
      type: String,
    },
    titleH1Text2: {
      type: String,
    },
    pText3: {
      type: String,
    },
    img2: {
      type: String,
    },
    Icon1: {
      type: String,
    },
    IconTitleText1: {
      type: String,
    },
    IconPText1: {
      type: String,
    },
    Icon2: {
      type: String,
    },
    IconTitleText2: {
      type: String,
    },
    IconPText2: {
      type: String,
    },
    titleH1Text3: {
      type: String,
    },
    pText4: {
      type: String,
    },
    panelTitleText1: {
      type: String,
    },
    panelPText1: {
      type: String,
    },
    panelTitleText2: {
      type: String,
    },
    panelPText2: {
      type: String,
    },
    panelTitleText3: {
      type: String,
    },
    panelPText3: {
      type: String,
    },
    titleH1Text4: {
      type: String,
    },
    pText5: {
      type: String,
    },
    liText5: {
      type: String,
    },
    liText6: {
      type: String,
    },
    liText7: {
      type: String,
    },
    liText8: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Compliance", complianceSchema);
