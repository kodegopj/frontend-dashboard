import React from 'react';
import '../Styles/SalesPricing.css';

function SalesPricing() {
  return (
    <div>
      <div className='true-performance'>
       <b className='p-performance'> True performance starts with a great data platform</b>
       <p className='work-smart'>Work smart not hard</p>
      </div>
      <div className='sales-pricing'>
        <div className='main-sales'>
          <div className='sales-chart'></div>
          <div className='sales-p'>
          Get a quick look at the projections for you key metrics such as Revenue and Net Profit. See the forecasted trend on the chart, and go into the full report for more detail. We think this is one of the coolest widgets on your ecommerce dashboard.
          </div>
        </div>
        <div className='main-sales'>
            <div className='orders-earnings'></div>
            <div className='sales-p'>
            This dashboard is made for eCommerce  organizations requiring quick insights into their Total Orders, Total Earnings, Total Income and Total Expenses. Monitor on hand in this fully interactive dashboard.
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default SalesPricing