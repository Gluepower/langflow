import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { alertContext } from "../../contexts/alertContext";
import { TextAreaComponentType } from "../../types/components";

export default function InputFileComponent({
	value,
	onChange,
	disabled,
}: TextAreaComponentType) {
	const [myValue, setMyValue] = useState(value);
	const { setErrorData } = useContext(alertContext);
	useEffect(() => {
		if (disabled) {
			setMyValue("");
			onChange("");
		}
	}, [disabled, onChange]);

	function attachFile(fileReadEvent: ProgressEvent<FileReader>) {
		fileReadEvent.preventDefault();
		const file = fileReadEvent.target.result;
		console.log(file);
	}

	const handleButtonClick = () => {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = ".json";
		input.style.display = "none";
		input.multiple = false;
		input.onchange = (e: Event) => {
			const file = (e.target as HTMLInputElement).files?.[0];
			const fileData = new FileReader();
			fileData.onload = attachFile;
			if (file && file.name.endsWith(".json")) {
				fileData.readAsDataURL(file);
				setMyValue(file.name);
				onChange(file.name);
			} else {
				setErrorData({
					title:
						"Please select a valid file. Only files this files are allowed:",
					list: ["*.json"],
				});
			}
		};
		input.click();
	};

	return (
		<div
			className={
				disabled ? "pointer-events-none cursor-not-allowed w-full" : "w-full"
			}
		>
			<div className="w-full flex items-center gap-3">
				<span
					className={
						"truncate block w-full text-gray-500 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" +
						(disabled ? " bg-gray-200" : "")
					}
				>
					{myValue !== "" ? myValue : "No file"}
				</span>
				<button onClick={handleButtonClick}>
					<DocumentMagnifyingGlassIcon className="w-8 h-8  hover:text-blue-600" />
				</button>
			</div>
		</div>
	);
}
