import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Header from '@/components/Header'
import AddTask from '@/components/AddTask'
import Pagination from '@/components/Pagination'

export default function Home() {
  return (
    <>
      <Head>
        <title>To-do App</title>
        <meta
          name='description'
          content='To-do App, made by José Oliveira *insert convincing description*'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Container as='main' className='mx-auto p-0 container'>
        <Header />
        <Container className='card'>
          <h1>As minhas tarefas</h1>
          <div className='d-flex flex-row gap-5'>
            <div className='flex-grow-1' style={{ maxWidth: 570 }}>
              <AddTask />
            </div>
            <Pagination />
          </div>
        </Container>
      </Container>
    </>
  )
}
