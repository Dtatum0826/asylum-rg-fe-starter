import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import csv from '../../../data/COW2021001887-I589Data.csv';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  console.log(csv, 'INSIDE RENDER');
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      <div className="graphs-section">
        <div>
          <img src={GrantRatesByOfficeImg} alt="bar graph" />
          <p>Search Grant Rates By Office</p>
        </div>
        <div>
          <img
            className="pie-graph-image"
            src={GrantRatesByNationalityImg}
            alt="pie graph"
          />
          <p className="p-2">Search Grant Rates By Nationality</p>
        </div>
        <div>
          <img src={GrantRatesOverTimeImg} alt="line graph" />
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>

      <div className="data-btn-container">
        <div className="view-more-data-btn-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>
        </div>
        <div className="download-the-data-button-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          >
            <a
              href={csv}
              download="COW2021001887-I589Data.csv"
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Download the Data
            </a>
          </Button>
        </div>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set.
          </h3>
        </div>
      </div>
      <div>
        <h2 className="bottom-h2">Systemic Disparity Insights</h2>
        <div className="bottom-section">
          <div>
            <h3>36%</h3>
            <p>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscao year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>
          <div>
            <h3>5%</h3>
            <p>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </p>
          </div>
          <div>
            <h3>6x Lower</h3>
            <p>
              Between fiscal year 2017 and 2020, the New York asylum office's
              average grant rate was six times lower than the San Francisco
              asylum office.
            </p>
          </div>
        </div>
        <div className="read-more-button-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            Read More
          </Button>
        </div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
