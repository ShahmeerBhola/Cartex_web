import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
 
  const style = {
    fontSize: "34px",
    margin: "10px",
    "&.MuiAccordionDetails-root": {
      color: "#F47521",
      fontWeight: "bold"
    }
  };

  return (
    <div>
      <Accordion  sx={style}>
        <AccordionSummary
           sx={style}
          expandIcon={<ExpandMoreIcon className='text-[#F47521]' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        
        >
          {/* <Typography className={`${active === i && '!bg-primary text-orange font-bold'}`} >{props.title}</Typography> */}
          <Typography  >{props.title}</Typography>
        </AccordionSummary>
        <hr/>

        <AccordionDetails>
          <div className='text-[17px]'>
            {props.desc}
          </div>
          {/* <Typography  >
            {props.desc}
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}