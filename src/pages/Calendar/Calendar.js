import { Box, HStack } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { calendarDataCalendar } from "../../components/Dashboard/CalendarData";
import {
  lineChartDataCharts2,
  lineChartOptionsCharts2,
} from "../../components/Variable/ChartData";
import ReactApexChart from "react-apexcharts";

const Calendar = () => {
  return (
    <Box maxW="8xl" ml={250} pt={20}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={true}
        initialView="dayGridMonth"
        contentHeight="500"
        events={calendarDataCalendar}
        editable={false}
        minHeight="400px"
        height="400px"
        slotWidth={10}
        customIcons={false}
      />
    </Box>
  );
};

export default Calendar;
