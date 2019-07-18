import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageBody from "../components/pageBody"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageBody subTitle="About" >
      <p>I'm Steve Roberts and I have a collection of jobs that have variously described me as a Development Team Lead, Senior Developer, UX consultant, Product Manager, Senior Online Designer and plain old Graphic Designer.</p>
      <p>To me, although my job title has changed over the years I still think I'm doing pretty much the same basic thought process - trying to come up with a solution that is going to achieve an objective via the web (or occasionally via a mobile phone or tablet application) that will succeed because it meets the needs of both business _and_ the product customers.</p>
      <p>Sometimes this means I don't even write any code or open Adobe Photoshop or Balsamiq, sometimes I might even advise someone to _not_ create something of their own (or maybe just not yet) or I might just provide them with a strategy or plan of what I think they should do and how I think they can do it with the resources they have available.</p>
      <p>I help solve problems. Sometimes I make visuals, sometimes I write words, sometimes I talk and sometimes I also code.</p>
      <p>Interested in working with me? Get in touch via <a href="https://twitter.com/mbudm" title="Steve Roberts on Twitter">@mbudm</a>.</p>
      <h4>About this site</h4>
      <p>Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on AWS using S3, CloudFront
      and Route53 leveraging the Serverless Framework CLI for deployment. Source available on <a href="https://github.com/mbudm/mbudm.com">Github</a>.
      All content © {new Date().getFullYear()} Steve Roberts.</p>
    </PageBody>
  </Layout>
)

export default AboutPage
