import * as React from "react"
import Layout from "../layouts/default"

import styles from "./index.module.scss"

import { Trans, Link } from "gatsby-plugin-react-i18next"
import {graphql} from "gatsby";


export const query = graphql`
  query {
    site {
      siteMetadata {
        contactEmail
        contactPhone
        mapsLink
        contactTwitter
        contactGitHub
      }
    }
  }
`;

class IndexPage extends React.Component {
  render() {
    let meta = this.props.data.site.siteMetadata;

    return (
      <Layout title="Timo Strüker" module="home">
        <section className={styles.heroSection}>
          <div className={styles.profile + " profile"}>
            <div data-bg="url(https://cdn.kevink.dev/images/kevin/kevin-kandlbinder-03.jpg)" style={{backgroundImage: "url(https://cdn.kevink.dev/images/kevin/kevin-kandlbinder-03.jpg)"}} className={styles.profileImage + " lazy"}></div>
            <div className={styles.profileImageDummy}></div>
            <div className={styles.profileCard}>
              <span className={styles.hello}><Trans>homeHello</Trans></span>
              <span className={styles.name}>Kevin Kandlbinder</span>
              <span className={styles.description}><Trans>homeMe</Trans> <span id="descriptionType"><Trans>homeWebDeveloper</Trans></span>.</span>
  
              <div className={styles.contactLinks}>
                {/*<a className={styles.contactLink} href={"tel:"+meta.contactPhone}><i className="fas fa-fw fa-phone"></i>{meta.contactPhone}</a>*/}
                <a className={styles.contactLink} href={"mailto:"+meta.contactEmail}><i className="far fa-fw fa-envelope"></i>{meta.contactEmail}</a>
                <a className={styles.contactLink} href={meta.mapsLink} rel="noopener" target="_blank"><i className="fas fa-fw fa-map-marker-alt"></i><Trans>homeMyLocation</Trans></a>
                <a className={styles.contactLink} href={"https://twitter.com/"+meta.contactTwitter} rel="noopener" target="_blank"><i className="fab fa-fw fa-twitter"></i>@{meta.contactTwitter}</a>
                <a className={styles.contactLink} href={"https://github.com/"+meta.contactGitHub} rel="noopener" target="_blank"><i className="fab fa-fw fa-github"></i>{meta.contactGitHub}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="aboutSection">
          <article>
            <h1><Trans>homeAboutMe</Trans></h1>
            <p><Trans>homeAboutMeHello</Trans><br/><Trans>homeAboutMeText</Trans></p>
          </article>
        </section>
        <a className={styles.section + " " + styles.creditSection} href="https://unsplash.com/@jannikkiel" target="_blank" rel="noopener">
          <div>
            <span><i className="fas fa-fw fa-camera"></i> <Trans>homeImageCredit</Trans></span>
            <i className="fas fa-fw fa-chevron-right"></i>
          </div>
        </a>
        {/*<Link className={styles.section + " " + styles.donationSection} to="/donate">
          <div>
            <span><Trans>donationCatchphrase</Trans></span>
            <i className="fas fa-fw fa-chevron-right"></i>
          </div>
          </Link>*/}
      </Layout>
    )
  }
}

export default IndexPage
