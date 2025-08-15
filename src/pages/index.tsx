import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Header from '@/components/Header'
import AddTask from '@/components/AddTask'
import Pagination from '@/components/Pagination'
import TaskTable, { Task } from '@/components/TaskTable'
import { useTable } from '@/hooks/useTable'
import Footer from '@/components/Footer'

export default function Home() {

  const {
    currentData,
    currentPage,
    totalPages,
    total,
    itemsPerPage,
    addItem,
    removeItem,
    updateItem,
    nextPage,
    prevPage,
    setItemsPerPage
  } = useTable<Task>()

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
          <div className='d-flex flex-row align-items-end gap-5'>
            <div className='flex-grow-1' style={{ maxWidth: 570 }}>
              <AddTask addItem={addItem}/>
            </div>
            <Pagination
              nextPage={nextPage}
              prevPage={prevPage}
              itemsPerPage={itemsPerPage}
              changeItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
          <TaskTable items={currentData} updateItem={updateItem} removeItem={removeItem}/>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='blockquote m-0'>Total de tarefas: {total}</p>
            <Pagination
              nextPage={nextPage}
              prevPage={prevPage}
              itemsPerPage={itemsPerPage}
              changeItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  )
}
