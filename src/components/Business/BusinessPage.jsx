import React, { useState } from "react";
import BusinessGallery from "./BusinessGallery";
import CreateBusinessModal from "./CreateBusinessModal";
import Filter from "../common/Filter";

// Interface
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonWithLoading } from "../common/inputElements";

// Hooks
import { useBusinesses } from "../../customHooks/use-businesses";

export default function BusinessPage() {
  // Filters
  const [filters, setFilters] = useState({
    showAll: false,
    mileValues: [1, 5, 10, 25, 50, 100, 500],
    mileValuesIndex: 1
  });

  const [showingCreateModal, setShowingCreateModal] = useState(false);
  const businesses = useBusinesses(
    filters.showAll ? 0 : filters.mileValues[filters.mileValuesIndex]
  );

  return (
    <>
      <h1 className="text-center brand-text">
        <FontAwesomeIcon icon="building" /> Business
      </h1>

      <hr />
      <Container className="mb-3 d-flex horizontal-scroll">
        <ButtonWithLoading
          name="open-business-create-modal"
          text="Create Business"
          onPress={() => setShowingCreateModal(true)}
          className="mr-4 my-1"
        />
        <Filter
          filters={filters}
          setFilters={setFilters}
          className="mr-2 my-1"
        />
      </Container>
      <hr />

      <CreateBusinessModal
        businesses={businesses}
        showing={showingCreateModal}
        setShowing={setShowingCreateModal}
      />

      <BusinessGallery
        businesses={businesses}
        filters={filters}
      ></BusinessGallery>
    </>
  );
}
