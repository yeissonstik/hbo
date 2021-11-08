import { style } from "typestyle";
import background from "../../../assets/bg_plataforma-8-1.jpg";
const HomeStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: `url(${background})`,
  backgroundSize: "cover",
  color:"white",
  $nest: {
  },
});

export default HomeStyle;
