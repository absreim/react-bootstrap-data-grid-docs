import Link from "next/link";

const CopyNotice = () => (
  <div className="alert alert-info" role="alert">
    <p>
      Note that the text is copied <i>as displayed</i>, after{" "}
      <Link href="/docs/overview/basic-usage#formatting">formatters</Link> are
      applied.
    </p>
    <p>
      There is currently no way to have the user copy pre-formatted values.
    </p>
  </div>
);

export default CopyNotice;
