import Image from "next/image";
import { Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <header>
      <Container className="header p-0">
        <Image src="/logo.png" alt="Logo" width={347} height={65} />
      </Container>
    </header>
  );
};

export default Header;
