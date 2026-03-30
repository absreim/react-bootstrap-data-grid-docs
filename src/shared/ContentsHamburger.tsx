"use client";

import { FC, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import ContentsNavbar from "@/shared/ContentsNavbar";
import { LinkMenuContents } from "@/shared/types";
import SiteSectionsNav from "@/shared/SiteSectionsNav";

export interface ContentsHamburgerProps {
  linkMenuContents?: LinkMenuContents;
}

const ContentsHamburger: FC<ContentsHamburgerProps> = ({
  linkMenuContents,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleShow}
        className="d-lg-none me-2"
        aria-label="Articles"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>react-bootstrap-data-grid</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-lg-none">
          {linkMenuContents && (
            <>
              <h2 className="mb-1 fs-4">{linkMenuContents.sectionTitle}</h2>
              <ContentsNavbar
                linkDefs={linkMenuContents.linkDefs}
                onClick={handleClose}
              />
              <hr />
            </>
          )}
          <h2 className="mb-1 fs-4">Site Sections</h2>
          <SiteSectionsNav variant="underline" onClick={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ContentsHamburger;
