import React from "react";
import BusinessThumbnail from "./BusinessThumbnail";

// Interface
import CardDeck from "react-bootstrap/CardDeck";
import { Loader } from "../common/Loader";

export default function BusinessGallery({ businesses }) {
  const businessesToDisplay = businesses.map(business => (
    <BusinessThumbnail business={business}></BusinessThumbnail>
  ));

  if (businesses.length === 0) return <Loader />;

  return <CardDeck>{businessesToDisplay}</CardDeck>;
}
