/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "SPAM", data: [341, 200, 100, 220, 264, 100, 400, 230, 421] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "Scans",
      progress: { content: "40K", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "Recived",
      progress: { content: "100K", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "Blocks",
      progress: { content: "10K", percentage: 25 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "Reports",
      progress: { content: "1K", percentage: 10 },
    },
  ],
};

export default reportsBarChartData;
