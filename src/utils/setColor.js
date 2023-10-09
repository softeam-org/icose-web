import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/tailwind.config.js"

function setColor(color) {
  const colors = resolveConfig(tailwindConfig).theme.colors;
  const hexRegex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  const isHex = hexRegex.test(color);

  if (isHex)
    return color;

  if (!color || !colors[color])
    return colors["standard-blue"];

  return colors[color];
}

export default setColor;

