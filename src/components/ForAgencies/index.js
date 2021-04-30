import React from 'react';
import Layout from '../MyLayout'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

function ForAgencies(props) {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        customPaging: i => (
            <div className="video-slider-counts">
                <span className="text">Nike: Run with Purpose </span>
                <span className="counts">
                    0{i + 1}
                </span>
            </div>
        )
    };
    const settingsPartners = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settingsReview = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <div className="review-slider-counts">
                <span className="counts">
                    0{i + 1}
                </span>
            </div>
        )
    };
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Layout>
            <section className="page-banner triangle-banner-main">
                <div className="triangle-banner"></div>
                <div className="triangle-banner-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" triangle-banner-content">
                                <h1>For Agencies - The New Standard in Digital Advertising</h1>
                                <p>Brandzooka is a self-service programmatic platform that allows agencies of all sizes to place their ads on premium digital placements across the globe - at any budget. From Connected TV to Mobile, Web, and Streaming Audio we democratize digital media like it’s our job - because it is!</p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="agencies-page-video">
                                <div className="position-relative">
                                    <img src="/images/builder-laptop.png" />
                                    <div className="play-circle"><i className="fa fa-play"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-platform for-agencies">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="platform-text">
                                <h5 className="mb-3">OUR PLATFORM</h5>
                                <h3 className="mb-3">
                                    Harness the Magic of Primetime TV with Digital Advertising
                      </h3>
                                <p className="mb-3">
                                    Brandzooka’s machine learning media trading algorightms routinely outperform their human counterparts 3:1. In every category - from auto to spirits, and from sports to consumer goods, Brandzooka advertisers get results.
                      </p>
                                <Link to="/signup" className="btn btn-primary">CREATE AN ACCOUNT</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image-outer media-partner">
                                <div className="inner-image">
                                    <img src="/images/Home/hue-sat-6.png" alt="image" />
                                </div>
                                <img src="/images/Home/hue-sat-4.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-platform no-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="position-relative">
                                <img src="/images/video-ss.png" alt="image" />
                                <div className="play-circle"><i className="fa fa-play"></i></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-text mt-5 mt-md-0">
                                <h3 className="mb-3">
                                    Redefining Agency Roles in Digital Media and TV
                                </h3>
                                <p className="mb-3">
                                    Through real-time analytics and transparent reporting, Brandzooka makes it possible to monitor your campaigns and performance with a few clicks of a button.  We make your media work harder so you can work smarter.
                                </p>
                                <Link to="/contact" className="btn btn-primary">CONTACT US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video-slider mb-5 for-agency" id="reels">
                <div className="row">
                    <div className="col-"></div>
                </div>
                <Slider {...settings}>
                    <div className="position-relative">
                        <img src="/images/agency-video.png" />
                        <div className="play-circle"><i className="fa fa-play"></i></div>
                    </div>    
                    <div className="position-relative">
                        <img src="/images/agency-video.png" />
                        <div className="play-circle"><i className="fa fa-play"></i></div>
                    </div>
                </Slider>
            </div>
            <section className="recent-press platform-features">
                <div className="container">
                    <div className="head-section">
                        <h3>Platform Features</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <img src="/images/analytics-laptop.png" />
                        </div>
                        <div className="col-lg-5">
                            <div className="platform-features-accd">
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">The Magic of TV in your Toolkit</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                            TV is where people are watching. Brandzooka is the only platform that unleashes the power of TV ads and  puts it at your fingertips. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">Your Media Partner in a Box</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                            The best agencies monetize media with Brandzooka. The power is yours to deliver pro results without intermediate cost and overhead.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">Purpose-Built for Marketers</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                        Your content is meant to be seen. Built to deliver the highest viewability at the lowest cost-per-view, from your first impression to your last.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">Spark Relationships with Pinpoint Targeting</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                            Communicate with the right audiences through demographics, interests and spending habits. Globally or locally you'll find them here.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">A Budget That Works for You</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                            We deliver the world, on-demand. It's your call how much you budget and how you decide to pay, no hassles and no subscriptions. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="powerful-way our-platform pb-0 agencies-page">
                <div className="table-card">
                    <div className="child"></div>
                    <div className="container">
                        <div className="powerful-way-table">

                        </div>
                        <div className="platform-text">
                            <h5 className="mb-3">PRICING</h5>
                            <h3 className="mb-3 powerful-heading">
                                The Most Powerful Way to Advertise on TV & Online
                        </h3>
                            <div className="table-responsive">
                                <table className="table powerful-table mb-4">
                                    <thead>
                                        <tr>
                                            <th>PLATFORM</th>
                                            <th>MINIMUM<br />SPEND</th>
                                            <th>REACH (% OF TOTAL WEB TRAFFIC)</th>
                                            <th>AD NETWORKS ACCESSEDAD NETWORKS</th>
                                            <th>TIME TO LUNCH</th>
                                            <th>RISK-FREE TRIAL</th>
                                            <th>3RD PARTY VERIFIED</th>
                                            <th>EASY-TO-USE PLATFORM</th>
                                            <th>CONNECTED TV & TOOL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>BRANDZOOKA</td>
                                            <td>$5</td>
                                            <td>92%</td>
                                            <td>30+</td>
                                            <td>5 min</td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>FACEBOOK</td>
                                            <td>$5</td>
                                            <td>5%</td>
                                            <td>1</td>
                                            <td>30 min</td>
                                            <td></td>
                                            <td></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>YOUTUBE</td>
                                            <td>$5</td>
                                            <td>3%</td>
                                            <td>1</td>
                                            <td>30 min</td>
                                            <td></td>
                                            <td></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>MEDIAMATH</td>
                                            <td>$10,000</td>
                                            <td>92%</td>
                                            <td>30+</td>
                                            <td>120 min</td>
                                            <td></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>ADOBE</td>
                                            <td>$20,000</td>
                                            <td>92%</td>
                                            <td>30+</td>
                                            <td>120 min</td>
                                            <td></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="btn btn-primary">
                                <Link to="/signup">
                                    CREATE AN ACCOUNT
                        </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="powerful-way-triangle-outer">
                    <div>
                        <div className="left">
                            <div className="overlay">
                                <div className="text-content">
                                    <h3>Ready to Get Started?</h3>
                                    <p>Brandzooka works with your agency to offer unique features and solutions for your clients and your goals. With no contracts, minimums, or user restrictions we are here to help you level up your digital media game. </p>
                                    <Link to="/signup" className="btn btn-primary blue">SIGN UP FOR FREE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="text-content">
                                <h3>Thousands of Agencies are Powered by Brandzooka </h3>
                                <a href="https://meetings.grooveapp.com/44yo7f7j" className="btn btn-primary" target="_blank">
                                    SCHEDULE A DEMO
                                </a> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-partners our-platform brandzooka-page">
                <div className="platform-shape">
                   <img src="/images/quote.png" className="mw-100" alt="image" className="quote-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="platform-text">
                                <h5 className="mb-3">WHAT OUR AGENCY CLIENTS ARE SAYING</h5>
                            </div>
                            <div className="reviews-slider">
                                <Slider {...settingsReview}>
                                    <div>
                                        <h4>Brandzooka’s platform blows our mind and makes our position as a brand’s bet asset more viable and sustainable."</h4>
                                        <p>- Fact & Fiction</p>
                                    </div>
                                    <div>
                                        <h4>Brandzooka’s platform blows our mind and makes our position as a brand’s bet asset more viable and sustainable."</h4>
                                        <p>- Fact & Fiction</p>
                                    </div>
                                    <div>
                                        <h4>Brandzooka’s platform blows our mind and makes our position as a brand’s bet asset more viable and sustainable."</h4>
                                        <p>- Fact & Fiction</p>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="partners-slider">
                                <Slider {...settingsPartners}>
                                    <div>
                                        <img src="/images/brandzooka/slider-image.png" />
                                    </div>
                                    <div>
                                        <img src="/images/brandzooka/slider-image.png" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default ForAgencies;
