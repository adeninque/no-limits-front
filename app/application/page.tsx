import s from './page.module.scss'
import Form from "@/app/application/Form";


const Applications = async () => {
  return (
    <>
      <div className="container">
        <div className="title" style={{marginBottom: '1rem'}}>Подача заявки на инвалидность: </div>
        <Form />
      </div>
    </>
  )
};

export default Applications;