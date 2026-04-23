export default function TopBar({ onOpenAuth }) {
  return (
    <div className="ed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ed-com-t1-left">
              <ul>
                <li>
                  <a href="#">Address: New Delhi, Delhi NCR, INDIA</a>
                </li>
                <li>
                  <a href="#">Contact: +91-8009-583-477</a>
                </li>
              </ul>
            </div>
            <div className="ed-com-t1-right">
              <ul>
                <li>
                  <a
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenAuth("signin");
                    }}
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenAuth("signup");
                    }}
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
            <div className="ed-com-t1-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
