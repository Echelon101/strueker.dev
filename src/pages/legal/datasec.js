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

export default function DataSecPage() {
    const { t } = useI18next();
    return (
        <Layout title={t("layout.datasec")}>
            <section>
                <article>
                    <h1>
                        <Trans>layout.datasec</Trans>
                    </h1>

                    <h3 id="dsg-general-intro"></h3>
                    <p>
                        Diese Datenschutzerklärung klärt Sie über die Art, den
                        Umfang und Zweck der Verarbeitung von personenbezogenen
                        Daten (nachfolgend kurz „Daten“) im Rahmen der
                        Erbringung unserer Leistungen sowie innerhalb unseres
                        Onlineangebotes und der mit ihm verbundenen Webseiten,
                        Funktionen und Inhalte sowie externen Onlinepräsenzen,
                        wie z.B. unser Social Media Profile auf (nachfolgend
                        gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick
                        auf die verwendeten Begrifflichkeiten, wie z.B.
                        „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf
                        die Definitionen im Art. 4 der
                        Datenschutzgrundverordnung (DSGVO). <br />
                        <br />
                    </p>
                    <h3 id="dsg-general-controller">Verantwortlicher</h3>
                    <p>
                        <span className="tsmcontroller">
                            Timo Strüker
                            <br />
                            Meister-Francke-Straße 22
                            <br />
                            22309 Hamburg
                            <br />
                            Deutschland
                            <br />
                            <br />
                            E-Mail: developer@strueker.net
                            <br />
                            Impressum: https://strueker.dev/legal/about
                        </span>
                    </p>
                    <h3 id="dsg-general-datatype">
                        Arten der verarbeiteten Daten
                    </h3>
                    <p>
                        - Bestandsdaten (z.B., Personen-Stammdaten, Namen oder
                        Adressen).
                        <br />
                        - Kontaktdaten (z.B., E-Mail, Telefonnummern).
                        <br />
                        - Inhaltsdaten (z.B., Texteingaben, Fotografien,
                        Videos).
                        <br />
                        - Nutzungsdaten (z.B., besuchte Webseiten, Interesse an
                        Inhalten, Zugriffszeiten).
                        <br />- Meta-/Kommunikationsdaten (z.B.,
                        Geräte-Informationen, IP-Adressen).
                    </p>
                    <h3 id="dsg-general-datasubjects">
                        Kategorien betroffener Personen
                    </h3>
                    <p>
                        Besucher und Nutzer des Onlineangebotes (Nachfolgend
                        bezeichnen wir die betroffenen Personen zusammenfassend
                        auch als „Nutzer“).
                        <br />
                    </p>
                    <h3 id="dsg-general-purpose">Zweck der Verarbeitung</h3>
                    <p>
                        - Zurverfügungstellung des Onlineangebotes, seiner
                        Funktionen und Inhalte.
                        <br />
                        - Beantwortung von Kontaktanfragen und Kommunikation mit
                        Nutzern.
                        <br />
                        - Sicherheitsmaßnahmen.
                        <br />
                        - Reichweitenmessung/Marketing
                        <br />
                        <span className="tsmcom"></span>
                    </p>
                    <h3 id="dsg-general-terms">
                        Verwendete Begrifflichkeiten{" "}
                    </h3>
                    <p>
                        „Personenbezogene Daten“ sind alle Informationen, die
                        sich auf eine identifizierte oder identifizierbare
                        natürliche Person (im Folgenden „betroffene Person“)
                        beziehen; als identifizierbar wird eine natürliche
                        Person angesehen, die direkt oder indirekt, insbesondere
                        mittels Zuordnung zu einer Kennung wie einem Namen, zu
                        einer Kennnummer, zu Standortdaten, zu einer
                        Online-Kennung (z.B. Cookie) oder zu einem oder mehreren
                        besonderen Merkmalen identifiziert werden kann, die
                        Ausdruck der physischen, physiologischen, genetischen,
                        psychischen, wirtschaftlichen, kulturellen oder sozialen
                        Identität dieser natürlichen Person sind.
                        <br />
                        <br />
                        „Verarbeitung“ ist jeder mit oder ohne Hilfe
                        automatisierter Verfahren ausgeführte Vorgang oder jede
                        solche Vorgangsreihe im Zusammenhang mit
                        personenbezogenen Daten. Der Begriff reicht weit und
                        umfasst praktisch jeden Umgang mit Daten.
                        <br />
                        <br />
                        „Pseudonymisierung“ die Verarbeitung personenbezogener
                        Daten in einer Weise, dass die personenbezogenen Daten
                        ohne Hinzuziehung zusätzlicher Informationen nicht mehr
                        einer spezifischen betroffenen Person zugeordnet werden
                        können, sofern diese zusätzlichen Informationen
                        gesondert aufbewahrt werden und technischen und
                        organisatorischen Maßnahmen unterliegen, die
                        gewährleisten, dass die personenbezogenen Daten nicht
                        einer identifizierten oder identifizierbaren natürlichen
                        Person zugewiesen werden.
                        <br />
                        <br />
                        „Profiling“ jede Art der automatisierten Verarbeitung
                        personenbezogener Daten, die darin besteht, dass diese
                        personenbezogenen Daten verwendet werden, um bestimmte
                        persönliche Aspekte, die sich auf eine natürliche Person
                        beziehen, zu bewerten, insbesondere um Aspekte bezüglich
                        Arbeitsleistung, wirtschaftliche Lage, Gesundheit,
                        persönliche Vorlieben, Interessen, Zuverlässigkeit,
                        Verhalten, Aufenthaltsort oder Ortswechsel dieser
                        natürlichen Person zu analysieren oder vorherzusagen.
                        <br />
                        <br />
                        Als „Verantwortlicher“ wird die natürliche oder
                        juristische Person, Behörde, Einrichtung oder andere
                        Stelle, die allein oder gemeinsam mit anderen über die
                        Zwecke und Mittel der Verarbeitung von personenbezogenen
                        Daten entscheidet, bezeichnet.
                        <br />
                        <br />
                        „Auftragsverarbeiter“ eine natürliche oder juristische
                        Person, Behörde, Einrichtung oder andere Stelle, die
                        personenbezogene Daten im Auftrag des Verantwortlichen
                        verarbeitet.
                        <br />
                    </p>
                    <h3 id="dsg-general-legalbasis">
                        Maßgebliche Rechtsgrundlagen
                    </h3>
                    <p>
                        Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die
                        Rechtsgrundlagen unserer Datenverarbeitungen mit. Für
                        Nutzer aus dem Geltungsbereich der
                        Datenschutzgrundverordnung (DSGVO), d.h. der EU und des
                        EWG gilt, sofern die Rechtsgrundlage in der
                        Datenschutzerklärung nicht genannt wird, Folgendes:{" "}
                        <br />
                        Die Rechtsgrundlage für die Einholung von Einwilligungen
                        ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO;
                        <br />
                        Die Rechtsgrundlage für die Verarbeitung zur Erfüllung
                        unserer Leistungen und Durchführung vertraglicher
                        Maßnahmen sowie Beantwortung von Anfragen ist Art. 6
                        Abs. 1 lit. b DSGVO;
                        <br />
                        Die Rechtsgrundlage für die Verarbeitung zur Erfüllung
                        unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1
                        lit. c DSGVO;
                        <br />
                        Für den Fall, dass lebenswichtige Interessen der
                        betroffenen Person oder einer anderen natürlichen Person
                        eine Verarbeitung personenbezogener Daten erforderlich
                        machen, dient Art. 6 Abs. 1 lit. d DSGVO als
                        Rechtsgrundlage.
                        <br />
                        Die Rechtsgrundlage für die erforderliche Verarbeitung
                        zur Wahrnehmung einer Aufgabe, die im öffentlichen
                        Interesse liegt oder in Ausübung öffentlicher Gewalt
                        erfolgt, die dem Verantwortlichen übertragen wurde ist
                        Art. 6 Abs. 1 lit. e DSGVO. <br />
                        Die Rechtsgrundlage für die Verarbeitung zur Wahrung
                        unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f
                        DSGVO. <br />
                        Die Verarbeitung von Daten zu anderen Zwecken als denen,
                        zu denen sie erhoben wurden, bestimmt sich nach den
                        Vorgaben des Art 6 Abs. 4 DSGVO. <br />
                        Die Verarbeitung von besonderen Kategorien von Daten
                        (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach
                        den Vorgaben des Art. 9 Abs. 2 DSGVO. <br />
                    </p>
                    <h3 id="dsg-general-securitymeasures">
                        Sicherheitsmaßnahmen
                    </h3>
                    <p>
                        Wir treffen nach Maßgabe der gesetzlichen Vorgabenunter
                        Berücksichtigung des Stands der Technik, der
                        Implementierungskosten und der Art, des Umfangs, der
                        Umstände und der Zwecke der Verarbeitung sowie der
                        unterschiedlichen Eintrittswahrscheinlichkeit und
                        Schwere des Risikos für die Rechte und Freiheiten
                        natürlicher Personen, geeignete technische und
                        organisatorische Maßnahmen, um ein dem Risiko
                        angemessenes Schutzniveau zu gewährleisten.
                        <br />
                        <br />
                        Zu den Maßnahmen gehören insbesondere die Sicherung der
                        Vertraulichkeit, Integrität und Verfügbarkeit von Daten
                        durch Kontrolle des physischen Zugangs zu den Daten, als
                        auch des sie betreffenden Zugriffs, der Eingabe,
                        Weitergabe, der Sicherung der Verfügbarkeit und ihrer
                        Trennung. Des Weiteren haben wir Verfahren eingerichtet,
                        die eine Wahrnehmung von Betroffenenrechten, Löschung
                        von Daten und Reaktion auf Gefährdung der Daten
                        gewährleisten. Ferner berücksichtigen wir den Schutz
                        personenbezogener Daten bereits bei der Entwicklung,
                        bzw. Auswahl von Hardware, Software sowie Verfahren,
                        entsprechend dem Prinzip des Datenschutzes durch
                        Technikgestaltung und durch datenschutzfreundliche
                        Voreinstellungen.
                        <br />
                    </p>
                    <h3 id="dsg-general-coprocessing">
                        Zusammenarbeit mit Auftragsverarbeitern, gemeinsam
                        Verantwortlichen und Dritten
                    </h3>
                    <p>
                        Sofern wir im Rahmen unserer Verarbeitung Daten
                        gegenüber anderen Personen und Unternehmen
                        (Auftragsverarbeitern, gemeinsam Verantwortlichen oder
                        Dritten) offenbaren, sie an diese übermitteln oder ihnen
                        sonst Zugriff auf die Daten gewähren, erfolgt dies nur
                        auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn
                        eine Übermittlung der Daten an Dritte, wie an
                        Zahlungsdienstleister, zur Vertragserfüllung
                        erforderlich ist), Nutzer eingewilligt haben, eine
                        rechtliche Verpflichtung dies vorsieht oder auf
                        Grundlage unserer berechtigten Interessen (z.B. beim
                        Einsatz von Beauftragten, Webhostern, etc.). <br />
                        <br />
                        Sofern wir Daten anderen Unternehmen unserer
                        Unternehmensgruppe offenbaren, übermitteln oder ihnen
                        sonst den Zugriff gewähren, erfolgt dies insbesondere zu
                        administrativen Zwecken als berechtigtes Interesse und
                        darüberhinausgehend auf einer den gesetzlichen Vorgaben
                        entsprechenden Grundlage. <br />
                    </p>
                    <h3 id="dsg-general-thirdparty">
                        Übermittlungen in Drittländer
                    </h3>
                    <p>
                        Sofern wir Daten in einem Drittland (d.h. außerhalb der
                        Europäischen Union (EU), des Europäischen
                        Wirtschaftsraums (EWR) oder der Schweizer
                        Eidgenossenschaft) verarbeiten oder dies im Rahmen der
                        Inanspruchnahme von Diensten Dritter oder Offenlegung,
                        bzw. Übermittlung von Daten an andere Personen oder
                        Unternehmen geschieht, erfolgt dies nur, wenn es zur
                        Erfüllung unserer (vor)vertraglichen Pflichten, auf
                        Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen
                        Verpflichtung oder auf Grundlage unserer berechtigten
                        Interessen geschieht. Vorbehaltlich ausdrücklicher
                        Einwilligung oder vertraglich erforderlicher
                        Übermittlung, verarbeiten oder lassen wir die Daten nur
                        in Drittländern mit einem anerkannten Datenschutzniveau,
                        zu denen die unter dem &quot;Privacy-Shield&quot;
                        zertifizierten US-Verarbeiter gehören oder auf Grundlage
                        besonderer Garantien, wie z.B. vertraglicher
                        Verpflichtung durch sogenannte Standardschutzklauseln
                        der EU-Kommission, dem Vorliegen von Zertifizierungen
                        oder verbindlichen internen Datenschutzvorschriften
                        verarbeiten (Art. 44 bis 49 DSGVO,{" "}
                        <a
                            href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu_de"
                            target="blank"
                        >
                            Informationsseite der EU-Kommission
                        </a>
                        ).
                    </p>
                    <h3 id="dsg-general-rightssubject">
                        Rechte der betroffenen Personen
                    </h3>
                    <p>
                        Auskunftsrecht: Sie haben das Recht, eine Bestätigung
                        darüber zu verlangen, ob betreffende Daten verarbeitet
                        werden und auf Auskunft über diese Daten sowie auf
                        weitere Informationen und Kopie der Daten entsprechend
                        den gesetzlichen Vorgaben.
                        <br />
                        <br />
                        Recht auf Berichtigung: Sie haben entsprechend. den
                        gesetzlichen Vorgaben das Recht, die Vervollständigung
                        der Sie betreffenden Daten oder die Berichtigung der Sie
                        betreffenden unrichtigen Daten zu verlangen.
                        <br />
                        <br />
                        Recht auf Löschung und Einschränkung der Verarbeitung:
                        Sie haben nach Maßgabe der gesetzlichen Vorgaben das
                        Recht zu verlangen, dass betreffende Daten unverzüglich
                        gelöscht werden, bzw. alternativ nach Maßgabe der
                        gesetzlichen Vorgaben eine Einschränkung der
                        Verarbeitung der Daten zu verlangen.
                        <br />
                        <br />
                        Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie
                        betreffende Daten, die Sie uns bereitgestellt haben,
                        nach Maßgabe der gesetzlichen Vorgaben in einem
                        strukturierten, gängigen und maschinenlesbaren Format zu
                        erhalten oder deren Übermittlung an einen anderen
                        Verantwortlichen zu fordern.
                        <br />
                        <br />
                        Beschwerde bei Aufsichtsbehörde: Sie haben ferner nach
                        Maßgabe der gesetzlichen Vorgaben das Recht, eine
                        Beschwerde bei der zuständigen Aufsichtsbehörde
                        einzureichen.
                        <br />
                    </p>
                    <h3 id="dsg-general-revokeconsent">Widerrufsrecht</h3>
                    <p>
                        Sie haben das Recht, erteilte Einwilligungen mit Wirkung
                        für die Zukunft zu widerrufen.
                    </p>
                    <h3 id="dsg-general-object">Widerspruchsrecht</h3>
                    <p>
                        <strong>
                            Widerspruchsrecht: Sie haben das Recht, aus Gründen,
                            die sich aus Ihrer besonderen Situation ergeben,
                            jederzeit gegen die Verarbeitung der Sie
                            betreffenden personenbezogenen Daten, die aufgrund
                            von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                            Widerspruch einzulegen; dies gilt auch für ein auf
                            diese Bestimmungen gestütztes Profiling. Werden die
                            Sie betreffenden personenbezogenen Daten
                            verarbeitet, um Direktwerbung zu betreiben, haben
                            Sie das Recht, jederzeit Widerspruch gegen die
                            Verarbeitung der Sie betreffenden personenbezogenen
                            Daten zum Zwecke derartiger Werbung einzulegen; dies
                            gilt auch für das Profiling, soweit es mit solcher
                            Direktwerbung in Verbindung steht.
                        </strong>
                    </p>
                    <h3 id="dsg-general-cookies">
                        Cookies und Widerspruchsrecht bei Direktwerbung
                    </h3>
                    <p>
                        Als „Cookies“ werden kleine Dateien bezeichnet, die auf
                        Rechnern der Nutzer gespeichert werden. Innerhalb der
                        Cookies können unterschiedliche Angaben gespeichert
                        werden. Ein Cookie dient primär dazu, die Angaben zu
                        einem Nutzer (bzw. dem Gerät auf dem das Cookie
                        gespeichert ist) während oder auch nach seinem Besuch
                        innerhalb eines Onlineangebotes zu speichern. Als
                        temporäre Cookies, bzw. „Session-Cookies“ oder
                        „transiente Cookies“, werden Cookies bezeichnet, die
                        gelöscht werden, nachdem ein Nutzer ein Onlineangebot
                        verlässt und seinen Browser schließt. In einem solchen
                        Cookie kann z.B. der Inhalt eines Warenkorbs in einem
                        Onlineshop oder ein Login-Status gespeichert werden. Als
                        „permanent“ oder „persistent“ werden Cookies bezeichnet,
                        die auch nach dem Schließen des Browsers gespeichert
                        bleiben. So kann z.B. der Login-Status gespeichert
                        werden, wenn die Nutzer diese nach mehreren Tagen
                        aufsuchen. Ebenso können in einem solchen Cookie die
                        Interessen der Nutzer gespeichert werden, die für
                        Reichweitenmessung oder Marketingzwecke verwendet
                        werden. Als „Third-Party-Cookie“ werden Cookies
                        bezeichnet, die von anderen Anbietern als dem
                        Verantwortlichen, der das Onlineangebot betreibt,
                        angeboten werden (andernfalls, wenn es nur dessen
                        Cookies sind spricht man von „First-Party Cookies“).
                        <br />
                        <br />
                        Wir können temporäre und permanente Cookies einsetzen
                        und klären hierüber im Rahmen unserer
                        Datenschutzerklärung auf.
                        <br />
                        <br />
                        Sofern wir die Nutzer um eine Einwilligung in den
                        Einsatz von Cookies bitten (z.B. im Rahmen einer
                        Cookie-Einwilligung), ist die Rechtsgrundlage dieser
                        Verarbeitung Art. 6 Abs. 1 lit. a. DSGVO. Ansonsten
                        werden die personenbezogenen Cookies der Nutzer
                        entsprechend den nachfolgenden Erläuterungen im Rahmen
                        dieser Datenschutzerklärung auf Grundlage unserer
                        berechtigten Interessen (d.h. Interesse an der Analyse,
                        Optimierung und wirtschaftlichem Betrieb unseres
                        Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f.
                        DSGVO) oder sofern der Einsatz von Cookies zur
                        Erbringung unserer vertragsbezogenen Leistungen
                        erforderlich ist, gem. Art. 6 Abs. 1 lit. b. DSGVO, bzw.
                        sofern der Einsatz von Cookies für die Wahrnehmung einer
                        Aufgabe, die im öffentlichen Interesse liegt
                        erforderlich ist oder in Ausübung öffentlicher Gewalt
                        erfolgt, gem. Art. 6 Abs. 1 lit. e. DSGVO, verarbeitet.
                        <br />
                        <br />
                        Falls die Nutzer nicht möchten, dass Cookies auf ihrem
                        Rechner gespeichert werden, werden sie gebeten die
                        entsprechende Option in den Systemeinstellungen ihres
                        Browsers zu deaktivieren. Gespeicherte Cookies können in
                        den Systemeinstellungen des Browsers gelöscht werden.
                        Der Ausschluss von Cookies kann zu
                        Funktionseinschränkungen dieses Onlineangebotes führen.
                        <br />
                        <br />
                        Ein genereller Widerspruch gegen den Einsatz der zu
                        Zwecken des Onlinemarketing eingesetzten Cookies kann
                        bei einer Vielzahl der Dienste, vor allem im Fall des
                        Trackings, über die US-amerikanische Seite{" "}
                        <a href="http://www.aboutads.info/choices/">
                            http://www.aboutads.info/choices/
                        </a>{" "}
                        oder die EU-Seite{" "}
                        <a href="http://www.youronlinechoices.com/">
                            http://www.youronlinechoices.com/
                        </a>{" "}
                        erklärt werden. Des Weiteren kann die Speicherung von
                        Cookies mittels deren Abschaltung in den Einstellungen
                        des Browsers erreicht werden. Bitte beachten Sie, dass
                        dann gegebenenfalls nicht alle Funktionen dieses
                        Onlineangebotes genutzt werden können.
                    </p>
                    <h3 id="dsg-general-erasure">Löschung von Daten</h3>
                    <p>
                        Die von uns verarbeiteten Daten werden nach Maßgabe der
                        gesetzlichen Vorgaben gelöscht oder in ihrer
                        Verarbeitung eingeschränkt. Sofern nicht im Rahmen
                        dieser Datenschutzerklärung ausdrücklich angegeben,
                        werden die bei uns gespeicherten Daten gelöscht, sobald
                        sie für ihre Zweckbestimmung nicht mehr erforderlich
                        sind und der Löschung keine gesetzlichen
                        Aufbewahrungspflichten entgegenstehen. <br />
                        <br />
                        Sofern die Daten nicht gelöscht werden, weil sie für
                        andere und gesetzlich zulässige Zwecke erforderlich
                        sind, wird deren Verarbeitung eingeschränkt. D.h. die
                        Daten werden gesperrt und nicht für andere Zwecke
                        verarbeitet. Das gilt z.B. für Daten, die aus handels-
                        oder steuerrechtlichen Gründen aufbewahrt werden müssen.
                    </p>
                    <h3 id="dsg-general-changes">
                        Änderungen und Aktualisierungen der Datenschutzerklärung
                    </h3>
                    <p>
                        Wir bitten Sie sich regelmäßig über den Inhalt unserer
                        Datenschutzerklärung zu informieren. Wir passen die
                        Datenschutzerklärung an, sobald die Änderungen der von
                        uns durchgeführten Datenverarbeitungen dies erforderlich
                        machen. Wir informieren Sie, sobald durch die Änderungen
                        eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)
                        oder eine sonstige individuelle Benachrichtigung
                        erforderlich wird.
                    </p>
                    <p></p>
                    <h3 id="dsg-affiliate-general">
                        Teilnahme an Affiliate-Partnerprogrammen
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Innerhalb unseres Onlineangebotes setzen wir auf
                            Grundlage unserer berechtigten Interessen (d.h.
                            Interesse an der Analyse, Optimierung und
                            wirtschaftlichem Betrieb unseres Onlineangebotes)
                            gem. Art. 6 Abs. 1 lit. f DSGVO branchenübliche
                            Trackingmaßnahmen ein, soweit diese für den Betrieb
                            des Affiliatesystems erforderlich sind. Nachfolgend
                            klären wir die Nutzer über die technischen
                            Hintergründe auf.
                            <br />
                            <br />
                            Die von unseren Vertragspartnern angebotene
                            Leistungen können auch auf anderen Webseiten
                            beworben und verlinkt werden (sog. Affiliate-Links
                            oder After-Buy-Systeme, wenn z.B. Links oder
                            Leistungen Dritter nach einem Vertragsschluss
                            angeboten werden). Die Betreiber der jeweiligen
                            Webseiten erhalten eine Provision, wenn Nutzer den
                            Affiliate-Links folgen und anschließend die Angebote
                            wahrnehmen.
                            <br />
                            <br />
                            Zusammenfassend, ist es für unser Onlineangebot
                            erforderlich, dass wir nachverfolgen können, ob
                            Nutzer, die sich für Affiliate-Links und/oder die
                            bei uns verfügbaren Angebote interessieren, die
                            Angebote anschließend auf die Veranlassung der
                            Affiliate-Links oder unserer Onlineplattform,
                            wahrnehmen. Hierzu werden die Affiliate-Links und
                            unsere Angebote um bestimmte Werte ergänzt, die ein
                            Bestandteil des Links oder anderweitig, z.B. in
                            einem Cookie, gesetzt werden können. Zu den Werten
                            gehören insbesondere die Ausgangswebseite
                            (Referrer), Zeitpunkt, eine Online-Kennung der
                            Betreiber der Webseite, auf der sich der
                            Affiliate-Link befand, eine Online-Kennung des
                            jeweiligen Angebotes, eine Online-Kennung des
                            Nutzers, als auch Tracking-spezifische Werte wie
                            z.B. Werbemittel-ID, Partner-ID und
                            Kategorisierungen.
                            <br />
                            <br />
                            Bei der von uns verwendeten Online-Kennungen der
                            Nutzer, handelt es sich um pseudonyme Werte. D.h.
                            die Online-Kennungen enthalten selbst keine
                            personenbezogenen Daten wie Namen oder
                            E-Mailadressen. Sie helfen uns nur zu bestimmen ob
                            derselbe Nutzer, der auf einen Affiliate-Link
                            geklickt oder sich über unser Onlineangebot für ein
                            Angebot interessiert hat, das Angebot wahrgenommen,
                            d.h. z.B. einen Vertrag mit dem Anbieter
                            abgeschlossen hat. Die Online-Kennung ist jedoch
                            insoweit personenbezogen, als dem Partnerunternehmen
                            und auch uns, die Online-Kennung zusammen mit
                            anderen Nutzerdaten vorliegen. Nur so kann das
                            Partnerunternehmen uns mitteilen, ob derjenige
                            Nutzer das Angebot wahrgenommen hat und wir z.B. den
                            Bonus auszahlen können.
                            <br />
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-affiliate-amazon">Amazon-Partnerprogramm</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir sind auf Grundlage unserer berechtigten
                            Interessen (d.h. Interesse am wirtschaftlichem
                            Betrieb unseres Onlineangebotes im Sinne des Art. 6
                            Abs. 1 lit. f. DSGVO) Teilnehmer des
                            Partnerprogramms von Amazon EU, das zur
                            Bereitstellung eines Mediums für Websites konzipiert
                            wurde, mittels dessen durch die Platzierung von
                            Werbeanzeigen und Links zu Amazon.de
                            Werbekostenerstattung verdient werden kann (sog.
                            Affiliate-System). D.h. als Amazon-Partner verdienen
                            wir an qualifizierten Käufen.
                            <br />
                            <br />
                            Amazon setzt Cookies ein, um die Herkunft der
                            Bestellungen nachvollziehen zu können. Unter anderem
                            kann Amazon erkennen, dass Sie den Partnerlink auf
                            dieser Website geklickt und anschließend ein Produkt
                            bei Amazon erworben haben.
                            <br />
                            <br />
                            Weitere Informationen zur Datennutzung durch Amazon
                            und Widerspruchsmöglichkeiten erhalten Sie in der
                            Datenschutzerklärung des Unternehmens:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
                            >
                                https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
                            </a>
                            .<br />
                            <br />
                            Hinweis: Amazon und das Amazon-Logo sind
                            Warenzeichen von Amazon.com, Inc. oder eines seiner
                            verbundenen Unternehmen.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-comments">Kommentare und Beiträge</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wenn Nutzer Kommentare oder sonstige Beiträge
                            hinterlassen, können ihre IP-Adressen auf Grundlage
                            unserer berechtigten Interessen im Sinne des Art. 6
                            Abs. 1 lit. f. DSGVO für 7 Tage gespeichert werden.
                            Das erfolgt zu unserer Sicherheit, falls jemand in
                            Kommentaren und Beiträgen widerrechtliche Inhalte
                            hinterlässt (Beleidigungen, verbotene politische
                            Propaganda, etc.). In diesem Fall können wir selbst
                            für den Kommentar oder Beitrag belangt werden und
                            sind daher an der Identität des Verfassers
                            interessiert.
                            <br />
                            <br />
                            Des Weiteren behalten wir uns vor, auf Grundlage
                            unserer berechtigten Interessen gem. Art. 6 Abs. 1
                            lit. f. DSGVO, die Angaben der Nutzer zwecks
                            Spamerkennung zu verarbeiten.
                            <br />
                            <br />
                            Auf derselben Rechtsgrundlage behalten wir uns vor,
                            im Fall von Umfragen die IP-Adressen der Nutzer für
                            deren Dauer zu speichern und Cookies zu verwenden,
                            um Mehrfachabstimmungen zu vermeiden.
                            <br />
                            <br />
                            Die im Rahmen der Kommentare und Beiträge
                            mitgeteilte Informationen zur Person, etwaige
                            Kontakt- sowie Websiteinformationen als auch die
                            inhaltlichen Angaben, werden von uns bis zum
                            Widerspruch der Nutzer dauerhaft gespeichert.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-subscribetocomments">Kommentarabonnements</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Die Nachfolgekommentare können durch Nutzer mit
                            deren Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO
                            abonniert werden. Die Nutzer erhalten eine
                            Bestätigungsemail, um zu überprüfen, ob sie der
                            Inhaber der eingegebenen Emailadresse sind. Nutzer
                            können laufende Kommentarabonnements jederzeit
                            abbestellen. Die Bestätigungsemail wird Hinweise zu
                            den Widerrufsmöglichkeiten enthalten. Für die Zwecke
                            des Nachweises der Einwilligung der Nutzer,
                            speichern wir den Anmeldezeitpunkt nebst der
                            IP-Adresse der Nutzer und löschen diese
                            Informationen, wenn Nutzer sich von dem Abonnement
                            abmelden.
                            <br />
                            <br />
                            Sie können den Empfang unseres Abonnements jederzeit
                            kündigen, d.h. Ihre Einwilligungen widerrufen. Wir
                            können die ausgetragenen E-Mailadressen bis zu drei
                            Jahren auf Grundlage unserer berechtigten Interessen
                            speichern bevor wir sie löschen, um eine ehemals
                            gegebene Einwilligung nachweisen zu können. Die
                            Verarbeitung dieser Daten wird auf den Zweck einer
                            möglichen Abwehr von Ansprüchen beschränkt. Ein
                            individueller Löschungsantrag ist jederzeit möglich,
                            sofern zugleich das ehemalige Bestehen einer
                            Einwilligung bestätigt wird.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-gravatar">
                        Abruf von Profilbildern bei Gravatar
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir setzen innerhalb unseres Onlineangebotes und
                            insbesondere im Blog den Dienst Gravatar der
                            Automattic Inc., 60 29th Street #343, San Francisco,
                            CA 94110, USA, ein.
                            <br />
                            <br />
                            Gravatar ist ein Dienst, bei dem sich Nutzer
                            anmelden und Profilbilder und ihre E-Mailadressen
                            hinterlegen können. Wenn Nutzer mit der jeweiligen
                            E-Mailadresse auf anderen Onlinepräsenzen (vor allem
                            in Blogs) Beiträge oder Kommentare hinterlassen,
                            können so deren Profilbilder neben den Beiträgen
                            oder Kommentaren dargestellt werden. Hierzu wird die
                            von den Nutzern mitgeteilte E-Mailadresse an
                            Gravatar zwecks Prüfung, ob zu ihr ein Profil
                            gespeichert ist, verschlüsselt übermittelt. Dies ist
                            der einzige Zweck der Übermittlung der E-Mailadresse
                            und sie wird nicht für andere Zwecke verwendet,
                            sondern danach gelöscht.
                            <br />
                            <br />
                            Die Nutzung von Gravatar erfolgt auf Grundlage
                            unserer berechtigten Interessen im Sinne des Art. 6
                            Abs. 1 lit. f) DSGVO, da wir mit Hilfe von Gravatar
                            den Beitrags- und Kommentarverfassern die
                            Möglichkeit bieten ihre Beiträge mit einem
                            Profilbild zu personalisieren.
                            <br />
                            <br />
                            Durch die Anzeige der Bilder bringt Gravatar die
                            IP-Adresse der Nutzer in Erfahrung, da dies für eine
                            Kommunikation zwischen einem Browser und einem
                            Onlineservice notwendig ist. Nähere Informationen
                            zur Erhebung und Nutzung der Daten durch Gravatar
                            finden sich in den Datenschutzhinweisen von
                            Automattic:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://automattic.com/privacy/"
                            >
                                https://automattic.com/privacy/
                            </a>
                            .<br />
                            <br />
                            Wenn Nutzer nicht möchten, dass ein mit Ihrer
                            E-Mail-Adresse bei Gravatar verknüpftes Benutzerbild
                            in den Kommentaren erscheint, sollten Sie zum
                            Kommentieren eine E-Mail-Adresse nutzen, welche
                            nicht bei Gravatar hinterlegt ist. Wir weisen ferner
                            darauf hin, dass es auch möglich ist eine anonyme
                            oder gar keine E-Mailadresse zu verwenden, falls die
                            Nutzer nicht wünschen, dass die eigene E-Mailadresse
                            an Gravatar übersendet wird. Nutzer können die
                            Übertragung der Daten komplett verhindern, indem Sie
                            unser Kommentarsystem nicht nutzen.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-musicpodcast-soundcloud">Soundcloud</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Unsere Podcasts werden auf der Plattform
                            „Soundcloud“, angeboten von SoundCloud Limited,
                            Rheinsberger Str. 76/77, 10115 Berlin, Deutschland
                            gespeichert und werden von dieser aus Platform
                            wiedergegeben.
                            <br />
                            <br />
                            Zu diesem Zweck binden wir sog. Soundcloud-Widgets
                            in unsere Website ein. Dabei handelt es sich um
                            Abspielsoftware, mit der Nutzer die Podcasts
                            abspielen können. Hierbei kann Soundcloud messen,
                            welche Podcasts in welchem Umfang gehört werden und
                            diese Information pseudonym für statistische und
                            betriebswirtschaftliche Zwecke verarbeiten. Hierzu
                            können Cookies in den Browsern der Nuzer gespeichert
                            und zwecks Bildung von Nutzerprofilen, z.B. für
                            Zwecke der Ausgabee von Anzeigen, die den
                            potentiellen Interessen der Nutzer entsprechen,
                            verarbeitet werden. Im Fall von Nutzern, die bei
                            Soundcloud registriert sind, kann Soundcloud die
                            Hörinformationen deren Profilen zuordnen.
                            <br />
                            <br />
                            Die Nutzung erfolgt auf Grundlage unserer
                            berechtigten Interessen, d.h. Interesse an einer
                            sicheren und effizienten Bereitstellung, Analyse
                            sowie Optimierung unseres Audioangebotes gem. Art. 6
                            Abs. 1 lit. f. DSGVO. <br />
                            <br />
                            Weitere Informationen und Widerspruchsmöglichkeiten
                            finden sich in der Datenschutzerklärung von
                            Soundcloud:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://soundcloud.com/pages/privacy"
                            >
                                https://soundcloud.com/pages/privacy
                            </a>
                            .
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-contact">Kontaktaufnahme</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Bei der Kontaktaufnahme mit uns (z.B. per
                            Kontaktformular, E-Mail, Telefon oder via sozialer
                            Medien) werden die Angaben des Nutzers zur
                            Bearbeitung der Kontaktanfrage und deren Abwicklung
                            gem. Art. 6 Abs. 1 lit. b. (im Rahmen
                            vertraglicher-/vorvertraglicher Beziehungen), Art. 6
                            Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet..
                            Die Angaben der Nutzer können in einem
                            Customer-Relationship-Management System (&quot;CRM
                            System&quot;) oder vergleichbarer
                            Anfragenorganisation gespeichert werden.
                            <br />
                            <br />
                            Wir löschen die Anfragen, sofern diese nicht mehr
                            erforderlich sind. Wir überprüfen die
                            Erforderlichkeit alle zwei Jahre; Ferner gelten die
                            gesetzlichen Archivierungspflichten.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-whatsapp">
                        Kommunikation via WhatsApp-Messenger
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir setzen zu Zwecken der Kommunikation den
                            WhatsApp-Messenger ein und bitten Sie die
                            nachfolgenden Hinweise zu der Funktionsfähigkeit,
                            der Verschlüsselung, Risiken von WhatsApp, Nutzung
                            der Metadaten innerhalb der
                            Facebook-Unternehmensgruppe und Ihren
                            Widerspruchsmöglichkeiten zu beachten.
                            <br />
                            <br />
                            Sie müssen WhatsApp nicht nutzen und können uns auf
                            alternativen Wegen, z.B. via Telefon oder E-Mail
                            kontaktieren. Bitte nutzen Sie die Ihnen
                            mitgeteilten Kontaktmöglichkeiten oder nutzen die
                            angegebenen Kontaktmöglichkeiten auf unserer
                            Webseite.
                            <br />
                            Bei WhatsApp (WhatsApp Inc. WhatsApp Legal 1601
                            Willow Road Menlo Park, California 94025, USA)
                            handelt es sich um einen US-Amerikanischen Dienst,
                            was bedeutet, dass die von Ihnen via WhatsApp
                            übersandten Daten zuerst an WhatsApp in die USA
                            übermittelt werden können, bevor sie uns zugeleitet
                            werden.
                            <br />
                            <br />
                            WhatsApp ist jedoch unter dem
                            Privacy-Shield-Abkommen zertifiziert und sichert
                            daher zu, das europäische und das schweizer
                            Datenschutzrecht einzuhalten (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.privacyshield.gov/participant?id=a2zt0000000TSnwAAG&amp;status=Active"
                            >
                                https://www.privacyshield.gov/participant?id=a2zt0000000TSnwAAG&amp;status=Active
                            </a>
                            ).
                            <br />
                            WhatsApp sichert ebenfalls zu, dass die
                            Kommunikationsinhalte (d.h. der Inhalt Ihrer
                            Nachricht und angehängte Bilder) Ende-zu-Ende
                            verschlüsselt werden. Das bedeutet, dass der Inhalt
                            der Nachrichten nicht einsehbar ist, nicht einmal
                            durch WhatsApp selbst. Sie sollten immer eine
                            aktuelle Version von WhatsApp nutzen, damit die
                            Verschlüsselung der Nachrichteninhalte
                            sichergestellt ist.
                            <br />
                            <br />
                            Wir weisen unsere Kommunikationspartner jedoch
                            darauf hin, dass WhatsApp zwar nicht den Inhalt
                            sehen, aber in Erfahrung bringen kann, dass und wann
                            Kommunikationspartner mit uns kommunizieren sowie
                            technische Informationen zum verwendeten Gerät der
                            Kommunikationspartner und je nach Einstellungen
                            ihres Gerätes auch Standortinformationen (sog.
                            Metadaten) verarbeitet. Bis auf die verschlüsselten
                            Inhalte, ist eine Übermittlung der Daten der
                            Kommunikationspartner innerhalb der
                            Facebook-Unternehmensgruppe, insbesondere zu Zwecken
                            der Optimierung der jeweiligen Dienste und Zwecken
                            der Sicherheit, möglich. Ebenfalls sollten
                            Kommunikationspartner, zumindest solange sie dem
                            nicht widersprochen haben, davon ausgehen, dass ihre
                            von WhatsApp verarbeiteten Daten für Zwecke des
                            Marketings oder Anzeige auf Nutzer zugeschnittener
                            Werbung verwendet werden können.
                            <br />
                            <br />
                            Sofern wir Kommunikationspartner um eine
                            Einwilligung vor der Kommunikation mit ihnen via
                            WhatsApp bitten, ist die Rechtsgrundlage unserer
                            Verarbeitung ihrer Daten Art. 6 Abs. 1 lit. a.
                            DSGVO. Im Übrigen, falls wir nicht um eine
                            Einwilligung bitten und sie z.B. von sich aus
                            Kontakt mit uns aufnehmen, nutzen wir WhatsApp im
                            Verhältnis zu unseren Vertragspartnern sowie im
                            Rahmen der Vertragsanbahnung als eine vertragliche
                            Maßnahme gem. Art. 6 Abs. 1 lit. b. DSGVO und im
                            Fall anderer Interessenten und Kommunikationspartner
                            auf Grundlage unserer berechtigten Interessen an
                            einer schnellen und effizienten Kommunikation und
                            Erfüllung der Bedürfnisse unser
                            Kommunikationspartner an der Kommunikation via
                            Messengern gem. Art. 6 Abs. 1 lit. f. DSGVO.
                            <br />
                            <br />
                            Weitere Angaben zu Zwecken, Arten und Umfang der
                            Verarbeitung Ihrer Daten durch WhatsApp, sowie die
                            diesbezüglichen Rechte und Einstellungsmöglichkeiten
                            zum Schutz Ihrer Privatsphäre, können Sie den
                            Datenschutzhinweisen von WhatsApp entnehmen:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.whatsapp.com/legal"
                            >
                                https://www.whatsapp.com/legal
                            </a>
                            .<br />
                            <br />
                            Sie können der Kommunikation mit uns via WhatsApp
                            jederzeit widersprechen. Im Fall des Abonnements von
                            Nachrichten (auch bekannt als „Broadcasts“) über
                            WhatsApp können Sie unsere entsprechende
                            Telefonnummer aus deren Kontakten löschen sowie uns
                            zur Austragung Ihres Kontaktes aus unserem
                            Verzeichnis auffordern. Bei laufenden individuellen
                            Anfragen oder Kommunikationen, können Sie uns
                            ebenfalls auffordern, die Kommunikation nicht über
                            WhatsApp fortzusetzen sowie die
                            Kommunikationsinhalte zu löschen. <br />
                            <br />
                            Im Fall der Kommunikation via WhatsApp löschen wir
                            die WhatsApp-Nachrichten, sobald wir davon ausgehen
                            können, etwaige Auskünfte der Nutzer beantwortet zu
                            haben, wenn kein Rückbezug auf eine vorhergehende
                            Konversation zu erwarten ist und der Löschung keine
                            gesetzlichen Aufbewahrungspflichten entgegenstehen.
                            <br />
                            <br />
                            Ferner weisen wir Sie darauf hin, dass wir die uns
                            mitgeteilten Kontaktdaten ohne Ihre Einwilligung
                            nicht an WhatsApp übermitteln (z.B., durch eine von
                            uns ausgehende Kontaktaufnahme mit Ihnen via
                            WhatsApp).
                            <br />
                            <br />
                            Zum Abschluss möchten wir darauf hinweisen, dass wir
                            uns aus Gründen Ihrer Sicherheit vorbehalten,
                            Anfragen über WhatsApp nicht zu beantworten. Das ist
                            der Fall, wenn z.B. Vertragsinterna besonderer
                            Geheimhaltung bedürfen oder eine Antwort über den
                            Messenger den formellen Ansprüchen nicht genügt. In
                            solchen Fällen verweisen wir Sie auf adäquatere
                            Kommunikationswege.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-newsletter-de">Newsletter</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Mit den nachfolgenden Hinweisen informieren wir Sie
                            über die Inhalte unseres Newsletters sowie das
                            Anmelde-, Versand- und das statistische
                            Auswertungsverfahren sowie Ihre Widerspruchsrechte
                            auf. Indem Sie unseren Newsletter abonnieren,
                            erklären Sie sich mit dem Empfang und den
                            beschriebenen Verfahren einverstanden.
                            <br />
                            <br />
                            Inhalt des Newsletters: Wir versenden Newsletter,
                            E-Mails und weitere elektronische Benachrichtigungen
                            mit werblichen Informationen (nachfolgend
                            „Newsletter“) nur mit der Einwilligung der Empfänger
                            oder einer gesetzlichen Erlaubnis. Sofern im Rahmen
                            einer Anmeldung zum Newsletter dessen Inhalte
                            konkret umschrieben werden, sind sie für die
                            Einwilligung der Nutzer maßgeblich. Im Übrigen
                            enthalten unsere Newsletter Informationen zu unseren
                            Leistungen und uns.
                            <br />
                            <br />
                            Double-Opt-In und Protokollierung: Die Anmeldung zu
                            unserem Newsletter erfolgt in einem sog.
                            Double-Opt-In-Verfahren. D.h. Sie erhalten nach der
                            Anmeldung eine E-Mail, in der Sie um die Bestätigung
                            Ihrer Anmeldung gebeten werden. Diese Bestätigung
                            ist notwendig, damit sich niemand mit fremden
                            E-Mailadressen anmelden kann. Die Anmeldungen zum
                            Newsletter werden protokolliert, um den
                            Anmeldeprozess entsprechend den rechtlichen
                            Anforderungen nachweisen zu können. Hierzu gehört
                            die Speicherung des Anmelde- und des
                            Bestätigungszeitpunkts, als auch der IP-Adresse.
                            Ebenso werden die Änderungen Ihrer bei dem
                            Versanddienstleister gespeicherten Daten
                            protokolliert.
                            <br />
                            <br />
                            Anmeldedaten: Um sich für den Newsletter anzumelden,
                            reicht es aus, wenn Sie Ihre E-Mailadresse angeben.
                            Optional bitten wir Sie einen Namen, zwecks
                            persönlicher Ansprache im Newsletters anzugeben.
                            <br />
                            <br />
                            Der Versand des Newsletters und die mit ihm
                            verbundene Erfolgsmessung erfolgen auf Grundlage
                            einer Einwilligung der Empfänger gem. Art. 6 Abs. 1
                            lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2 Nr. 3 UWG oder
                            falls eine Einwilligung nicht erforderlich ist, auf
                            Grundlage unserer berechtigten Interessen am
                            Direktmarketing gem. Art. 6 Abs. 1 lt. f. DSGVO
                            i.V.m. § 7 Abs. 3 UWG. <br />
                            <br />
                            Die Protokollierung des Anmeldeverfahrens erfolgt
                            auf Grundlage unserer berechtigten Interessen gem.
                            Art. 6 Abs. 1 lit. f DSGVO. Unser Interesse richtet
                            sich auf den Einsatz eines nutzerfreundlichen sowie
                            sicheren Newslettersystems, das sowohl unseren
                            geschäftlichen Interessen dient, als auch den
                            Erwartungen der Nutzer entspricht und uns ferner den
                            Nachweis von Einwilligungen erlaubt.
                            <br />
                            <br />
                            Kündigung/Widerruf - Sie können den Empfang unseres
                            Newsletters jederzeit kündigen, d.h. Ihre
                            Einwilligungen widerrufen. Einen Link zur Kündigung
                            des Newsletters finden Sie am Ende eines jeden
                            Newsletters. Wir können die ausgetragenen
                            E-Mailadressen bis zu drei Jahren auf Grundlage
                            unserer berechtigten Interessen speichern bevor wir
                            sie löschen, um eine ehemals gegebene Einwilligung
                            nachweisen zu können. Die Verarbeitung dieser Daten
                            wird auf den Zweck einer möglichen Abwehr von
                            Ansprüchen beschränkt. Ein individueller
                            Löschungsantrag ist jederzeit möglich, sofern
                            zugleich das ehemalige Bestehen einer Einwilligung
                            bestätigt wird.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-newsletter-provider-general">
                        Newsletter - Versanddienstleister
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Der Versand der Newsletter erfolgt mittels des
                            Versanddienstleisters [NAME, ADRESSE, LAND]. Die
                            Datenschutzbestimmungen des Versanddienstleisters
                            können Sie hier einsehen: [LINK ZU DEN
                            DATENSCHUTZBESTIMMUNGEN]. Der Versanddienstleister
                            wird auf Grundlage unserer berechtigten Interessen
                            gem. Art. 6 Abs. 1 lit. f. DSGVO und eines
                            Auftragsverarbeitungsvertrages gem. Art. 28 Abs. 3
                            S. 1 DSGVO eingesetzt.
                            <br />
                            <br />
                            Der Versanddienstleister kann die Daten der
                            Empfänger in pseudonymer Form, d.h. ohne Zuordnung
                            zu einem Nutzer, zur Optimierung oder Verbesserung
                            der eigenen Services nutzen, z.B. zur technischen
                            Optimierung des Versandes und der Darstellung der
                            Newsletter oder für statistische Zwecke verwenden.
                            Der Versanddienstleister nutzt die Daten unserer
                            Newsletterempfänger jedoch nicht, um diese selbst
                            anzuschreiben oder um die Daten an Dritte
                            weiterzugeben.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-newsletter-analytics">
                        Newsletter - Erfolgsmessung
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Die Newsletter enthalten einen sog. „web-beacon“,
                            d.h. eine pixelgroße Datei, die beim Öffnen des
                            Newsletters von unserem Server, bzw. sofern wir
                            einen Versanddienstleister einsetzen, von dessen
                            Server abgerufen wird. Im Rahmen dieses Abrufs
                            werden zunächst technische Informationen, wie
                            Informationen zum Browser und Ihrem System, als auch
                            Ihre IP-Adresse und Zeitpunkt des Abrufs erhoben.{" "}
                            <br />
                            <br />
                            Diese Informationen werden zur technischen
                            Verbesserung der Services anhand der technischen
                            Daten oder der Zielgruppen und ihres Leseverhaltens
                            anhand derer Abruforte (die mit Hilfe der IP-Adresse
                            bestimmbar sind) oder der Zugriffszeiten genutzt. Zu
                            den statistischen Erhebungen gehört ebenfalls die
                            Feststellung, ob die Newsletter geöffnet werden,
                            wann sie geöffnet werden und welche Links geklickt
                            werden. Diese Informationen können aus technischen
                            Gründen zwar den einzelnen Newsletterempfängern
                            zugeordnet werden. Es ist jedoch weder unser
                            Bestreben, noch, sofern eingesetzt, das des
                            Versanddienstleisters, einzelne Nutzer zu
                            beobachten. Die Auswertungen dienen uns viel mehr
                            dazu, die Lesegewohnheiten unserer Nutzer zu
                            erkennen und unsere Inhalte auf sie anzupassen oder
                            unterschiedliche Inhalte entsprechend den Interessen
                            unserer Nutzer zu versenden.
                            <br />
                            <br />
                            Ein getrennter Widerruf der Erfolgsmessung ist
                            leider nicht möglich, in diesem Fall muss das
                            gesamte Newsletterabonnement gekündigt werden.{" "}
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-logfiles">
                        Erhebung von Zugriffsdaten und Logfiles
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir, bzw. unser Hostinganbieter, erhebt auf
                            Grundlage unserer berechtigten Interessen im Sinne
                            des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden
                            Zugriff auf den Server, auf dem sich dieser Dienst
                            befindet (sogenannte Serverlogfiles). Zu den
                            Zugriffsdaten gehören Name der abgerufenen Webseite,
                            Datei, Datum und Uhrzeit des Abrufs, übertragene
                            Datenmenge, Meldung über erfolgreichen Abruf,
                            Browsertyp nebst Version, das Betriebssystem des
                            Nutzers, Referrer URL (die zuvor besuchte Seite),
                            IP-Adresse und der anfragende Provider.
                            <br />
                            <br />
                            Logfile-Informationen werden aus Sicherheitsgründen
                            (z.B. zur Aufklärung von Missbrauchs- oder
                            Betrugshandlungen) für die Dauer von maximal 7 Tagen
                            gespeichert und danach gelöscht. Daten, deren
                            weitere Aufbewahrung zu Beweiszwecken erforderlich
                            ist, sind bis zur endgültigen Klärung des jeweiligen
                            Vorfalls von der Löschung ausgenommen.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-cdn-cloudflare">
                        Content-Delivery-Network von Cloudflare
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir setzen ein so genanntes &quot;Content Delivery
                            Network&quot; (CDN), angeboten von Cloudflare, Inc.,
                            101 Townsend St, San Francisco, CA 94107, USA, ein.
                            Cloudflare ist unter dem Privacy-Shield-Abkommen
                            zertifiziert und bietet hierdurch eine Garantie, das
                            europäische Datenschutzrecht einzuhalten (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&amp;status=Active"
                            >
                                https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&amp;status=Active
                            </a>
                            ).
                            <br />
                            <br />
                            Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte
                            unseres Onlineangebotes, insbesondere große
                            Mediendateien, wie Grafiken oder Skripte mit Hilfe
                            regional verteilter und über das Internet
                            verbundener Server, schneller ausgeliefert werden.
                            Die Verarbeitung der Daten der Nutzer erfolgt
                            alleine zu den vorgenannten Zwecken und der
                            Aufrechterhaltung der Sicherheit und
                            Funktionsfähigkeit des CDN.
                            <br />
                            <br />
                            Die Nutzung erfolgt auf Grundlage unserer
                            berechtigten Interessen, d.h. Interesse an einer
                            sicheren und effizienten Bereitstellung, Analyse
                            sowie Optimierung unseres Onlineangebotes gem. Art.
                            6 Abs. 1 lit. f. DSGVO. <br />
                            <br />
                            Weitere Informationen erhalten Sie in der
                            Datenschutzerklärung von Cloudflare:&nbsp;
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.cloudflare.com/security-policy"
                            >
                                https://www.cloudflare.com/security-policy
                            </a>
                            .
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-tracking-tagmanager">Google Tag Manager</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Google Tag Manager ist eine Lösung, mit der wir sog.
                            Website-Tags über eine Oberfläche verwalten können
                            (und so z.B. Google Analytics sowie andere
                            Google-Marketing-Dienste in unser Onlineangebot
                            einbinden). Der Tag Manager selbst (welches die Tags
                            implementiert) verarbeitet keine personenbezogenen
                            Daten der Nutzer. Im Hinblick auf die Verarbeitung
                            der personenbezogenen Daten der Nutzer wird auf die
                            folgenden Angaben zu den Google-Diensten verwiesen.
                            Nutzungsrichtlinien:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.com/intl/de/tagmanager/use-policy.html"
                            >
                                https://www.google.com/intl/de/tagmanager/use-policy.html
                            </a>
                            .<br />
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-ga-googleanalytics">Google Analytics</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir setzen Google Analytics, einen Webanalysedienst
                            der Google Ireland Limited, Gordon House, Barrow
                            Street, Dublin 4, Irland („Google“) ein. Google
                            verwendet Cookies. Die durch das Cookie erzeugten
                            Informationen über Benutzung des Onlineangebotes
                            durch die Nutzer werden in der Regel an einen Server
                            von Google in den USA übertragen und dort
                            gespeichert.
                            <br />
                            <br />
                            Google wird diese Informationen in unserem Auftrag
                            benutzen, um die Nutzung unseres Onlineangebotes
                            durch die Nutzer auszuwerten, um Reports über die
                            Aktivitäten innerhalb dieses Onlineangebotes
                            zusammenzustellen und um weitere, mit der Nutzung
                            dieses Onlineangebotes und der Internetnutzung
                            verbundene Dienstleistungen, uns gegenüber zu
                            erbringen. Dabei können aus den verarbeiteten Daten
                            pseudonyme Nutzungsprofile der Nutzer erstellt
                            werden.
                            <br />
                            <br />
                            Wir setzen Google Analytics nur mit aktivierter
                            IP-Anonymisierung ein. Das bedeutet, die IP-Adresse
                            der Nutzer wird von Google innerhalb von
                            Mitgliedstaaten der Europäischen Union oder in
                            anderen Vertragsstaaten des Abkommens über den
                            Europäischen Wirtschaftsraum gekürzt. Nur in
                            Ausnahmefällen wird die volle IP-Adresse an einen
                            Server von Google in den USA übertragen und dort
                            gekürzt.
                            <br />
                            <br />
                            Die von dem Browser des Nutzers übermittelte
                            IP-Adresse wird nicht mit anderen Daten von Google
                            zusammengeführt. Die Nutzer können die Speicherung
                            der Cookies durch eine entsprechende Einstellung
                            ihrer Browser-Software verhindern; die Nutzer können
                            darüber hinaus die Erfassung der durch das Cookie
                            erzeugten und auf ihre Nutzung des Onlineangebotes
                            bezogenen Daten an Google sowie die Verarbeitung
                            dieser Daten durch Google verhindern, indem sie das
                            unter folgendem Link verfügbare Browser-Plugin
                            herunterladen und installieren:&nbsp;
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                            >
                                http://tools.google.com/dlpage/gaoptout?hl=de
                            </a>
                            .<br />
                            <br />
                            Sofern wir die Nutzer um eine Einwilligung bitten
                            (z.B. im Rahmen einer Cookie-Einwilligung), ist die
                            Rechtsgrundlage dieser Verarbeitung Art. 6 Abs. 1
                            lit. a. DSGVO. Ansonsten werden die
                            personenbezogenen Daten der Nutzer auf Grundlage
                            unserer berechtigten Interessen (d.h. Interesse an
                            der Analyse, Optimierung und wirtschaftlichem
                            Betrieb unseres Onlineangebotes im Sinne des Art. 6
                            Abs. 1 lit. f. DSGVO) verarbeitet.
                            <br />
                            <br />
                            Soweit Daten in den USA verarbeitet werden, weisen
                            wir daraufhin, dass Google unter dem
                            Privacy-Shield-Abkommen zertifiziert ist und
                            hierdurch zusichert, das europäische
                            Datenschutzrecht einzuhalten (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active"
                            >
                                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active
                            </a>
                            ).
                            <br />
                            <br />
                            Weitere Informationen zur Datennutzung durch Google,
                            Einstellungs- und Widerspruchsmöglichkeiten,
                            erfahren Sie in der Datenschutzerklärung von Google
                            (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://policies.google.com/privacy"
                            >
                                https://policies.google.com/privacy
                            </a>
                            ) sowie in den Einstellungen für die Darstellung von
                            Werbeeinblendungen durch Google{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://adssettings.google.com/authenticated"
                            >
                                (https://adssettings.google.com/authenticated
                            </a>
                            ).
                            <br />
                            <br />
                            Die personenbezogenen Daten der Nutzer werden nach
                            14 Monaten gelöscht oder anonymisiert.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-ga-universal">Google Universal Analytics</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir setzen Google Analytics in der Ausgestaltung als
                            „
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://support.google.com/analytics/answer/2790010?hl=de&amp;ref_topic=6010376"
                            >
                                Universal-Analytics
                            </a>
                            “ ein. „Universal Analytics“ bezeichnet ein
                            Verfahren von Google Analytics, bei dem die
                            Nutzeranalyse auf Grundlage einer pseudonymen
                            Nutzer-ID erfolgt und damit ein pseudonymes Profil
                            des Nutzers mit Informationen aus der Nutzung
                            verschiedener Geräten erstellt wird (sog.
                            „Cross-Device-Tracking“).
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-ga-audiences">
                        Zielgruppenbildung mit Google Analytics
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir setzen Google Analytics ein, um die durch
                            innerhalb von Werbediensten Googles und seiner
                            Partner geschalteten Anzeigen, nur solchen Nutzern
                            anzuzeigen, die auch ein Interesse an unserem
                            Onlineangebot gezeigt haben oder die bestimmte
                            Merkmale (z.B. Interessen an bestimmten Themen oder
                            Produkten, die anhand der besuchten Webseiten
                            bestimmt werden) aufweisen, die wir an Google
                            übermitteln (sog. „Remarketing-“, bzw.
                            „Google-Analytics-Audiences“). Mit Hilfe der
                            Remarketing Audiences möchten wir auch
                            sicherstellen, dass unsere Anzeigen dem potentiellen
                            Interesse der Nutzer entsprechen.
                            <br />
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-matomo">Reichweitenmessung mit Matomo</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Im Rahmen der Reichweitenanalyse von Matomo werden
                            die folgenden Daten verarbeitet: der von Ihnen
                            verwendete Browsertyp und die Browserversion, das
                            von Ihnen verwendete Betriebssystem, Ihr
                            Herkunftsland, Datum und Uhrzeit der Serveranfrage,
                            die Anzahl der Besuche, Ihre Verweildauer auf der
                            Website sowie die von Ihnen betätigten externen
                            Links. Die IP-Adresse der Nutzer wird anonymisiert,
                            bevor sie gespeichert wird. <br />
                            <br />
                            Matomo verwendet Cookies, die auf dem Computer der
                            Nutzer gespeichert werden und die eine Analyse der
                            Benutzung unseres Onlineangebotes durch die Nutzer
                            ermöglichen. Dabei können aus den verarbeiteten
                            Daten pseudonyme Nutzungsprofile der Nutzer erstellt
                            werden. Die Cookies haben eine Speicherdauer von
                            einer Woche. Die durch das Cookie erzeugten
                            Informationen über Ihre Benutzung dieser Webseite
                            werden nur auf unserem Server gespeichert und nicht
                            an Dritte weitergegeben.
                            <br />
                            <br />
                            Nutzer können der anonymisierten Datenerhebung durch
                            das Programm Matomo jederzeit mit Wirkung für die
                            Zukunft widersprechen, indem sie auf den
                            untenstehenden Link klicken. In diesem Fall wird in
                            ihrem Browser ein sog. Opt-Out-Cookie abgelegt, was
                            zur Folge hat, dass Matomo keinerlei Sitzungsdaten
                            mehr erhebt. Wenn Nutzer ihre Cookies löschen, so
                            hat dies jedoch zur Folge, dass auch das
                            Opt-Out-Cookie gelöscht wird und daher von den
                            Nutzern erneut aktiviert werden muss.
                            <br />
                            <br />
                            Die Logs mit den Daten der Nutzer werden nach
                            spätestens 6 Monaten gelöscht.
                            <br />
                            <br />
                            Sofern wir die Nutzer um eine Einwilligung bitten
                            (z.B. im Rahmen einer Cookie-Einwilligung), ist die
                            Rechtsgrundlage dieser Verarbeitung Art. 6 Abs. 1
                            lit. a. DSGVO. Ansonsten werden die
                            personenbezogenen Daten der Nutzer auf Grundlage
                            unserer berechtigten Interessen (d.h. Interesse an
                            der Analyse, Optimierung und wirtschaftlichem
                            Betrieb unseres Onlineangebotes im Sinne des Art. 6
                            Abs. 1 lit. f. DSGVO) verarbeitet.
                            <br />
                            <br />
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-einleitung">
                        Einbindung von Diensten und Inhalten Dritter
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir setzen innerhalb unseres Onlineangebotes auf
                            Grundlage unserer berechtigten Interessen (d.h.
                            Interesse an der Analyse, Optimierung und
                            wirtschaftlichem Betrieb unseres Onlineangebotes im
                            Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder
                            Serviceangebote von Drittanbietern ein, um deren
                            Inhalte und Services, wie z.B. Videos oder
                            Schriftarten einzubinden (nachfolgend einheitlich
                            bezeichnet als “Inhalte”). <br />
                            <br />
                            Dies setzt immer voraus, dass die Drittanbieter
                            dieser Inhalte, die IP-Adresse der Nutzer
                            wahrnehmen, da sie ohne die IP-Adresse die Inhalte
                            nicht an deren Browser senden könnten. Die
                            IP-Adresse ist damit für die Darstellung dieser
                            Inhalte erforderlich. Wir bemühen uns nur solche
                            Inhalte zu verwenden, deren jeweilige Anbieter die
                            IP-Adresse lediglich zur Auslieferung der Inhalte
                            verwenden. Drittanbieter können ferner so genannte
                            Pixel-Tags (unsichtbare Grafiken, auch als &quot;Web
                            Beacons&quot; bezeichnet) für statistische oder
                            Marketingzwecke verwenden. Durch die
                            &quot;Pixel-Tags&quot; können Informationen, wie der
                            Besucherverkehr auf den Seiten dieser Website
                            ausgewertet werden. Die pseudonymen Informationen
                            können ferner in Cookies auf dem Gerät der Nutzer
                            gespeichert werden und unter anderem technische
                            Informationen zum Browser und Betriebssystem,
                            verweisende Webseiten, Besuchszeit sowie weitere
                            Angaben zur Nutzung unseres Onlineangebotes
                            enthalten, als auch mit solchen Informationen aus
                            anderen Quellen verbunden werden.
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-vimeo">Vimeo</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir können die Videos der Plattform
                            &quot;Vimeo&quot; des Anbieters Vimeo Inc.,
                            Attention: Legal Department, 555 West 18th Street
                            New York, New York 10011, USA, einbinden.
                            Datenschutzerklärung:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://vimeo.com/privacy"
                            >
                                https://vimeo.com/privacy
                            </a>
                            . Wir weisen darauf hin, dass Vimeo Google Analytics
                            einsetzen kann und verweisen hierzu auf die
                            Datenschutzerklärung (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://policies.google.com/privacy"
                            >
                                https://policies.google.com/privacy
                            </a>
                            ) sowie Opt-Out-Möglichkeiten für Google-Analytics (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                            >
                                http://tools.google.com/dlpage/gaoptout?hl=de
                            </a>
                            ) oder die Einstellungen von Google für die
                            Datennutzung zu Marketingzwecken (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://adssettings.google.com/"
                            >
                                https://adssettings.google.com/
                            </a>
                            ).
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-youtube">Youtube</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir binden die Videos der Plattform
                            &quot;YouTube&quot; des Anbieters Google Ireland
                            Limited, Gordon House, Barrow Street, Dublin 4,
                            Irland, ein. Datenschutzerklärung:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.com/policies/privacy/"
                            >
                                https://www.google.com/policies/privacy/
                            </a>
                            , Opt-Out:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://adssettings.google.com/authenticated"
                            >
                                https://adssettings.google.com/authenticated
                            </a>
                            .
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-googlefonts">Google Fonts</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir binden die Schriftarten (&quot;Google
                            Fonts&quot;) des Anbieters Google Ireland Limited,
                            Gordon House, Barrow Street, Dublin 4, Irland, ein.
                            Nach Angaben von Google werden die Daten der Nutzer
                            allein zu Zwecken der Darstellung der Schriftarten
                            im Browser der Nutzer verwendet. Die Einbindung
                            erfolgt auf Grundlage unserer berechtigten
                            Interessen an einer technisch sicheren,
                            wartungsfreien und effizienten Nutzung von
                            Schriftarten, deren einheitlicher Darstellung sowie
                            Berücksichtigung möglicher lizenzrechtlicher
                            Restriktionen für deren Einbindung.
                            Datenschutzerklärung:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.com/policies/privacy/"
                            >
                                https://www.google.com/policies/privacy/
                            </a>
                            .
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-googlerecaptcha">
                        Google ReCaptcha
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir binden die Funktion zur Erkennung von Bots, z.B.
                            bei Eingaben in Onlineformularen
                            (&quot;ReCaptcha&quot;) des Anbieters GGoogle
                            Ireland Limited, Gordon House, Barrow Street, Dublin
                            4, Irland, ein. Datenschutzerklärung:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.com/policies/privacy/"
                            >
                                https://www.google.com/policies/privacy/
                            </a>
                            , Opt-Out:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://adssettings.google.com/authenticated"
                            >
                                https://adssettings.google.com/authenticated
                            </a>
                            .
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-googlemaps">Google Maps</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir binden die Landkarten des Dienstes “Google Maps”
                            des Anbieters Google Ireland Limited, Gordon House,
                            Barrow Street, Dublin 4, Irland, ein. Zu den
                            verarbeiteten Daten können insbesondere IP-Adressen
                            und Standortdaten der Nutzer gehören, die jedoch
                            nicht ohne deren Einwilligung (im Regelfall im
                            Rahmen der Einstellungen ihrer Mobilgeräte
                            vollzogen), erhoben werden. Die Daten können in den
                            USA verarbeitet werden. Datenschutzerklärung:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.com/policies/privacy/"
                            >
                                https://www.google.com/policies/privacy/
                            </a>
                            , Opt-Out:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://adssettings.google.com/authenticated"
                            >
                                https://adssettings.google.com/authenticated
                            </a>
                            .
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-openstreetmap">OpenStreetMap</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir binden die Landkarten des Dienstes
                            &quot;OpenStreetMap&quot; ein (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.openstreetmap.de"
                            >
                                https://www.openstreetmap.de
                            </a>
                            ), die auf Grundlage der Open Data Commons Open
                            Database Lizenz (ODbL) durch die OpenStreetMap
                            Foundation (OSMF) angeboten werden.
                            Datenschutzerklärung:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://wiki.openstreetmap.org/wiki/Privacy_Policy"
                            >
                                https://wiki.openstreetmap.org/wiki/Privacy_Policy
                            </a>
                            . <br />
                            <br />
                            Nach unserer Kenntnis werden die Daten der Nutzer
                            durch OpenStreetMap ausschließlich zu Zwecken der
                            Darstellung der Kartenfunktionen und
                            Zwischenspeicherung der gewählten Einstellungen
                            verwendet. Zu diesen Daten können insbesondere
                            IP-Adressen und Standortdaten der Nutzer gehören,
                            die jedoch nicht ohne deren Einwilligung (im
                            Regelfall im Rahmen der Einstellungen ihrer
                            Mobilgeräte vollzogen), erhoben werden. <br />
                            <br />
                            Die Daten können in den USA verarbeitet werden.
                            Weitere Informationen können Sie der
                            Datenschutzerklärung von OpenStreetMap entnehmen:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://wiki.openstreetmap.org/wiki/Privacy_Policy"
                            >
                                https://wiki.openstreetmap.org/wiki/Privacy_Policy
                            </a>
                            .
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-typekit">
                        Typekit-Schriftarten von Adobe
                    </h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Wir setzen&nbsp;auf Grundlage unserer berechtigten
                            Interessen (d.h. Interesse an der Analyse,
                            Optimierung und wirtschaftlichem Betrieb unseres
                            Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f.
                            DSGVO) externe &quot;Typekit&quot;-Schriftarten des
                            Anbieters&nbsp;Adobe Systems Software Ireland
                            Limited, 4-6 Riverwalk, Citywest Business Campus,
                            Dublin 24, Republic of Ireland ein.&nbsp;Adobe ist
                            unter dem Privacy-Shield-Abkommen zertifiziert und
                            bietet hierdurch eine Garantie, das europäische
                            Datenschutzrecht einzuhalten
                            (https://www.privacyshield.gov/participant?id=a2zt0000000TNo9AAG&amp;status=Active).
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-twitter">Twitter</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Innerhalb unseres Onlineangebotes können Funktionen
                            und Inhalte des Dienstes Twitter, angeboten durch
                            die Twitter Inc., 1355 Market Street, Suite 900, San
                            Francisco, CA 94103, USA, eingebunden werden. Hierzu
                            können z.B. Inhalte wie Bilder, Videos oder Texte
                            und Schaltflächen gehören, mit denen Nutzer Inhalte
                            dieses Onlineangebotes innerhalb von Twitter teilen
                            können.
                            <br />
                            Sofern die Nutzer Mitglieder der Plattform Twitter
                            sind, kann Twitter den Aufruf der o.g. Inhalte und
                            Funktionen den dortigen Profilen der Nutzer
                            zuordnen. Twitter ist unter dem
                            Privacy-Shield-Abkommen zertifiziert und bietet
                            hierdurch eine Garantie, das europäische
                            Datenschutzrecht einzuhalten (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active"
                            >
                                https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&amp;status=Active
                            </a>
                            ). Datenschutzerklärung:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/de/privacy"
                            >
                                https://twitter.com/de/privacy
                            </a>
                            , Opt-Out:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/personalization"
                            >
                                https://twitter.com/personalization
                            </a>
                            .
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-instagram">Instagram</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Innerhalb unseres Onlineangebotes können Funktionen
                            und Inhalte des Dienstes Instagram, angeboten durch
                            die Instagram Inc., 1601 Willow Road, Menlo Park,
                            CA, 94025, USA, eingebunden werden. Hierzu können
                            z.B. Inhalte wie Bilder, Videos oder Texte und
                            Schaltflächen gehören, mit denen Nutzer Inhalte
                            dieses Onlineangebotes innerhalb von Instagram
                            teilen können. Sofern die Nutzer Mitglieder der
                            Plattform Instagram sind, kann Instagram den Aufruf
                            der o.g. Inhalte und Funktionen den dortigen
                            Profilen der Nutzer zuordnen. Datenschutzerklärung
                            von Instagram:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="http://instagram.com/about/legal/privacy/"
                            >
                                http://instagram.com/about/legal/privacy/
                            </a>
                            .{" "}
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-pinterest">Pinterest</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Innerhalb unseres Onlineangebotes können Funktionen
                            und Inhalte des Dienstes Pinterest, angeboten durch
                            die Pinterest Inc., 635 High Street, Palo Alto, CA,
                            94301, USA, eingebunden werden. Hierzu können z.B.
                            Inhalte wie Bilder, Videos oder Texte und
                            Schaltflächen gehören, mit denen Nutzer Inhalte
                            dieses Onlineangebotes innerhalb von Pinterest
                            teilen können. Sofern die Nutzer Mitglieder der
                            Plattform Pinterest sind, kann Pinterest den Aufruf
                            der o.g. Inhalte und Funktionen den dortigen
                            Profilen der Nutzer zuordnen. Datenschutzerklärung
                            von Pinterest:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://about.pinterest.com/de/privacy-policy"
                            >
                                https://about.pinterest.com/de/privacy-policy
                            </a>
                            .{" "}
                        </span>
                    </p>
                    <p></p>
                    <h3 id="dsg-thirdparty-xing">Xing</h3>
                    <p></p>
                    <p>
                        <span className="ts-muster-content">
                            Innerhalb unseres Onlineangebotes können Funktionen
                            und Inhalte des Dienstes Xing, angeboten durch die
                            XING AG, Dammtorstraße 29-32, 20354 Hamburg,
                            Deutschland, eingebunden werden. Hierzu können z.B.
                            Inhalte wie Bilder, Videos oder Texte und
                            Schaltflächen gehören, mit denen Nutzer Inhalte
                            dieses Onlineangebotes innerhalb von Xing teilen
                            können. Sofern die Nutzer Mitglieder der Plattform
                            Xing sind, kann Xing den Aufruf der o.g. Inhalte und
                            Funktionen den dortigen Profilen der Nutzer
                            zuordnen. Datenschutzerklärung von Xing:{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://privacy.xing.com/de/datenschutzerklaerung"
                            >
                                https://privacy.xing.com/de/datenschutzerklaerung
                            </a>
                            .{" "}
                        </span>
                    </p>
                    <a
                        href="https://datenschutz-generator.de"
                        className="dsg1-6"
                        rel="nofollow noreferrer"
                        target="_blank"
                    >
                        Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas
                        Schwenke
                    </a>
                </article>
            </section>
        </Layout>
    );
}
