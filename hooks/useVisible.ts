import {useState} from "react";

const useVisible = () => {
	const [visible, setVisible] = useState(false)
	const toggle = () => {
		setVisible(prev=>!prev)
	}

	return {
		visible,
		toggle
	}
}

export default useVisible;