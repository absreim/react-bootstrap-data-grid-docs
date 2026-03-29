import { FC } from "react";
import Stack from "react-bootstrap/Stack";
import Link from "next/link";
import Logo from "@/assets/Logo";

const Page: FC = () => (
  <div className="text-center w-100">
    <Logo className="hero-logo" />
    <h1>react-bootstrap-data-grid</h1>
    <p>
      Data grid UI component that seamlessly integrates into web apps built with
      React and Bootstrap
    </p>
    <Stack direction="horizontal" gap={2} className="justify-content-center">
      <Link href="docs/introduction" className="btn btn-primary">
        Read the docs
      </Link>
      <Link href="blog" className="btn btn-secondary">
        Tech blog
      </Link>
    </Stack>
  </div>
);

export default Page;
