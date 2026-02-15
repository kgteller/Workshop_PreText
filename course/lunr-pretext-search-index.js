var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Handout",
  "number": "",
  "title": "SLO 1: Sampling, Types of Data",
  "body": " SLO 1: Sampling, Types of Data   This is an outline of the topics we covered in the first week of class.    Objectives     Construct a simple random sample    Determine when samples of convenience are acceptable    Describe stratified sampling, cluster sampling, systematic sampling, and voluntary response sampling    Distinguish between statistics and parameters       1 Background and Definitions  In the months leading up to an election, polls often tell us the percentages of voters that prefer each of the candidates. How do pollsters obtain this information?   Ideal case: ask the opinion of every registered voter.   Workable: contact a relatively small number of voters, and use the information from these voters to predict the preferences of the entire group of voters.  The process of polling requires two major steps:                Statsitics is the study of       The polling problem is typical of a problem in statistics. We want some information about a large group of individuals, but we are able to collect information on only a small part of that group.  In statistical terminology, the large group is called a , and the part of the group on which we collect information is called a     A population is the \\ of individuals about which information is sought. A sample >is , containing the individuals that are actually observed.          Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "def-Statistics",
  "level": "2",
  "url": "notes-week-01.html#def-Statistics",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "   Statsitics is the study of    "
},
{
  "id": "def-Population_and_Sample",
  "level": "2",
  "url": "notes-week-01.html#def-Population_and_Sample",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": "  A population is the \\ of individuals about which information is sought. A sample >is , containing the individuals that are actually observed.   "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
