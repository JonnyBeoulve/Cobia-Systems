import React, { Component } from 'react';

import MarketingAnalysisForm from './children/MarketingAnalysisForm/MarketingAnalysisForm';
import Loader from '../Loader';
import MarketingAnalysisResults from './children/MarketingAnalysisResults/MarketingAnalysisResults';
import MarketingAnalysisCampaign from './children/MarketingAnalysisCampaign/MarketingAnalysisCampaign';
import MarketingAnalysisConfirmation from './children/MarketingAnalysisConfirmation/MarketingAnalysisConfirmation';

// Use local data file for data instead of server until server is working
import jsonData from '../../data/health_435.json';

/*= =====================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
====================================================================== */
class MarketingAnalysis extends Component {
  /*= =====================================================================
    // This will bind 'this' to all core functions of marketing analysis
    // so child components can communicate upward. This also houses the
    // state of the user's input before analysis. Data holds the received
    // JSON formatted data to be displayed to the user in results.
    ====================================================================== */
  constructor(props) {
    super(props);
    this.handleMarketingAnalysisFormSubmit = this.handleMarketingAnalysisFormSubmit.bind(this);
    this.handleMarketingResultsSelectionSubmit = this.handleMarketingResultsSelectionSubmit.bind(this);
    this.handleMarketingCampaignSubmit = this.handleMarketingCampaignSubmit.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDriver1Change = this.handleDriver1Change.bind(this);
    this.handleDriver2Change = this.handleDriver2Change.bind(this);
    this.handleDriver3Change = this.handleDriver3Change.bind(this);
    this.handleDriver4Change = this.handleDriver4Change.bind(this);
    this.handleDriver5Change = this.handleDriver5Change.bind(this);
    this.handleB2Change = this.handleB2Change.bind(this);
    this.state = {
      breadcrumbCurrentStep: 'Marketing Analysis',
      showForm: true,
      showLoader: false,
      showResults: false,
      showCampaign: false,
      showConfirmation: false,
      analysisFormKeyword: '',
      analysisFormArea: 'City',
      analysisFormLocation: '',
      analysisFormDriver1: '',
      analysisFormDriver2: '',
      analysisFormDriver3: '',
      analysisFormDriver4: '',
      analysisFormDriver5: '',
      analysisFormB2: 'B2C',
      data: jsonData,
      formKeywordOrDriverError: false,
      formLocationError: false,
    };
  }

  /*= =====================================================================
    // This will update the state of keyword as the user inputs text.
    ====================================================================== */
  handleKeywordChange(e) {
    this.setState({
      analysisFormKeyword: e.target.value,
    });
  }

  /*= =====================================================================
  // This will update the state of location as the user inputs text.
  ====================================================================== */
  handleAreaChange(e) {
    this.setState({
      analysisFormArea: e.target.value,
    });
  }

  /*= =====================================================================
  // This will update the state of area as the user inputs text.
  ====================================================================== */
  handleLocationChange(e) {
    this.setState({
      analysisFormLocation: e.target.value,
    });
  }

  /*= =====================================================================
  // This will update the state of driver1 as the user inputs text.
  ====================================================================== */
  handleDriver1Change(e) {
    this.setState({
      analysisFormDriver1: e.target.value,
    });
  }

  /*= =====================================================================
  // This will update the state of driver1 as the user inputs text.
  ====================================================================== */
  handleDriver2Change(e) {
    this.setState({
      analysisFormDriver2: e.target.value,
    });
  }

  /*= =====================================================================
  // This will update the state of driver1 as the user inputs text.
  ====================================================================== */
  handleDriver3Change(e) {
    this.setState({
      analysisFormDriver3: e.target.value,
    });
  }

  /*= =====================================================================
  // This will update the state of driver1 as the user inputs text.
  ====================================================================== */
  handleDriver4Change(e) {
    this.setState({
      analysisFormDriver4: e.target.value,
    });
  }

  /*= =====================================================================
  // This will update the state of driver1 as the user inputs text.
  ====================================================================== */
  handleDriver5Change(e) {
    this.setState({
      analysisFormDriver5: e.target.value,
    });
  }

  /*= =====================================================================
  // This will update the state of driver1 as the user inputs text.
  ====================================================================== */
  handleB2Change(e) {
    this.setState({
      analysisFormB2: e.target.value,
    });
  }

  /*= =====================================================================
  // This will hnadle form authentication in addition to transitioning
  // to a loading view while a query is submitted to the server before
  // displaying results.
  ====================================================================== */
  handleMarketingAnalysisFormSubmit(e) {
    if (this.state.analysisFormKeyword.length < 4 || this.state.analysisFormDriver1.length < 4) {
      this.setState({
        formKeywordOrDriverError: true,
      });
      window.scrollTo(0, 0);
      return;
    }
    this.setState({
      formKeywordOrDriverError: false,
    });

    if (this.state.analysisFormArea === 'City' || this.state.analysisFormArea === 'State') {
      if (this.state.analysisFormLocation.length < 2) {
        this.setState({
          formLocationError: true,
        });
        window.scrollTo(0, 0);
        return;
      }
    } else {
      this.setState({
        formLocationError: false,
      });
    }
    this.setState({
      showForm: false,
      showLoader: true,
    });
    setTimeout(() => {
      this.setState({
        breadcrumbCurrentStep: 'Marketing Analysis Results',
        showLoader: false,
        showResults: true,
      });
    }, 500);
  }

  /*= =====================================================================
  // This will handle the transition from viewing results to showing
  // the create campaign form.
  ====================================================================== */
  handleMarketingResultsSelectionSubmit() {
    this.setState({
      showResults: false,
      showLoader: true,
    });
    setTimeout(() => {
      this.setState({
        breadcrumbCurrentStep: 'Marketing Analysis Campaign',
        showLoader: false,
        showCampaign: true,
      });
    }, 500);
  }

  /*= =====================================================================
  // This will handle creation of a new campaign by the user before
  // displaying a confirmation message.
  ====================================================================== */
  handleMarketingCampaignSubmit() {
    this.setState({
      showCampaign: false,
      showLoader: true,
    });
    setTimeout(() => {
      this.setState({
        breadcrumbCurrentStep: 'Marketing Analysis Confirmation',
        showLoader: false,
        showConfirmation: true,
      });
    }, 500);
  }

  /*= =====================================================================
  // This is a top level container that will display components depending
  // upon the current state of the user's Marketing Analysis process.
  ====================================================================== */
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">{this.state.breadcrumbCurrentStep}</li>
          </ol>
        </nav>
        { (this.state.showForm)
          ? <MarketingAnalysisForm
            keywordOrDriverError={this.state.formKeywordOrDriverError}
            locationError={this.state.formLocationError}
            keywordChange={this.handleKeywordChange}
            locationChange={this.handleLocationChange}
            areaChange={this.handleAreaChange}
            driver1Change={this.handleDriver1Change}
            driver2Change={this.handleDriver2Change}
            driver3Change={this.handleDriver3Change}
            driver4Change={this.handleDriver4Change}
            driver5Change={this.handleDriver5Change}
            b2Change={this.handleB2Change}
            handleFormSubmit={this.handleMarketingAnalysisFormSubmit}
          />
          : <div /> }
        { (this.state.showLoader)
          ? <Loader />
          : <div /> }
        { (this.state.showResults)
          ? <MarketingAnalysisResults
            resultsData={this.state.data}
            keyword={this.state.analysisFormKeyword}
            area={this.state.analysisFormArea}
            location={this.state.analysisFormLocation}
            driver1={this.state.analysisFormDriver1}
            driver2={this.state.analysisFormDriver2}
            driver3={this.state.analysisFormDriver3}
            driver4={this.state.analysisFormDriver4}
            driver5={this.state.analysisFormDriver5}
            b2={this.state.analysisFormB2}
            handleSelectionSubmit={this.handleMarketingResultsSelectionSubmit}
          />
          : <div /> }
        { (this.state.showCampaign)
          ? <MarketingAnalysisCampaign
            resultsData={this.state.data}
            handleCampaignSubmit={this.handleMarketingCampaignSubmit}
          />
          : <div /> }
        { (this.state.showConfirmation)
          ? <MarketingAnalysisConfirmation />
          : <div /> }
      </div>
    );
  }
}

export default MarketingAnalysis;
