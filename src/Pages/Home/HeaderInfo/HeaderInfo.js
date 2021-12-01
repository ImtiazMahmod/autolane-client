import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { faCalendarCheck, faCarCrash, faCompass, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderInfo = () => {
    return (
        <div className="headerinfo">
    
            <Row   className="mx-auto">
         <Col sm={1} md={2} lg={4}  className="info mx-auto" style={{ width: '15rem' }}>
         <FontAwesomeIcon className="infoIcon " icon={faMapMarkedAlt} />
               
          <h5>Location Details</h5>
           <p> 36 lane, Dhaka, Bangladesh </p>
                
               
          </Col>
          <Col sm={12} md={6} lg={8} className="info   mx-auto" style={{ width: '15rem' }}>
                <FontAwesomeIcon className="infoIcon  " icon={faCarCrash} />
               
                    <h5>Emergency Repair</h5>
                    <p>
                    Low rates and emergency service available 24 hours a day every day of the year
                    </p>
            </Col>
                
          <Col sm={12} md={6} lg={3}  className="info   mx-auto" style={{ width: '15rem' }}>
            <FontAwesomeIcon className="infoIcon" icon={faCompass} />
                
                    <h5>Get Directions</h5>
                    <p>
                    Get directions to Atuolane Repair in dhaka and your car checked today 
                    </p>
                
               
            </Col>
            <Col sm={12} md={6} lg={3} className="info   mx-auto" style={{ width: '15rem' }}>
            <FontAwesomeIcon className="infoIcon " icon={faCalendarCheck} />
                
                    <h5>Make Appointment</h5>
                    <p>
                    Schedule an appoinment to day through our online calender 
                    </p>
                
               
            </Col>
        </Row>
        </div>
    );
};

export default HeaderInfo;