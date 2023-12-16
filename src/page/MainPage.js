import {FirstSection} from "../section/FirstSection";
import {BusinessCardSection} from "../section/BusinessCardSection";
import {PortfolioSection} from "../section/PortfolioSection";
import React from "react";

export const MainPage = () => {
  return (
    <>
      <FirstSection/>
      <BusinessCardSection/>
      <PortfolioSection/>
    </>
  )
}