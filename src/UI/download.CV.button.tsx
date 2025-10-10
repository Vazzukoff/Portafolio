import{ FaFileDownload } from "react-icons/fa";

const DownloadButton = () => {
	return (
		<a href="/assets/CV.portfolio.pdf" download>
			<button className="text-black bg-white font-subtitle min-w-[10px] flex items-center gap-2 hover:bg-black hover:text-white hover:border-white transition-all duration-300">
				<FaFileDownload /> Download CV
			</button>
		</a>
	)
}

export default DownloadButton;