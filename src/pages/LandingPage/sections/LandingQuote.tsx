import { QuoteSection, Blockquote, QuoteCite } from "../landing-styled";

export function LandingQuote() {
  return (
    <QuoteSection>
      <div className="lbl">— Field notes / 04</div>
      <Blockquote>
        We replaced Jira, Confluence and a spreadsheet-of-spreadsheets with
        Maverva. Our sprint review dropped from 90 minutes to 25, and the
        engineers actually updated tickets again.
      </Blockquote>
      <QuoteCite>
        <span className="av">HJ</span>
        <div>
          <b>Henrik Jonsson</b> · Head of Engineering, Kinetic OS
          <br />
          <span>Migrated 320-person org in 6 weeks</span>
        </div>
      </QuoteCite>
    </QuoteSection>
  );
}
