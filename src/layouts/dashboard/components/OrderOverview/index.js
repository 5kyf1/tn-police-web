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

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Report overview
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="medium">
              23%
            </SoftTypography>{" "}
            this month
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="Identified as Spam"
          dateTime="24 MAR 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="Adding to Database"
          dateTime="24 MAR 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Start gathering resources"
          dateTime="25 MAR 9:34 AM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Gathering OSINT info"
          dateTime="25 MAR 10:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Report Compailed"
          dateTime="25 MAR 4:54 PM"
        />
        <TimelineItem color="dark" icon="paid" title="Report Number #123" dateTime="17 DEC" />
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
