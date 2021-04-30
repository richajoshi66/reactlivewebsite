import React from "react";
import Layout from '../MyLayout';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
function Faqs(Props) {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
    return (
        <Layout>
            <section className="page-banner home-page-banner faq-page-banner">
                <div className="banner-overlay"></div>
                <div className="faq-page-banner-shapes faqs">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text">
                                <h1>
                                    Frequently Asked Questions
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-list-outer">
                <div className="container">
                    <div className="accordian-outer">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">What is Brandzooka?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="acc-content">
                                    Brandzooka is an easy-to-use, self-service video advertising platform. You can launch your video ad campaign with Brandzooka to get it seen by just the right people as an advertisement on websites all over the internet and around the world. We offer industry-leading targeting and placement with a minimum budget of just $5.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">How does it work? What’s the process?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="acc-content">
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">What countries can I run my Brandzooka campaign in?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="acc-content">
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">What is programmatic advertising? Who’s using it?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="acc-content">
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">How much does it cost to use Brandzooka?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="acc-content">
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">Will my Youtube and Vimeo views go up?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="acc-content">
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">What’s the best way to use Brandzooka’s targeting?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="acc-content">
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">Can I see examples of videos that ran through Brandzooka?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="acc-content">
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Faqs;