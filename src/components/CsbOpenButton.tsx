import { FC } from 'react';
import Button from "react-bootstrap/Button"

export interface CsbOpenButtonProps {
  params: string;
}

const CsbOpenButton: FC<CsbOpenButtonProps> = ({ params }) => {
  return (
    <form
      action="https://codesandbox.io/api/v1/sandboxes/define"
      method="POST"
      target="_blank"
    >
      <input type="hidden" name="parameters" value={params} />
      <Button type="submit">Open in Codesandbox</Button>
    </form>
  );
};

export default CsbOpenButton;
