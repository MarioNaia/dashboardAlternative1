import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
<Box m="20px">
  <Header title="FAQ" subtitle="Frequently Asked Questions - ERP Reporting" />

  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={colors.greenAccent[500]} variant="h5">
        How do I generate a sales report?
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        To generate a sales report, navigate to the "Reports" section in the main menu, then select "Sales" from the dropdown. Choose the date range, customer, or product category filters as needed. Click "Generate" to view the detailed sales data.
      </Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={colors.greenAccent[500]} variant="h5">
        Can I customize report templates?
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Yes, you can customize report templates by going to the "Report Settings" section. From there, you can modify existing templates or create new ones. You can adjust fields, layout, and add filters to suit your reporting needs.
      </Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={colors.greenAccent[500]} variant="h5">
        How do I schedule automated reports?
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        To schedule automated reports, go to the "Automation" tab under the Reports section. Select the report you wish to schedule, set the frequency (daily, weekly, monthly), and choose the recipients who will receive the report via email.
      </Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={colors.greenAccent[500]} variant="h5">
        What formats can reports be exported in?
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Reports can be exported in multiple formats including PDF, Excel, and CSV. Choose the format based on your needs by clicking the "Export" button after generating a report and selecting your preferred file type.
      </Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={colors.greenAccent[500]} variant="h5">
        How do I fix discrepancies in financial reports?
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        If you find discrepancies in your financial reports, first check if all transactions have been correctly entered and closed. Use the "Audit Trail" feature to trace changes. If issues persist, consult the support team for deeper analysis.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Box>

  );
};

export default FAQ;
