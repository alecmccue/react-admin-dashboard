import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh" m="-20px 0 0 -20px">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;