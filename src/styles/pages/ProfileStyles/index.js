import { style } from "typestyle";
import background from "../../../assets/bg_plataforma-8-1.jpg";
const HomeStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
  background: `url(${background})`,
  backgroundSize: "cover",
  color:"white",
  $nest: {
  },
});

export default HomeStyle;
