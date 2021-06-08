import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout home className={utilStyles.layout}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Hey, I am Mehul. I am an undergrad studying Btech Computer science.
            I am learning web development at Neogcamp. I like to read blog
            related to technology.{" "}
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blogs</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
      <div className={utilStyles.footer}>
        <div className={utilStyles.social}>
          <a
            href="https://www.github.com/mehulkchaudhari/"
            className={`${utilStyles.github} ${utilStyles.socialLinks}`}
          >
            <FontAwesomeIcon icon={faGithub}  />
          </a>
          <a
            href="https://twitter.com/MehulKChaudhari"
            className={`${utilStyles.twitter} ${utilStyles.socialLinks}`}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehulkchaudhari/"
            className={`${utilStyles.linkedin} ${utilStyles.socialLinks}`}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
