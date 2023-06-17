'use client'

import s from './Form.module.scss'
import {ChangeEvent, useRef, useState} from "react";
import {event} from "next/dist/build/output/log";
import {redirect} from "next/navigation";

interface FileInputProps {
	name: string,
	label: string
}

const FileInput = ({name, label}: FileInputProps) => {
	const [previewImage, setPreviewImage] = useState<string>()
	const [files, setFiles] = useState<File[] | null>(null)
	const inputRef = useRef<HTMLInputElement|null>(null)
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e?.target?.files) {
			const file = e?.target?.files[0]
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreviewImage(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className={s.fileinput}>
			<label className={s.fileinput__label} htmlFor={name}>{label}</label>
			<input className={s.fileinput__input} ref={inputRef} id={name} type="file" name={name} accept={'image/*'} onChange={changeHandler}/>
			{previewImage ? (
				<img className={s.fileinput__img} src={previewImage} alt={name}/>
			): <h2 className={s.fileinput__noImage}>The file has not been selected yet</h2>}
			<h2 className={s.fileinput__btn} onClick={() => inputRef.current?.click()}>Choose File</h2>
		</div>
	)
}

export default FileInput;