import React from 'react';

const Footer = () => (
  <div id="footer" style={{ marginTop: 15, paddingTop: 10, backgroundColor: '#2E2E2E'}}>
    <div id="footer-top" className="container-fluid">
      {/* <div className="row"> */}
        {/* Location */}
        <div className="col-md-3" style={{ height: 300, color: '#fff' }}>
          <h3>Location</h3>
          <p>
            <span style={{ margin: 0, marginBottom: 5, color: '#449d44' }}>โรงพยาบาลมหาราชนครราชสีมา</span>
            <span style={{ color: '#449d44' }}>49 ถ.ช้างเผือก ต.ในเมือง อ.เมือง <br />
            จ.นครราชสีมา 30000</span>
          </p>
        </div>
        {/* Location */}

        {/* Contact */}
        <div className="col-md-3" style={{ height: 300, color: '#fff' }}>
          <h3>Contact</h3>
          <p style={{ color: '#449d44' }}>
            <i className="fa fa-phone-square fa-1x"></i> Tel. 0-4423-5000<br />
            <i className="fa fa-fax fa-1x"></i> Fax. 0-4424-6389<br />
            <i className="fa fa-envelope-square fa-1x"></i> E-mail. maharat@mnrh.go.th
          </p>
        </div>
        {/* Contact */}

        {/* Site map */}
        <div className="col-md-3" style={{ height: 300, color: '#fff' }}>
          <h3>Site map</h3>
          <p>
            <a href="#" style={{ color: '#449d44' }}>เกี่ยวกับเรา</a><br />
            <a href="#" style={{ color: '#449d44' }}>หน่วยงานภายใน</a><br />
            <a href="#" style={{ color: '#449d44' }}>ข้อมูลการให้บริการ</a><br />
            <a href="#" style={{ color: '#449d44' }}>ติดต่อเรา</a><br />
          </p>
        </div>
        {/* Site map */}

        {/* Follow me */}
        <div className="col-md-3" style={{ height: 300, color: '#fff' }}>
          <h3>Follow me</h3>
            <div className="social-container">
              <a href="https://www.facebook.com/Maharat.Korat" target="_blank" style={{ color: '#449d44' }}>
                <i id="social" className="fa fa-facebook-square fa-2x social-fb"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" style={{ color: '#449d44' }}>
                <i id="social" className="fa fa-twitter-square fa-2x social-tw"></i>
              </a>
              <a href="https://www.youtube.com/user/medmutiTV/" target="_blank" style={{ color: '#449d44' }}>
                <i id="social" className="fa fa-youtube-square fa-2x social-gp"></i>
              </a>
            </div>
        </div>
        {/* Follow me */}
      {/* </div> */}
    </div>

    <div id="footer-bottom" className="container-fluid" style={{ backgroundColor: '#000', color: '#fff', height: 80 }}>
      {/* <div className="row"> */}
        <div className="col-md-12" style={{ paddingTop: 10 }}>
          <p className="text-muted credit">
            © ลิขสิทธิ์ถูกต้อง 2559 โรงพยาบาลมหาราชนครราชสีมา <br />
            เวอร์ชั่น 1.0 Create by กลุ่มงานเวชกรรมสังคม<br />
            รองรับการทำงานบน :
            <span style={{ color: '#fff', margin: 0, padding: 0 }}>
              <i className="fa fa-chrome fa-lg" aria-hidden="true"></i>
              <i className="fa fa-firefox fa-lg" aria-hidden="true"></i>
              <i className="fa fa-safari-square fa-lg" aria-hidden="true"></i>
              <i className="fa fa-edge fa-lg" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      {/* </div> */}
    </div>
  </div>
);

export default Footer;