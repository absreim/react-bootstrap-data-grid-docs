"use client";

import { FC, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import ContentsNavbar from "../ContentsNavbar";
import { LinkMenuContents } from "@/shared/types";
import SiteSectionsNav from "@/shared/AppBar/SiteSectionsNav";
import List from "@/assets/icons/List";

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
        <List />
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
