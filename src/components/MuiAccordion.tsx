import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const onChangeHandler =
    (panel: string) => (e: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Box component={"section"}>
        <Container>
          {/* disabled - defaultExpanded */}
          <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
            {/* expandIcon - aria-controls */}
            <AccordionSummary expandIcon=">">
              AccordionSummary 1{" "}
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              fugit sit iusto nulla qui unde! Eligendi recusandae nostrum,
              dolore quia cupiditate cum, odit saepe, tempora illo nesciunt
              aliquid voluptatibus illum?
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon=">">
              AccordionSummary 2{" "}
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              reiciendis corporis unde, commodi culpa eum architecto debitis
              obcaecati quisquam blanditiis praesentium saepe labore suscipit ex
              velit hic quo, quia tenetur?{" "}
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
      <Box component={"section"}>
        <Container>
          {/* disabled - defaultExpanded - expanded */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={onChangeHandler("panel1")}
            slotProps={{ transition: { unmountOnExit: true } }}
          >
            {/* expandIcon - aria-controls */}
            <AccordionSummary expandIcon=">">
              AccordionSummary 1{" "}
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              fugit sit iusto nulla qui unde! Eligendi recusandae nostrum,
              dolore quia cupiditate cum, odit saepe, tempora illo nesciunt
              aliquid voluptatibus illum?
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "pane2"}
            onChange={onChangeHandler("pane2")}
          >
            <AccordionSummary expandIcon=">">
              AccordionSummary 2{" "}
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              reiciendis corporis unde, commodi culpa eum architecto debitis
              obcaecati quisquam blanditiis praesentium saepe labore suscipit ex
              velit hic quo, quia tenetur?{" "}
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </>
  );
};

export default MuiAccordion;
