var mod = angular.module("summerFellows2018Mod", []);



mod.controller("summerFellows2018Ctrl", ["$scope", "$sce", function($scope, $sce) {



    var SUMMER_RESEARCH_LINK = "/summer-research-app",

        DIR = "/images/summer-fellows/2018/",

        MAAYAN_LAB = "Avi Ma'ayan PhD, Icahn School of Medicine at Mount Sinai",

        MAAYAN_LAB_LINK = "http://icahn.mssm.edu/research/labs/maayan-laboratory";


    $scope.fellows = [
      {
        name: "Katherine Chew",
        image: DIR + "KChew.jpg",
        school: "Massachusetts Institute of Technology",
        project: "Predicting Gene Expression Signatures for Understudied Small Molecules",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Zachary Flamholz",
        image: DIR + "ZFlamholz.jpg",
        school: "Princeton University",
        project: "modEnrichr: Enrichment Analysis Platform for Yeast, Worm, Fly and Fish",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Hannah Freid",
        image: DIR + "HFreid.jpg",
        school: "Princeton University",
        project: "Integrative Analysis to Suggest Combination Therapies for Ovarian Cancer",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Kevin Moses",
        image: DIR + "KMoses.jpg",
        school: "Yale University",
        project: "JOIN: The Journal of Online Interactive Notebooks",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Vivek Sriram",
        image: DIR + "VSriram.jpg",
        school: "Duke University",
        project: "Predicting Diabetes Risk from Labs and Vitals with Machine Learning",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Vivian Utti",
        image: DIR + "VUtti.jpg",
        school: "Cornell University",
        project: "ChEA3: Transcription Factor Enrichment Analysis Portal",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Derek Wang",
        image: DIR + "DWang.jpg",
        school: "East Brunswick High School",
        project: "Jupyter Notebook Analysis Reports from Interactive Selection of GTEx Portal Samples",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Lily Wang",
        image: DIR + "LWang.jpg",
        school: "Cornell University",
        project: "FAIRshake: Toolkit to Assess the FAIRness of Biomedical Digital Objects",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      },
      {
        name: "Sherry Xie",
        image: DIR + "SXie.jpg",
        school: "Cornell University",
        project: "Open and Standard API to Enable Semantic Integration of Bioinformatics Tools and Resources",
        labName: MAAYAN_LAB,
        labLink: MAAYAN_LAB_LINK,
      }	    
    ];

}]);
