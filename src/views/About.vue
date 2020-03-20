<template>
  <div id="about">
    <div id="title-name">Aaron Lewis</div>
    <div class="pic-and-bio">
      <img class="aaron-picture" src="/images/lewis084.jpg" alt="[missing: profile_picture]">
      <div class="about-me-blurb">
        My name is Aaron Lewis. I am a mechanical engineering student at BYU set
        set to graduate in April 2020. I love basketball and tennis and I follow
        the Utah Jazz and Roger Federer like it's my job.
      </div>
    </div>
    <div class="resume-container">
      <div class="schooling-container">
        <div class="company-line">Brigham Young University</div>
        <div class="position-line">Mechanical Engineering</div>
        <div class="dates-line">Class of 2020</div>
      </div>
      <hr>
      <div class="experience-container">
        <div class="company-line">Micro Focus</div>
        <div class="position-line">Software QA Engineering Intern</div>
        <div class="dates-line">August 2019 - Present</div>
        <ul class="resume-list">
          <li>Set up virtual Linux servers</li>
          <li>Resolve bugs by recreating test cases</li>
          <li>Run unit testing on products to assure they meet performance goals</li>
        </ul>
      </div>
      <hr>
      <div class="experience-container">
        <div class="company-line">ATL Technology</div>
        <div class="position-line">Independent Programming Consultant & Customer Engagement Intern</div>
        <div class="dates-line">June 2019 - Present</div>
        <ul class="resume-list">
          <li>Design and develop visual dashboards used to display performance metrics</li>
          <li>Program operations to automate tedious and manual processes</li>
          <li>Sift and breakdown large datasets to simple and understandable statistics</li>
          <li class="no-bullet"> - </li>
          <li>Established relationships with customers in order to determine their needs</li>
          <li>Revised and improved 50+ engineering drawings</li>
          <li>Built 5+ customer prototypes based of specifications outlined in engineering documents</li>
        </ul>
      </div>
      <hr>
      <div class="experience-container">
        <div class="company-line">Office of Information Technology (BYU)</div>
        <div class="position-line">Managing Media Service Specialist and Audiovisual Technician</div>
        <div class="dates-line">May 2016 - Present</div>
        <ul class="resume-list">
          <li>Manage the work of 7 technicians</li>
          <li>Oversee and schedule audiovisual needs for a large venue, supporting over 100+ events
            (educational, cultural, musical, etc.)</li>
        </ul>
      </div>
    </div>
    <div style="height: 33%;"></div>
  </div>
</template>

<style scoped>

#about {
  height: 100%;
  position: relative;
  overflow: auto;
}

#about::-webkit-scrollbar {
  width: 0 !important;
}

#title-name {
  font-size: 4vw;
  font-family: 'Caveat', cursive;
  text-align: center;
}

.pic-and-bio {
  display: flex;
}

.aaron-picture {
  display: flex;
  border-radius: 50%;
  margin: 20px;
}

.about-me-blurb {
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
}

.resume-container {
  margin-left: 24px;
}

.schooling-container,
.experience-container {
  margin: 30px 10px;
}

.company-line {
  font-size: 24px;
  padding-bottom: 10px;
}

.position-line {
  font-size: 20px;
  padding-bottom: 10px;
}

.dates-line {
  font-size: 18px;
  padding-bottom: 10px;
  font-style: italic;
}

ul.resume-list {
  list-style-type: circle;
  padding-left: 20px;
  padding-bottom: 10px;
}

li.no-bullet {
  list-style-type: none;
}

</style>