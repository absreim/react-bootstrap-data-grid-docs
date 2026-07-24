import Link from "next/link";

const RefDocNotice = () => (
  <div className="alert alert-info" role="alert">
    Note: this code sample makes use of{" "}
    <Link href="https://react-bootstrap.netlify.app/">react-bootstrap</Link>.
  </div>
);

export default RefDocNotice;
