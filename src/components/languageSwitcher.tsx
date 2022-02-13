import React from "react";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";

import * as styles from "./languageSwitcher.module.scss";

const LanguageSwitcher = () => {
    const { languages, originalPath } = useI18next();

    return (
        <div
            className={styles.languageModal}
            id="languageChooser"
            role="dialog"
        >
            <div className={styles.languageModalInner}>
                <h2>
                    Languages (
                    <a href="#top" className={styles.modalCloseLink}>
                        &times;
                    </a>
                    )
                </h2>
                <ul>
                    {languages.map((lng) => (
                        <li key={lng}>
                            <Link to={originalPath} language={lng}>
                                <Trans>language.{lng}.name</Trans>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
