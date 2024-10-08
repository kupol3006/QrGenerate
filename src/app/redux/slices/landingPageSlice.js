import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { customAlphabet } from 'nanoid';
import { parseCookies } from 'nookies';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

const initialState = {
  landingPageDatas: [
    {
      id: 'template-1',
      label: 'Template 1',
      content: `<body>
  <div id="i6po" class="gjs-grid-row">
    <div id="itjq" class="gjs-grid-column">
      <div id="iyd2" class="gjs-grid-row">
        <div id="iqjl" class="gjs-grid-column">
          <a id="iucmr" href="/" class="gjs-link-box"><img id="ihtxj" src="https://via.placeholder.com/100x100"/></a>
        </div>
        <div id="iffs" class="gjs-grid-column">
          <div id="it00l" class="gjs-grid-row">
            <div id="iz7cr" class="gjs-grid-column">
              <a id="ii2rd" class="gjs-link">About</a>
            </div>
            <div id="irtfd" class="gjs-grid-column">
              <a id="icfyb" class="gjs-link">Features</a>
            </div>
            <div id="icyzp" class="gjs-grid-column">
              <a id="i88iz" href="" class="gjs-link">Pricing</a>
            </div>
          </div>
        </div>
        <div id="id7x" class="gjs-grid-column">
          <a id="i1mew" class="gjs-link">Button</a>
        </div>
      </div>
    </div>
  </div>
  <div id="irz7b" class="gjs-grid-row">
    <div id="iycz3" class="gjs-grid-column">
      <h1 id="irjua" class="gjs-heading">Insert Hero text here
      </h1>
      <div id="itndw" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <a id="iar3s" class="gjs-link">Button</a>
      <img id="i3vvs" src="https://via.placeholder.com/1000x700"/>
    </div>
  </div>
  <div id="ichzi" class="gjs-grid-row">
    <div id="imymf" class="gjs-grid-column">
      <div id="ib541" class="gjs-grid-row">
        <div id="iz8m8" class="gjs-grid-column">
          <h2 id="ij2gh" class="gjs-heading">Feature One text
          </h2>
          <div id="igrx8" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <a id="isn3p" class="gjs-link">Button</a>
        </div>
        <div id="iepks" class="gjs-grid-column">
          <img src="https://via.placeholder.com/700x500" id="i466d"/>
        </div>
      </div>
    </div>
  </div>
  <div id="ixig3" class="gjs-grid-row">
    <div id="ifx1t" class="gjs-grid-column">
      <div id="i297f" class="gjs-grid-row">
        <div id="io56m" class="gjs-grid-column">
          <img src="https://via.placeholder.com/700x500" id="ibhvh"/>
        </div>
        <div id="i07yy" class="gjs-grid-column">
          <h2 id="ie2yp" class="gjs-heading">Feature Two text
          </h2>
          <div id="ip9za" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <a id="ihj23" class="gjs-link">Button</a>
        </div>
      </div>
    </div>
  </div>
  <div id="ioyxg" class="gjs-grid-row">
    <div id="i8w4i" class="gjs-grid-column">
      <h2 id="iiacm" class="gjs-heading">More Features
      </h2>
      <div id="ia21sa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div id="ixzh1" class="gjs-grid-row">
        <div id="ilpi3" class="gjs-grid-column feature-item">
          <img src="https://via.placeholder.com/100x100" id="i6l3t"/>
          <h3 id="in9ef" class="gjs-heading">Feature text
          </h3>
          <div id="i8isa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="izue1" class="gjs-link">Learn
            more</a>
        </div>
        <div id="iolst9" class="gjs-grid-column feature-item">
          <img src="https://via.placeholder.com/100x100" id="i2v2bo"/>
          <h3 id="i4zy5b" class="gjs-heading">Feature text
          </h3>
          <div id="iss1oi" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="iwv8kj" class="gjs-link">Learn
            more</a>
        </div>
        <div id="i80n4g" class="gjs-grid-column feature-item">
          <img src="https://via.placeholder.com/100x100" id="if3q9n"/>
          <h3 id="iyz817" class="gjs-heading">Feature text
          </h3>
          <div id="ifs1de" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="ivuwzh" class="gjs-link">Learn
            more</a>
        </div>
        <div id="i0ciun" class="gjs-grid-column feature-item">
          <img src="https://via.placeholder.com/100x100" id="io9lt4"/>
          <h3 id="i9lijx" class="gjs-heading">Feature text
          </h3>
          <div id="ipy1nf" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="i31i8z" class="gjs-link">Learn
            more</a>
        </div>
        <div id="ice5ar" class="gjs-grid-column feature-item">
          <img src="https://via.placeholder.com/100x100" id="imzjjg"/>
          <h3 id="io2e0a" class="gjs-heading">Feature text
          </h3>
          <div id="ipy7fh" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="iaqmei" class="gjs-link">Learn
            more</a>
        </div>
        <div id="ipyath" class="gjs-grid-column feature-item">
          <img src="https://via.placeholder.com/100x100" id="iinc1f"/>
          <h3 id="istmw2" class="gjs-heading">Feature text
          </h3>
          <div id="ijfv13" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="igsybu" class="gjs-link">Learn
            more</a>
        </div>
      </div>
    </div>
  </div>
  <div id="igo13t" class="gjs-grid-row">
    <div id="infwen" class="gjs-grid-column">
      <h2 id="ihap8q" class="gjs-heading">Testimonial section
      </h2>
      <div id="i6fjjy" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div id="i5k4nf" class="gjs-grid-row">
        <div id="inea73" class="gjs-grid-column testimonial-item">
          <div id="it3yug" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div id="i2d7qp" class="gjs-grid-row">
            <div id="idva29" class="gjs-grid-column">
              <img src="https://via.placeholder.com/100x100" id="ia7pcr"/>
            </div>
            <div id="i4djop" class="gjs-grid-column">
              <h4 id="iqroa4" class="gjs-heading">Full name
              </h4>
              <div id="iaqf2c" class="text-main-content">Role / Company
              </div>
            </div>
          </div>
        </div>
        <div id="idndjn" class="gjs-grid-column testimonial-item">
          <div id="i8gt4n" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div id="ish0zj" class="gjs-grid-row">
            <div id="inucqu" class="gjs-grid-column">
              <img src="https://via.placeholder.com/100x100" id="ixzdlj"/>
            </div>
            <div id="iuk8ib" class="gjs-grid-column">
              <h4 id="i04ztt" class="gjs-heading">Full name
              </h4>
              <div id="ia9ts3" class="text-main-content">Role / Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="iv3be5" class="gjs-grid-row">
    <div id="ilriti" class="gjs-grid-column">
      <div id="im0rle" class="gjs-grid-row">
        <div id="iotp6j" class="gjs-grid-column">
          <a href="/" id="iih6cv" class="gjs-link-box"><img src="https://via.placeholder.com/100x100" id="ikhs8g"/></a>
        </div>
        <div id="i4m02q" class="gjs-grid-column">
          <h3 id="ifz4zk" class="gjs-heading">Footer links
          </h3>
          <a id="i1podl" class="gjs-link">Footer link<br/></a>
          <a id="io1hrh" class="gjs-link">Footer link<br/></a>
          <a id="in1kmc" class="gjs-link">Footer link<br/></a>
        </div>
        <div id="ighmg2" class="gjs-grid-column">
          <h3 id="iyltzo" class="gjs-heading">Footer links
          </h3>
          <a id="igy8t4" class="gjs-link">Footer link<br/></a>
          <a id="iv8kr2" class="gjs-link">Footer link<br/></a>
          <a id="iw0c0y" class="gjs-link">Footer link<br/></a>
          <a id="il08wz" class="gjs-link">Footer link<br/></a>
        </div>
        <div id="i1hx7l" class="gjs-grid-column">
          <h3 id="ijzeqf" class="gjs-heading">Footer links
          </h3>
          <a id="ij7g8t" class="gjs-link">Footer link<br/></a>
          <a id="ipjdtn" class="gjs-link">Footer link<br/></a>
          <a id="ikj01e" class="gjs-link">Footer link<br/></a>
          <a id="i2sl68" class="gjs-link">Footer link<br/></a>
          <a id="in2r6l" class="gjs-link">Footer link<br/></a>
        </div>
      </div>
      <div id="iw4bbr" class="gjs-divider">
      </div>
      <div id="it6g1v">Copyright © YEAR Company name
      </div>
    </div>
  </div>
</body>`,
      style: `* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
*{
  box-sizing:border-box;
}
body{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
.gjs-heading{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
.gjs-grid-column{
  flex-grow:1;
  flex-shrink:1;
  flex-basis:0%;
  padding-top:5px;
  padding-right:0px;
  padding-bottom:5px;
  padding-left:0px;
}
.gjs-grid-row{
  display:flex;
  justify-content:flex-start;
  align-items:stretch;
  flex-direction:row;
  min-height:auto;
  padding-top:10px;
  padding-right:0px;
  padding-bottom:10px;
  padding-left:0px;
}
#iqjl{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
  padding-top:0px;
  padding-right:0px;
  padding-bottom:0px;
  padding-left:0px;
}
.gjs-link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  max-width:100%;
  text-decoration-line:none;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
}
#ihtxj{
  color:black;
  width:54.1302px;
  height:32px;
}
.gjs-link{
  vertical-align:top;
  max-width:100%;
  display:inline-block;
  text-decoration-line:none;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
  color:inherit;
}
#i1mew{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#id7x{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
  display:block;
  padding-left:10px;
  padding-right:10px;
}
#iffs{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#iyd2{
  align-items:center;
  justify-content:space-between;
  padding-top:0px;
  padding-bottom:0px;
}
#i6po{
  justify-content:center;
  padding-top:0px;
  padding-bottom:0px;
}
#itjq{
  width:100%;
  max-width:1200px;
}
#iucmr{
  display:block;
  padding-top:0px;
  padding-bottom:0px;
}
#it00l{
  padding-top:0px;
  padding-bottom:0px;
}
#iz7cr{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#ii2rd{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
#icfyb{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
#irtfd{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i88iz{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
#icyzp{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#irz7b{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#iycz3{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
  row-gap:10px;
  column-gap:10px;
}
#irjua{
  font-size:3rem;
}
#itndw{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  max-width:750px;
  margin-bottom:25px;
}
#iar3s{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
  margin-bottom:50px;
}
#i3vvs{
  color:black;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  max-width:100%;
}
.text-main-content{
  line-height:30px;
  font-size:1.3rem;
  color:rgba(0, 0, 0, 0.75);
}
#ij2gh{
  font-size:2.5rem;
}
#igrx8{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:25px;
  padding-left:0px;
  padding-right:0px;
}
#isn3p{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#i466d{
  color:black;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  max-width:100%;
}
#imymf{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#ichzi{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#ib541{
  row-gap:100px;
  column-gap:100px;
  justify-content:space-between;
}
#iz8m8{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
}
#ie2yp{
  font-size:2.5rem;
}
#ip9za{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:25px;
  padding-left:0px;
  padding-right:0px;
}
#ihj23{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#i07yy{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:center;
  text-align:right;
}
#ibhvh{
  color:black;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  max-width:100%;
}
#i297f{
  row-gap:100px;
  column-gap:100px;
  justify-content:space-between;
}
#ifx1t{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#ixig3{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#in9ef{
  font-size:1.5rem;
}
#i8isa{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#izue1{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#i6l3t{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#i8w4i{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#ioyxg{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#iiacm{
  font-size:2.5rem;
  margin-bottom:10px;
  text-align:center;
}
#ixzh1{
  width:100%;
  flex-wrap:wrap;
  justify-content:flex-start;
  row-gap:50px;
  column-gap:50px;
}
.gjs-grid-column.feature-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  row-gap:15px;
  column-gap:15px;
  min-width:30%;
}
#iinc1f{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#istmw2{
  font-size:1.5rem;
}
#ijfv13{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#igsybu{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#imzjjg{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#io2e0a{
  font-size:1.5rem;
}
#ipy7fh{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#iaqmei{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#io9lt4{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#i9lijx{
  font-size:1.5rem;
}
#ipy1nf{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#i31i8z{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#if3q9n{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#iyz817{
  font-size:1.5rem;
}
#ifs1de{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#ivuwzh{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#i2v2bo{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
}
#i4zy5b{
  font-size:1.5rem;
}
#iss1oi{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#iwv8kj{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
  text-transform:uppercase;
  font-family:Arial, Helvetica, sans-serif;
  letter-spacing:3px;
  background-color:black;
  color:white;
  display:inline-block;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  border-bottom-left-radius:3px;
}
#ia21sa{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:70px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#ihap8q{
  font-size:2.5rem;
  margin-bottom:10px;
  text-align:center;
}
#i6fjjy{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:70px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#ia7pcr{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
}
#iqroa4{
  font-size:1.5rem;
}
#i5k4nf{
  width:100%;
  flex-wrap:wrap;
  justify-content:flex-start;
  row-gap:50px;
  column-gap:50px;
}
#infwen{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#igo13t{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#inea73{
  justify-content:space-between;
}
.gjs-grid-column.testimonial-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  min-width:45%;
  background-color:rgb(247, 246, 246);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  align-items:flex-start;
}
#idva29{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i2d7qp{
  width:100%;
  row-gap:20px;
  column-gap:20px;
  align-items:center;
}
#iaqf2c{
  color:rgba(0, 0, 0, 0.5);
}
#it3yug{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#i8gt4n{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#ixzdlj{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
}
#inucqu{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i04ztt{
  font-size:1.5rem;
}
#ia9ts3{
  color:rgba(0, 0, 0, 0.5);
}
#ish0zj{
  width:100%;
  row-gap:20px;
  column-gap:20px;
  align-items:center;
}
#idndjn{
  justify-content:space-between;
}
#ilriti{
  max-width:1200px;
  display:flex;
  flex-direction:column;
}
#iv3be5{
  justify-content:center;
  padding-top:80px;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:30px;
}
#im0rle{
  row-gap:100px;
  column-gap:100px;
  padding-bottom:30px;
}
#ifz4zk{
  margin-bottom:10px;
  text-transform:uppercase;
}
#i1podl{
  display:block;
}
#i4m02q{
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#in1kmc{
  display:block;
}
#io1hrh{
  display:block;
}
#ikhs8g{
  color:black;
  width:54.1302px;
  height:54px;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
}
#iih6cv{
  display:block;
  padding-top:0px;
  padding-bottom:0px;
}
#iotp6j{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
  margin-right:auto;
}
#it6g1v{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  text-align:center;
  font-size:0.9rem;
  margin-top:20px;
}
#iyltzo{
  margin-bottom:10px;
  text-transform:uppercase;
}
#igy8t4{
  display:block;
}
#iv8kr2{
  display:block;
}
#iw0c0y{
  display:block;
}
#ighmg2{
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#ijzeqf{
  margin-bottom:10px;
  text-transform:uppercase;
}
#ij7g8t{
  display:block;
}
#ipjdtn{
  display:block;
}
#ikj01e{
  display:block;
}
#i1hx7l{
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#il08wz{
  display:block;
}
#in2r6l{
  display:block;
}
#i2sl68{
  display:block;
}
.gjs-divider{
  height:3px;
  margin-top:10px;
  margin-right:10px;
  margin-bottom:10px;
  margin-left:10px;
  background-color:rgba(0, 0, 0, 0.05);
}
@media (max-width: 992px){
  .gjs-grid-row{
    flex-direction:column;
  }
  #i2d7qp{
    flex-direction:row;
  }
  #ish0zj{
    flex-direction:row;
  }
}
`
    },
    {
      id: 'template-2',
      label: 'Template 2',
      content: `<body>
  <div id="i6po" class="gjs-grid-row">
    <div id="itjq" class="gjs-grid-column">
      <div id="iyd2" class="gjs-grid-row">
        <div id="iqjl" class="gjs-grid-column">
          <a id="iucmr" href="/" class="gjs-link-box"><div data-type-icon="" id="irfl3k" class="gjs-icon">
            <svg viewBox="0 0 202 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.6918 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.47023e-06C10 1.31322 9.74135 2.61358 9.2388 3.82684C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 6.15916e-06 10L5.72205e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.8147e-06L10 1.47023e-06Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M125.619 14.4525H120.767V29.8648H125.619V14.4525Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M121.307 11.5666C121.814 12.074 122.448 12.3277 123.209 12.3277C123.97 12.3277 124.594 12.074 125.08 11.5666C125.567 11.0381 125.81 10.4038 125.81 9.66385C125.81 8.90277 125.567 8.26849 125.08 7.76111C124.594 7.25369 123.97 7 123.209 7C122.448 7 121.814 7.25369 121.307 7.76111C120.82 8.26849 120.577 8.90277 120.577 9.66385C120.577 10.4038 120.82 11.0381 121.307 11.5666Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M51.1562 29.8648V7.47568H56.1351V25.4885H66.0612V29.8648H51.1562Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M75.0274 30.2136C73.4418 30.2136 72.0042 29.8648 70.7145 29.1671C69.446 28.4483 68.4418 27.4758 67.7018 26.2495C66.9619 25.0233 66.5919 23.6491 66.5919 22.1269C66.5919 20.6047 66.9619 19.2411 67.7018 18.036C68.4418 16.8309 69.446 15.8795 70.7145 15.1819C71.983 14.463 73.4207 14.1036 75.0274 14.1036C76.6342 14.1036 78.0718 14.4525 79.3403 15.1501C80.6088 15.8478 81.6131 16.8098 82.353 18.036C83.093 19.2411 83.463 20.6047 83.463 22.1269C83.463 23.6491 83.093 25.0233 82.353 26.2495C81.6131 27.4758 80.6088 28.4483 79.3403 29.1671C78.0718 29.8648 76.6342 30.2136 75.0274 30.2136ZM75.0274 25.8056C75.7251 25.8056 76.3382 25.6576 76.8668 25.3616C77.3953 25.0445 77.797 24.6111 78.0718 24.0614C78.3678 23.4906 78.5158 22.8457 78.5158 22.1269C78.5158 21.4081 78.3678 20.7844 78.0718 20.2559C77.7758 19.7062 77.3636 19.2834 76.835 18.9874C76.3276 18.6702 75.7251 18.5117 75.0274 18.5117C74.3509 18.5117 73.7484 18.6702 73.2198 18.9874C72.6913 19.2834 72.279 19.7062 71.983 20.2559C71.687 20.8056 71.5391 21.4398 71.5391 22.1586C71.5391 22.8563 71.687 23.4906 71.983 24.0614C72.279 24.6111 72.6913 25.0445 73.2198 25.3616C73.7484 25.6576 74.3509 25.8056 75.0274 25.8056Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M87.3057 35.8902C88.5953 36.4821 90.0858 36.7781 91.7772 36.7781C93.4262 36.7781 94.8956 36.4504 96.1852 35.795C97.4749 35.1396 98.4896 34.2306 99.2296 33.0678C99.9695 31.905 100.34 30.5308 100.34 28.9451V14.4525H95.5826V15.488C95.2288 15.1902 94.827 14.9402 94.3776 14.7379C93.553 14.3362 92.6122 14.1353 91.5552 14.1353C90.1387 14.1353 88.8807 14.4736 87.7814 15.1501C86.6819 15.8055 85.8152 16.7146 85.1809 17.8774C84.5466 19.0191 84.2296 20.3087 84.2296 21.7464C84.2296 23.1629 84.5466 24.4525 85.1809 25.6153C85.8152 26.7781 86.6819 27.6978 87.7814 28.3743C88.8807 29.0508 90.1387 29.3891 91.5552 29.3891C92.5911 29.3891 93.5319 29.1883 94.3776 28.7866C94.7872 28.592 95.1572 28.3627 95.4875 28.0986V29.072C95.4875 30.1502 95.1387 30.9853 94.441 31.5773C93.7645 32.1693 92.8237 32.4652 91.6186 32.4652C90.6461 32.4652 89.811 32.2961 89.1133 31.9578C88.4368 31.6196 87.8236 31.1227 87.2739 30.4673L84.293 33.4483C85.0329 34.5054 86.0372 35.3194 87.3057 35.8902ZM94.219 24.6322C93.7327 24.9282 93.1514 25.0762 92.4748 25.0762C91.7983 25.0762 91.2063 24.9282 90.6989 24.6322C90.2126 24.3362 89.8321 23.9345 89.5573 23.4271C89.2824 22.8986 89.145 22.3383 89.145 21.7464C89.145 21.1121 89.2824 20.5413 89.5573 20.0339C89.8321 19.5265 90.2232 19.1248 90.7306 18.8288C91.238 18.5328 91.8194 18.3848 92.4748 18.3848C93.1514 18.3848 93.7327 18.5328 94.219 18.8288C94.7264 19.1248 95.1069 19.5265 95.3607 20.0339C95.6355 20.5413 95.7729 21.1121 95.7729 21.7464C95.7729 22.3806 95.6355 22.9514 95.3607 23.4588C95.1069 23.9451 94.7264 24.3362 94.219 24.6322Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M110.551 30.2136C108.965 30.2136 107.527 29.8648 106.238 29.1671C104.969 28.4483 103.965 27.4758 103.225 26.2495C102.485 25.0233 102.115 23.6491 102.115 22.1269C102.115 20.6047 102.485 19.2411 103.225 18.036C103.965 16.8309 104.969 15.8795 106.238 15.1819C107.506 14.463 108.944 14.1036 110.551 14.1036C112.157 14.1036 113.595 14.4525 114.863 15.1501C116.132 15.8478 117.136 16.8098 117.876 18.036C118.616 19.2411 118.986 20.6047 118.986 22.1269C118.986 23.6491 118.616 25.0233 117.876 26.2495C117.136 27.4758 116.132 28.4483 114.863 29.1671C113.595 29.8648 112.157 30.2136 110.551 30.2136ZM110.551 25.8056C111.248 25.8056 111.861 25.6576 112.39 25.3616C112.918 25.0445 113.32 24.6111 113.595 24.0614C113.891 23.4906 114.039 22.8457 114.039 22.1269C114.039 21.4081 113.891 20.7844 113.595 20.2559C113.299 19.7062 112.887 19.2834 112.358 18.9874C111.851 18.6702 111.248 18.5117 110.551 18.5117C109.874 18.5117 109.271 18.6702 108.743 18.9874C108.214 19.2834 107.802 19.7062 107.506 20.2559C107.21 20.8056 107.062 21.4398 107.062 22.1586C107.062 22.8563 107.21 23.4906 107.506 24.0614C107.802 24.6111 108.214 25.0445 108.743 25.3616C109.271 25.6576 109.874 25.8056 110.551 25.8056Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M137.281 30.1819C136.246 30.1819 135.294 29.9811 134.427 29.5794C133.971 29.368 133.559 29.1156 133.191 28.8222V36.3659H128.402V14.4525H133.254V15.5162C133.606 15.2283 133.997 14.9794 134.427 14.7696C135.294 14.3467 136.246 14.1353 137.281 14.1353C138.74 14.1353 140.03 14.4842 141.15 15.1819C142.292 15.8795 143.18 16.8309 143.814 18.036C144.47 19.2411 144.797 20.6153 144.797 22.1586C144.797 23.702 144.47 25.0762 143.814 26.2813C143.18 27.4864 142.292 28.4377 141.15 29.1354C140.03 29.8331 138.74 30.1819 137.281 30.1819ZM136.394 25.8056C137.091 25.8056 137.694 25.647 138.201 25.3299C138.73 25.0128 139.142 24.5793 139.438 24.0297C139.734 23.48 139.882 22.8563 139.882 22.1586C139.882 21.4398 139.734 20.8056 139.438 20.2559C139.142 19.7062 138.73 19.2834 138.201 18.9874C137.694 18.6702 137.102 18.5117 136.425 18.5117C135.749 18.5117 135.146 18.6702 134.618 18.9874C134.11 19.2834 133.709 19.7062 133.413 20.2559C133.117 20.8056 132.969 21.4398 132.969 22.1586C132.969 22.8563 133.106 23.48 133.381 24.0297C133.677 24.5793 134.089 25.0128 134.618 25.3299C135.146 25.647 135.738 25.8056 136.394 25.8056Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M149.546 29.8965C150.434 30.1291 151.332 30.2453 152.241 30.2453C154.165 30.2453 155.687 29.8014 156.808 28.9134C157.949 28.0255 158.52 26.831 158.52 25.3299C158.52 24.3574 158.341 23.5751 157.981 22.9832C157.622 22.3701 157.157 21.8838 156.586 21.5244C156.015 21.165 155.412 20.8795 154.778 20.6681C154.144 20.4567 153.541 20.277 152.971 20.129C152.4 19.981 151.935 19.8119 151.575 19.6216C151.216 19.4313 151.036 19.1776 151.036 18.8605C151.036 18.5645 151.174 18.3425 151.448 18.1945C151.723 18.0254 152.135 17.9409 152.685 17.9409C153.256 17.9409 153.837 18.0571 154.429 18.2897C155.042 18.5222 155.592 18.924 156.078 19.4948L158.837 16.7041C158.14 15.8161 157.231 15.1501 156.11 14.7062C155.011 14.2411 153.806 14.0085 152.495 14.0085C151.248 14.0085 150.159 14.2199 149.229 14.6427C148.298 15.0656 147.579 15.647 147.072 16.3869C146.565 17.1057 146.311 17.962 146.311 18.9557C146.311 19.8859 146.491 20.6576 146.85 21.2707C147.209 21.8626 147.675 22.3278 148.245 22.666C148.816 23.0043 149.419 23.2686 150.053 23.4588C150.687 23.6491 151.29 23.8288 151.861 23.998C152.431 24.146 152.897 24.3257 153.256 24.5371C153.637 24.7274 153.827 25.0128 153.827 25.3933C153.827 25.6893 153.668 25.9218 153.351 26.091C153.055 26.2601 152.622 26.3447 152.051 26.3447C151.226 26.3447 150.465 26.1967 149.768 25.9007C149.07 25.5836 148.467 25.1502 147.96 24.6005L145.201 27.3912C145.73 27.962 146.364 28.4695 147.104 28.9134C147.865 29.3362 148.679 29.6639 149.546 29.8965Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M167.368 30.2136C165.952 30.2136 164.694 29.9282 163.595 29.3574C162.516 28.7654 161.671 27.962 161.058 26.9472C160.444 25.9113 160.138 24.7274 160.138 23.3954V14.4525H164.99V23.332C164.99 23.8605 165.074 24.3151 165.244 24.6956C165.434 25.0762 165.709 25.3722 166.068 25.5836C166.428 25.795 166.861 25.9007 167.368 25.9007C168.087 25.9007 168.658 25.6787 169.081 25.2347C169.504 24.7696 169.715 24.1354 169.715 23.332V14.4525H174.567V23.3637C174.567 24.7168 174.261 25.9113 173.647 26.9472C173.034 27.962 172.189 28.7654 171.11 29.3574C170.032 29.9282 168.785 30.2136 167.368 30.2136Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M181.831 14.4525H176.979V29.8648H181.831V20.8584C181.831 20.3299 181.937 19.8859 182.148 19.5265C182.381 19.1671 182.688 18.8922 183.068 18.702C183.449 18.4905 183.882 18.3848 184.368 18.3848C185.066 18.3848 185.647 18.6068 186.112 19.0508C186.599 19.4736 186.842 20.0762 186.842 20.8584V29.8648H191.694V20.8584C191.694 20.3299 191.8 19.8859 192.011 19.5265C192.244 19.1671 192.55 18.8922 192.931 18.702C193.311 18.4905 193.745 18.3848 194.231 18.3848C194.929 18.3848 195.51 18.6068 195.975 19.0508C196.461 19.4736 196.704 20.0762 196.704 20.8584V29.8648H201.557V20.3193C201.557 19.0297 201.282 17.9303 200.732 17.0212C200.203 16.0909 199.474 15.3827 198.544 14.8965C197.635 14.389 196.588 14.1353 195.404 14.1353C194.199 14.1353 193.11 14.3996 192.138 14.9282C191.506 15.2649 190.954 15.6995 190.481 16.2319C190.04 15.675 189.504 15.2193 188.871 14.8647C188.026 14.3785 187.064 14.1353 185.986 14.1353C184.844 14.1353 183.819 14.3785 182.91 14.8647C182.514 15.067 182.155 15.3093 181.831 15.5916V14.4525Z" fill="#007DFC" class="ccustom">
              </path>
            </svg>
            </div></a>
        </div>
        <div id="iffs" class="gjs-grid-column">
          <div id="it00l" class="gjs-grid-row">
            <div id="irtfd" class="gjs-grid-column">
              <a id="icfyb" href="#feature-section" class="gjs-link">About</a>
              <a href="#feature-section" id="infmy1" class="gjs-link">Features</a>
            </div>
            <div id="icyzp" class="gjs-grid-column">
              <a id="i88iz" href="#testimonial-section" class="gjs-link">Testimonials</a>
            </div>
          </div>
        </div>
        <div id="id7x" class="gjs-grid-column">
          <a id="i1mew" class="gjs-button">Join Waitlist</a>
        </div>
      </div>
    </div>
  </div>
  <div id="irz7b" class="gjs-grid-row">
    <div id="iycz3" class="gjs-grid-column">
      <h1 id="irjua" class="gjs-heading gjs-grid-row">Insert Hero
        <span id="i4jn1p" class="gjs-text-blue">text here</span>
      </h1>
      <div id="itndw" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br/>
      </div>
      <a id="iar3s" class="gjs-button">Join
        Waitlist</a>
      <img id="i3vvs" src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=2"/>
    </div>
  </div>
  <div id="feature-section" class="gjs-grid-row">
    <div id="imymf" class="gjs-grid-column">
      <div id="ib541" class="gjs-grid-row">
        <div id="iz8m8" class="gjs-grid-column">
          <h4 id="ij2gh" class="gjs-heading gjs-text-blue">Feature One text
          </h4>
          <h2 id="ism014" class="gjs-heading">Feature Text
          </h2>
          <div id="igrx8" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="iqx3z1" class="gjs-button">Getting
            Started</a>
        </div>
        <div id="iepks" class="gjs-grid-column">
          <img src="https://images.pexels.com/photos/2121640/pexels-photo-2121640.jpeg?auto=compress&cs=tinysrgb&w=500&dpr=2" id="i466d"/>
        </div>
      </div>
    </div>
  </div>
  <div id="ioyxg" class="gjs-grid-row">
    <div id="i8w4i" class="gjs-grid-column">
      <h4 id="ihs4lb" class="gjs-heading gjs-text-blue">More Features
      </h4>
      <h2 id="iiacm" class="gjs-heading">Put here the text describing why your features are
        <span id="icxfor" class="gjs-text-blue">so amazing</span>
      </h2>
      <div id="ia21sa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div id="ixzh1" class="gjs-grid-row">
        <div id="ilpi3" class="gjs-grid-column feature-item">
          <div data-type-icon="" id="ipmqo6" class="gjs-icon gjs-feature-icon">
            <svg viewBox="0 0 24 24">
              <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
              </path>
            </svg>
          </div>
          <h3 id="in9ef" class="gjs-heading">Feature text
          </h3>
          <div id="i8isa" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div id="ic57kq" class="gjs-grid-column feature-item">
          <div data-type-icon="" id="ibdusm" class="gjs-icon gjs-feature-icon">
            <svg viewBox="0 0 24 24">
              <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
              </path>
            </svg>
          </div>
          <h3 id="ica43q" class="gjs-heading">Feature text
          </h3>
          <div id="ickn3f" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div id="idv32l" class="gjs-grid-column feature-item">
          <div data-type-icon="" id="ipmept" class="gjs-icon gjs-feature-icon">
            <svg viewBox="0 0 24 24">
              <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z">
              </path>
            </svg>
          </div>
          <h3 id="ieu6p6" class="gjs-heading">Feature text
          </h3>
          <div id="izqkf7" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="testimonial-section" class="gjs-grid-row">
    <div id="infwen" class="gjs-grid-column">
      <h2 id="ihap8q" class="gjs-heading">Testimonial section
      </h2>
      <div id="i6fjjy" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div id="i5k4nf" class="gjs-grid-row">
        <div id="inea73" class="gjs-grid-column testimonial-item">
          <div id="i2d7qp" class="gjs-grid-row">
            <div id="idva29" class="gjs-grid-column">
              <img src="https://source.unsplash.com/random/200x200/?profile,person,business" id="ia7pcr"/>
            </div>
            <div id="i4djop" class="gjs-grid-column">
              <h4 id="iqroa4" class="gjs-heading">Full name
              </h4>
              <div id="iaqf2c" class="text-main-content">Role / Company
              </div>
            </div>
          </div>
          <div id="it3yug" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div id="idndjn" class="gjs-grid-column testimonial-item">
          <div id="ish0zj" class="gjs-grid-row">
            <div id="inucqu" class="gjs-grid-column">
              <img src="https://source.unsplash.com/random/200x200/?profile,person,business" id="ixzdlj"/>
            </div>
            <div id="iuk8ib" class="gjs-grid-column">
              <h4 id="i04ztt" class="gjs-heading">Full name
              </h4>
              <div id="ia9ts3" class="text-main-content">Role / Company
              </div>
            </div>
          </div>
          <div id="i8gt4n" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="iz29ek" class="gjs-grid-row">
    <div id="ik2rdi" class="gjs-grid-column">
      <h2 id="i83vu9" class="gjs-heading">Put here your description 
        <br/>for
        <span id="i7owfh" class="gjs-text-blue">this section</span>
      </h2>
      <div id="in201n" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br/>
      </div>
      <a id="iwgwt5" class="gjs-button">Join
        Waitlist</a>
    </div>
  </div>
  <div id="iv3be5" class="gjs-grid-row">
    <div id="ilriti" class="gjs-grid-column">
      <div id="im0rle" class="gjs-grid-row">
        <div id="iotp6j" class="gjs-grid-column">
          <a href="/" id="iih6cv" class="gjs-link-box"><div data-type-icon="" id="ip6zoj" class="gjs-icon">
            <svg viewBox="0 0 202 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.6918 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.47023e-06C10 1.31322 9.74135 2.61358 9.2388 3.82684C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 6.15916e-06 10L5.72205e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.8147e-06L10 1.47023e-06Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M125.619 14.4525H120.767V29.8648H125.619V14.4525Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M121.307 11.5666C121.814 12.074 122.448 12.3277 123.209 12.3277C123.97 12.3277 124.594 12.074 125.08 11.5666C125.567 11.0381 125.81 10.4038 125.81 9.66385C125.81 8.90277 125.567 8.26849 125.08 7.76111C124.594 7.25369 123.97 7 123.209 7C122.448 7 121.814 7.25369 121.307 7.76111C120.82 8.26849 120.577 8.90277 120.577 9.66385C120.577 10.4038 120.82 11.0381 121.307 11.5666Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M51.1562 29.8648V7.47568H56.1351V25.4885H66.0612V29.8648H51.1562Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M75.0274 30.2136C73.4418 30.2136 72.0042 29.8648 70.7145 29.1671C69.446 28.4483 68.4418 27.4758 67.7018 26.2495C66.9619 25.0233 66.5919 23.6491 66.5919 22.1269C66.5919 20.6047 66.9619 19.2411 67.7018 18.036C68.4418 16.8309 69.446 15.8795 70.7145 15.1819C71.983 14.463 73.4207 14.1036 75.0274 14.1036C76.6342 14.1036 78.0718 14.4525 79.3403 15.1501C80.6088 15.8478 81.6131 16.8098 82.353 18.036C83.093 19.2411 83.463 20.6047 83.463 22.1269C83.463 23.6491 83.093 25.0233 82.353 26.2495C81.6131 27.4758 80.6088 28.4483 79.3403 29.1671C78.0718 29.8648 76.6342 30.2136 75.0274 30.2136ZM75.0274 25.8056C75.7251 25.8056 76.3382 25.6576 76.8668 25.3616C77.3953 25.0445 77.797 24.6111 78.0718 24.0614C78.3678 23.4906 78.5158 22.8457 78.5158 22.1269C78.5158 21.4081 78.3678 20.7844 78.0718 20.2559C77.7758 19.7062 77.3636 19.2834 76.835 18.9874C76.3276 18.6702 75.7251 18.5117 75.0274 18.5117C74.3509 18.5117 73.7484 18.6702 73.2198 18.9874C72.6913 19.2834 72.279 19.7062 71.983 20.2559C71.687 20.8056 71.5391 21.4398 71.5391 22.1586C71.5391 22.8563 71.687 23.4906 71.983 24.0614C72.279 24.6111 72.6913 25.0445 73.2198 25.3616C73.7484 25.6576 74.3509 25.8056 75.0274 25.8056Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M87.3057 35.8902C88.5953 36.4821 90.0858 36.7781 91.7772 36.7781C93.4262 36.7781 94.8956 36.4504 96.1852 35.795C97.4749 35.1396 98.4896 34.2306 99.2296 33.0678C99.9695 31.905 100.34 30.5308 100.34 28.9451V14.4525H95.5826V15.488C95.2288 15.1902 94.827 14.9402 94.3776 14.7379C93.553 14.3362 92.6122 14.1353 91.5552 14.1353C90.1387 14.1353 88.8807 14.4736 87.7814 15.1501C86.6819 15.8055 85.8152 16.7146 85.1809 17.8774C84.5466 19.0191 84.2296 20.3087 84.2296 21.7464C84.2296 23.1629 84.5466 24.4525 85.1809 25.6153C85.8152 26.7781 86.6819 27.6978 87.7814 28.3743C88.8807 29.0508 90.1387 29.3891 91.5552 29.3891C92.5911 29.3891 93.5319 29.1883 94.3776 28.7866C94.7872 28.592 95.1572 28.3627 95.4875 28.0986V29.072C95.4875 30.1502 95.1387 30.9853 94.441 31.5773C93.7645 32.1693 92.8237 32.4652 91.6186 32.4652C90.6461 32.4652 89.811 32.2961 89.1133 31.9578C88.4368 31.6196 87.8236 31.1227 87.2739 30.4673L84.293 33.4483C85.0329 34.5054 86.0372 35.3194 87.3057 35.8902ZM94.219 24.6322C93.7327 24.9282 93.1514 25.0762 92.4748 25.0762C91.7983 25.0762 91.2063 24.9282 90.6989 24.6322C90.2126 24.3362 89.8321 23.9345 89.5573 23.4271C89.2824 22.8986 89.145 22.3383 89.145 21.7464C89.145 21.1121 89.2824 20.5413 89.5573 20.0339C89.8321 19.5265 90.2232 19.1248 90.7306 18.8288C91.238 18.5328 91.8194 18.3848 92.4748 18.3848C93.1514 18.3848 93.7327 18.5328 94.219 18.8288C94.7264 19.1248 95.1069 19.5265 95.3607 20.0339C95.6355 20.5413 95.7729 21.1121 95.7729 21.7464C95.7729 22.3806 95.6355 22.9514 95.3607 23.4588C95.1069 23.9451 94.7264 24.3362 94.219 24.6322Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M110.551 30.2136C108.965 30.2136 107.527 29.8648 106.238 29.1671C104.969 28.4483 103.965 27.4758 103.225 26.2495C102.485 25.0233 102.115 23.6491 102.115 22.1269C102.115 20.6047 102.485 19.2411 103.225 18.036C103.965 16.8309 104.969 15.8795 106.238 15.1819C107.506 14.463 108.944 14.1036 110.551 14.1036C112.157 14.1036 113.595 14.4525 114.863 15.1501C116.132 15.8478 117.136 16.8098 117.876 18.036C118.616 19.2411 118.986 20.6047 118.986 22.1269C118.986 23.6491 118.616 25.0233 117.876 26.2495C117.136 27.4758 116.132 28.4483 114.863 29.1671C113.595 29.8648 112.157 30.2136 110.551 30.2136ZM110.551 25.8056C111.248 25.8056 111.861 25.6576 112.39 25.3616C112.918 25.0445 113.32 24.6111 113.595 24.0614C113.891 23.4906 114.039 22.8457 114.039 22.1269C114.039 21.4081 113.891 20.7844 113.595 20.2559C113.299 19.7062 112.887 19.2834 112.358 18.9874C111.851 18.6702 111.248 18.5117 110.551 18.5117C109.874 18.5117 109.271 18.6702 108.743 18.9874C108.214 19.2834 107.802 19.7062 107.506 20.2559C107.21 20.8056 107.062 21.4398 107.062 22.1586C107.062 22.8563 107.21 23.4906 107.506 24.0614C107.802 24.6111 108.214 25.0445 108.743 25.3616C109.271 25.6576 109.874 25.8056 110.551 25.8056Z" fill="#007DFC" class="ccustom">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M137.281 30.1819C136.246 30.1819 135.294 29.9811 134.427 29.5794C133.971 29.368 133.559 29.1156 133.191 28.8222V36.3659H128.402V14.4525H133.254V15.5162C133.606 15.2283 133.997 14.9794 134.427 14.7696C135.294 14.3467 136.246 14.1353 137.281 14.1353C138.74 14.1353 140.03 14.4842 141.15 15.1819C142.292 15.8795 143.18 16.8309 143.814 18.036C144.47 19.2411 144.797 20.6153 144.797 22.1586C144.797 23.702 144.47 25.0762 143.814 26.2813C143.18 27.4864 142.292 28.4377 141.15 29.1354C140.03 29.8331 138.74 30.1819 137.281 30.1819ZM136.394 25.8056C137.091 25.8056 137.694 25.647 138.201 25.3299C138.73 25.0128 139.142 24.5793 139.438 24.0297C139.734 23.48 139.882 22.8563 139.882 22.1586C139.882 21.4398 139.734 20.8056 139.438 20.2559C139.142 19.7062 138.73 19.2834 138.201 18.9874C137.694 18.6702 137.102 18.5117 136.425 18.5117C135.749 18.5117 135.146 18.6702 134.618 18.9874C134.11 19.2834 133.709 19.7062 133.413 20.2559C133.117 20.8056 132.969 21.4398 132.969 22.1586C132.969 22.8563 133.106 23.48 133.381 24.0297C133.677 24.5793 134.089 25.0128 134.618 25.3299C135.146 25.647 135.738 25.8056 136.394 25.8056Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M149.546 29.8965C150.434 30.1291 151.332 30.2453 152.241 30.2453C154.165 30.2453 155.687 29.8014 156.808 28.9134C157.949 28.0255 158.52 26.831 158.52 25.3299C158.52 24.3574 158.341 23.5751 157.981 22.9832C157.622 22.3701 157.157 21.8838 156.586 21.5244C156.015 21.165 155.412 20.8795 154.778 20.6681C154.144 20.4567 153.541 20.277 152.971 20.129C152.4 19.981 151.935 19.8119 151.575 19.6216C151.216 19.4313 151.036 19.1776 151.036 18.8605C151.036 18.5645 151.174 18.3425 151.448 18.1945C151.723 18.0254 152.135 17.9409 152.685 17.9409C153.256 17.9409 153.837 18.0571 154.429 18.2897C155.042 18.5222 155.592 18.924 156.078 19.4948L158.837 16.7041C158.14 15.8161 157.231 15.1501 156.11 14.7062C155.011 14.2411 153.806 14.0085 152.495 14.0085C151.248 14.0085 150.159 14.2199 149.229 14.6427C148.298 15.0656 147.579 15.647 147.072 16.3869C146.565 17.1057 146.311 17.962 146.311 18.9557C146.311 19.8859 146.491 20.6576 146.85 21.2707C147.209 21.8626 147.675 22.3278 148.245 22.666C148.816 23.0043 149.419 23.2686 150.053 23.4588C150.687 23.6491 151.29 23.8288 151.861 23.998C152.431 24.146 152.897 24.3257 153.256 24.5371C153.637 24.7274 153.827 25.0128 153.827 25.3933C153.827 25.6893 153.668 25.9218 153.351 26.091C153.055 26.2601 152.622 26.3447 152.051 26.3447C151.226 26.3447 150.465 26.1967 149.768 25.9007C149.07 25.5836 148.467 25.1502 147.96 24.6005L145.201 27.3912C145.73 27.962 146.364 28.4695 147.104 28.9134C147.865 29.3362 148.679 29.6639 149.546 29.8965Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M167.368 30.2136C165.952 30.2136 164.694 29.9282 163.595 29.3574C162.516 28.7654 161.671 27.962 161.058 26.9472C160.444 25.9113 160.138 24.7274 160.138 23.3954V14.4525H164.99V23.332C164.99 23.8605 165.074 24.3151 165.244 24.6956C165.434 25.0762 165.709 25.3722 166.068 25.5836C166.428 25.795 166.861 25.9007 167.368 25.9007C168.087 25.9007 168.658 25.6787 169.081 25.2347C169.504 24.7696 169.715 24.1354 169.715 23.332V14.4525H174.567V23.3637C174.567 24.7168 174.261 25.9113 173.647 26.9472C173.034 27.962 172.189 28.7654 171.11 29.3574C170.032 29.9282 168.785 30.2136 167.368 30.2136Z" fill="#007DFC" class="ccustom">
              </path>
              <path d="M181.831 14.4525H176.979V29.8648H181.831V20.8584C181.831 20.3299 181.937 19.8859 182.148 19.5265C182.381 19.1671 182.688 18.8922 183.068 18.702C183.449 18.4905 183.882 18.3848 184.368 18.3848C185.066 18.3848 185.647 18.6068 186.112 19.0508C186.599 19.4736 186.842 20.0762 186.842 20.8584V29.8648H191.694V20.8584C191.694 20.3299 191.8 19.8859 192.011 19.5265C192.244 19.1671 192.55 18.8922 192.931 18.702C193.311 18.4905 193.745 18.3848 194.231 18.3848C194.929 18.3848 195.51 18.6068 195.975 19.0508C196.461 19.4736 196.704 20.0762 196.704 20.8584V29.8648H201.557V20.3193C201.557 19.0297 201.282 17.9303 200.732 17.0212C200.203 16.0909 199.474 15.3827 198.544 14.8965C197.635 14.389 196.588 14.1353 195.404 14.1353C194.199 14.1353 193.11 14.3996 192.138 14.9282C191.506 15.2649 190.954 15.6995 190.481 16.2319C190.04 15.675 189.504 15.2193 188.871 14.8647C188.026 14.3785 187.064 14.1353 185.986 14.1353C184.844 14.1353 183.819 14.3785 182.91 14.8647C182.514 15.067 182.155 15.3093 181.831 15.5916V14.4525Z" fill="#007DFC" class="ccustom">
              </path>
            </svg>
            </div></a>
        </div>
        <div id="i1hx7l" class="gjs-grid-column">
          <a id="ij7g8t" title="" href="##" class="gjs-link">Pricing<br/></a>
          <a id="ipjdtn" href="##" class="gjs-link">Terms &amp; Conditions<br/></a>
          <a id="ikj01e" href="##" class="gjs-link">Refund Policy<br/></a>
          <a id="i2sl68" href="##" class="gjs-link">Contact Us<br/></a>
        </div>
      </div>
      <div id="it6g1v" class="gjs-text-blue">Copyright © YEAR Company name
      </div>
    </div>
  </div>
</body>`,
    style: `
      * {
  box-sizing: border-box;
}
body {
  margin: 0;
}
*{
  box-sizing:border-box;
}
body{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
.gjs-heading{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
  color:rgb(29, 40, 55);
}
.gjs-grid-column{
  flex-grow:1;
  flex-shrink:1;
  flex-basis:0%;
  padding-top:5px;
  padding-right:0px;
  padding-bottom:5px;
  padding-left:0px;
}
.gjs-grid-row{
  display:flex;
  justify-content:flex-start;
  align-items:stretch;
  flex-direction:row;
  min-height:auto;
  padding-top:10px;
  padding-right:0px;
  padding-bottom:10px;
  padding-left:0px;
}
#iqjl{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
.gjs-link-box{
  color:inherit;
  display:inline-block;
  vertical-align:top;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  max-width:100%;
  text-decoration-line:none;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
}
.gjs-link{
  vertical-align:top;
  max-width:100%;
  display:inline-block;
  text-decoration-line:none;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
  color:inherit;
  transition-behavior:normal;
  transition-duration:0.3s;
  transition-timing-function:ease;
  transition-delay:0s;
  transition-property:color;
}
#id7x{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
  display:block;
  padding-left:10px;
  padding-right:10px;
}
#iffs{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#iyd2{
  align-items:center;
  justify-content:space-between;
  padding-top:0px;
  padding-bottom:0px;
  background-color:rgba(255, 255, 255, 0.8);
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  backdrop-filter:blur(13px);
  box-shadow:rgba(0, 0, 0, 0.14) 0px 2px 7px 0px;
}
#i6po{
  justify-content:center;
  position:sticky;
  top:15px;
  padding-top:0px;
  padding-bottom:0px;
  padding-left:20px;
  padding-right:20px;
}
#itjq{
  width:100%;
  max-width:1200px;
}
#iucmr{
  display:block;
  padding-top:0px;
  padding-bottom:0px;
}
#it00l{
  padding-top:0px;
  padding-bottom:0px;
}
#icfyb{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
#irtfd{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i88iz{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
#icyzp{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#irz7b{
  justify-content:center;
  padding-top:49px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
  margin-top:27px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
#iycz3{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
  row-gap:10px;
  column-gap:10px;
}
#irjua{
  font-size:3rem;
  text-align:center;
}
#itndw{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  max-width:750px;
  margin-bottom:25px;
  text-align:center;
}
#i3vvs{
  color:black;
  border-top-left-radius:35px;
  border-top-right-radius:35px;
  border-bottom-right-radius:35px;
  border-bottom-left-radius:35px;
  max-width:100%;
  margin-top:38px;
  margin-right:38px;
  margin-bottom:38px;
  margin-left:38px;
}
.text-main-content{
  line-height:30px;
  font-size:1.2rem;
}
#ij2gh{
  font-size:1.2rem;
  margin-bottom:15px;
}
#igrx8{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:25px;
  padding-left:0px;
  padding-right:0px;
}
#i466d{
  color:black;
  border-top-left-radius:35px;
  border-top-right-radius:35px;
  border-bottom-right-radius:35px;
  border-bottom-left-radius:35px;
  max-width:100%;
}
#imymf{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#feature-section{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#ib541{
  row-gap:100px;
  column-gap:100px;
  justify-content:space-between;
}
#iz8m8{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
}
#in9ef{
  font-size:1.5rem;
}
#i8isa{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#i8w4i{
  max-width:1200px;
  display:flex;
  flex-direction:column;
}
#ioyxg{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#iiacm{
  font-size:2.5rem;
  margin-bottom:10px;
  max-width:750px;
}
#ixzh1{
  width:100%;
  flex-wrap:wrap;
  justify-content:flex-start;
  row-gap:50px;
  column-gap:50px;
}
.gjs-grid-column.feature-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  min-width:30%;
}
#ia21sa{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:70px;
  padding-left:0px;
  padding-right:0px;
}
#ihap8q{
  font-size:2.5rem;
  margin-bottom:10px;
  text-align:center;
}
#i6fjjy{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:70px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
}
#ia7pcr{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
  border-top-width:3px;
  border-right-width:3px;
  border-bottom-width:3px;
  border-left-width:3px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgb(36, 99, 235);
  border-right-color:rgb(36, 99, 235);
  border-bottom-color:rgb(36, 99, 235);
  border-left-color:rgb(36, 99, 235);
}
#iqroa4{
  font-size:1.5rem;
}
#i5k4nf{
  width:100%;
  flex-wrap:wrap;
  justify-content:flex-start;
  row-gap:50px;
  column-gap:50px;
}
#infwen{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
}
#testimonial-section{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
#inea73{
  justify-content:space-between;
}
.gjs-grid-column.testimonial-item{
  padding-top:15px;
  padding-right:15px;
  padding-bottom:15px;
  padding-left:15px;
  display:flex;
  flex-direction:column;
  row-gap:15px;
  column-gap:15px;
  min-width:45%;
  background-color:rgba(247, 247, 247, 0.23);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  align-items:flex-start;
  border-top-width:1px;
  border-right-width:1px;
  border-bottom-width:1px;
  border-left-width:1px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgba(0, 0, 0, 0.06);
  border-right-color:rgba(0, 0, 0, 0.06);
  border-bottom-color:rgba(0, 0, 0, 0.06);
  border-left-color:rgba(0, 0, 0, 0.06);
}
#idva29{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i2d7qp{
  width:100%;
  row-gap:20px;
  column-gap:20px;
  align-items:center;
}
#iaqf2c{
  color:rgba(0, 0, 0, 0.5);
}
#it3yug{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#i8gt4n{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#ixzdlj{
  color:black;
  border-top-left-radius:100%;
  border-top-right-radius:100%;
  border-bottom-right-radius:100%;
  border-bottom-left-radius:100%;
  max-width:100%;
  width:75px;
  border-top-width:3px;
  border-right-width:3px;
  border-bottom-width:3px;
  border-left-width:3px;
  border-top-color:rgb(36, 99, 235);
  border-right-color:rgb(36, 99, 235);
  border-bottom-color:rgb(36, 99, 235);
  border-left-color:rgb(36, 99, 235);
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
}
#inucqu{
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
}
#i04ztt{
  font-size:1.5rem;
}
#ia9ts3{
  color:rgba(0, 0, 0, 0.5);
}
#ish0zj{
  width:100%;
  row-gap:20px;
  column-gap:20px;
  align-items:center;
}
#idndjn{
  justify-content:space-between;
}
#ilriti{
  max-width:1200px;
  display:flex;
  flex-direction:column;
}
#iv3be5{
  justify-content:center;
  padding-top:80px;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:80px;
}
#im0rle{
  flex-direction:column;
}
#iih6cv{
  display:block;
  padding-top:0px;
  padding-bottom:0px;
}
#iotp6j{
  align-self:center;
}
#it6g1v{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  text-align:center;
  font-size:0.8rem;
  margin-top:20px;
  opacity:0.75;
}
#ij7g8t{
  display:block;
}
#ipjdtn{
  display:block;
}
#ikj01e{
  display:block;
}
#i1hx7l{
  display:flex;
  row-gap:30px;
  column-gap:30px;
  flex-grow:0;
  flex-shrink:1;
  flex-basis:auto;
  justify-content:center;
  margin-top:30px;
  margin-bottom:30px;
}
#i2sl68{
  display:block;
}
.gjs-button{
  vertical-align:top;
  max-width:100%;
  display:inline-block;
  text-decoration-line:none;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
  color:white;
  padding-right:15px;
  padding-bottom:10px;
  padding-left:15px;
  background-color:rgb(36, 99, 235);
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  padding-top:10px;
  font-size:1.1rem;
  text-align:center;
}
.gjs-text-blue{
  color:rgb(36, 99, 235);
}
#ism014{
  font-size:2.5rem;
}
#in201n{
  padding-top:10px;
  padding-bottom:10px;
  max-width:750px;
  margin-bottom:35px;
  padding-left:0px;
  padding-right:0px;
  text-align:center;
  margin-top:35px;
}
#ik2rdi{
  max-width:1200px;
  align-items:center;
  display:flex;
  flex-direction:column;
  padding-top:50px;
  padding-right:50px;
  padding-bottom:50px;
  padding-left:50px;
  border-top-left-radius:50px;
  border-top-right-radius:50px;
  border-bottom-right-radius:50px;
  border-bottom-left-radius:50px;
  border-top-width:1px;
  border-right-width:1px;
  border-bottom-width:1px;
  border-left-width:1px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:rgba(0, 0, 0, 0.06);
  border-right-color:rgba(0, 0, 0, 0.06);
  border-bottom-color:rgba(0, 0, 0, 0.06);
  border-left-color:rgba(0, 0, 0, 0.06);
  background-image:radial-gradient(515px at 50% 141%, rgba(35, 98, 235, 0.22) 10%, white 90%);
  background-position-x:0px;
  background-position-y:0px;
  background-size:100% 100%;
  background-repeat:repeat;
  background-attachment:scroll;
  background-origin:padding-box;
  box-shadow:rgba(0, 0, 0, 0.07) 0px 10px 15px 0px;
}
#iz29ek{
  justify-content:center;
  padding-top:80px;
  padding-bottom:80px;
  padding-left:20px;
  padding-right:20px;
}
.gjs-link:hover{
  color:rgb(36, 99, 235);
  text-decoration-line:underline;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
}
.gjs-icon{
  display:inline-block;
  text-decoration-line:none;
  text-decoration-thickness:initial;
  text-decoration-style:initial;
  text-decoration-color:initial;
  color:inherit;
  vertical-align:middle;
  fill:currentcolor;
  width:50px;
  height:50px;
}
#irfl3k{
  width:196px;
  height:41px;
}
#ip6zoj{
  width:213px;
  height:44px;
}
#ihs4lb{
  font-size:1.2rem;
  margin-bottom:15px;
}
.gjs-icon.gjs-feature-icon{
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;
  padding-left:10px;
  background-color:rgb(36, 99, 235);
  color:white;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
}
#ieu6p6{
  font-size:1.5rem;
}
#izqkf7{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#ica43q{
  font-size:1.5rem;
}
#ickn3f{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:0px;
  padding-right:0px;
}
#i83vu9{
  font-size:2.5rem;
  text-align:center;
}
#infmy1{
  padding-top:10px;
  padding-bottom:10px;
  font-family:Arial, Helvetica, sans-serif;
  padding-left:20px;
  padding-right:20px;
}
@media (max-width: 992px){
  .gjs-grid-row{
    flex-direction:column;
  }
  #i2d7qp{
    flex-direction:row;
  }
  #ish0zj{
    flex-direction:row;
  }
  #iyd2{
    flex-direction:row;
  }
  #it00l{
    flex-direction:row;
  }
}
@media (max-width: 768px){
  #iffs{
    display:none;
  }
}
@media (max-width: 480px){
  #irfl3k{
    width:116px;
    height:24px;
  }
}
    `
    },
  ],
  isLoading: false,
  dataHtmlCss: [],
  dataCreate: {},
  dataScanCount: [],
}


export const postLandingPageAsync = createAsyncThunk(
  'landingpage/postLandingPage',
  async (formData) => {
    try {
      const token = parseCookies()['token'];
      const response = await axios.post(
        `${API_BASE_URL}LandingPage/create`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        console.log('Files uploaded successfully');
      } else {
        console.error('Error uploading files:', response.statusText);
      }
      return response.data;
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  },
);

export const getLandingPageAsync = createAsyncThunk(
  'landingpage/getLandingPage',
  async (id, { rejectWithValue }) => {
    try {
      const token = parseCookies()['token'];
      const response = await axios.get(`${API_BASE_URL}landingPage/${id}/files`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data; // assuming you need to return the data
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const putScanCountAsync = createAsyncThunk(
  'landingPage/putScanCount',
  async (id) => {
    try {
      const token = parseCookies()['token'];
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.put(`${API_BASE_URL}LandingPage/${id}/increment-scan`);
      return response.data;
    } catch (error) {
      console.error('Error incrementing scan count:', error);
      throw error;
    }
  }
);
export const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    setLandingPageDatas: (state, action) => {
      state.landingPageDatas = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(postLandingPageAsync.pending, (state) => {
        state.isLoading = false
    })
    .addCase(postLandingPageAsync.fulfilled, (state, action) => {
        state.isLoading = true
        state.dataCreate = action.payload
    })
    .addCase(postLandingPageAsync.rejected, (state) => {
        state.isLoading = false
    })
    .addCase(getLandingPageAsync.pending, (state) => {
      state.isLoading = false
  })
  .addCase(getLandingPageAsync.fulfilled, (state, action) => {
      state.isLoading = true
      state.dataHtmlCss = action.payload
  })
  .addCase(getLandingPageAsync.rejected, (state) => {
      state.isLoading = false
  })
  .addCase(putScanCountAsync.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(putScanCountAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.dataScanCount = action.payload;
  })
  .addCase(putScanCountAsync.rejected, (state) => {
    state.isLoading = false;
  });
  },
})

// Action creators are generated for each case reducer function
export const { } = landingPageSlice.actions

export default landingPageSlice.reducer