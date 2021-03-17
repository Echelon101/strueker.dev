import React, { useState } from "react"
import Layout from "../../../src/layouts/default";
import { graphql } from "gatsby";
import { Trans, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"

import * as styles from "./donate.module.scss";

export const query = graphql`
query ($language: String!) {
  site {
    siteMetadata {
      title
      siteUrl
      payPalMail
    }
  }
  file(relativePath: {eq: "images/pplogo.png"}) {
      childImageSharp {
          resize(width: 240, height: 240, fit: CONTAIN) {
              src
          }
      }
  }
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
}
`;

function DonatePage(props) {
  const [amount, setAmount] = useState(5);
  const { t } = useI18next();
  const { path } = React.useContext(I18nextContext);

  const { site, file } = props.data;

  return (
    <Layout module="donate" title={t("donate")} description={t("donationCatchphrase")}>
      <section>
        <article>
          <h1><Trans>donate</Trans></h1>

          <p><Trans>donateDescription</Trans></p>

          <div className={styles.priceAmount}>
            <label htmlFor="priceInput" className={styles.sronly}>Amount</label>
            <input type="number" min="1" placeholder="10.00" step="1" value={amount} onChange={(ev) => { setAmount(ev.target.value) }} name="priceInput" id="priceInput" />
            <div>€</div>
          </div>

          <a className={styles.donateButton} rel="noopener" id="payPalBtn" href={"https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=" + encodeURIComponent(site.siteMetadata.payPalMail) + "&item_name=" + encodeURIComponent(site.siteMetadata.title) + "&currency_code=EUR&image_url=" + (encodeURIComponent(site.siteMetadata.siteUrl + file.childImageSharp.resize.src)) + "&return=" + (encodeURIComponent(site.siteMetadata.siteUrl + "/" + path + "thank-you/")) + "&rm=0&cancel_return=" + (encodeURIComponent(site.siteMetadata.siteUrl + "/" + path)) + "&amount=" + amount}><span>Donate using PayPal</span><i className="fas fa-fw fa-chevron-right" aria-hidden="true"></i></a>
        </article>
      </section>
    </Layout>
  );
}

DonatePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default DonatePage;