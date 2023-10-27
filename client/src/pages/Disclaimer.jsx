import Divider from "../components/Divider";
const Disclaimer = () => {
  return (
    <>
      <div className="hero py-10 bg-base-200">
        <div className="hero-content text-center flex-col">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold font-serif">Disclaimer </h1>
            <br />
            <div className="text-left">
              <p>
                If you require any more information or have any questions about
                our site's disclaimer, please feel free to contact us by email
                at&nbsp;
                <a href="mailto:contact@vishalmajumdar.me">
                  contact@vishalmajumdar.me
                </a>
                .
              </p>
              <br />
              <h2 className="text-lg font-bold font-serif mb-1">
                Disclaimers for Virtual Vishal
              </h2>
              <p>
                All the information on this website -
                https://virtual-vishal.vercel.app/ - is published in good faith
                and for general information purpose only. Virtual Vishal does
                not make any warranties about the completeness, reliability and
                accuracy of this information. Any action you take upon the
                information you find on this website (Virtual Vishal), is
                strictly at your own risk. Virtual Vishal will not be liable for
                any losses and/or damages in connection with the use of our
                website.
              </p>
              <br />
              <p>
                From our website, you can visit other websites by following
                hyperlinks to such external sites. While we strive to provide
                only quality links to useful and ethical websites, we have no
                control over the content and nature of these sites. These links
                to other websites do not imply a recommendation for all the
                content found on these sites. Site owners and content may change
                without notice and may occur before we have the opportunity to
                remove a link which may have gone 'bad'.
              </p>
              <br />
              <p>
                Please be also aware that when you leave our website, other
                sites may have different privacy policies and terms which are
                beyond our control. Please be sure to check the Privacy Policies
                of these sites as well as their "Terms of Service" before
                engaging in any business or uploading any information.
              </p>
              <br />
              <h2 className="text-lg font-bold font-serif mb-1">Consent</h2>

              <p>
                By using our website, you hereby consent to our disclaimer and
                agree to its terms.
              </p>
              <br />
              <h2 className="text-lg font-bold font-serif mb-1">Update</h2>

              <p>
                Should we update, amend or make any changes to this document,
                those changes will be prominently posted here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Disclaimer;
