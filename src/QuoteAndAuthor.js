import React from 'react';
import quotes from './QuoteDB';


export default function QuoteAndAuthor(props) {

  const { quote, generateRandomQuote } = props;
  return (
  <>
    <div className="quoteCard"></div><div className="quoteCardBody">
      <p className="quoteCardText">{quote.quote}</p>
      <h5 className="quoteCardAuthor">- {quote.author}</h5>
      <button className="generate"
      onClick={() => { generateRandomQuote(quotes) }}
      type="submit">
        <i class="fas fa-mouse"></i> Generate Quote</button>
    </div>
    </>
  )

}