import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post'
import { GetAllPost, selectAllPosts } from '../features/post/postSlice'

function Home() {

  const annonces = useSelector(selectAllPosts)
  const [search, setsearch] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    let dat = {
      keyword: search
    }
    dispatch(GetAllPost(dat))

  }, [search])

  return (
    <div>
      <div>


        <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
          <div className="overlay" />

        </div>
        <section className="ftco-section bg-light ftco-no-pt ftco-intro">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
                <div className="d-block services active text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-blind" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Dog Walking</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                    <a href="#" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
                <div className="d-block services text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-dog-eating" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Pet Daycare</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                    <a href="#" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
                <div className="d-block services text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-grooming" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Pet Grooming</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                    <a href="#" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div>

        <section className="ftco-section testimony-section" style={{ backgroundImage: 'url("images/bg_2.jpg")' }}>
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h2>Trouver votre animal du rêve </h2>
              </div>
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: 'url(images/person_1.jpg)' }} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: 'url(images/person_2.jpg)' }} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: 'url(images/person_3.jpg)' }} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: 'url(images/person_1.jpg)' }} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: 'url(images/person_2.jpg)' }} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section class="ftco-section bg-light mb-5">

          <div class="container">
            <div class="row" style={{ marginBottom: '100px' }}>
              <div class="input-group ps-5 " style={{ marginLeft: '200px', width: "300px" }}>
                <div id="navbar-search-autocomplete" class="form-outline">
                  <input type="search" id="form1" class="form-control " placeholder='search' value={search} onChange={(e) => setsearch(e.target.value)} />{/**/}

                </div>
                <button type="button" class="btn btn-primary">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div class="row">

              {
                annonces.map((a, i) => {
                  return (
                    < Post key={a._id} annonce={a} />

                  )
                })

              }


            </div>

          </div>
        </section>








        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h2>Pets Gallery</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ftco-animate">
                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(images/gallery-1.jpg)' }}>
                  <a href="images/gallery-1.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Cat</span>
                      <h2><a href="work-single.html">Persian Cat</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(images/gallery-2.jpg)' }}>
                  <a href="images/gallery-2.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Dog</span>
                      <h2><a href="work-single.html">Pomeranian</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(images/gallery-3.jpg)' }}>
                  <a href="images/gallery-3.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Cat</span>
                      <h2><a href="work-single.html">Sphynx Cat</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(images/gallery-4.jpg)' }}>
                  <a href="images/gallery-4.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Cat</span>
                      <h2><a href="work-single.html">British Shorthair</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(images/gallery-5.jpg)' }}>
                  <a href="images/gallery-5.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Dog</span>
                      <h2><a href="work-single.html">Beagle</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(images/gallery-6.jpg)' }}>
                  <a href="images/gallery-6.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Dog</span>
                      <h2><a href="work-single.html">Pug</a></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h2>Latest news from our blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("images/image_1.jpg")' }}>
                  </a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div><a href="#">April 07, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                    </div>
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("images/image_2.jpg")' }}>
                  </a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div><a href="#">April 07, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                    </div>
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("images/image_3.jpg")' }}>
                  </a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div><a href="#">April 07, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                    </div>
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img" style={{ backgroundImage: 'url(images/bg_3.jpg)' }}>
          <div className="overlay" />
          <div className="container">
            <div className="row d-md-flex justify-content-end">
              <div className="col-md-12 col-lg-6 half p-3 py-5 pl-lg-5 ftco-animate">
                <h2 className="mb-4">Free Consultation</h2>
                <form action="#" className="appointment">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="fa fa-chevron-down" /></div>
                            <select name id className="form-control">
                              <option value>Select services</option>
                              <option value>Cat Sitting</option>
                              <option value>Dog Walk</option>
                              <option value>Pet Spa</option>
                              <option value>Pet Grooming</option>
                              <option value>Pet Daycare</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Vehicle number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-wrap">
                          <div className="icon"><span className="fa fa-calendar" /></div>
                          <input type="text" className="form-control appointment_date" placeholder="Date" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-wrap">
                          <div className="icon"><span className="fa fa-clock-o" /></div>
                          <input type="text" className="form-control appointment_time" placeholder="Time" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" defaultValue="Send message" className="btn btn-primary py-3 px-4" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <h2 className="footer-heading">Petsitting</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul className="ftco-footer-social p-0">
                  <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter" /></a></li>
                  <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook" /></a></li>
                  <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram" /></a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <h2 className="footer-heading">Latest News</h2>
                <div className="block-21 mb-4 d-flex">
                  <a className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_1.jpg)' }} />
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar" /> April 7, 2020</a></div>
                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }} />
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar" /> April 7, 2020</a></div>
                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
                <h2 className="footer-heading">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="py-2 d-block">Home</a></li>
                  <li><a href="#" className="py-2 d-block">About</a></li>
                  <li><a href="#" className="py-2 d-block">Services</a></li>
                  <li><a href="#" className="py-2 d-block">Works</a></li>
                  <li><a href="#" className="py-2 d-block">Blog</a></li>
                  <li><a href="#" className="py-2 d-block">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <h2 className="footer-heading">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon fa fa-map" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span className="icon fa fa-phone" /><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon fa fa-paper-plane" /><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <p className="copyright">
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>






    </div>
  )
}

export default Home