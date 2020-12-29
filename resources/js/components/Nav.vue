<template>
  <div>
    <v-app-bar dense light>
      <template v-slot:extension style="text-align: center;">
        <a href="/">
        <center>
          <v-img src="../images/eYantra_logo.svg"
          max-height="150"
          max-width="250"></v-img>
        </center>
      </a>
        <v-tabs align="center"
      justify="center">
          <v-tab>Home</v-tab>
          <v-tab>About Us</v-tab>
          <v-tab to="/contact">Contact Us</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  <!-- <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main> -->

  <v-content>
    <!-- section 1 -->
      <section class="pt-24">
        <v-parallax src="../images/fading-blue.jpg">
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" sm="6" md="8">
                <h1 class="my-4 text-5xl font-bold leading-tight">e-Yantra</h1>
                  <p class="uppercase tracking-loose w-full">Engineering a better tomorrow...</p>

                  <br><br>
                  <h2>IIT Bombay envisages the 'e-Yantra' platform to harness the intellectual talent of young India to create utility based robotic applications for usage across variety of applications such as: agriculture, manufacturing, defense, home, city maintenance and services industries.</h2>
                  <br><br>
                   <p class="leading-normal text-2xl mb-8">
            Sponsored by <a href="http://mhrd.gov.in/hi/node/2356" data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Ministry of Human Resource Development" target="_blank" style="color: #daae51">MHRD</a> under the <a href="http://mhrd.gov.in/technology-enabled-learning-0" data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Information and Communication Technologies" target="_blank" style="color: #daae51">National Mission on Education through ICT</a> program.
            Please visit to check other initiatives by MHRD: https://mhrd.gov.in/ict-initiatives.
          </p>
              </v-col>
              <v-col cols="6" md="4">
                  <v-img class="w-full md:w-4/5 z-50" src="../images/hero.png"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

     <!--  section 2  -->
     <!-- <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to share your amazing stuff</h2>
              <span class="subheading">
                No more restrictions, no more limits
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">public</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Reach the world</div>
                    </v-card-title>
                    <v-card-text>
                      Show your stuff to the whole community of Endorfine not only to your mum or your friends. We love making good content viral. In this moment Endorfine is used by artists who are not famous but that want to share their works to the world. Unfortunately with other social networks this is hard, slow and sometime expensive.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast feedback</div>
                    </v-card-title>
                    <v-card-text>
                      Time is important, we don't want you to waste it. Here you can get a massive feedback from real users in minutes. And if your stuff is appreciated you won't only get positive feedback but also lovely and sincere fans <3 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">share</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Create new connections</div>
                    </v-card-title>
                    <v-card-text>
                      Imagine if you can directly speak with the world's population. Don't you think it would be easier to find nice people to interact with? Endorfine is both local and global and help you to connect without limitations with people from your city, your state and your universe! 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section> -->



       <!--  section 3 -->
       <!-- <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center>
        <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline" >Variuos Initiatives Undertaken by us...</h2>
              <span class="subheading">
                No more restrictions, no more limits
              </span>
            </div>
          </v-flex>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md3>
                <v-card class="mx-auto" max-width="344">
                <v-img
                  src="../images/mascot.png"
                  height="200px"></v-img>
                <v-card-title>
                  eYRC
                </v-card-title>
                <v-card-subtitle>
                 National & International Robotics Competition
                </v-card-subtitle>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="mx-auto"
                  max-width="344">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"></v-img>
                  <v-card-title>
                    eYIC
                  </v-card-title>
                  <v-card-subtitle>
                 Encouraging StartUp Community
                </v-card-subtitle>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="mx-auto"
                  max-width="344">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"></v-img>
                  <v-card-title>
                    eLSI
                  </v-card-title>
                  <v-card-subtitle>
                 Setting Up Nationwide Robotics & Embedded Systems Labs
                </v-card-subtitle>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="mx-auto"
                  max-width="344">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"></v-img>
                  <v-card-title>
                    eFSI
                  </v-card-title>
                  <v-card-subtitle>
                 Setting Up Farm in Premises of eLSI Colleges
                 </v-card-subtitle>
                </v-card>
              </v-flex>
            </v-layout>

            <v-layout row wrap align-center>
              <v-flex xs12 md3>
                <v-card class="mx-auto" max-width="344">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"></v-img>
                <v-card-title>
                  eYRC
                </v-card-title>
                <v-card-subtitle>
                 National & International Robotics Competition
                </v-card-subtitle>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="mx-auto"
                  max-width="344">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"></v-img>
                  <v-card-title>
                    eYIC
                  </v-card-title>
                  <v-card-subtitle>
                 Encouraging StartUp Community
                </v-card-subtitle>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="mx-auto"
                  max-width="344">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"></v-img>
                  <v-card-title>
                    eLSI
                  </v-card-title>
                  <v-card-subtitle>
                 Setting Up Nationwide Robotics & Embedded Systems Labs
                </v-card-subtitle>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="mx-auto"
                  max-width="344">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"></v-img>
                  <v-card-title>
                    eFSI
                  </v-card-title>
                  <v-card-subtitle>
                 Setting Up Farm in Premises of eLSI Colleges
                 </v-card-subtitle>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
        </section> -->

         <!-- section 5 -->
      <section class="pt-24">
        <div id="app">
          <div class="title-container">
            <div>
              <h1 class="title">
                What we Offer For?
              </h1>
            </div>
            <br><br>
            <div class="filters">
              <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')"><b>ALL</b></span>
              <span class="filter" v-bind:class="{ active: currentFilter === 'STUDENTS' }" v-on:click="setFilter('STUDENTS')"><b>STUDENTS</b></span>
              <span class="filter" v-bind:class="{ active: currentFilter === 'TEACHERS' }" v-on:click="setFilter('TEACHERS')"><b>TEACHERS</b></span>
              <span class="filter" v-bind:class="{ active: currentFilter === 'COLLEGES' }" v-on:click="setFilter('COLLEGES')"><b>COLLEGES</b></span>
            </div>
          </div>
          <br><br>
          <transition-group class="projects" name="projects" >
            <div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
              <div class="project-image-wrapper">
                <img class="project-image" v-bind:src="project.image">

                <div class="gradient-overlay"></div>
                <div class="circle">
                  <span class="project-title">{{project.title}}</span>
                </div>
              </div>
            </div>
          </transition-group>
        </div> 
      </section>





      <!-- section 4 -->
      <section class="pt-24" style="margin-top: 100px">
        <v-layout column wrap class="title-container" align-center>
          <v-container>
            <v-flex>
              <div class="title-container">
                <h2 class="headline" style="font: bold; color: #000000DE">Various Initiatives Undertaken</h2>
              </div>
            </v-flex>
            <br><br>
            <v-row no-gutters>
              <v-col cols="8" sm="6" md="6">
                <v-card class="pa-2">

                  <v-card-title>
                    eYRC(e-Yantra Robotics Competition)
                  </v-card-title>
                  <v-card-title>
                    eYIC(e-Yantra Innovation Challenge)
                  </v-card-title>
                  <v-card-title>
                    eYSIP(e-Yantra Summer Internship Program)
                  </v-card-title>
                  <v-card-title>
                    eLSI(e-Yantra Lab Setup Initiative)
                  </v-card-title>
                  <v-card-title>
                    eFSI(e-Yantra Farm Setup Initiative)
                  </v-card-title>
                   <v-card-title>
                    eYRDC(e-Yantra Resource Development Center)
                  </v-card-title>
                  <v-card-title>
                    eYSTP
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <ul class="main-nav">
                  <li class="item1">
                    <div class="bg"></div>
                  </li>
                  <li class="item2">
                    <div class="bg"></div>
                  </li>
                  <li class="item3">
                    <div class="bg"></div>
                  </li>
                  <li class="item4">
                    <div class="bg"></div>
                  </li>
                  <li class="item5">
                    <div class="bg"></div>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
      </section>


      <section class="pt-24" style="margin-top: 90px; background-color: #c6e8f5; height:1000px">
          <v-container>
            <v-flex>
              <div class="title-container">
                <h2 class="headline" style="font: bold; color: #0d3475">e-Yantra Symposium(eYS)</h2>
              </div>
              <br>
            </v-flex>
            <v-row no-gutters>
              <v-col cols="8" sm="6" md="8">
                   <v-card-title>
                    e-Yantra Symposium(eYS) is an annual event at IIT-Bombay to bring together colleges which have set up robotics labs through the e-Yantra Lab Setup Initiative (eLSI). The goal is to share projects and brainstorm new ideas for improving pedagogy and the quality of BE projects. This event ensures sustainable use of Robotics labs set up through the e-Yantra Lab Setup Initiative (eLSI). No registration fee is charged from teachers and students from colleges who attend the symposium. This event acts as a platform for :
                    (i) Showcasing selected projects from the e-Yantra labs through the e-Yantra Ideas Competition (eYIC).
                  </v-card-title>
              </v-col>
              <!-- <v-col cols="6" md="4">
                  <v-img class="w-full md:w-4/5 z-50" src="../images/hero.png"></v-img>
              </v-col> -->
            </v-row>
            <br><br>
            <v-flex>
              <div class="title-container">
                <h2 class="headline" style="font: bold; color: #0d3475">e-Yantra Robotics Competition (eYRC)</h2>
              </div>
              <br>
            </v-flex>
            <v-row no-gutters>
              <v-col cols="8" sm="6" md="8">
                   <v-card-title>
                    e-Yantra Robotics Competition (eYRC) is a unique annual competition launched in the month of August every year for undergraduate students in science and engineering colleges, polytechnic. Selected teams are given a robotic kit complete with accessories and video tutorials to help them learn basic concepts in embedded systems and microcontroller programming. Abstracts of real world problems assigned as "themes" are then implemented by the teams using the robotic kits. The winners of this competition will be eligible for summer internship at IITB through e-Yantra Summer Internship Program.
                  </v-card-title>
              </v-col>
              <!-- <v-col cols="6" md="4">
                  <v-img class="w-full md:w-4/5 z-50" src="../images/hero.png"></v-img>
              </v-col> -->
            </v-row>
            <br><br>
            <v-flex>
              <div class="title-container">
                <h2 class="headline" style="font: bold; color: #0d3475">e-Yantra Innovation Challenge (eYIC)</h2>
              </div>
              <br>
            </v-flex>
            <v-row no-gutters>
              <v-col cols="8" sm="6" md="8">
                   <v-card-title>
                    e-Yantra Innovation Challenge (formerly known as e-Yantra Ideas Competition) is a competition to encourage innovative projects from robotics labs set up through the e-Yantra Lab Setup Initiative (eLSI) in colleges across the world.<br>
                    This initiative aims at:<br>
                    Ensure sustained use of robotics labs set up through the e-Yantra Lab Setup Initiative (eLSI).<br>
                    Solicit innovative ideas from students in eLSI colleges articulating solutions to real problems.<br>
                    Provide a platform for teams to showcase their projects.<br>
                    Encourage startup culture in e-Yantra Labs.<br>
                    The winners of this competition will be eligible for summer internship at IITB through e-Yantra Summer Internship Program.
                  </v-card-title>
              </v-col>
              <!-- <v-col cols="6" md="4">
                  <v-img class="w-full md:w-4/5 z-50" src="../images/hero.png"></v-img>
              </v-col> -->
            </v-row>
          </v-container>
      </section>














       <section>
        <v-container>
          <v-layout>
            <v-flex xs12 class="text-xs-center">
                <v-img height="200px" src="fading-blue.jpg"></v-img>
            </v-flex>
          </v-layout>
        </v-container>
     </section>

    </v-content>




 <!-- <v-footer app class="blue blue lighten-1">
        <v-layout row wrap align-center>
          <v-flex xs12 class="text-xs-center">
            <div class="white--text ml-3">
             <v-card-text class="white--text" color="#1A237E">
          Copyright {{ new Date().getFullYear() }} <a class="white--text"
            href="https://e-yantra.org">e-Yantra.All rights reserved.</a>
        </v-card-text>
            </div>
          </v-flex>
        </v-layout>
      </v-footer> -->
 <!--  <v-footer color="#303F9F">
      <v-card color="#303F9F"  flat tile width="100%" class="white--text text-center" >
        <v-card-text>
          <h1 class="pb-2 white--text"> </h1>
          <center><v-img src="../images/MoE.png"
          max-height="150"
          max-width="250"></v-img>
        </center>
        </v-card-text>

        <v-card-text class="pt-0 text-left text-md-center">
          <v-expansion-panels accordion v-model="panel" multiple>
            <v-expansion-panel v-for="(item,i) in items" :key="i" class="col-md-3 col-12 elevation-0" >
              <h3 class="d-none d-md-block py-2">{{ item.name }}</h3>
              <v-expansion-panel-header class="d-md-none">{{ item.name }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <li v-for="tag in item.tags">
                  <a v-bind:href="tag.url" class="white--text">{{tag.urlname}} </a>
                </li>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          Copyright {{ new Date().getFullYear() }} <a class="white--text"
            href="https://e-yantra.org">e-Yantra.All rights reserved.</a>
        </v-card-text>
      </v-card>
    </v-footer> -->
    <v-footer padless>
      <v-card flat tile width="100%" class="primary white--text text-center">
        <v-card-text>
          <h1 class="pb-2 white--text"> </h1>
          <center><v-img src="../images/MoE.png"
          max-height="150"
          max-width="250"></v-img>
        </center>
        </v-card-text>

        <v-card-text class="pt-0 text-left text-md-center">
          <v-expansion-panels accordion v-model="panel" multiple>
            <v-expansion-panel v-for="(item,i) in items" :key="i" class="primary col-md-3 col-12 elevation-0 ">
              <h3 class="d-none d-md-block py-2">{{ item.name }}</h3>
              <v-expansion-panel-header class="d-md-none">{{ item.name }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <li v-for="tag in item.tags">
                  <a v-bind:href="tag.url" class="white--text">{{tag.urlname}} </a>
                </li>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          Copyright 1993 - {{ new Date().getFullYear() }} <a class="white--text"
            href="https://codepen.io/jettaz">Jettaz</a> | It is free for use
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<style type="text/css">

html,body {
  margin:0;
  font-family: 'Dawning of a New Day', cursive;
}

.title-container {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.title {
  font-family: 'Dawning of a New Day', cursive;
  font-size:40pt;
  font-weight:normal;
}

.project-title {
font-size:16pt  
}

.filter {
  font-family:arial;
  padding: 6px 6px;
  cursor:pointer;
  border-radius: 6px;
  transition: all 0.35s;
}

.filter.active {
  box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
  background:lightblue;
} 

.projects {
  margin-top:25px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity:0;
}

.projects-leave-to{
  transform: translatey(30px);
  opacity:0;
}

.projects-leave-active {
  position: absolute;
  z-index:-1;
}

.circle {
  text-align:center;
  position:absolute;
  bottom:-38px;
  left:40px;
  width:100px;
  height:100px;
  border-radius:50px;
/*  border:1px solid black; */
  display:flex;
  box-shadow: 0px -4px 3px 0px #494d3257;
  justify-content:center;
  align-items:center;
  background-color:#fff;
/*  box-shadow:0px -3px 3px #484848a6; */
}

.project {
  transition: all .35s ease-in-out;
  margin:10px;
  box-shadow:0px 2px 8px lightgrey;
  border-radius:3px;
  width:180px;
  height:200px;
  display:flex;
  flex-direction:column;
  align-items:center;
}

.project-image-wrapper {
  position:relative;
}

.gradient-overlay {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:150px;
  opacity:0.09;
  background: 
    linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
    linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}

.project-image {
  width:100%;
  height:150px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}

  /*--------------------------------------------------*/
  .v-tabs-bar{
    float: right !important;
  }
  .v-tab{
    text-transform: none !important;
  }
  /*footer styles*/
  @media (min-width:960px) {
    .v-expansion-panel:before {
        box-shadow: none !important;
    }
    .v-expansion-panel:not(:first-child)::after {
        border-top: none;
    }
}
.resize {
  text-align: center;
}
.resize {
  margin-top: 3rem;
  font-size: 1.25rem;
}
/*RESIZESCREEN ANIMATION*/
.right {
  animation: rightanime 1s linear infinite;
}

.left {
  animation: leftanime 1s linear infinite;
}
@keyframes rightanime {
  50% {
    transform: translateX(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}
@keyframes leftanime {
  50% {
    transform: translateX(-10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-10px);
    opacity: 0;
  }
}

/*Style for diamond shaped grid*/
* {
  margin: 0;
  padding: 0;
  font-family: poppins, sans-serif;
}

.main-nav {
  position: absolute;
  top: 46%;
  left: 75%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 600px;
  height: 150px;
}

.main-nav li {
  list-style: none;
  position: absolute;
  width: 200px;
  height: 200px;
  background: #000;
  transform: rotate(45deg);
  transition: 0.5s;
  margin: -100px;
  overflow: hidden;
  
}

.main-nav li:hover {
  opacity: 2;
}

.main-nav li.item1 {
  top: 0;
  left: 0;
}

.main-nav li.item2 {
  bottom: 0;
  left: 25%;
}

.main-nav li.item3 {
  top: 0;
  left: 50%;
}

.main-nav li.item4 {
  bottom: 0;
  left: 75%;
}

.main-nav li.item5 {
  top: 0;
  left: 100%;
}

.main-nav li .bg {
  width: 100%;
  height: 100%;
  transform: scale(1.1);
}

.main-nav li.item1 .bg {
  background: url(https://imgur.com/ir9l1IJ.jpg);
  background-size: cover;
  background-position: center;
}

.main-nav li.item2 .bg {
  background: url(https://imgur.com/fwe8Z9Q.jpg);
  background-size: cover;
  background-position: center;
}

.main-nav li.item3 .bg {
  background: url(https://imgur.com/kSoRoDk.jpg);
  background-size: cover;
  background-position: center;
}

.main-nav li.item4 .bg {
  background: url(https://imgur.com/sz1BSkB.jpg);
  background-size: cover;
  background-position: center;
}

.main-nav li.item5 .bg {
  background: url(https://imgur.com/ara0hoV.jpg);
  background-size: cover;
  background-position: center;
}

</style>
<script>
  export default{
    data: () => ({
    panel: [],
    socials: [
      { name:"facebook", icon:"mdi-facebook-box", url:"#!"},
      {name:"twitter", icon:"mdi-twitter-box", url:"#!"},
      {name:"google", icon:"mdi-google", url:"#!"},
      {name:"linkedin", icon:"mdi-linkedin-box", url:"#!"},
      {name:"instagram", icon:"mdi-instagram", url:"#!"}
      
    ],
    items: [
      {
        name: "Address",
        tags: [
          {  urlname: "ERTS Lab,"  
          },
          { urlname: "KReSIT Building,"
          },
          {urlname: "IIT Bombay, Powai," 
          },
          {urlname: "Mumbai - 400076, Maharashtra." 
          },
          {urlname: "Email us at: support@e-yantra.org"}
        ]
      },
      { name: "eYantra", 
       tags: [
         { urlname: "About", url: "#!" },
         { urlname: "Careers", url: "#!"},
         { urlname: "Support", url: "#!"},
         { urlname: "Contact Us", url: "#!"},
         { urlname: "FAQ", url: "#!"}
       ] 
      },
      { name: "Resources", 
       tags: [
         { urlname: "Blog", url: "#!" },
         { urlname: "eBooks", url: "#!" },
         { urlname: "Whitepapers", url: "#!" },
         { urlname: "Comparison Guide", url: "#!" },
         { urlname: "Website Grader", url: "#!" }
       ] 
      },
      { name: "Get Help", 
       tags: [
         { urlname: "eLSI", url: "#!" },
         { urlname: "eFSI", url: "#!" },
         { urlname: "eYRC", url: "#!" },
         { urlname: "eYIC", url: "#!" },
         { urlname: "eYSIP", url: "#!" }
       ]
      }
    ],

    currentFilter: 'ALL',
    projects: [
      {title: "SIP", image: "https://picsum.photos/g/200?image=122", category: 'STUDENTS'},
      {title: "STP", image: "https://picsum.photos/g/200?image=116", category: 'STUDENTS'},
      {title: "eLSI", image: "https://picsum.photos/g/200?image=121", category: 'COLLEGES'},
      {title: "MOOC", image: "https://picsum.photos/g/200?image=133", category: 'TEACHERS'},
      {title: "eFSI", image: "https://picsum.photos/g/200?image=134", category: 'COLLEGES'},
      // {title: "MOOC", image: "https://picsum.photos/g/200?image=115", category: 'STUDENTS'},
      {title: "eYRDC", image: "https://picsum.photos/g/200", category: 'TEACHERS'},
       {title: "eYIC", image: "https://picsum.photos/g/200?image=115", category: 'STUDENTS'},
    ]
  }),

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      if (window.innerWidth >= 960) {
        this.panel = [...Array(4).keys()].map((k, i) => i);
      } else {
        this.panel = [];
      }
    },

    setFilter: function(filter) {
      this.currentFilter = filter;
    }
  }
    
  };
</script>