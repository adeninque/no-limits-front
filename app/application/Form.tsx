'use client'

import s from './Form.module.scss'
import {FormEvent} from "react";
import FileInput from "@/app/application/FileInput";

const Form = () => {

	const formHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(new FormData(e.target as HTMLFormElement))
	}

  return (
    <>
	    <form onSubmit={formHandler} className={s.form}>
		    <div className={s.form__body}>
			    <FileInput name={'document1'} label={'Свидетельство о рождении'}/>
			    <FileInput name={'document1'} label={'Документ об опекунстве'}/>
		    </div>
		    <input type="submit" className={s.form__submit} value={'Подавть заявку'}/>
	    </form>
    </>
  )
}

export default Form;