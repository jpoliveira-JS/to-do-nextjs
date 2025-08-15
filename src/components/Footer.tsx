import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className='p-0 py-5 container'>
        <div className=''>
          <Image src='/logo.png' alt='Logo' width={169} height={32} />
          <span style={{marginLeft: '32px'}}>Execício desenvolvido por: José Oliveira</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
