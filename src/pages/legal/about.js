import React from "react";
import Layout from "../../layouts/default";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
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

export default function ImprintPage() {
    const { t } = useI18next();
    return (
        <Layout title={t("layout.imprint")}>
            <section>
                <article>
                    <h1>
                        <Trans>layout.imprint</Trans>
                    </h1>

                    <p>Angaben gemäß § 5 TMG</p>
                    <p>
                        Timo Strüker
                        <br />
                        Meister-Francke-Straße 22
                        <br />
                        22309 Hamburg <br />
                    </p>
                    <p>
                        {" "}
                        <strong>Vertreten durch: </strong>
                        <br />
                        Timo Strüker
                        <br />
                    </p>
                    <p>
                        <strong>Kontakt:</strong> <br />
                        Telefon: +49 4106 8068004
                        <br />
                        E-Mail:{" "}
                        <a href="mailto:developer@strueker.net">
                            developer@strueker.net
                        </a>
                        <br />
                    </p>
                </article>
            </section>
        </Layout>
    );
}
