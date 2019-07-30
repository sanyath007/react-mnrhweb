import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({}) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">

      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header">
        {/* <!-- Social media menu (Left side) --> */}
        <a
          id="social-collapse" 
          role="tab" 
          title="Follow Us"
          data-toggle="collapse" 
          data-parent="#accordion"
          data-target="#collapseOne" 
          aria-expanded="true" 
          aria-controls="collapseOne"
          className="nav-btn btn-dark btn-lg accordion-toggle pull-left" 
        >

        </a>
        {/* <!-- Social media menu (Left side) --> */}
        
        {/* <!-- Hamburger menu (Right side) --> */}
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        {/* <a id="menu-toggle" href="#" className="nav-btn btn-dark btn-lg toggle">
            <i className="fa fa-bars" style="color:#fff;"></i>
        </a> */}
        {/* <!-- Hamburger menu (Right side) --> */}

        {/* <!-- To top button (bottom right side) --> */}
        <a id="to-top" className="btn btn-lg btn-inverse" href="#top">
          <span className="sr-only">Toggle to Top Navigation</span>
          <i className="fa fa-chevron-up"></i>
        </a>
        {/* <!-- To top button (bottom right side) --> */}
      </div>
      {/* /.nav-header */}

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div id="navbar" className="collapse navbar-collapse js-navbar-collapse">
          {/* <!-- Pull left menu --> */}
          <ul className="nav navbar-nav navbar-left">
            <Link to="/" className="navbar-brand">
              {/* <!-- <img height="25" width="25" src="dist/img/logo-mnrh.jpg" className="img-responsive pull-left" alt="Responsive image"> --> */}
              { 'กลุ่มงานเวชกรรมสังคม' }
            </Link>

            <li><Link to="/">หน้าหลัก</Link></li>
            {/* <!-- About menu --> */}
            {/* <!-- <li className="dropdown mega-dropdown"> --> */}
            <li className="dropdown dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                เกี่ยวกับเรา <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li><Link to="/about">ประวัติความเป็นมา</Link></li>
                <li><a href="{{ url('/site/structure') }}">โครงสร้างหน่วยงาน</a></li>
                <li><a href="{{ url('/site/vision') }}">วิสัยทัศน์</a></li>
                <li><a href="{{ url('/site/mission') }}">พันธกิจ</a></li>
                <li><a href="{{ url('/site/goal') }}">เข็มมุ่ง</a></li>
                <li className="divider"></li>
                <li><a href="#">พื้นที่ให้บริการ</a></li>
              </ul>
                        {/* <!-- <ul className="dropdown-menu mega-dropdown-menu">
                          <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Men Collection</li>
                                    <div id="menCollection" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <a href="#">
                                                    <img src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 1">
                                                </a>
                                                <h4><small>Summer dress floral prints</small></h4>
                                                <button className="btn btn-primary" type="button">
                                                    49,99 €
                                                </button>
                                                <button href="#" className="btn btn-default" type="button">
                                                    <span className="glyphicon glyphicon-heart"></span> Add to Wishlist
                                                </button>
                                            </div> --> */}
                                            {/* <!-- End Item --> */}
                                            {/* <!-- <div className="item">
                                                <a href="#">
                                                    <img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 2">
                                                </a>
                                                <h4><small>Gold sandals with shiny touch</small></h4>
                                                <button className="btn btn-primary" type="button">
                                                    9,99 €
                                                </button>
                                                <button href="#" className="btn btn-default" type="button">
                                                    <span className="glyphicon glyphicon-heart"></span> Add to Wishlist
                                                </button>
                                            </div> --> */}
                                            {/* <!-- End Item --> */}
                                            {/* <!-- <div className="item">
                                                <a href="#">
                                                    <img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 3">
                                                </a>
                                                <h4><small>Denin jacket stamped</small></h4>
                                                <button className="btn btn-primary" type="button">
                                                    49,99 €
                                                </button>
                                                <button href="#" className="btn btn-default" type="button">
                                                    <span className="glyphicon glyphicon-heart"></span> Add to Wishlist
                                                </button>
                                            </div> --> */}
                                            {/* <!-- End Item --> */}
                                        {/* <!-- </div> --> */}
                                        {/* <!-- End Carousel Inner --> */}

                                        {/* <!-- Controls --> */}
                                        {/* <!-- <a className="left carousel-control" href="#menCollection" role="button" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="#menCollection" role="button" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div> --> */}
                                    {/* <!-- /.carousel --> */}
                                    {/* <!-- <li className="divider"></li>
                                    <li>
                                        <a href="#">View all Collection
                                            <span className="glyphicon glyphicon-chevron-right pull-right"></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Features</li>
                                    <li><a href="#">Auto Carousel</a></li>
                                    <li><a href="#">Carousel Control</a></li>
                                    <li><a href="#">Left & Right Navigation</a></li>
                                    <li><a href="#">Four Columns Grid</a></li>
                                    <li className="divider"></li>
                                    <li className="dropdown-header">Fonts</li>
                                    <li><a href="#">Glyphicon</a></li>
                                    <li><a href="#">Google Fonts</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Plus</li>
                                    <li><a href="#">Navbar Inverse</a></li>
                                    <li><a href="#">Pull Right Elements</a></li>
                                    <li><a href="#">Coloured Headers</a></li>
                                    <li><a href="#">Primary Buttons & Default</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Much more</li>
                                    <li><a href="#">Easy to Customize</a></li>
                                    <li><a href="#">Calls to action</a></li>
                                    <li><a href="#">Custom Fonts</a></li>
                                    <li><a href="#">Slide down on Hover</a></li>
                                </ul>
                            </li>
                        </ul> --> */}
                    </li>
                    {/* <!-- About menu --> */}

                    {/* <!-- Department menu --> */}
                    {/* <!-- <li className="dropdown mega-dropdown"> --> */}
                    <li className="dropdown dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">หน่วยงานภายใน <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#">กลุ่มงานเวชกรรมสังคม</a></li>
                            <li className="divider"></li>
                            <li><a href="#">ศูนย์สุขภาพชุมชนเมือง 1 หัวทะเล</a></li>
                            <li><a href="#">ศูนย์สุขภาพชุมชนเมือง 2 วัดป่าสาละวัน</a></li>
                            <li><a href="#">คลินิกเวชปฎิบัติครอบครัว</a></li>
                            <li><a href="#">ศู่นย์บริการสาธารณสุขคลินิกชุมชนจอหอ</a></li>
                        </ul>
                        {/* <!-- <ul className="dropdown-menu mega-dropdown-menu">
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Features</li>
                                    <li><a href="#">Auto Carousel</a></li>
                                    <li><a href="#">Carousel Control</a></li>
                                    <li><a href="#">Left & Right Navigation</a></li>
                                    <li><a href="#">Four Columns Grid</a></li>
                                    <li className="divider"></li>
                                    <li className="dropdown-header">Fonts</li>
                                    <li><a href="#">Glyphicon</a></li>
                                    <li><a href="#">Google Fonts</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Plus</li>
                                    <li><a href="#">Navbar Inverse</a></li>
                                    <li><a href="#">Pull Right Elements</a></li>
                                    <li><a href="#">Coloured Headers</a></li>
                                    <li><a href="#">Primary Buttons & Default</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Much more</li>
                                    <li><a href="#">Easy to Customize</a></li>
                                    <li><a href="#">Calls to action</a></li>
                                    <li><a href="#">Custom Fonts</a></li>
                                    <li><a href="#">Slide down on Hover</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Women Collection</li>
                                    <div id="womenCollection" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <a href="#"><img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 1"></a>
                                                <h4><small>Summer dress floral prints</small></h4>
                                                <button className="btn btn-primary" type="button">49,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                            </div> --> */}
                                            {/* <!-- End Item --> */}
                                            {/* <!-- <div className="item">
                                                <a href="#"><img src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 2"></a>
                                                <h4><small>Gold sandals with shiny touch</small></h4>
                                                <button className="btn btn-primary" type="button">9,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                            </div> --> */}
                                            {/* <!-- End Item --> */}
                                            {/* <!-- <div className="item">
                                                <a href="#"><img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 3"></a>
                                                <h4><small>Denin jacket stamped</small></h4>
                                                <button className="btn btn-primary" type="button">49,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                            </div> --> */}
                                            {/* <!-- End Item --> */}
                                        {/* <!-- </div> --> */}
                                        {/* <!-- End Carousel Inner --> */}
                                        {/* <!-- Controls --> */}
                                        {/* <!-- <a className="left carousel-control" href="#womenCollection" role="button" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="#womenCollection" role="button" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div> --> */}
                                    {/* <!-- /.carousel --> */}
                                    {/* <!-- <li className="divider"></li>
                                    <li><a href="#">View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                                </ul>
                            </li>
                        </ul> --> */}
                    </li>
                    {/* <!-- Department menu --> */}

                    <li><a href="{{ url('/site/service') }}">ตารางการให้บริการ</a></li>
                    <li><a href="{{ url('/site/contactus') }}">ติดต่อเรา</a></li>
                    <li><a href="{{ url('/site/location') }}">แผนที่</a></li>
                </ul>
                {/* <!-- Pull left menu --> */}

                {/* <!-- Pull right menu --> */}
        {/* <!-- <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">My account <span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
          <li><a href="#">My cart (0) items</a></li> --> */}
          {/* <!-- Pull right menu --> */}
        {/* <!-- </ul> --> */}
      </div>
      {/* <!-- /.nav-collapse --> */}
    </div>
    {/* <!-- /.container-fluid --> */}
  </nav>
);

export default Header;