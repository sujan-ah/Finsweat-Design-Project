import React from "react";
import FeatureClient from "../component/featureClient/FeatureClient";
import FeatureBanner from "../component/featurebanner/FeatureBanner";
import FeatureBenefits from "../component/featureBenefits/FeatureBenefits";
import FeatureRevision from "../component/featureRevision/FeatureRevision";
import FeatureWorking from "../component/featureWorking/FeatureWorking";
import FeatureDelivery from "../component/featureDelivery/FeatureDelivery";
import Faq from "../component/faq/Faq";

const Feature = () => {
  return (
    <>
      <FeatureBanner />
      <FeatureBenefits />
      <FeatureClient />
      <FeatureRevision />
      <FeatureWorking />
      <FeatureDelivery />
      <Faq />
    </>
  );
};

export default Feature;
