import React, { useState } from 'react';

function Carousel() {
	const [selectedButton, setSelectedButton] = useState(1);

	const handleButtonClick = (index) => {
		setSelectedButton(index);
	};
	return (

			<div>
				<div className="carousel  w-full flex py-8 space-x-10">
					<div id="item1" className="flex flex-row carousel-item w-full space-x-10">
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
					</div>
					<div id="item2" className="flex flex-row carousel-item w-full space-x-10">
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
					</div>
					<div id="item3" className="flex flex-row carousel-item w-full space-x-10">
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
					</div>
					<div id="item4" className="flex flex-row carousel-item w-full space-x-10">
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
					</div>
					<div id="item5" className="flex flex-row carousel-item w-full space-x-10">
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
						<div className="w-1/3 ">
							<img src="src\assets\news.svg" className="w-full" />
							<div className="w-full flex flex-col space-y-1.5 md:space-y-2 py-3 ">
								<h2 className="font-inter font-semibold text-standard-blue text-xs sm:text-base md:text-2xl xl:text-2xl text-left">
									Título da matéria
								</h2>
								<p className="text-xs">5 de fevereiro de 2022</p>
								<p className="text-xs sm:text-sm md:text-base w-full h-full ">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum...
								</p>
							</div>
						</div>
					</div>

				</div>

				<div className="flex justify-center w-full h-2  gap-2">
					<a href="#item1"
						onClick={() => handleButtonClick(1)}
						className={`btn w-1 p-1 h-0 min-h-0  rounded-full ${selectedButton === 1 ? 'bg-black' : 'border-solid  border-black'
							}`}
					></a>
					<a href="#item2"
						onClick={() => handleButtonClick(2)}
						className={`btn w-1 p-1 h-0 min-h-0  rounded-full ${selectedButton === 2 ? 'bg-black' : 'border-solid  border-black'
							}`}
					></a>
					<a href="#item3"
						onClick={() => handleButtonClick(3)}
						className={`btn w-1 p-1 h-0 min-h-0  rounded-full ${selectedButton === 3 ? 'bg-black' : 'border-solid  border-black'
							}`}
					></a>
					<a href="#item4"
						onClick={() => handleButtonClick(4)}
						className={`btn w-1 p-1 h-0 min-h-0  rounded-full  ${selectedButton === 4 ? 'bg-black' : 'border-solid  border-black'
							}`}
					></a>
					<a href="#item5"
						onClick={() => handleButtonClick(5)}
						className={`btn w-1 p-1 h-0 min-h-0 rounded-full  ${selectedButton === 5 ? 'bg-black ' : 'border-solid  border-black'
							}`}
					></a>
				</div>
			</div>


	);
}
export default Carousel;