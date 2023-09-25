import mapPinLine from "../../assets/mapPinLine.svg";
import handShake from "../../assets/handShake.svg";
import hexagon from "../../assets/hexagon.svg";

function sliderCommunity({ icon, title, content}) {
  let titleUpperCase = title.toUpperCase();

  let selectedIcon;

  switch(icon) {
    case 'mapPinLine':
    selectedIcon = mapPinLine;
    break;

    case 'handShake':
    selectedIcon = handShake;
    break;

    case 'hexagon':
    selectedIcon = hexagon;
    break;

    default:
    selectedIcon = null;
  }

  return (
    <div className="collapse collapse-plus text-white bg-standard-blue">
            <input type="checkbox" className="accordion-1" />
            <div className="collapse-title text-xl font-medium flex flex-row gap-5">
              <img className="mr-auto" src={selectedIcon}/>
              <span className="mr-auto">{titleUpperCase}</span>
            </div>
            <div className="collapse-content text-base px-10">
              <p>{content}</p>
            </div>
          </div>  
  )
}

export default sliderCommunity;