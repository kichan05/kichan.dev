import {useParams} from "react-router-dom";
import React from "react";

export const PortfolioPage = () => {
  const params = useParams()
  console.log(params)
  return (
    <h1>대충 포폴 {params.portfolilId}</h1>
  )
}