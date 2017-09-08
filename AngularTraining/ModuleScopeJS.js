angular
    .module("myModule",[])
    .controller("myController",function($scope)
    {
        var employees=[
            {
                firstname:"Sanjay",
                lastname:"Degaonkar",
                subject:[
                    {sname:"English"},
                    {sname:"Hindi"},
                    {sname:"Marathi"}
                    ]
            },
            {
                firstname:"Abhiskek",
                lastname:"Ghode",
                subject:[
                    {sname:"a"},
                    {marks:"40"},
                    {grade:"c"}
                    ]},
            {
                firstname:"Sagar",
                lastname:"Kulkarni",
                subject:[
                    {sname:"d"},
                    {sname:"e"},
                    {sname:"f"}
                    ]}
        ] ;
        $scope.empdetails=employees;

    });