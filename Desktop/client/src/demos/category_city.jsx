import React, {useState} from 'react';
import {MdArrowDropUp, MdArrowDropDown} from 'react-icons/md';
import {Card, CardBody,CardHeader, Row} from 'reactstrap';

const CategoryCity = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showCity, setShowCity] = useState(false);

  return (
    <Row className="pb-2 pt-2 justify-content-center" >
      <div className="col-5" style={{minWidth: '12rem'}}>
	<Card > 
	  <CardHeader onClick={() => setShowCategory(!showCategory)}>
	    Categories {showCategory?<MdArrowDropDown/>:<MdArrowDropUp/>}
	  </CardHeader>
	  {showCategory && 
	    <CardBody >
	      <ul >
		<li>Software: 6795</li>
		<li>Information Technology: 4470</li>
		<li>Health Care: 3407</li>
		<li>Mobile: 3251</li>
		<li>Internet: 3139</li>
		<li>E-Commerce: 2649</li>
		<li>Enterprise Software: 2299</li>
		<li>SaaS: 2042</li>
		<li>Manufacturing: 1866</li>
		<li>Biotechnology: 1836</li>
		<li>Advertising: 1771</li>
		<li>Apps: 1721</li>
		<li>Artificial Intelligence: 1640</li>
		<li>Education: 1640</li>
		<li>Analytics: 1578</li>
		<li>Social Media: 1547</li>
		<li>Financial Services: 1380</li>
		<li>Consulting: 1318</li>
		<li>Medical: 1286</li>
		<li>Machine Learning: 1127</li>
		<li>Big Data: 1095</li>
		<li>Video: 1060</li>
		<li>Mobile Apps: 1044</li>
		<li>Marketing: 1037</li>
		<li>Computer: 1013</li>
		<li>Hardware: 952</li>
		<li>FinTech: 910</li>
		<li>Security: 869</li>
		<li>Retail: 833</li>
		<li>Finance: 824</li>
		<li>Electronics: 799</li>
		<li>Fashion: 797</li>
		<li>Internet of Things: 793</li>
		<li>Cloud Computing: 753</li>
		<li>Robotics: 748</li>
		<li>Real Estate: 745</li>
		<li>Medical Device: 742</li>
		<li>iOS: 740</li>
		<li>Food and Beverage: 715</li>
		<li>Digital Media: 707</li>
		<li>Communities: 684</li>
		<li>Consumer Electronics: 640</li>
		<li>Telecommunications: 622</li>
		<li>Music: 605</li>
		<li>Information Services: 601</li>
		<li>Automotive: 599</li>
		<li>Marketplace: 598</li>
		<li>Media and Entertainment: 596</li>
		<li>Gaming: 591</li>
		<li>Messaging: 556</li>
		<li>Sports: 543</li>
		<li>CRM: 531</li>
		<li>Fitness: 528</li>
		<li>Travel: 526</li>
		<li>News: 524</li>
		<li>Lifestyle: 518</li>
		<li>Human Resources: 509</li>
		<li>Publishing: 501</li>
		<li>Pharmaceutical: 500</li>
		<li>Cyber Security: 478</li>
		<li>Web Development: 464</li>
		<li>B2B: 463</li>
		<li>Search Engine: 454</li>
		<li>Non Profit: 452</li>
		<li>Content: 444</li>
		<li>Blockchain: 436</li>
		<li>Wireless: 434</li>
		<li>Therapeutics: 428</li>
		<li>Service Industry: 428</li>
		<li>Product Design: 426</li>
		<li>Wellness: 424</li>
		<li>Events: 417</li>
		<li>Energy: 398</li>
		<li>Payments: 397</li>
		<li>Social Network: 396</li>
		<li>Semiconductor: 392</li>
		<li>Health Diagnostics: 390</li>
		<li>Logistics: 386</li>
		<li>Transportation: 383</li>
		<li>Recruiting: 382</li>
		<li>EdTech: 381</li>
		<li>Collaboration: 375</li>
		<li>Virtual Reality: 371</li>
		<li>Android: 367</li>
		<li>Video Games: 362</li>
		<li>Business Intelligence: 346</li>
		<li>Legal: 346</li>
		<li>Digital Entertainment: 341</li>
		<li>Developer Tools: 339</li>
		<li>Hospitality: 325</li>
		<li>Web Design: 321</li>
		<li>Network Security: 315</li>
		<li>Venture Capital: 314</li>
		<li>Shopping: 309</li>
		<li>Location Based Services: 309</li>
		<li>Web Hosting: 298</li>
		<li>Banking: 298</li>
		<li>Video Streaming: 297</li>
		<li>Consumer: 293</li>
		<li>Aerospace: 291</li>
		<li>Online Portals: 291</li>
		<li>Real Time: 289</li>
		<li>Consumer Goods: 289</li>
		<li>Customer Service: 288</li>
		<li>Predictive Analytics: 287</li>
		<li>Insurance: 286</li>
		<li>Brand Marketing: 283</li>
		<li>Training: 277</li>
		<li>Photography: 275</li>
		<li>Renewable Energy: 269</li>
		<li>Augmented Reality: 268</li>
		<li>Digital Marketing: 267</li>
		<li>Marketing Automation: 260</li>
		<li>Cloud Data Services: 255</li>
		<li>Solar: 251</li>
		<li>Wearables: 250</li>
		<li>Small and Medium Businesses: 250</li>
		<li>Life Science: 249</li>
		<li>Professional Services: 237</li>
		<li>Social Media Marketing: 233</li>
		<li>Developer Platform: 232</li>
		<li>Restaurants: 223</li>
		<li>Business Development: 220</li>
		<li>Advertising Platforms: 219</li>
		<li>E-Learning: 219</li>
		<li>Personal Health: 217</li>
		<li>Retail Technology: 217</li>
		<li>3D Technology: 214</li>
		<li>Infrastructure: 213</li>
		<li>Broadcasting: 213</li>
		<li>Cryptocurrency: 210</li>
		<li>Mobile Payments: 206</li>
		<li>Agriculture: 203</li>
		<li>Developer APIs: 197</li>
		<li>Open Source: 197</li>
		<li>Market Research: 194</li>
		<li>Association: 193</li>
		<li>Beauty: 190</li>
		<li>Genetics: 190</li>
		<li>Social: 189</li>
		<li>Database: 188</li>
		<li>Drones: 188</li>
		<li>Construction: 184</li>
		<li>Public Relations: 182</li>
		<li>Computer Vision: 179</li>
		<li>Biopharma: 178</li>
		<li>Food Processing: 176</li>
		<li>Data Visualization: 176</li>
		<li>Hospital: 176</li>
		<li>SEO: 176</li>
		<li>Delivery: 175</li>
		<li>Industrial: 175</li>
		<li>Supply Chain Management: 173</li>
		<li>Audio: 172</li>
		<li>Cloud Infrastructure: 163</li>
		<li>Local: 163</li>
		<li>Sales: 161</li>
		<li>Project Management: 160</li>
		<li>Cannabis: 160</li>
		<li>Innovation Management: 159</li>
		<li>Email: 157</li>
		<li>Crowdfunding: 155</li>
		<li>Lead Generation: 153</li>
		<li>null: 153</li>
		<li>Natural Language Processing: 148</li>
		<li>Data Integration: 146</li>
		<li>Film: 143</li>
		<li>Photo Sharing: 143</li>
		<li>Government: 141</li>
		<li>Crowdsourcing: 140</li>
		<li>3D Printing: 139</li>
		<li>Sales Automation: 138</li>
		<li>Accounting: 138</li>
		<li>Autonomous Vehicles: 133</li>
		<li>Wine And Spirits: 133</li>
		<li>Employment: 132</li>
		<li>Mobile Advertising: 132</li>
		<li>Virtualization: 130</li>
		<li>Event Management: 130</li>
		<li>Communications Infrastructure: 130</li>
		<li>Management Consulting: 130</li>
		<li>Mobile Devices: 128</li>
		<li>Risk Management: 128</li>
		<li>Commercial Real Estate: 128</li>
		<li>Clean Energy: 128</li>
		<li>Cloud Management: 127</li>
		<li>Enterprise Applications: 127</li>
		<li>Cloud Security: 127</li>
		<li>Bitcoin: 126</li>
		<li>Software Engineering: 125</li>
		<li>mHealth: 123</li>
		<li>Sensor: 121</li>
		<li>Tourism: 119</li>
		<li>Web Apps: 118</li>
		<li>E-Commerce Platforms: 118</li>
		<li>File Sharing: 117</li>
		<li>Identity Management: 117</li>
		<li>Email Marketing: 117</li>
		<li>Subscription Service: 115</li>
		<li>Staffing Agency: 115</li>
		<li>Personal Finance: 114</li>
		<li>Energy Efficiency: 114</li>
		<li>Career Planning: 114</li>
		<li>TV: 112</li>
		<li>Art: 112</li>
		<li>Nutrition: 111</li>
		<li>CleanTech: 111</li>
		<li>Clinical Trials: 111</li>
		<li>PaaS: 110</li>
		<li>Online Games: 110</li>
		<li>Smart Home: 110</li>
		<li>Leisure: 110</li>
		<li>Data Center: 108</li>
		<li>Enterprise: 108</li>
		<li>Web Browsers: 108</li>
		<li>Document Management: 107</li>
		<li>Blogging Platforms: 106</li>
		<li>Outsourcing: 105</li>
		<li>Personalization: 102</li>
		<li>Property Management: 101</li>
		<li>Industrial Automation: 99</li>
		<li>Electric Vehicle: 97</li>
		<li>IT Management: 96</li>
		<li>Data Storage: 96</li>
		<li>VoIP: 94</li>
		<li>Women's: 93</li>
		<li>Organic Food: 93</li>
		<li>Commercial: 92</li>
		<li>Cosmetics: 91</li>
		<li>Water: 91</li>
		<li>Sustainability: 90</li>
		<li>Advice: 89</li>
		<li>Productivity Tools: 86</li>
		<li>eSports: 85</li>
		<li>Wholesale: 85</li>
		<li>Loyalty Programs: 83</li>
		<li>Food Delivery: 83</li>
		<li>Ticketing: 83</li>
		<li>Oil and Gas: 83</li>
		<li>Nanotechnology: 82</li>
		<li>Professional Networking: 81</li>
		<li>Test and Measurement: 80</li>
		<li>Ad Network: 79</li>
		<li>Private Social Networking: 79</li>
		<li>Knowledge Management: 79</li>
		<li>Printing: 79</li>
		<li>Neuroscience: 79</li>
		<li>Corporate Training: 78</li>
		<li>Network Hardware: 78</li>
		<li>Coupons: 78</li>
		<li>SMS: 77</li>
		<li>Real Estate Investment: 77</li>
		<li>Pet: 77</li>
		<li>Film Production: 76</li>
		<li>Home Decor: 75</li>
		<li>Gamification: 75</li>
		<li>Content Creators: 75</li>
		<li>Incubators: 75</li>
		<li>Navigation: 74</li>
		<li>UX Design: 74</li>
		<li>Sharing Economy: 73</li>
		<li>Privacy: 73</li>
		<li>Intellectual Property: 73</li>
		<li>Content Marketing: 73</li>
		<li>Lending: 72</li>
		<li>Data Mining: 72</li>
		<li>Architecture: 71</li>
		<li>Children: 71</li>
		<li>Image Recognition: 71</li>
		<li>Social Entrepreneurship: 70</li>
		<li>GovTech: 69</li>
		<li>Asset Management: 69</li>
		<li>Building Material: 69</li>
		<li>PC Games: 68</li>
		<li>Higher Education: 68</li>
		<li>Chemical: 68</li>
		<li>Application Performance Management: 67</li>
		<li>Billing: 67</li>
		<li>Lighting: 67</li>
		<li>Charity: 67</li>
		<li>IT Infrastructure: 66</li>
		<li>Point of Sale: 66</li>
		<li>Graphic Design: 66</li>
		<li>Dating: 65</li>
		<li>Legal Tech: 65</li>
		<li>Business Information Systems: 65</li>
		<li>AgTech: 64</li>
		<li>Farming: 63</li>
		<li>Parenting: 62</li>
		<li>Shipping: 62</li>
		<li>Energy Management: 62</li>
		<li>Content Delivery Network: 61</li>
		<li>Social Media Management: 61</li>
		<li>Content Discovery: 60</li>
		<li>Peer to Peer: 58</li>
		<li>Credit: 58</li>
		<li>Collaborative Consumption: 57</li>
		<li>Compliance: 57</li>
		<li>Video on Demand: 57</li>
		<li>Rental: 56</li>
		<li>InsurTech: 56</li>
		<li>Sporting Goods: 56</li>
		<li>App Marketing: 55</li>
		<li>Video Conferencing: 55</li>
		<li>Credit Cards: 54</li>
		<li>Task Management: 54</li>
		<li>Management Information Systems: 54</li>
		<li>Consumer Software: 54</li>
		<li>Enterprise Resource Planning (ERP): 54</li>
		<li>Semantic Search: 54</li>
		<li>Advanced Materials: 54</li>
		<li>Dental: 54</li>
		<li>Employee Benefits: 53</li>
		<li>Trading Platform: 53</li>
		<li>Language Learning: 53</li>
		<li>Cloud Storage: 53</li>
		<li>Ediscovery: 53</li>
		<li>Air Transportation: 53</li>
		<li>Tutoring: 53</li>
		<li>Environmental Consulting: 53</li>
		<li>Meeting Software: 52</li>
		<li>Machinery Manufacturing: 52</li>
		<li>Energy Storage: 52</li>
		<li>Toys: 52</li>
		<li>Music Streaming: 52</li>
		<li>Social Media Advertising: 52</li>
		<li>GreenTech: 52</li>
		<li>Interior Design: 51</li>
		<li>Public Safety: 51</li>
		<li>Video Chat: 50</li>
		<li>Wealth Management: 50</li>
		<li>Geospatial: 50</li>
		<li>Battery: 50</li>
		<li>Smart Building: 50</li>
		<li>Furniture: 50</li>
		<li>Jewelry: 50</li>
		<li>Intelligent Systems: 49</li>
		<li>Gift Card: 49</li>
		<li>Mechanical Engineering: 48</li>
		<li>Home Services: 48</li>
		<li>Impact Investing: 48</li>
		<li>Cooking: 47</li>
		<li>Universities: 47</li>
		<li>TV Production: 46</li>
		<li>Delivery Service: 46</li>
		<li>Fraud Detection: 46</li>
		<li>Speech Recognition: 46</li>
		<li>Virtual Assistant: 46</li>
		<li>Product Research: 46</li>
		<li>Law Enforcement: 46</li>
		<li>B2C: 46</li>
		<li>Public Transportation: 45</li>
		<li>Flash Storage: 45</li>
		<li>Embedded Systems: 45</li>
		<li>Coworking: 44</li>
		<li>Local Advertising: 44</li>
		<li>Optical Communication: 44</li>
		<li>Politics: 44</li>
		<li>Local Business: 43</li>
		<li>National Security: 43</li>
		<li>Coffee: 43</li>
		<li>Angel Investment: 42</li>
		<li>Video Advertising: 42</li>
		<li>IaaS: 42</li>
		<li>Transaction Processing: 41</li>
		<li>Reputation: 41</li>
		<li>Technical Support: 41</li>
		<li>Ad Targeting: 41</li>
		<li>Home Health Care: 41</li>
		<li>Natural Resources: 41</li>
		<li>Industrial Engineering: 40</li>
		<li>Outdoors: 40</li>
		<li>Digital Signage: 40</li>
		<li>Virtual Currency: 39</li>
		<li>Direct Marketing: 39</li>
		<li>Data Center Automation: 38</li>
		<li>Mapping Services: 38</li>
		<li>EBooks: 38</li>
		<li>Consumer Applications: 38</li>
		<li>Price Comparison: 38</li>
		<li>Creative Agency: 38</li>
		<li>Recycling: 38</li>
		<li>Ethereum: 37</li>
		<li>Human Computer Interaction: 37</li>
		<li>Packaging Services: 37</li>
		<li>Environmental Engineering: 37</li>
		<li>Hotel: 37</li>
		<li>Social Recruiting: 36</li>
		<li>Skill Assessment: 36</li>
		<li>STEM Education: 36</li>
		<li>Elder Care: 36</li>
		<li>Electrical Distribution: 36</li>
		<li>Ride Sharing: 35</li>
		<li>Text Analytics: 35</li>
		<li>Home Renovation: 35</li>
		<li>SEM: 35</li>
		<li>Home Improvement: 34</li>
		<li>Financial Exchanges: 34</li>
		<li>Private Cloud: 34</li>
		<li>Social Impact: 34</li>
		<li>Animation: 34</li>
		<li>Adventure Travel: 34</li>
		<li>Photo Editing: 34</li>
		<li>Organic: 34</li>
		<li>Health Insurance: 33</li>
		<li>Communication Hardware: 33</li>
		<li>Procurement: 33</li>
		<li>Biometrics: 33</li>
		<li>Concerts: 33</li>
		<li>Water Purification: 33</li>
		<li>Podcast: 32</li>
		<li>Shoes: 32</li>
		<li>Dietary Supplements: 32</li>
		<li>Fleet Management: 32</li>
		<li>Contact Management: 32</li>
		<li>Video Editing: 32</li>
		<li>Bioinformatics: 32</li>
		<li>Scheduling: 32</li>
		<li>Industrial Manufacturing: 31</li>
		<li>Family: 31</li>
		<li>Lead Management: 31</li>
		<li>Auctions: 31</li>
		<li>Parking: 31</li>
		<li>Product Management: 31</li>
		<li>Direct Sales: 31</li>
		<li>Grocery: 30</li>
		<li>Consumer Lending: 30</li>
		<li>Stock Exchanges: 30</li>
		<li>Casual Games: 30</li>
		<li>Satellite Communication: 30</li>
		<li>Consumer Reviews: 30</li>
		<li>Journalism: 29</li>
		<li>Space Travel: 29</li>
		<li>Alternative Medicine: 29</li>
		<li>Waste Management: 29</li>
		<li>Information and Communications Technology (ICT): 29</li>
		<li>Travel Accommodations: 28</li>
		<li>Men's: 28</li>
		<li>Eyewear: 28</li>
		<li>Psychology: 28</li>
		<li>Textiles: 28</li>
		<li>Social Bookmarking: 27</li>
		<li>Wedding: 27</li>
		<li>Fantasy Sports: 27</li>
		<li>Online Auctions: 27</li>
		<li>ISP: 27</li>
		<li>Gambling: 27</li>
		<li>Last Mile Transportation: 26</li>
		<li>Freelance: 26</li>
		<li>Child Care: 26</li>
		<li>Snack Food: 26</li>
		<li>Electronic Health Record (EHR): 26</li>
		<li>Residential: 25</li>
		<li>Film Distribution: 25</li>
		<li>Classifieds: 25</li>
		<li>Power Grid: 25</li>
		<li>Gift: 25</li>
		<li>Musical Instruments: 25</li>
		<li>Call Center: 24</li>
		<li>Rental Property: 24</li>
		<li>Operating Systems: 24</li>
		<li>Visual Search: 24</li>
		<li>Presentations: 24</li>
		<li>MMO Games: 24</li>
		<li>Celebrity: 24</li>
		<li>Social News: 24</li>
		<li>Craft Beer: 24</li>
		<li>Same Day Delivery: 23</li>
		<li>Consumer Research: 23</li>
		<li>CAD: 23</li>
		<li>Baby: 23</li>
		<li>Browser Extensions: 23</li>
		<li>DSP: 23</li>
		<li>Smart Cities: 22</li>
		<li>Funding Platform: 22</li>
		<li>Electronic Design Automation (EDA): 22</li>
		<li>GPS: 22</li>
		<li>Product Search: 22</li>
		<li>Green Consumer Goods: 22</li>
		<li>Content Syndication: 22</li>
		<li>RFID: 22</li>
		<li>Unified Communications: 21</li>
		<li>Linux: 21</li>
		<li>Internet Radio: 21</li>
		<li>Quality Assurance: 21</li>
		<li>Simulation: 21</li>
		<li>Social CRM: 21</li>
		<li>Semantic Web: 21</li>
		<li>Guides: 21</li>
		<li>Car Sharing: 20</li>
		<li>Facial Recognition: 20</li>
		<li>Veterinary: 20</li>
		<li>Young Adults: 20</li>
		<li>Affiliate Marketing: 20</li>
		<li>Theatre: 19</li>
		<li>Music Venues: 19</li>
		<li>Motion Capture: 19</li>
		<li>Physical Security: 19</li>
		<li>LGBT: 18</li>
		<li>Auto Insurance: 18</li>
		<li>Office Administration: 18</li>
		<li>Industrial Design: 18</li>
		<li>Personal Development: 18</li>
		<li>Brewing: 18</li>
		<li>Fuel: 17</li>
		<li>Emerging Markets: 17</li>
		<li>Green Building: 17</li>
		<li>Business Travel: 17</li>
		<li>Mining: 17</li>
		<li>Diabetes: 17</li>
		<li>Drone Management: 17</li>
		<li>Event Promotion: 17</li>
		<li>Civil Engineering: 17</li>
		<li>Homeland Security: 17</li>
		<li>Recreation: 17</li>
		<li>Translation Service: 17</li>
		<li>Travel Agency: 16</li>
		<li>DIY: 16</li>
		<li>Freight Service: 16</li>
		<li>Cycling: 16</li>
		<li>Nightlife: 16</li>
		<li>Marine Technology: 16</li>
		<li>Retirement: 16</li>
		<li>Performing Arts: 16</li>
		<li>Q&amp;A: 15</li>
		<li>Hedge Funds: 15</li>
		<li>Embedded Software: 15</li>
		<li>Virtual World: 15</li>
		<li>Biofuel: 15</li>
		<li>Flowers: 15</li>
		<li>Elderly: 15</li>
		<li>Mining Technology: 15</li>
		<li>Virtual Goods: 15</li>
		<li>Animal Feed: 15</li>
		<li>Railroad: 15</li>
		<li>GPU: 14</li>
		<li>Quantified Self: 14</li>
		<li>Emergency Medicine: 14</li>
		<li>College Recruiting: 14</li>
		<li>Facility Management: 14</li>
		<li>Facilities Support Services: 14</li>
		<li>Personal Branding: 14</li>
		<li>Reservations: 14</li>
		<li>Facebook: 14</li>
		<li>Independent Music: 14</li>
		<li>Reading Apps: 13</li>
		<li>Group Buying: 13</li>
		<li>Social Shopping: 13</li>
		<li>Indoor Positioning: 13</li>
		<li>Leasing: 13</li>
		<li>Bakery: 13</li>
		<li>Music Education: 13</li>
		<li>Vacation Rental: 12</li>
		<li>Teenagers: 12</li>
		<li>Landscaping: 12</li>
		<li>NFC: 12</li>
		<li>Precious Metals: 12</li>
		<li>A/B Testing: 11</li>
		<li>Self-Storage: 11</li>
		<li>Edutainment: 11</li>
		<li>Usability Testing: 11</li>
		<li>Warehousing: 11</li>
		<li>Primary Education: 11</li>
		<li>Fertility: 11</li>
		<li>App Discovery: 11</li>
		<li>Laundry and Dry-cleaning: 11</li>
		<li>Collectibles: 11</li>
		<li>Vertical Search: 11</li>
		<li>Laser: 11</li>
		<li>Desktop Apps: 10</li>
		<li>CivicTech: 10</li>
		<li>Nightclubs: 10</li>
		<li>Property Development: 10</li>
		<li>Home and Garden: 10</li>
		<li>QR Codes: 10</li>
		<li>CMS: 10</li>
		<li>Ad Retargeting: 10</li>
		<li>Racing: 10</li>
		<li>Adult: 10</li>
		<li>Resorts: 10</li>
		<li>Nutraceutical: 10</li>
		<li>Document Preparation: 10</li>
		<li>Cosmetic Surgery: 10</li>
		<li>Hydroponics: 10</li>
		<li>Debit Cards: 9</li>
		<li>Franchise: 9</li>
		<li>E-Signature: 9</li>
		<li>Building Maintenance: 9</li>
		<li>Commercial Lending: 9</li>
		<li>Ad Exchange: 9</li>
		<li>Tea: 9</li>
		<li>Ad Server: 8</li>
		<li>Aquaculture: 8</li>
		<li>Freemium: 8</li>
		<li>Virtual Workforce: 8</li>
		<li>Marine Transportation: 8</li>
		<li>Property Insurance: 8</li>
		<li>Domain Registrar: 8</li>
		<li>Continuing Education: 8</li>
		<li>Winery: 8</li>
		<li>Rehabilitation: 8</li>
		<li>Field-Programmable Gate Array (FPGA): 8</li>
		<li>Courier Service: 8</li>
		<li>Military: 8</li>
		<li>In-Flight Entertainment: 8</li>
		<li>Funerals: 8</li>
		<li>Recipes: 8</li>
		<li>Music Label: 8</li>
		<li>Casino: 8</li>
		<li>Local Shopping: 8</li>
		<li>Tobacco: 8</li>
		<li>Charter Schools: 8</li>
		<li>Humanitarian: 8</li>
		<li>Trade Shows: 8</li>
		<li>Recreational Vehicles: 7</li>
		<li>Sponsorship: 7</li>
		<li>Penetration Testing: 7</li>
		<li>Life Insurance: 7</li>
		<li>Fast-Moving Consumer Goods: 7</li>
		<li>Sex Tech: 7</li>
		<li>Assistive Technology: 7</li>
		<li>Alumni: 7</li>
		<li>Spam Filtering: 7</li>
		<li>Virtual Desktop: 7</li>
		<li>Catering: 7</li>
		<li>Handmade: 7</li>
		<li>Amusement Park and Arcade: 7</li>
		<li>Outpatient Care: 7</li>
		<li>Console Games: 7</li>
		<li>Mechanical Design: 7</li>
		<li>Wired Telecommunications: 7</li>
		<li>Shipping Broker: 7</li>
		<li>Outdoor Advertising: 7</li>
		<li>Wind Energy: 6</li>
		<li>Quantum Computing: 6</li>
		<li>Field Support: 6</li>
		<li>Food Trucks: 6</li>
		<li>Fruit: 6</li>
		<li>Millennials: 6</li>
		<li>DRM: 6</li>
		<li>Vending and Concessions: 6</li>
		<li>Lingerie: 6</li>
		<li>Wood Processing: 6</li>
		<li>Nursing and Residential Care: 6</li>
		<li>Soccer: 6</li>
		<li>Secondary Education: 6</li>
		<li>Assisted Living: 6</li>
		<li>Vocational Education: 6</li>
		<li>Online Forums: 6</li>
		<li>Cause Marketing: 6</li>
		<li>Plastics and Rubber Manufacturing: 6</li>
		<li>Intrusion Detection: 5</li>
		<li>Micro Lending: 5</li>
		<li>Debt Collections: 5</li>
		<li>Chemical Engineering: 5</li>
		<li>Gift Exchange: 5</li>
		<li>Google: 5</li>
		<li>Water Transportation: 5</li>
		<li>Biomass Energy: 5</li>
		<li>Livestock: 5</li>
		<li>Google Glass: 5</li>
		<li>Presentation Software: 5</li>
		<li>Comics: 5</li>
		<li>Twitter: 5</li>
		<li>American Football: 5</li>
		<li>Religion: 5</li>
		<li>Commercial Insurance: 4</li>
		<li>Basketball: 4</li>
		<li>Boating: 4</li>
		<li>MOOC: 4</li>
		<li>Farmers Market: 4</li>
		<li>Playstation: 4</li>
		<li>Windows: 4</li>
		<li>Housekeeping Service: 4</li>
		<li>Underserved Children: 4</li>
		<li>Credit Bureau: 4</li>
		<li>Serious Games: 4</li>
		<li>Pollution Control: 4</li>
		<li>Diving: 4</li>
		<li>Confectionery: 4</li>
		<li>Museums and Historical Sites: 4</li>
		<li>Golf: 4</li>
		<li>Application Specific Integrated Circuit (ASIC): 3</li>
		<li>Tour Operator: 3</li>
		<li>Prediction Markets: 3</li>
		<li>Seafood: 3</li>
		<li>Gift Registry: 3</li>
		<li>Social Assistance: 3</li>
		<li>Homeless Shelter: 3</li>
		<li>Fuel Cell: 3</li>
		<li>Shopping Mall: 3</li>
		<li>Mineral: 3</li>
		<li>Janitorial Service: 3</li>
		<li>WebOS: 3</li>
		<li>Sex Industry: 3</li>
		<li>Xbox: 3</li>
		<li>Paper Manufacturing: 3</li>
		<li>Textbook: 2</li>
		<li>Taxi Service: 2</li>
		<li>Nuclear: 2</li>
		<li>Baseball: 2</li>
		<li>Generation Y: 2</li>
		<li>Generation Z: 2</li>
		<li>Multi-level Marketing: 2</li>
		<li>Forestry: 2</li>
		<li>Archiving Service: 2</li>
		<li>Contests: 2</li>
		<li>macOS: 2</li>
		<li>Windows Phone: 2</li>
		<li>First Aid: 2</li>
		<li>Swimming: 2</li>
		<li>SNS: 2</li>
		<li>Horticulture: 2</li>
		<li>categories: 1</li>
		<li>Foundries: 1</li>
		<li>Tennis: 1</li>
		<li>Fossil Fuels: 1</li>
		<li>Cricket: 1</li>
		<li>Limousine Service: 1</li>
		<li>Audiobooks: 1</li>
		<li>Skiing: 1</li>
		<li>Equestrian: 1</li>
		<li>Made to Order: 1</li>
		<li>Distillery: 1</li>
		<li>Nintendo: 1</li>
		<li>Sailing: 1</li>
		<li>Roku: 1</li>
		<li>Surfing: 1</li>
		<li>Ports and Harbors: 1</li>
	      </ul>
	  </CardBody>}
	</Card>
      </div>
      <div className="col-5" style={{minWidth: '12rem'}}>
	<Card> 
	  <CardHeader onClick={() => setShowCity(!showCity)} >
	      Cities {showCity?<MdArrowDropDown/>:<MdArrowDropUp/>}
	  </CardHeader>
	  {showCity && 
	    <CardBody>
	      <ul>
		<li>California: 37872</li>
		<li>United States: 37871</li>
		<li>San Francisco: 10008</li>
		<li>Los Angeles: 3520</li>
		<li>San Diego: 2035</li>
		<li>Palo Alto: 1683</li>
		<li>San Jose: 1540</li>
		<li>Mountain View: 1141</li>
		<li>Sunnyvale: 987</li>
		<li>Irvine: 967</li>
		<li>Santa Monica: 941</li>
		<li>Santa Clara: 918</li>
		<li>San Mateo: 700</li>
		<li>Redwood City: 619</li>
		<li>Menlo Park: 556</li>
		<li>Oakland: 537</li>
		<li>Berkeley: 484</li>
		<li>Fremont: 482</li>
		<li>Carlsbad: 301</li>
		<li>Pasadena: 269</li>
		<li>Beverly Hills: 250</li>
		<li>Newport Beach: 243</li>
		<li>Pleasanton: 234</li>
		<li>Cupertino: 219</li>
		<li>El Segundo: 213</li>
		<li>Campbell: 191</li>
		<li>La Jolla: 191</li>
		<li>Burlingame: 187</li>
		<li>Milpitas: 185</li>
		<li>Venice: 184</li>
		<li>Culver City: 183</li>
		<li>Los Altos: 181</li>
		<li>West Hollywood: 168</li>
		<li>Los Gatos: 156</li>
		<li>Emeryville: 155</li>
		<li>Costa Mesa: 150</li>
		<li>San Ramon: 148</li>
		<li>South San Francisco: 143</li>
		<li>Burbank: 140</li>
		<li>Santa Ana: 135</li>
		<li>Walnut Creek: 131</li>
		<li>Torrance: 122</li>
		<li>Glendale: 120</li>
		<li>San Carlos: 119</li>
		<li>Aliso Viejo: 119</li>
		<li>Anaheim: 116</li>
		<li>Long Beach: 110</li>
		<li>Woodland Hills: 108</li>
		<li>Hayward: 108</li>
		<li>Westlake Village: 108</li>
		<li>Santa Cruz: 103</li>
		<li>Marina Del Rey: 103</li>
		<li>Walnut: 91</li>
		<li>Foster City: 90</li>
		<li>Sherman Oaks: 83</li>
		<li>Orange: 80</li>
		<li>Huntington Beach: 79</li>
		<li>San Rafael: 75</li>
		<li>Newark: 74</li>
		<li>Manhattan Beach: 73</li>
		<li>Santa Rosa: 73</li>
		<li>Livermore: 71</li>
		<li>Chatsworth: 71</li>
		<li>Alameda: 70</li>
		<li>Sausalito: 70</li>
		<li>Ontario: 69</li>
		<li>Calabasas: 67</li>
		<li>Lake Forest: 66</li>
		<li>San Bruno: 65</li>
		<li>Mill Valley: 64</li>
		<li>Encinitas: 63</li>
		<li>Petaluma: 62</li>
		<li>Camarillo: 60</li>
		<li>San Clemente: 59</li>
		<li>Encino: 59</li>
		<li>Tustin: 59</li>
		<li>Solana Beach: 59</li>
		<li>Valencia: 59</li>
		<li>Novato: 57</li>
		<li>San Leandro: 55</li>
		<li>Saratoga: 52</li>
		<li>Dublin: 50</li>
		<li>Agoura Hills: 50</li>
		<li>Laguna Hills: 49</li>
		<li>Temecula: 49</li>
		<li>Poway: 48</li>
		<li>Riverside: 48</li>
		<li>Stanford: 45</li>
		<li>Vista: 43</li>
		<li>Van Nuys: 43</li>
		<li>Ventura: 41</li>
		<li>Belmont: 41</li>
		<li>Richmond: 41</li>
		<li>Brea: 41</li>
		<li>Thousand Oaks: 41</li>
		<li>Lucerne Valley: 41</li>
		<li>Redondo Beach: 40</li>
		<li>Napa: 40</li>
		<li>North Hollywood: 39</li>
		<li>Redwood Shores: 38</li>
		<li>City Of Industry: 38</li>
		<li>Danville: 37</li>
		<li>Brisbane: 36</li>
		<li>Simi Valley: 36</li>
		<li>Concord: 34</li>
		<li>Studio City: 33</li>
		<li>Monrovia: 33</li>
		<li>Morgan Hill: 32</li>
		<li>Fountain Valley: 32</li>
		<li>Gardena: 31</li>
		<li>San Juan Capistrano: 31</li>
		<li>Hermosa Beach: 31</li>
		<li>Scotts Valley: 30</li>
		<li>Foothill Ranch: 30</li>
		<li>Laguna Beach: 30</li>
		<li>Corona: 30</li>
		<li>Oceanside: 30</li>
		<li>Mission Viejo: 29</li>
		<li>Sonoma: 29</li>
		<li>Hawthorne: 28</li>
		<li>Garden Grove: 27</li>
		<li>Fullerton: 27</li>
		<li>Playa Vista: 26</li>
		<li>Sebastopol: 26</li>
		<li>Commerce: 25</li>
		<li>Del Mar: 25</li>
		<li>Lafayette: 25</li>
		<li>Larkspur: 25</li>
		<li>Escondido: 25</li>
		<li>San Marcos: 25</li>
		<li>Malibu: 24</li>
		<li>Cerritos: 23</li>
		<li>Laguna Niguel: 23</li>
		<li>Corte Madera: 23</li>
		<li>Rancho Cucamonga: 23</li>
		<li>Oxnard: 22</li>
		<li>Santa Fe Springs: 22</li>
		<li>Chino: 22</li>
		<li>Portola Valley: 19</li>
		<li>Orinda: 19</li>
		<li>Ladera Ranch: 18</li>
		<li>Northridge: 18</li>
		<li>Millbrae: 17</li>
		<li>Canoga Park: 17</li>
		<li>Murrieta: 17</li>
		<li>Cypress: 17</li>
		<li>Belvedere Tiburon: 16</li>
		<li>Inglewood: 16</li>
		<li>Rancho Santa Margarita: 16</li>
		<li>Los Altos Hills: 16</li>
		<li>Pacific Palisades: 16</li>
		<li>Chula Vista: 16</li>
		<li>Diamond Bar: 15</li>
		<li>Redlands: 15</li>
		<li>Carson: 15</li>
		<li>El Cajon: 15</li>
		<li>Santa Clarita: 15</li>
		<li>La Mirada: 15</li>
		<li>Arcadia: 15</li>
		<li>Pomona: 15</li>
		<li>Newbury Park: 14</li>
		<li>Pleasant Hill: 14</li>
		<li>Union City: 14</li>
		<li>Yorba Linda: 14</li>
		<li>Buena Park: 13</li>
		<li>South Pasadena: 13</li>
		<li>Dana Point: 13</li>
		<li>Rancho Dominguez: 13</li>
		<li>Palm Springs: 13</li>
		<li>Half Moon Bay: 12</li>
		<li>Atherton: 12</li>
		<li>Daly City: 11</li>
		<li>Moorpark: 11</li>
		<li>San Bernardino: 11</li>
		<li>Seal Beach: 11</li>
		<li>Fairfield: 11</li>
		<li>Claremont: 11</li>
		<li>El Cerrito: 11</li>
		<li>Placentia: 11</li>
		<li>Sylmar: 10</li>
		<li>East Palo Alto: 10</li>
		<li>Watsonville: 10</li>
		<li>Ojai: 10</li>
		<li>San Pedro: 10</li>
		<li>Benicia: 10</li>
		<li>Capitola: 10</li>
		<li>Aptos: 10</li>
		<li>Soquel: 9</li>
		<li>Altadena: 9</li>
		<li>Universal City: 9</li>
		<li>Azusa: 9</li>
		<li>Compton: 9</li>
		<li>Rohnert Park: 9</li>
		<li>Alamo: 9</li>
		<li>Martinez: 9</li>
		<li>Vallejo: 8</li>
		<li>Healdsburg: 8</li>
		<li>Brentwood: 8</li>
		<li>West Covina: 8</li>
		<li>Vacaville: 8</li>
		<li>Rancho Santa Fe: 8</li>
		<li>Covina: 8</li>
		<li>Westminster: 8</li>
		<li>Sun Valley: 8</li>
		<li>Harbor City: 7</li>
		<li>Boulevard: 7</li>
		<li>San Anselmo: 7</li>
		<li>Baldwin Park: 7</li>
		<li>Pacifica: 7</li>
		<li>Monterey Park: 7</li>
		<li>Lancaster: 7</li>
		<li>Palm Desert: 7</li>
		<li>Los Alamitos: 7</li>
		<li>Upland: 7</li>
		<li>Fontana: 7</li>
		<li>Tarzana: 7</li>
		<li>Century City: 6</li>
		<li>Rialto: 6</li>
		<li>Moraga: 6</li>
		<li>Glendora: 6</li>
		<li>West Hills: 6</li>
		<li>Hercules: 6</li>
		<li>Chino Hills: 6</li>
		<li>San Gabriel: 6</li>
		<li>Duarte: 6</li>
		<li>San Dimas: 6</li>
		<li>West Los Angeles: 5</li>
		<li>Signal Hill: 5</li>
		<li>Rolling Hills Estates: 5</li>
		<li>La Palma: 5</li>
		<li>Rancho Palos Verdes: 5</li>
		<li>Rancho Mirage: 5</li>
		<li>Valley Village: 5</li>
		<li>Piedmont: 5</li>
		<li>La Crescenta: 5</li>
		<li>Alhambra: 5</li>
		<li>Fairfax: 4</li>
		<li>Wildomar: 4</li>
		<li>Greenbrae: 4</li>
		<li>Toluca Lake: 4</li>
		<li>Apple Valley: 4</li>
		<li>Pacoima: 4</li>
		<li>Rosemead: 4</li>
		<li>Granada Hills: 4</li>
		<li>Loma Linda: 4</li>
		<li>Saint Helena: 4</li>
		<li>La Canada Flintridge: 4</li>
		<li>Whittier: 4</li>
		<li>El Monte: 4</li>
		<li>Downey: 4</li>
		<li>Temple City: 3</li>
		<li>Rowland Heights: 3</li>
		<li>Byron: 3</li>
		<li>Newport Coast: 3</li>
		<li>Kentfield: 3</li>
		<li>Pittsburg: 3</li>
		<li>Santa Paula: 3</li>
		<li>Bonsall: 3</li>
		<li>Yountville: 3</li>
		<li>Windsor: 3</li>
		<li>Castro Valley: 3</li>
		<li>Hacienda Heights: 3</li>
		<li>Coronado: 3</li>
		<li>Alviso: 3</li>
		<li>Palos Verdes Estates: 3</li>
		<li>Playa Del Rey: 3</li>
		<li>Montrose: 3</li>
		<li>San Juan Bautista: 3</li>
		<li>Cotati: 3</li>
		<li>La Mesa: 3</li>
		<li>American Canyon: 3</li>
		<li>Norwalk: 3</li>
		<li>Mission Hills: 3</li>
		<li>South El Monte: 3</li>
		<li>La Quinta: 3</li>
		<li>Topanga: 3</li>
		<li>Wilmington: 3</li>
		<li>Hollister: 3</li>
		<li>Gilroy: 3</li>
		<li>Montebello: 3</li>
		<li>National City: 3</li>
		<li>San Fernando: 3</li>
		<li>Reseda: 3</li>
		<li>Albany: 2</li>
		<li>North Hills: 2</li>
		<li>Ramona: 2</li>
		<li>Boulder Creek: 2</li>
		<li>Graton: 2</li>
		<li>Victorville: 2</li>
		<li>Santee: 2</li>
		<li>Menifee: 2</li>
		<li>Artesia: 2</li>
		<li>Stevenson Ranch: 2</li>
		<li>Moss Beach: 2</li>
		<li>Lake Elsinore: 2</li>
		<li>San Pablo: 2</li>
		<li>Indio: 2</li>
		<li>Lynwood: 2</li>
		<li>Mira Loma: 2</li>
		<li>Imperial Beach: 2</li>
		<li>Bell: 2</li>
		<li>South Gate: 2</li>
		<li>El Granada: 2</li>
		<li>Oakville: 2</li>
		<li>San Marino: 2</li>
		<li>Palmdale: 2</li>
		<li>Capistrano Beach: 2</li>
		<li>Stanton: 2</li>
		<li>La Habra: 2</li>
		<li>Panorama City: 2</li>
		<li>Lawndale: 2</li>
		<li>Calistoga: 2</li>
		<li>Felton: 2</li>
		<li>Pico Rivera: 2</li>
		<li>Trabuco Canyon: 2</li>
		<li>Rutherford: 2</li>
		<li>Antioch: 2</li>
		<li>Grand Terrace: 2</li>
		<li>location_city: 1</li>
		<li>Dixon: 1</li>
		<li>Port Hueneme Cbc Base: 1</li>
		<li>Colton: 1</li>
		<li>Lakewood: 1</li>
		<li>Moreno Valley: 1</li>
		<li>Indian Wells: 1</li>
		<li>San Ysidro: 1</li>
		<li>Spring Valley: 1</li>
		<li>Winnetka: 1</li>
		<li>East Irvine: 1</li>
		<li>Canyon Country: 1</li>
		<li>Pala: 1</li>
		<li>Pinole: 1</li>
		<li>Glen Ellen: 1</li>
		<li>Fulton: 1</li>
		<li>Sunset Beach: 1</li>
		<li>La Puente: 1</li>
		<li>La Honda: 1</li>
		<li>Beaumont: 1</li>
		<li>Clayton: 1</li>
		<li>Paramount: 1</li>
		<li>Hesperia: 1</li>
		<li>Geyserville: 1</li>
		<li>Idyllwild: 1</li>
		<li>Huntington Park: 1</li>
		<li>Bonita: 1</li>
		<li>Oak Park: 1</li>
		<li>Montclair: 1</li>
		<li>Newhall: 1</li>
		<li>Ross: 1</li>
		<li>Oakley: 1</li>
		<li>Sierra Madre: 1</li>
		<li>Bellflower: 1</li>
		<li>Maywood: 1</li>
		<li>San Lorenzo: 1</li>
		<li>Perris: 1</li>
		<li>Norco: 1</li>
		<li>Mentone: 1</li>
		<li>La Verne: 1</li>
		<li>Thousand Palms: 1</li>
		<li>Ben Lomond: 1</li>
		<li>Boyes Hot Springs: 1</li>
		<li>Lemon Grove: 1</li>
		<li>Occidental: 1</li>
		<li>Lomita: 1</li>
		<li>San Martin: 1</li>
	      </ul>
	    </CardBody>
	  }
	</Card>
      </div>
    </Row>
  )
}


export default CategoryCity;
