function SliderCommunity({ icon, title, content }) {
  return (
    <div className="collapse collapse-plus text-white bg-standard-blue">
      <input type="checkbox" className="accordion-1" />
      <div className="collapse-title text-xl font-medium flex flex-row gap-5">
        <span className="mr-auto self-center">{icon}</span>
        <span className="mr-auto uppercase">{title}</span>
      </div>
      <div className="collapse-content text-base px-10">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default SliderCommunity;
