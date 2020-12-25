import React from "react"
import PropTypes from "prop-types"
import Navigation from "../components/navigation"
import SEO from "../components/seo";

import "./default.scss";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import LanguageSwitcher from "../components/languageSwitcher";

class Layout extends React.Component {
    render() {
        return (
            <>
                <SEO description={this.props.description} lang={this.props.lang} meta={this.props.meta} title={this.props.title} />
                <Navigation isHome={this.props.module == "home"} module={this.props.module} />
                <div id="content" role="main">
                    {this.props.children}
                </div>
                <footer role="contentinfo">&copy; Timo Strüker, <Link to="/legal/about" class="spf-link"><Trans i18nKey="imprint">Imprint</Trans></Link> | <Link to="/legal/datasec" class="spf-link"><Trans i18nKey="datasec">Data Protection</Trans></Link> | <Link to="/legal/disclaimer" class="spf-link"><Trans i18nKey="disclaimer">Disclaimer</Trans></Link> | <Trans i18nKey="creatorAttribution">This website was designed by</Trans> <a href="https://kevink.dev" target="_blank">Kevin Kandlbinder</a> | <a href="#languageChooser">Language</a></footer>
                <div class="languageModal" id="languageChooser">
                    <LanguageSwitcher />
                </div>
            </>
        );
    }
}

Layout.defaultProps = {
    module: `none`,
    meta: [],
    description: ``,
}

Layout.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    module: PropTypes.string.isRequired
}

export default Layout;