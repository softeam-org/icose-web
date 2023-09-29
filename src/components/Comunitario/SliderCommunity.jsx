function SliderCommunity({ icon, title, content }) {
  return (
    <div className="collapse collapse-arrow text-white bg-standard-blue">
      <input type="radio" name="community-accordion" />
      <div className="collapse-title text-xl font-medium flex flex-row gap-5">
        <span>{icon}</span>  
        <span className="mx-auto uppercase">{title}</span>
      </div>
      <div className="collapse-content text-base px-16">
        {content}
      </div>
    </div>
  )
}

export default SliderCommunity;
