import Link from "next/link";

const RefDocNotice = () => (
  <div className="alert alert-info" role="alert">
    <h2>API Reference Documentation Notice</h2>
    <p>
      Some of the contents of this article refer to TypeScript type definitions
      for types within the react-bootstrap-data-grid code base. Such references
      are generally look like the following: <code>GridProps</code>.
    </p>
    <p>
      Efforts are underway to create comprehensive TypeScript type reference
      documentation. In the meantime, feel free to explore the{" "}
      <Link href="https://github.com/absreim/react-bootstrap-data-grid">
        react-bootstrap-data-grid source code
      </Link>{" "}
      for specific information about types.
    </p>
    <p>
      Alternatively, you may be able to gain a satisfactory understanding of how
      to use the feature described in this article by simply following the code
      sample in this article.
    </p>
  </div>
);

export default RefDocNotice;
