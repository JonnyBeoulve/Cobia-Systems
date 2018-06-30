import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Col,
  Progress,
  Card,
  CardBody,
  Row,
  Table,
  Tooltip,
} from 'reactstrap';

import FacebookLogo from '../../../../../public/img/facebook-logo.png';
import InstagramLogo from '../../../../../public/img/instagram-logo.png';
import LinkedInLogo from '../../../../../public/img/linkedin-logo.png';
import PinterestLogo from '../../../../../public/img/pinterest-logo.png';
import TwitterLogo from '../../../../../public/img/twitter-logo.png';
import YouTubeLogo from '../../../../../public/img/youtube-logo.png';

/*= =====================================================================
// Inline styling for the results table to prevent mutation of other
// tables.
====================================================================== */
const mainTableStyle = {
  height: '1000px',
};

/*= =====================================================================
// Display table with data from the trend results.
====================================================================== */
class AnalysisKeywordTrends extends Component {
  /*= =====================================================================
    // Display a table with data results along with a tooltip that displays
    // upon hovering over a trend.
    ====================================================================== */
    render() {
    return (
      <div>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Total Posts</small>
                          <br />
                          <strong className="h4">{ this.props.resultsData.length }</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Keyword</small>
                          <br />
                          <strong className="h4">{ this.props.keyword }</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Area</small>
                          <br />
                          <strong className="h4">Area</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Driver</small>
                          <br />
                          <strong className="h4">Driver</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Business</small>
                          <br />
                          <strong className="h4">B2B</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br />
                <Table hover responsive style={mainTableStyle}className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="small-trend-column">Select</th>
                      <th className="small-trend-column">Rank</th>
                      <th className="trend-column">Trend</th>
                      <th className="relevance-conversation-column">Relevance</th>
                      <th className="relevance-conversation-column">Conversation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[0]} 
                            onChange={() => { this.props.changeCheckbox(0); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[1]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[0]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[0]} target={'trendInfo' + `${this.props.trendNum[0]}`} toggle={() => { this.props.changeTooltip(0); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[0]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[0]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[0]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[0]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }     
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[1]} 
                            onChange={() => { this.props.changeCheckbox(1); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[2]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[1]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[1]} target={'trendInfo' + `${this.props.trendNum[1]}`} toggle={() => { this.props.changeTooltip(1); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[1]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[1]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[0]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[0]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[2]} 
                            onChange={() => { this.props.changeCheckbox(2); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[3]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[2]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[2]} target={'trendInfo' + `${this.props.trendNum[2]}`} toggle={() => { this.props.changeTooltip(2); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[2]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[2]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[2]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[2]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[3]} 
                            onChange={() => { this.props.changeCheckbox(3); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[4]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[3]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[3]} target={'trendInfo' + `${this.props.trendNum[3]}`} toggle={() => { this.props.changeTooltip(3); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[3]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[3]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[3]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[3]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[4]} 
                            onChange={() => { this.props.changeCheckbox(4); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[5]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[4]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[4]} target={'trendInfo' + `${this.props.trendNum[4]}`} toggle={() => { this.props.changeTooltip(4); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[4]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[4]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[4]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[4]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[5]} 
                            onChange={() => { this.props.changeCheckbox(5); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[6]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[5]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[5]} target={'trendInfo' + `${this.props.trendNum[5]}`} toggle={() => { this.props.changeTooltip(5); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[5]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[5]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[5]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[5]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                    <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[6]} 
                            onChange={() => { this.props.changeCheckbox(6); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[7]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[6]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[6]} target={'trendInfo' + `${this.props.trendNum[6]}`} toggle={() => { this.props.changeTooltip(6); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[6]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[6]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[6]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[6]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[7]} 
                            onChange={() => { this.props.changeCheckbox(7); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[8]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[7]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[7]} target={'trendInfo' + `${this.props.trendNum[7]}`} toggle={() => { this.props.changeTooltip(7); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[7]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[7]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[7]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[7]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[8]} 
                            onChange={() => { this.props.changeCheckbox(8); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[9]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[8]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[8]} target={'trendInfo' + `${this.props.trendNum[8]}`} toggle={() => { this.props.changeTooltip(8); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[8]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[8]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[8]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[8]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td className="small-trend-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selTrends[9]} 
                            onChange={() => { this.props.changeCheckbox(9); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="small-trend-column">
                        <p>{this.props.trendNum[10]}</p>
                      </td>
                      <td className="trend-column" id={'trendInfo' + `${this.props.trendNum[9]}`}>
                        <div><i className="fa fa-line-chart" /> { this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.props.toolOpen[9]} target={'trendInfo' + `${this.props.trendNum[9]}`} toggle={() => { this.props.changeTooltip(9); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.resultsData[`${this.props.trendNum[9]}`].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.resultsData[`${this.props.trendNum[9]}`].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[9]}`].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[`${this.props.trendNum[9]}`].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Twitter)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                                              : <div></div> }    
                                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Facebook)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                                              : <div></div> }                                       
                                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.LinkedIn)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                              : <div></div> }                                              
                                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Instagram)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Pinterest)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                                              : <div></div> }     
                                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.YouTube)
                                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                                              : <div></div> }   
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="pagination-buttons">
                  <div className="pagination-buttons-start-div">
                      <button type="submit" className="btn btn-flex" onClick={this.props.previous10Results}>Previous 10</button>
                      <button type="submit" className="btn btn-flex" onClick={this.props.next10Results}>Next 10</button>
                  </div>
                  <div className="pagination-buttons-end-div">
                      <button type="submit" className="btn btn-flex" onClick={this.props.backToKeywords}>Back</button>
                      <button type="submit" className="btn btn-flex" onClick={this.props.analyzeTrend}>Analyze Trend</button>
                  </div>
                </div>
                </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AnalysisKeywordTrends;
