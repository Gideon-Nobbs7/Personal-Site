import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Fade } from 'react-awesome-reveal';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pl: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const JobList  = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jobList = {
        "VetDataHub": {
            position: "Contributor",
            dates: "Oct 2024 - Present",
            points: [
                "Worked on a project aimed at enhancing data accessibility with the veterinary field.",
                "Developed data entry and metadata tagging ensuring that datasets were discoverable and usable by 30%.",
            ]
        },
        "Endangered Species Tracker": {
            position: "Contributor",
            dates: "Oct 2024 - Present",
            points: [
                "Developed a tool that provides real time information on endangered species by integrating the IUCN Red List API.",
                "Contributed to the doocumentation and API usage guides to facilitate easier onboarding for new contributors and users of the tool."
            ]
        },
        "EPA": {
            position: "Designer",
            dates: "Sep 2024 - Oct 2024",
            points: [
                "Coordinated with stakeholders to map out the stage of a document life for automation.",
                "Implemented a tracking system to guarantee that documents were properly routed and minuted for each sector/deppartment.",
                "Reduced documents delays by 35%, decreasing inter-departmental communication delays."
            ]
        },
        "Jan-Briddhi": {
            position: "Backend Developer",
            dates: "May 2023 – Aug 2023",
            points: [
                "Collaborated with teams across departments to contributed to the overall mission of the Blood Bank Foundation to save lives and improve healthcare outcomes in the community by working across.",
                "Improved efficiency in blood bank operations, resulting in a significant increase in successful matches and timely deliveries to patients in need by 60%.",
                "Cooperated with a team to build an API for blood bank foundation to interact with the front end of the blood bank using Django and Django Rest Framework (DRF) and SQLAlchemy. This facilitated seamless communication between donors, recipients, and medical professionals.",
            ],
        },
        
    }

  return (
        <Fade triggerOnce delay={300}>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <div className="joblist-container">
                <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{
                borderRight: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                    color: '#9BA4B5',
                    fontFamily: `'Dosis', sans-serif !important`,
                },
                '& .Mui-selected': {
                    color: '#E94560 !important',
                    fontWeight: `bold`
                },
                '& .MuiTabs-indicator': {
                    backgroundColor: '#E94560',
                },
                }}
                >
                    {Object.keys(jobList).map((key) => (
                        <Tab label={key} key={key} />
                    ))}
                </Tabs>
                {Object.keys(jobList).map((key, i) => (
                    <TabPanel value={value} index={i}>
                        <span className="job-position">
                            {jobList[key]["position"]}
                        </span>
                        <div className="job-dates">
                            {jobList[key]["dates"]}
                        </div>
                        
                            {!Array.isArray(jobList[key]) ? (
                                <div className="job-container">
                                    {jobList[key]["points"]?.map((point, i) => (
                                        <ul className="job-description" key={i}>
                                            <Fade 
                                            triggerOnce
                                            direction='right' 
                                            delay={`${i*5}`} 
                                            >
                                            <li className="point" key={i}>{point}</li>
                                            </Fade>
                                        </ul>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    {jobList[key].map((job) => (
                                        <div className="job-container">
                                            <span className="job-position">
                                                {job.position}
                                            </span>
                                            <div className="job-dates">
                                                {job.dates}
                                            </div>
                                            {job.points.map((point, i) => (
                                                <ul className="job-description" key={i}>
                                                <Fade 
                                                triggerOnce
                                                direction='right' 
                                                delay={`${i*5}`} 
                                                >
                                                <li className="point" key={i}>{point}</li>
                                                </Fade>
                                                </ul>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                    </TabPanel>
                ))}
                </div>
            </Box>
        </Fade>
  );
}

export default JobList;